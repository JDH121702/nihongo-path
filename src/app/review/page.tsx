"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { RotateCcw, Check, X, Zap } from "lucide-react";
import { useProgress } from "@/lib/progress";
import {
  buildReviewQueue,
  getDueItems,
  planKanjiSrsSync,
  requeueRandomly,
} from "@/lib/srs";
import { getKanjiEntry } from "@/data/kanji/curriculum";
import { KanjiCard } from "@/components/kanji/KanjiCard";
import { XP } from "@/lib/gamification";
import type { SrsItem, SrsKind } from "@/lib/types";

function kanjiCharFromItem(item: SrsItem): string | null {
  if (item.id.startsWith("srs-kj-en-")) return item.id.slice("srs-kj-en-".length);
  if (item.id.startsWith("srs-kj-rd-")) return item.id.slice("srs-kj-rd-".length);
  if (item.id.startsWith("srs-kj-")) return item.id.slice("srs-kj-".length);
  if (item.kind === "kanji" || item.path === "kanji") return item.front;
  return null;
}

const FILTERS: { id: "all" | SrsKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "kanji", label: "Kanji" },
  { id: "vocab", label: "Vocab" },
  { id: "pattern", label: "Patterns" },
];

function kindLabel(item: SrsItem): string {
  if (item.kind === "kanji" || item.path === "kanji") return "Kanji";
  if (item.kind === "vocab") return "Vocab";
  if (item.kind === "pattern") return "Pattern";
  return "Speaking";
}

function kindClass(item: SrsItem): string {
  if (item.kind === "kanji" || item.path === "kanji") {
    return "bg-kanji/10 text-kanji";
  }
  if (item.kind === "vocab") return "bg-accent/10 text-accent";
  return "bg-speaking/10 text-speaking";
}

