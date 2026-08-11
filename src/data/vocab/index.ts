import { vocabWords18 } from "./units-1-8";
import { vocabWords916 } from "./units-9-16";
import { vocabExpansion } from "./expansion";
import { speakingUnits } from "@/data/speaking/units";
import type { VocabPack, VocabWord } from "@/lib/types";

export const allVocabWords: VocabWord[] = [
  ...vocabWords18,
  ...vocabWords916,
  ...vocabExpansion,
];

const byId = new Map(allVocabWords.map((w) => [w.id, w]));
const byUnit = new Map<number, VocabWord[]>();
for (const word of allVocabWords) {
  const list = byUnit.get(word.unit) ?? [];
  list.push(word);
  byUnit.set(word.unit, list);
}

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

export const vocabPacks: VocabPack[] = [
  ...speakingUnits
    .map((unit) => {
      const words = byUnit.get(unit.id) ?? [];
      if (words.length === 0) return null;
      return {
        unit: unit.id,
        title: unit.title,
        description: `Frequency vocab for Unit ${unit.id}: ${unit.title}.`,
        wordIds: words.map((w) => w.id),
      };
    })
    .filter((p): p is VocabPack => p !== null),
  ...Object.keys(expansionPackMeta)
    .map(Number)
    .sort((a, b) => a - b)
    .map((unit) => {
      const words = byUnit.get(unit) ?? [];
      const meta = expansionPackMeta[unit];
      return {
        unit,
        title: meta.title,
        description: meta.description,
        wordIds: words.map((w) => w.id),
      };
    }),
];

export function getVocabWord(id: string) {
  return byId.get(id);
}

export function getVocabForUnit(unit: number) {
  return byUnit.get(unit) ?? [];
}

export function getVocabPack(unit: number) {
  return vocabPacks.find((p) => p.unit === unit);
}

export const vocabStats = {
  total: allVocabWords.length,
  core: allVocabWords.filter((w) => w.frequency === "core").length,
  byUnit: Object.fromEntries(
    [...byUnit.entries()].map(([unit, words]) => [unit, words.length]),
  ),
};
