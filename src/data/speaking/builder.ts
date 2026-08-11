import type { SpeakingLesson } from "@/lib/types";

export type CompactSpeaking = {
  id: string;
  unit: number;
  unitTitle: string;
  order: number;
  title: string;
  subtitle: string;
  scenario: string;
  durationMin?: number;
  objectives: string[];
  dialogue: [string, string, string, string][];
  patterns: {
    chunk: string;
    romaji: string;
    hiragana: string;
    meaning: string;
    whenToUse: string;
    examples: [string, string, string][];
  }[];
  grammarNotes: [string, string][];
  culturalNote: [string, string];
  shadowing: [string, string][];
  quiz: [string, string[], number, string][];
  production: [string, string, string, string][];
};

export function expandSpeaking(c: CompactSpeaking): SpeakingLesson {
  const dialogue = c.dialogue.map(([speaker, romaji, hiragana, english]) => ({
    speaker,
    romaji,
    hiragana,
    english,
  }));
  const listenLines = dialogue.slice(0, Math.min(4, dialogue.length)).map((d) => ({
    romaji: d.romaji,
    hiragana: d.hiragana,
  }));
  const first = dialogue[0];

  return {
    id: c.id,
    unit: c.unit,
    unitTitle: c.unitTitle,
    order: c.order,
    title: c.title,
    subtitle: c.subtitle,
    scenario: c.scenario,
    durationMin: c.durationMin ?? 18,
    objectives: c.objectives,
    dialogue,
    patterns: c.patterns.map((p, i) => ({
      id: `p-${c.id}-${i}`,
      chunk: p.chunk,
      romaji: p.romaji,
      hiragana: p.hiragana,
      meaning: p.meaning,
      whenToUse: p.whenToUse,
      examples: p.examples.map(([text, romaji, english]) => ({
        text,
        romaji,
        english,
      })),
    })),
    grammarNotes: c.grammarNotes.map(([title, body]) => ({ title, body })),
    culturalNote: { title: c.culturalNote[0], body: c.culturalNote[1] },
    shadowingLines: c.shadowing.map(([romaji, hiragana]) => ({
      romaji,
      hiragana,
    })),
    quiz: c.quiz.map(([question, options, correctIndex, explanation], i) => ({
      id: `q-${c.id}-${i}`,
      question,
      options,
      correctIndex,
      explanation,
    })),
    production: c.production.map(
      ([english, hint, answerRomaji, answerHiragana], i) => ({
        id: `prod-${c.id}-${i}`,
        english,
        hint,
        answerRomaji,
        answerHiragana,
      }),
    ),
    listening: {
      id: `listen-${c.id}`,
      title: "Listening drill",
      lines: listenLines,
      questions: [
        {
          id: `lq-${c.id}-0`,
          question: "What is this dialogue mainly about?",
          options: [
            first?.english ?? c.subtitle,
            "A monologue with no conversation partners",
            "A topic unrelated to this lesson’s scenario",
            "Silence — nobody speaks",
          ],
          correctIndex: 0,
          explanation: "Match what you heard to the real scenario.",
        },
        {
          id: `lq-${c.id}-1`,
          question: "Which line opens or appears near the start?",
          options: [
            listenLines[0]?.hiragana ?? "こんにちは",
            listenLines[1]?.hiragana &&
            listenLines[1].hiragana !== listenLines[0]?.hiragana
              ? listenLines[1].hiragana
              : "またね、それからね",
            "英語だけで話してください",
            "きょうはやすみですよ（ちがう場面）",
          ],
          correctIndex: 0,
          explanation: "Train your ear on the opening chunk.",
        },
      ],
    },
  };
}