function ReviewSession() {
  const searchParams = useSearchParams();
  const kindParam = searchParams.get("kind");
  const filter: "all" | SrsKind =
    kindParam === "kanji" || kindParam === "vocab" || kindParam === "pattern"
      ? kindParam
      : "all";

  const { progress, loaded, rateSrsItem, addSrsItems, removeSrsItems } =
    useProgress();
  const [queue, setQueue] = useState<SrsItem[]>([]);
  const [seeded, setSeeded] = useState(false);
  const [seedFilter, setSeedFilter] = useState<"all" | SrsKind | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [sessionDone, setSessionDone] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [finished, setFinished] = useState(false);

  const dueCounts = useMemo(() => {
    if (!loaded) {
      return { all: 0, kanji: 0, vocab: 0, pattern: 0 };
    }
    return {
      all: getDueItems(progress).length,
      kanji: getDueItems(progress, { kind: "kanji" }).length,
      vocab: getDueItems(progress, { kind: "vocab" }).length,
      pattern: getDueItems(progress, { kind: "pattern" }).length,
    };
  }, [loaded, progress]);

  useEffect(() => {
    if (seedFilter !== null && seedFilter !== filter) {
      setSeeded(false);
      setSeedFilter(null);
      setQueue([]);
      setSessionDone(0);
      setCombo(0);
      setBestCombo(0);
      setFinished(false);
      setRevealed(false);
    }
  }, [filter, seedFilter]);

  useEffect(() => {
    if (!loaded || seeded) return;
    const { upsert, removeIds } = planKanjiSrsSync(progress, getKanjiEntry);
    if (upsert.length > 0) addSrsItems(upsert);
    if (removeIds.length > 0) removeSrsItems(removeIds);

    const removeSet = new Set(removeIds);
    const upsertMap = new Map(upsert.map((i) => [i.id, i]));
    const merged = [
      ...progress.srs
        .filter((i) => !removeSet.has(i.id))
        .map((i) => upsertMap.get(i.id) ?? i),
    ];
    for (const item of upsert) {
      if (!merged.some((i) => i.id === item.id)) merged.push(item);
    }

    const now = new Date().toISOString();
    const due = merged.filter((item) => {
      if (item.nextReview > now) return false;
      if (filter === "all") return true;
      return (
        item.kind === filter ||
        (filter === "kanji" && item.path === "kanji")
      );
    });

    const shuffled = buildReviewQueue(due);
    setQueue(shuffled);
    setSeeded(true);
    setSeedFilter(filter);
    if (shuffled.length === 0) setFinished(true);
  }, [loaded, seeded, progress, filter, addSrsItems, removeSrsItems]);

  const current = !finished && queue.length > 0 ? queue[0] : undefined;

  const handleRating = (quality: 0 | 1 | 2 | 3) => {
    if (!current) return;
    rateSrsItem(current.id, quality);
    setRevealed(false);
    setSessionDone((s) => s + 1);
    if (quality >= 2) {
      setCombo((c) => {
        const next = c + 1;
        setBestCombo((b) => Math.max(b, next));
        return next;
      });
    } else {
      setCombo(0);
    }

    setQueue((prev) => {
      const rest = prev.slice(1);
      if (quality === 0) {
        return requeueRandomly(rest, current, 3);
      }
      if (rest.length === 0) {
        setFinished(true);
        return [];
      }
      return rest;
    });
  };

  if (!loaded || !seeded) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center text-muted">
        Shuffling your cards…
      </div>
    );
  }

  if (finished || (!current && sessionDone === 0)) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center animate-fade-up">
        {sessionDone > 0 ? (
          <>
            <Zap className="mx-auto h-10 w-10 text-accent mb-3" />
            <h1 className="text-2xl font-bold">Review run done</h1>
            <p className="mt-2 text-muted">
              {sessionDone} cards · ~{sessionDone * XP.reviewCard} XP · best combo{" "}
              {bestCombo}
            </p>
          </>
        ) : (
          <>
            <RotateCcw className="mx-auto h-12 w-12 text-muted mb-4" />
            <h1 className="text-2xl font-bold">
              {filter === "all" ? "All clear" : `No ${filter} cards due`}
            </h1>
            <p className="mt-2 text-muted">
              {filter === "kanji"
                ? "Open a kanji lesson to add cards that match the learning view, then come back."
                : "Learn a lesson or grab vocab — then come back to lock it in."}
            </p>
          </>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/paths/kanji"
            className="rounded-xl bg-kanji px-4 py-2 text-sm font-semibold text-white"
          >
            Kanji
          </Link>
          <Link
            href="/paths/speaking"
            className="rounded-xl bg-speaking px-4 py-2 text-sm font-semibold text-white"
          >
            Speaking
          </Link>
          <Link
            href="/vocab"
            className="rounded-xl border border-card-border px-4 py-2 text-sm font-semibold"
          >
            Vocab
          </Link>
          {filter !== "all" && (
            <Link
              href="/review"
              className="rounded-xl border border-card-border px-4 py-2 text-sm font-semibold"
            >
              All reviews
            </Link>
          )}
        </div>
      </div>
    );
  }

  if (!current) return null;

  const kanjiEntry =
    current.kind === "kanji" || current.path === "kanji"
      ? getKanjiEntry(kanjiCharFromItem(current) ?? "")
      : undefined;

  const frontIsJp =
    !kanjiEntry &&
    (current.kind === "kanji" ||
      current.path === "kanji" ||
      /[\u3040-\u30ff\u4e00-\u9fff]/.test(current.front));

  return (
    <div className="mx-auto max-w-lg px-4 py-10 sm:px-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const href = f.id === "all" ? "/review" : `/review?kind=${f.id}`;
          const count = dueCounts[f.id];
          const active = filter === f.id;
          return (
            <Link
              key={f.id}
              href={href}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? "bg-foreground text-background"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {f.label}
              {count > 0 ? ` · ${count}` : ""}
            </Link>
          );
        })}
      </div>

      <div className="mb-6 flex items-center justify-between text-sm text-muted">
        <span>
          Card {sessionDone + 1} · {queue.length} left
        </span>
        {combo > 1 && (
          <span className="font-semibold text-accent">Combo ×{combo}</span>
        )}
      </div>

      {kanjiEntry ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-kanji rounded-xl"
          aria-label={revealed ? "Card revealed" : "Reveal answer"}
        >
          <KanjiCard kanji={kanjiEntry} revealed={revealed} />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="w-full rounded-2xl border border-card-border bg-card p-10 text-center card-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-speaking"
          aria-label={revealed ? "Card back shown" : "Reveal answer"}
        >
          <span
            className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${kindClass(current)}`}
          >
            {kindLabel(current)}
          </span>
          <p
            className={`mt-4 font-bold ${
              frontIsJp ? "font-jp text-4xl" : "text-2xl"
            }`}
          >
            {current.front}
          </p>
          {revealed ? (
            <p className="mt-6 text-lg text-muted whitespace-pre-line">
              {current.back}
            </p>
          ) : (
            <p className="mt-6 text-sm text-muted">Tap to reveal</p>
          )}
        </button>
      )}

      {revealed && (
        <div className="mt-6 grid grid-cols-4 gap-2">
          {(
            [
              [0, "Again", "bg-primary/10 text-primary"],
              [1, "Hard", "bg-surface text-muted"],
              [2, "Good", "bg-speaking/10 text-speaking"],
              [3, "Easy", "bg-success/10 text-success"],
            ] as const
          ).map(([q, label, cls]) => (
            <button
              key={q}
              type="button"
              onClick={() => handleRating(q)}
              className={`rounded-xl py-3 text-sm font-semibold ${cls}`}
            >
              {q === 0 ? <X className="mx-auto h-4 w-4 mb-1" /> : null}
              {q === 3 ? <Check className="mx-auto h-4 w-4 mb-1" /> : null}
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ReviewPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-lg px-4 py-20 text-center text-muted">
          Shuffling your cards…
        </div>
      }
    >
      <ReviewSession />
    </Suspense>
  );
}
