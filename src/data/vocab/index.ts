import { vocabWords18 } from "./units-1-8";
import { vocabWords916 } from "./units-9-16";
import { vocabExpansion } from "./expansion";
import { vocabPackSummaries } from "./manifest";
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

export const vocabPacks: VocabPack[] = vocabPackSummaries.map((pack) => ({
  unit: pack.unit,
  title: pack.title,
  description: pack.description,
  wordIds: (byUnit.get(pack.unit) ?? []).map((word) => word.id),
}));

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
