import type { KanjiEntry, KanjiLesson, QuizQuestion } from "@/lib/types";

export type CompactKanji = [
  character: string,
  meaning: string,
  onyomi: string[],
  kunyomi: string[],
  radicals: string[],
  mnemonic: string,
  vocabulary: [word: string, reading: string, meaning: string][],
];

export function expandKanji(row: CompactKanji): KanjiEntry {
  const [character, meaning, onyomi, kunyomi, radicals, mnemonic, vocabulary] =
    row;
  return {
    character,
    meaning,
    onyomi,
    kunyomi,
    radicals,
    mnemonic,
    vocabulary: vocabulary.map(([word, reading, meaning]) => ({
      word,
      reading,
      meaning,
    })),
  };
}

export function kanjiLesson(opts: {
  id: string;
  unit: number;
  unitTitle: string;
  order: number;
  title: string;
  subtitle: string;
  kanji: CompactKanji[];
  storyId: string | null;
  quiz: [string, string[], number, string][];
}): KanjiLesson {
  return {
    id: opts.id,
    unit: opts.unit,
    unitTitle: opts.unitTitle,
    order: opts.order,
    title: opts.title,
    subtitle: opts.subtitle,
    radicals: [],
    kanji: opts.kanji.map(expandKanji),
    storyId: opts.storyId,
    quiz: opts.quiz.map(
      ([question, options, correctIndex, explanation], i): QuizQuestion => ({
        id: `q-${opts.id}-${i}`,
        question,
        options,
        correctIndex,
        explanation,
      }),
    ),
  };
}
