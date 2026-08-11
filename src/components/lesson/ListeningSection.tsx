"use client";

import { useMemo, useState } from "react";
import { Volume2, Gauge, Check } from "lucide-react";
import type { DialogueLine, ListeningDrill, QuizQuestion } from "@/lib/types";
import { speakJapanese } from "@/lib/speech";
import { useProgress } from "@/lib/progress";

function buildFallbackDrill(
  lessonId: string,
  dialogue: DialogueLine[],
): ListeningDrill {
  const lines = dialogue.slice(0, 4).map((d) => ({
    romaji: d.romaji,
    hiragana: d.hiragana,
  }));
  const first = dialogue[0];
  const second = dialogue[1] ?? dialogue[0];
  const questions: QuizQuestion[] = [
    {
      id: `${lessonId}-lq1`,
      question: "What is this dialogue mainly about?",
      options: [
        first?.english ?? "A short exchange",
        second?.english && second.english !== first?.english
          ? `Only: ${second.english}`
          : "A completely unrelated topic",
        "A weather report with no people speaking",
        "A dictionary definition with no dialogue",
      ],
      correctIndex: 0,
      explanation: "Match what you heard to the real opening meaning.",
    },
    {
      id: `${lessonId}-lq2`,
      question: "Which line appears near the start?",
      options: [
        lines[0]?.hiragana ?? "こんにちは",
        lines[1]?.hiragana && lines[1].hiragana !== lines[0]?.hiragana
          ? lines[1].hiragana
          : "またね、それからね",
        "英語だけで話してください",
        "きょうはやすみですよ（ちがう場面）",
      ],
      correctIndex: 0,
      explanation: "Train your ear on the opening chunk.",
    },
  ];
  return {
    id: `listen-${lessonId}`,
    title: "Listening drill",
    lines,
    questions,
  };
}

export function ListeningSection({
  lessonId,
  dialogue,
  drill,
}: {
  lessonId: string;
  dialogue: DialogueLine[];
  drill?: ListeningDrill;
}) {
  const data = useMemo(
    () => drill ?? buildFallbackDrill(lessonId, dialogue),
    [drill, lessonId, dialogue],
  );
  const { completeListening, progress } = useProgress();
  const done = progress.game.listeningCompleted.includes(data.id);
  const [rate, setRate] = useState(0.9);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const correctCount = data.questions.filter(
    (q) => answers[q.id] === q.correctIndex,
  ).length;
  const passed = correctCount === data.questions.length;

  const playAll = () => {
    data.lines.forEach((line, i) => {
      window.setTimeout(() => speakJapanese(line.hiragana, rate), i * 2200);
    });
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Listening drill</h2>
        {done && (
          <span className="text-xs font-semibold text-success">✓ Complete</span>
        )}
      </div>
      <p className="text-sm text-muted">
        Play at natural-ish speed, then answer. You need every question correct
        to earn XP and mark this drill done.
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={playAll}
          className="inline-flex items-center gap-2 rounded-xl bg-speaking px-4 py-2.5 text-sm font-semibold text-white"
        >
          <Volume2 className="h-4 w-4" /> Play dialogue
        </button>
        {[0.75, 0.9, 1].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRate(r)}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold ${
              rate === r ? "bg-accent text-foreground" : "bg-surface text-muted"
            }`}
          >
            <Gauge className="h-3 w-3" /> {r}×
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {data.questions.map((q) => (
          <div
            key={q.id}
            className="rounded-xl border border-card-border bg-card p-4"
          >
            <p className="font-medium mb-3">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  disabled={showResults && passed}
                  onClick={() =>
                    setAnswers((prev) => ({ ...prev, [q.id]: i }))
                  }
                  className={`flex w-full rounded-lg border px-3 py-2 text-left text-sm ${
                    answers[q.id] === i
                      ? "border-speaking bg-speaking/10"
                      : "border-card-border"
                  } ${
                    showResults && i === q.correctIndex
                      ? "border-success bg-success/10"
                      : ""
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResults && (
              <p className="mt-2 text-xs text-muted">{q.explanation}</p>
            )}
          </div>
        ))}
      </div>

      {!showResults || !passed ? (
        <button
          type="button"
          disabled={Object.keys(answers).length < data.questions.length}
          onClick={() => {
            setShowResults(true);
            const allCorrect = data.questions.every(
              (q) => answers[q.id] === q.correctIndex,
            );
            if (allCorrect) completeListening(data.id);
          }}
          className="w-full rounded-xl bg-secondary py-3 text-sm font-semibold text-white disabled:opacity-40"
        >
          {showResults && !passed
            ? "Try again for XP"
            : "Check listening"}
        </button>
      ) : (
        <div className="rounded-xl bg-surface p-4 text-center text-sm">
          <Check className="mx-auto h-6 w-6 text-success mb-2" />
          Perfect listen — XP saved. Replay at 1.0× tomorrow.
        </div>
      )}

      {showResults && !passed && (
        <p className="text-center text-xs text-muted">
          {correctCount}/{data.questions.length} correct — fix answers and
          check again.
        </p>
      )}
    </section>
  );
}
