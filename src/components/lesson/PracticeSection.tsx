"use client";

import { useEffect, useState } from "react";
import { Check, X, Mic, Volume2 } from "lucide-react";
import type { QuizQuestion, ProductionPrompt } from "@/lib/types";
import { speakJapanese } from "@/lib/speech";

interface PracticeSectionProps {
  shadowingLines: { romaji: string; hiragana: string }[];
  quiz: QuizQuestion[];
  production: ProductionPrompt[];
  onComplete: (score: number) => void;
  onView?: () => void;
  alreadyComplete?: boolean;
}

export function PracticeSection({
  shadowingLines,
  quiz,
  production,
  onComplete,
  onView,
  alreadyComplete = false,
}: PracticeSectionProps) {
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(alreadyComplete);
  const [revealedProd, setRevealedProd] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<"shadow" | "quiz" | "speak">(
    "shadow",
  );
  const [completedLocal, setCompletedLocal] = useState(alreadyComplete);
  const [shadowed, setShadowed] = useState(alreadyComplete);
  const [spoke, setSpoke] = useState(alreadyComplete);

  useEffect(() => {
    onView?.();
  }, [onView]);

  const quizScore = quiz.filter(
    (q) => quizAnswers[q.id] === q.correctIndex,
  ).length;
  const quizPct =
    quiz.length === 0 ? 100 : Math.round((quizScore / quiz.length) * 100);
  const canSave =
    shadowed &&
    spoke &&
    showResults &&
    quizPct >= 50 &&
    Object.keys(quizAnswers).length >= quiz.length;

  const handleCheckQuiz = () => {
    setShowResults(true);
  };

  const handleSaveProgress = () => {
    if (!canSave && !alreadyComplete) return;
    const score = quizPct;
    onComplete(score);
    setCompletedLocal(true);
  };

  const tabs = [
    { id: "shadow" as const, label: "Shadowing" },
    { id: "quiz" as const, label: "Quiz" },
    { id: "speak" as const, label: "Speak" },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Practice</h2>
        {completedLocal && (
          <span className="text-xs font-semibold text-success">
            ✓ Lesson saved as complete
          </span>
        )}
      </div>

      <p className="text-sm text-muted">
        Visit all three tabs, score at least 50% on the quiz, then save. That
        unlocks the next lesson and earns XP.
      </p>

      <div className="flex gap-1 rounded-lg border border-card-border bg-surface p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);
              if (tab.id === "shadow") setShadowed(true);
              if (tab.id === "speak") setSpoke(true);
            }}
            className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-card text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
            {tab.id === "shadow" && shadowed ? " ✓" : ""}
            {tab.id === "quiz" && showResults ? " ✓" : ""}
            {tab.id === "speak" && spoke ? " ✓" : ""}
          </button>
        ))}
      </div>

      {activeTab === "shadow" && (
        <div className="space-y-3">
          <p className="text-sm text-muted">
            Play each line, repeat out loud immediately. Shadowing builds natural rhythm.
          </p>
          {shadowingLines.map((line, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-card-border bg-card p-4"
            >
              <button
                type="button"
                onClick={() => {
                  setShadowed(true);
                  speakJapanese(line.hiragana);
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Volume2 className="h-5 w-5" />
              </button>
              <div>
                <p className="font-jp text-lg">{line.hiragana}</p>
                <p className="text-sm text-muted">{line.romaji}</p>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              setShadowed(true);
              setActiveTab("quiz");
            }}
            className="w-full rounded-xl border border-speaking/30 py-3 text-sm font-semibold text-speaking hover:bg-speaking/5 transition-colors"
          >
            Continue to quiz →
          </button>
        </div>
      )}

      {activeTab === "quiz" && (
        <div className="space-y-4">
          {quiz.map((q) => {
            const selected = quizAnswers[q.id];
            const answered = selected !== undefined;
            const correct = selected === q.correctIndex;

            return (
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
                      disabled={showResults}
                      onClick={() =>
                        setQuizAnswers((prev) => ({ ...prev, [q.id]: i }))
                      }
                      className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
                        showResults && i === q.correctIndex
                          ? "border-success bg-success/10"
                          : showResults && answered && selected === i && !correct
                            ? "border-primary bg-primary/10"
                            : selected === i
                              ? "border-secondary bg-secondary/10"
                              : "border-card-border hover:border-secondary/30"
                      }`}
                    >
                      {showResults && i === q.correctIndex && (
                        <Check className="h-4 w-4 text-success shrink-0" />
                      )}
                      {showResults && selected === i && !correct && (
                        <X className="h-4 w-4 text-primary shrink-0" />
                      )}
                      {opt}
                    </button>
                  ))}
                </div>
                {showResults && (
                  <p className="mt-2 text-xs text-muted">{q.explanation}</p>
                )}
              </div>
            );
          })}
          {!showResults && (
            <button
              type="button"
              onClick={handleCheckQuiz}
              disabled={Object.keys(quizAnswers).length < quiz.length}
              className="w-full rounded-xl bg-speaking py-3 text-sm font-semibold text-white hover:bg-primary-hover disabled:opacity-40 transition-colors"
            >
              Check answers
            </button>
          )}
          {showResults && (
            <div className="rounded-xl bg-surface p-4 text-center space-y-3">
              <p className="text-2xl font-bold">
                {quizScore}/{quiz.length}
              </p>
              <p className="text-sm text-muted">
                {quizPct >= 50
                  ? "Quiz passed (≥50%). Finish Speak tab, then save."
                  : "Need at least 50% to save this lesson — retake when ready."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSpoke(true);
                  setActiveTab("speak");
                }}
                className="text-sm font-semibold text-speaking hover:underline"
              >
                Continue to speak practice →
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === "speak" && (
        <div className="space-y-4">
          <p className="text-sm text-muted">
            Say it in Japanese before revealing the answer. Active production
            cements patterns.
          </p>
          {production.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-card-border bg-card p-4"
            >
              <div className="flex items-start gap-2">
                <Mic className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">{p.english}</p>
                  <p className="text-xs text-muted mt-1">Hint: {p.hint}</p>
                  {revealedProd.has(p.id) ? (
                    <div className="mt-3 rounded-lg bg-surface p-3">
                      <p className="font-jp text-lg">{p.answerHiragana}</p>
                      <p className="text-sm text-muted">{p.answerRomaji}</p>
                      <button
                        type="button"
                        onClick={() => speakJapanese(p.answerHiragana)}
                        className="mt-2 inline-flex items-center gap-1 text-xs text-speaking hover:underline"
                      >
                        <Volume2 className="h-3 w-3" /> Hear model answer
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setSpoke(true);
                        setRevealedProd((prev) => new Set(prev).add(p.id));
                      }}
                      className="mt-3 text-sm font-medium text-secondary hover:underline"
                    >
                      Reveal answer
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {!completedLocal && (
            <button
              type="button"
              onClick={handleSaveProgress}
              disabled={!canSave}
              className="w-full rounded-xl bg-speaking py-3 text-sm font-semibold text-white hover:bg-primary-hover disabled:opacity-40 transition-colors"
            >
              {canSave
                ? "Save lesson & unlock next"
                : "Need shadow + speak + ≥50% quiz"}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
