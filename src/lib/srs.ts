import type {
  AppProgress,
  KanjiEntry,
  PathId,
  SrsItem,
  SrsKind,
} from "./types";
import { readingsWithRomaji } from "./kana";

export function createSrsItem(
  id: string,
  path: PathId,
  front: string,
  back: string,
  kind?: SrsKind,
): SrsItem {
  return {
    id,
    path,
    kind,
    front,
    back,
    ease: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: new Date().toISOString(),
  };
}

function formatKanjiCardBack(k: KanjiEntry): string {
  const on = readingsWithRomaji(k.onyomi)
    .map((r) => `${r.kana} (${r.romaji})`)
    .join(" · ");
  const kun = readingsWithRomaji(k.kunyomi)
    .map((r) => `${r.kana} (${r.romaji})`)
    .join(" · ");
  return [
    k.meaning,
    on ? `On'yomi: ${on}` : null,
    kun ? `Kun'yomi: ${kun}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

/** One card per kanji: character front; back mirrors the learning card. */
export function kanjiSrsCards(k: KanjiEntry): SrsItem[] {
  return [
    createSrsItem(
      `srs-kj-${k.character}`,
      "kanji",
      k.character,
      formatKanjiCardBack(k),
      "kanji",
    ),
  ];
}

function kanjiCharFromSrsId(id: string): string | null {
  if (!id.startsWith("srs-kj-")) return null;
  if (id.startsWith("srs-kj-en-")) return id.slice("srs-kj-en-".length);
  if (id.startsWith("srs-kj-rd-")) return id.slice("srs-kj-rd-".length);
  return id.slice("srs-kj-".length);
}

function withSchedule(template: SrsItem, existing?: SrsItem): SrsItem {
  if (!existing) return template;
  return {
    ...template,
    ease: existing.ease,
    interval: existing.interval,
    repetitions: existing.repetitions,
    nextReview: existing.nextReview,
  };
}

/**
 * Refresh stored kanji cards to match the learning card.
 * Drops legacy reverse / English-only card ids.
 */
export function planKanjiSrsSync(
  progress: AppProgress,
  lookup: (character: string) => KanjiEntry | undefined,
): { upsert: SrsItem[]; removeIds: string[] } {
  const byId = new Map(progress.srs.map((i) => [i.id, i]));
  const chars = new Set<string>();
  for (const item of progress.srs) {
    const char = kanjiCharFromSrsId(item.id);
    if (char) chars.add(char);
  }

  const upsert: SrsItem[] = [];
  const removeIds: string[] = [];

  for (const char of chars) {
    const entry = lookup(char);
    if (!entry) continue;

    const [card] = kanjiSrsCards(entry);
    if (!card) continue;

    const existingPrimary = byId.get(card.id);
    const legacyEn = byId.get(`srs-kj-en-${char}`);
    const legacyRd = byId.get(`srs-kj-rd-${char}`);
    upsert.push(
      withSchedule(card, existingPrimary ?? legacyRd ?? legacyEn),
    );

    if (legacyEn) removeIds.push(legacyEn.id);
    if (legacyRd) removeIds.push(legacyRd.id);
  }

  return { upsert, removeIds };
}

export type DueFilter = { kind?: SrsKind; path?: PathId };

export function getDueItems(
  progress: AppProgress,
  filter?: DueFilter,
): SrsItem[] {
  const now = new Date().toISOString();
  return progress.srs.filter((item) => {
    if (item.nextReview > now) return false;
    if (filter?.kind) {
      const matchesKind =
        item.kind === filter.kind ||
        (filter.kind === "kanji" && item.path === "kanji");
      if (!matchesKind) return false;
    }
    if (filter?.path && item.path !== filter.path) return false;
    return true;
  });
}

function pairKey(id: string): string {
  return id
    .replace(/^srs-/, "")
    .replace(/^(vocab|kj)-en-/, "$1-")
    .replace(/^(vocab|kj)-rd-/, "$1-");
}

export function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = tmp;
  }
  return arr;
}

/**
 * Shuffle due cards, then greedily avoid back-to-back pairs
 * (e.g. kana→EN then EN→kana for the same word).
 */
export function buildReviewQueue(items: SrsItem[]): SrsItem[] {
  const pending = shuffleArray(items);
  if (pending.length <= 1) return pending;

  const result: SrsItem[] = [];
  while (pending.length > 0) {
    const lastKey = result.length > 0 ? pairKey(result[result.length - 1]!.id) : null;
    let pick = 0;
    if (lastKey) {
      const alt = pending.findIndex((i) => pairKey(i.id) !== lastKey);
      if (alt >= 0) pick = alt;
    }
    result.push(pending.splice(pick, 1)[0]!);
  }
  return result;
}

/** Re-insert a failed card later in the session, not as the next card. */
export function requeueRandomly<T>(queue: T[], item: T, minDelay = 3): T[] {
  if (queue.length === 0) return [item];
  const earliest = Math.min(minDelay, queue.length);
  const index =
    earliest + Math.floor(Math.random() * (queue.length - earliest + 1));
  const next = [...queue];
  next.splice(index, 0, item);
  return next;
}

export function reviewItem(item: SrsItem, quality: 0 | 1 | 2 | 3): SrsItem {
  if (quality === 0) {
    return {
      ...item,
      repetitions: 0,
      interval: 0,
      ease: Math.max(1.3, item.ease - 0.2),
      nextReview: new Date().toISOString(),
    };
  }

  let interval = item.interval;
  let repetitions = item.repetitions + 1;

  if (repetitions === 1) interval = 1;
  else if (repetitions === 2) interval = 3;
  else interval = Math.round(item.interval * item.ease);

  const ease =
    quality === 3
      ? item.ease + 0.1
      : quality === 2
        ? item.ease
        : Math.max(1.3, item.ease - 0.15);

  const next = new Date();
  next.setDate(next.getDate() + interval);

  return {
    ...item,
    repetitions,
    interval,
    ease,
    nextReview: next.toISOString(),
  };
}

export function upsertSrsItems(
  progress: AppProgress,
  items: SrsItem[],
): AppProgress {
  const map = new Map(progress.srs.map((i) => [i.id, i]));
  for (const item of items) {
    if (!map.has(item.id)) map.set(item.id, item);
  }
  return { ...progress, srs: Array.from(map.values()) };
}

export function updateSrsItem(
  progress: AppProgress,
  updated: SrsItem,
): AppProgress {
  return {
    ...progress,
    srs: progress.srs.map((i) => (i.id === updated.id ? updated : i)),
  };
}
