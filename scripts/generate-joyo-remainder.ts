/**
 * Generates remaining Jōyō kanji lessons from kanji-jouyou.json
 * minus characters already in the curriculum.
 *
 * Run: npx tsx scripts/generate-joyo-remainder.ts
 */
import fs from "node:fs";
import path from "node:path";
import { curatedKanjiLessons } from "../src/data/kanji/curriculum";

type JoyoEntry = {
  meanings: string[];
  readings_on: string[] | null;
  readings_kun: string[] | null;
  freq: number | null;
  grade: number | null;
  wk_radicals: string[] | null;
};

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "scripts/data");
const DATA = path.join(DATA_DIR, "kanji-jouyou.json");
const JOUYOU_URL =
  "https://raw.githubusercontent.com/davidluzgouveia/kanji-data/master/kanji-jouyou.json";
const OUT_LESSONS = path.join(ROOT, "src/data/kanji/joyo-remainder.ts");
const OUT_STORIES = path.join(ROOT, "src/data/kanji/stories-joyo.ts");
const OUT_UNITS = path.join(ROOT, "src/data/kanji/joyo-units.ts");

async function ensureJoyoData() {
  if (fs.existsSync(DATA)) return;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  console.log("Downloading kanji-jouyou.json…");
  const res = await fetch(JOUYOU_URL);
  if (!res.ok) throw new Error(`Failed to download Jōyō data: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(DATA, buf);
  console.log(`Saved ${DATA} (${buf.length} bytes)`);
}

const HIRA =
  "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔー";
const KATA =
  "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴー";

function toKatakana(s: string) {
  return [...s]
    .map((ch) => {
      const i = HIRA.indexOf(ch);
      return i >= 0 ? KATA[i] : ch;
    })
    .join("");
}

function cleanOn(readings: string[] | null) {
  if (!readings?.length) return [] as string[];
  return readings
    .map((r) => toKatakana(r.replace(/[-.]/g, "")))
    .filter(Boolean)
    .slice(0, 3);
}

function cleanKun(readings: string[] | null) {
  if (!readings?.length) return [] as string[];
  return readings
    .map((r) => {
      // "か.つ" → "か(つ)"; "-が.ち" → "が(ち)"
      const stripped = r.replace(/^-/, "");
      if (stripped.includes(".")) {
        const [base, rest] = stripped.split(".");
        return `${base}(${rest.replace(/\./g, "")})`;
      }
      return stripped;
    })
    .filter((r) => !r.startsWith("!"))
    .slice(0, 3);
}

function esc(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function meaningOf(entry: JoyoEntry) {
  const m = entry.meanings?.[0] ?? "kanji";
  return m.replace(/\s*\(.*?\)\s*/g, " ").trim().toLowerCase();
}

function buildMnemonic(
  ch: string,
  meaning: string,
  radicals: string[],
  on: string[],
  kun: string[],
) {
  const readingHint = kun[0]
    ? `Kun ${kun[0]}`
    : on[0]
      ? `On ${on[0]}`
      : "one solid reading";
  if (radicals.length >= 2) {
    return `${ch} = “${meaning}.” See ${radicals[0]} + ${radicals[1]} as a story hook, then bind ${readingHint} to a word you’ll actually meet.`;
  }
  if (radicals.length === 1) {
    return `${ch} = “${meaning}.” Anchor on the ${radicals[0]} radical, then glue ${readingHint} by spotting the character twice in the wild.`;
  }
  return `${ch} = “${meaning}.” No free radical story — treat the whole silhouette as the cue, and attach ${readingHint} with one personal example sentence.`;
}

function buildVocabPairs(
  ch: string,
  meaning: string,
  vocabReading: string,
  on: string[],
  kun: string[],
): [string, string, string][] {
  const pairs: [string, string, string][] = [
    [ch, vocabReading || meaning, meaning],
  ];
  // Synthetic compound cue using on-yomi when available (recognition, not dictionary-perfect)
  if (on[0] && vocabReading) {
    const onHira = on[0]
      .split("")
      .map((c) => {
        const H =
          "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴー";
        const K =
          "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔー";
        const i = H.indexOf(c);
        return i >= 0 ? K[i] : c;
      })
      .join("");
    pairs.push([
      `${ch}の意味`,
      `${onHira || vocabReading} のいみ`,
      `the meaning of ${ch} (${meaning})`,
    ]);
  } else if (kun[0]) {
    pairs.push([
      `${ch}を見る`,
      `${kun[0].replace(/\(.*\)/, "")}をみる`,
      `see/notice ${meaning}`,
    ]);
  }
  return pairs.slice(0, 2);
}

const UNIT_THEMES = [
  "Common Remainder A",
  "Common Remainder B",
  "Daily Compounds",
  "Society & People",
  "Nature Extension",
  "Motion & Change",
  "Mind & Speech",
  "Work & Tools",
  "City & Transit",
  "Body Extension",
  "Food & Goods",
  "Time & Measure",
  "Force & Conflict",
  "Law & Order",
  "Arts & Craft",
  "Science Light",
  "Economy Deep",
  "Politics Light",
  "Religion & Ritual",
  "Abstract Dense A",
  "Abstract Dense B",
  "Newspaper Set A",
  "Newspaper Set B",
  "Literary Set A",
  "Literary Set B",
  "Rare-but-Jōyō A",
  "Rare-but-Jōyō B",
  "Rare-but-Jōyō C",
  "Rare-but-Jōyō D",
  "Capstone Sweep A",
  "Capstone Sweep B",
  "Capstone Sweep C",
  "Capstone Sweep D",
  "Capstone Sweep E",
  "Capstone Sweep F",
  "Capstone Sweep G",
  "Capstone Sweep H",
  "Capstone Sweep I",
  "Capstone Sweep J",
  "Capstone Sweep K",
  "Capstone Sweep L",
  "Capstone Sweep M",
  "Capstone Sweep N",
  "Capstone Sweep O",
  "Jōyō Finish Line",
];

async function main() {
  await ensureJoyoData();
  const joyo = JSON.parse(fs.readFileSync(DATA, "utf8")) as Record<
    string,
    JoyoEntry
  >;
  const have = new Set(
    curatedKanjiLessons.flatMap((l) => l.kanji.map((k) => k.character)),
  );

  const missing = Object.entries(joyo)
    .filter(([ch]) => !have.has(ch))
    .sort((a, b) => {
      const fa = a[1].freq ?? 99999;
      const fb = b[1].freq ?? 99999;
      return fa - fb;
    });

  console.log(`Have ${have.size} unique; missing ${missing.length} of 2136`);

  const PER_LESSON = 16;
  const chunks: typeof missing[] = [];
  for (let i = 0; i < missing.length; i += PER_LESSON) {
    chunks.push(missing.slice(i, i + PER_LESSON));
  }

  // 2 lessons per unit
  const unitCount = Math.ceil(chunks.length / 2);
  const startUnit = 36;

  let lessonBlocks: string[] = [];
  let storyBlocks: string[] = [];
  let unitBlocks: string[] = [];

  for (let u = 0; u < unitCount; u++) {
    const unitId = startUnit + u;
    const theme = UNIT_THEMES[u] ?? `Jōyō Batch ${unitId}`;
    const lessonA = chunks[u * 2] ?? [];
    const lessonB = chunks[u * 2 + 1] ?? [];
    const lessons = [
      { order: 1, chars: lessonA },
      { order: 2, chars: lessonB },
    ].filter((l) => l.chars.length > 0);

    const lessonIds = lessons.map((l) => `kj-${unitId}-${l.order}`);
    const storyId = `story-${unitId}`;
    const allChars = lessons.flatMap((l) => l.chars.map(([ch]) => ch));

    const hoursLo = 3200 + u * 40;
    const hoursHi = hoursLo + 40;

    unitBlocks.push(`  {
    id: ${unitId},
    stage: "fluent",
    hoursBand: "${hoursLo.toLocaleString("en-US")}–${hoursHi.toLocaleString("en-US")}h",
    title: "${esc(theme)}",
    description: "Jōyō recognition sweep — frequency-ordered remainder toward full literacy.",
    lessonIds: ${JSON.stringify(lessonIds)},
    storyIds: ["${storyId}"],
  }`);

    for (const lesson of lessons) {
      const title =
        lesson.order === 1
          ? `${theme} · Set 1`
          : `${theme} · Set 2`;
      const rows = lesson.chars
        .map(([ch, entry]) => {
          const meaning = meaningOf(entry);
          const on = cleanOn(entry.readings_on);
          const kun = cleanKun(entry.readings_kun);
          const radicals = (entry.wk_radicals ?? []).slice(0, 3);
          const vocabReading =
            kun[0]?.replace(/[()]/g, "") ||
            (entry.readings_on?.[0]?.replace(/[-.]/g, "") ?? "");
          const mnemonic = buildMnemonic(ch, meaning, radicals, on, kun);
          const vocab = buildVocabPairs(ch, meaning, vocabReading, on, kun);
          const vocabLit = vocab
            .map(
              ([w, r, m]) =>
                `["${esc(w)}", "${esc(r)}", "${esc(m)}"]`,
            )
            .join(",\n          ");
          const onLit = JSON.stringify(on);
          const kunLit = JSON.stringify(kun);
          const radLit = JSON.stringify(radicals);
          return `      [
        "${ch}",
        "${esc(meaning)}",
        ${onLit},
        ${kunLit},
        ${radLit},
        "${esc(mnemonic)}",
        [
          ${vocabLit}
        ],
      ]`;
        })
        .join(",\n");

      const first = lesson.chars[0];
      const second = lesson.chars[1] ?? lesson.chars[0];
      const q1Mean = meaningOf(first[1]);
      const q2Char = second[0];
      const q2Mean = meaningOf(second[1]);

      lessonBlocks.push(`  kanjiLesson({
    id: "kj-${unitId}-${lesson.order}",
    unit: ${unitId},
    unitTitle: "${esc(theme)}",
    order: ${lesson.order},
    title: "${esc(title)}",
    subtitle: "Recognition batch toward full Jōyō",
    storyId: ${lesson.order === 1 ? `"${storyId}"` : "null"},
    kanji: [
${rows}
    ],
    quiz: [
      [
        "What does ${first[0]} mean?",
        ${JSON.stringify([q1Mean, "unrelated filler", "opposite meaning", "punctuation mark"])},
        0,
        "${first[0]} = ${esc(q1Mean)}.",
      ],
      [
        "Which character means “${esc(q2Mean)}”?",
        ${JSON.stringify([q2Char, "々", "ー", "・"])},
        0,
        "${q2Char} = ${esc(q2Mean)}.",
      ],
    ],
  })`);
    }

    const sample = allChars.slice(0, 10);
    const joined = sample.join("・");
    storyBlocks.push(`  {
    id: "${storyId}",
    title: "漢字カバー ${unitId}",
    subtitle: "Short reading practice for this coverage batch",
    type: "article",
    level: ${unitId},
    requiredKanji: ${JSON.stringify(sample)},
    paragraphs: [
      {
        japanese: "今日の記事では、${joined}といった漢字を中心に読みます。まずは大意をつかみ、あとで詳しく確認しましょう。",
        furigana: { 今日: "きょう", 記事: "きじ", 漢字: "かんじ", 中心: "ちゅうしん", 大意: "たいい", 確認: "かくにん" },
        english: "Today’s short article centers on kanji such as ${joined}. Catch the gist first, then check details.",
      },
      {
        japanese: "同じ漢字は、掲示やニュースでもくり返し出てきます。形と意味をむすびつけるほど、読むのが速くなります。",
        furigana: { 同: "おな", 漢字: "かんじ", 掲示: "けいじ", 出: "で", 形: "かたち", 意味: "いみ", 読: "よ", 速: "はや" },
        english: "The same characters show up again on notices and in news. Linking shape to meaning is what builds reading speed.",
      },
      {
        japanese: "わからない語があっても止まらず、文の流れから推測する練習も大切です。",
        furigana: { 語: "ご", 止: "と", 文: "ぶん", 流: "なが", 推測: "すいそく", 練習: "れんしゅう", 大切: "たいせつ" },
        english: "Even when a word is unknown, practicing gist-from-context without freezing is part of literacy.",
      },
    ],
    comprehension: [
      {
        id: "q-${storyId}-1",
        question: "What should you do first with a new coverage reading?",
        options: [
          "Catch the gist, then check details",
          "Stop on every unknown word forever",
          "Only read the English",
          "Skip all kanji",
        ],
        correctIndex: 0,
        explanation: "Gist first is the literacy habit.",
      },
      {
        id: "q-${storyId}-2",
        question: "What speeds up reading according to the text?",
        options: [
          "Linking character shape to meaning",
          "Avoiding all compounds",
          "Memorizing only stroke order",
          "Never rereading",
        ],
        correctIndex: 0,
        explanation: "Shape ↔ meaning binding builds speed.",
      },
    ],
  }`);
  }

  const lessonsFile = `import { kanjiLesson } from "./builder";
import type { KanjiLesson } from "@/lib/types";

/** Auto-generated Jōyō remainder (frequency-ordered). Run scripts/generate-joyo-remainder.ts to regenerate. */
export const joyoRemainderLessons: KanjiLesson[] = [
${lessonBlocks.join(",\n")}
];
`;

  const storiesFile = `import type { ReadingStory } from "@/lib/types";

/** Auto-generated reading practice for Jōyō remainder units. */
export const joyoStories: ReadingStory[] = [
${storyBlocks.join(",\n")}
];
`;

  const unitsFile = `import type { KanjiUnit } from "@/lib/types";

/** Auto-generated units for Jōyō remainder path. */
export const joyoRemainderUnits: KanjiUnit[] = [
${unitBlocks.join(",\n")}
];
`;

  fs.writeFileSync(OUT_LESSONS, lessonsFile, "utf8");
  fs.writeFileSync(OUT_STORIES, storiesFile, "utf8");
  fs.writeFileSync(OUT_UNITS, unitsFile, "utf8");

  console.log(
    `Wrote ${lessonBlocks.length} lessons, ${unitCount} units, ${storyBlocks.length} stories → units ${startUnit}–${startUnit + unitCount - 1}`,
  );
  console.log(
    "Tip: delete scripts/data/kanji-jouyou.json when done so Next/Turbopack does not watch the huge JSON.",
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
