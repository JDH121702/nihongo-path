import { getVocabPackSummary, type VocabPackSummary } from "./manifest";
import type { VocabWord } from "@/lib/types";

export interface LoadedVocabPack {
  pack: VocabPackSummary;
  words: VocabWord[];
}

async function loadVocabWords(unit: number): Promise<VocabWord[]> {
  if (unit >= 1 && unit <= 8) {
    const { vocabWords18 } = await import("./units-1-8");
    return vocabWords18.filter((word) => word.unit === unit);
  }

  if (unit >= 9 && unit <= 16) {
    const { vocabWords916 } = await import("./units-9-16");
    return vocabWords916.filter((word) => word.unit === unit);
  }

  if (unit >= 101 && unit <= 112) {
    const { vocabExpansion } = await import("./expansion");
    return vocabExpansion.filter((word) => word.unit === unit);
  }

  return [];
}

/** Load a single vocabulary range in the browser instead of the Worker. */
export async function loadVocabPack(
  unit: number,
): Promise<LoadedVocabPack | null> {
  const pack = getVocabPackSummary(unit);
  if (!pack) return null;

  const words = await loadVocabWords(unit);
  if (words.length === 0) return null;

  return { pack, words };
}
