import { speakingUnits } from "@/data/speaking/units";

export interface VocabPackSummary {
  unit: number;
  title: string;
  description: string;
  wordCount: number;
}

/**
 * Lightweight pack counts for route rendering. Keep this file free of imports
 * from the full vocabulary datasets so Cloudflare Workers never evaluate the
 * 8,000-word corpus just to render an overview page.
 */
export const vocabCountsByUnit = {
  1: 183,
  2: 129,
  3: 148,
  4: 145,
  5: 162,
  6: 160,
  7: 212,
  8: 185,
  9: 268,
  10: 237,
  11: 222,
  12: 335,
  13: 319,
  14: 276,
  15: 285,
  16: 321,
  101: 458,
  102: 372,
  103: 356,
  104: 442,
  105: 376,
  106: 347,
  107: 307,
  108: 388,
  109: 333,
  110: 300,
  111: 269,
  112: 465,
} as const satisfies Readonly<Record<number, number>>;

const expansionPackMeta: Record<
  number,
  { title: string; description: string }
> = {
  101: {
    title: "Daily verbs deep",
    description: "High-frequency verbs that power real conversation.",
  },
  102: {
    title: "Adjectives & adverbs",
    description: "Describe the world without freezing.",
  },
  103: {
    title: "Food & home deep",
    description: "Kitchen, konbini, and living-room Japanese.",
  },
  104: {
    title: "Work & business",
    description: "Office, clients, and meeting vocabulary.",
  },
  105: {
    title: "Emotions & relationships",
    description: "Feelings, dating, friends, and soft conflict.",
  },
  106: {
    title: "Travel & city deep",
    description: "Stations, hotels, and getting un-lost.",
  },
  107: {
    title: "Media & internet spoken",
    description: "News talk, SNS, and modern fillers.",
  },
  108: {
    title: "Abstract & academic light",
    description: "Ideas, arguments, and essay bones.",
  },
  109: {
    title: "Keigo & set expressions",
    description: "Polite chunks institutions expect.",
  },
  110: {
    title: "Nature, body & health",
    description: "Clinics, weather, and the physical world.",
  },
  111: {
    title: "Fillers & discourse",
    description: "The glue of native conversation.",
  },
  112: {
    title: "Near-native nuance",
    description: "Implication, softeners, and advanced chunks.",
  },
};

export function getVocabCountForUnit(unit: number) {
  return (vocabCountsByUnit as Readonly<Record<number, number>>)[unit] ?? 0;
}

export const vocabPackSummaries: VocabPackSummary[] = [
  ...speakingUnits.flatMap((unit): VocabPackSummary[] => {
    const wordCount = getVocabCountForUnit(unit.id);
    if (wordCount === 0) return [];

    return [
      {
        unit: unit.id,
        title: unit.title,
        description: `Frequency vocab for Unit ${unit.id}: ${unit.title}.`,
        wordCount,
      },
    ];
  }),
  ...Object.entries(expansionPackMeta)
    .map(([unit, meta]) => ({ unit: Number(unit), ...meta }))
    .sort((a, b) => a.unit - b.unit)
    .map((pack) => ({
      ...pack,
      wordCount: getVocabCountForUnit(pack.unit),
    })),
];

export function getVocabPackSummary(unit: number) {
  return vocabPackSummaries.find((pack) => pack.unit === unit);
}

export const vocabStats = {
  total: Object.values(vocabCountsByUnit).reduce(
    (total, count) => total + count,
    0,
  ),
  byUnit: vocabCountsByUnit,
};
