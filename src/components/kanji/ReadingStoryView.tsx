"use client";

import { useState } from "react";
import { Check, X, BookOpen } from "lucide-react";
import type { ReadingStory } from "@/lib/types";
import { renderWithFurigana } from "@/lib/speech";

interface ReadingStoryViewProps {
  story: ReadingStory;
  onComplete?: () => void;
}

export function ReadingStoryView({ story, onComplete }: ReadingStoryViewProps) {
  const [showEnglish, setShowEnglish] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const typeLabels = {
    story: "Short Story",
    news: "News Style",
    article: "Article",
  };

  const score = story.comprehension.filter(
    (q) => quizAnswers[q.id] === q.correctIndex,
  ).length;

  return (
    <article className="space-y-6">
      <header>
        <span className="inline-flex items-center gap-1 rounded-full bg-kanji/10 px-3 py-1 text-xs font-medium text-kanji">
          <BookOpen className="h-3 w-3" />
          {typeLabels[story.type]}
        </span>
        <h1 className="font-jp mt-3 text-2xl font-bold">{story.title}</h1>
        <p className="text-muted">{story.subtitle}</p>
      </header>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setShowEnglish(!showEnglish)}
          className="text-sm font-medium text-kanji hover:underline"
        >
          {showEnglish ? "Hide" : "Show"} English
        </button>
      </div>

      <div className="space-y-6">
        {story.paragraphs.map((para, i) => {
          const segments = renderWithFurigana(para.japanese, para.furigana);
          return (
            <div
              key={i}
              className="rounded-xl border border-card-border bg-card p-5 card-shadow"
            >
              <p className="font-jp text-xl leading-loose">
                {segments.map((seg, j) =>
                  seg.reading ? (
                    <ruby key={j}>
                      {seg.kanji}
                      <rt className="text-[0.5em] text-muted">{seg.reading}</rt>
                    </ruby>
                  ) : (
                    <span key={j}>{seg.kanji}</span>
                  ),
                )}
              </p>
              {showEnglish && (
                <p className="mt-3 text-sm text-muted border-t border-card-border pt-3">
                  {para.english}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <section className="space-y-4">
        <h2 className="font-semibold">Comprehension Check</h2>
        {story.comprehension.map((q) => {
          const selected = quizAnswers[q.id];
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
                        : showResults && selected === i
                          ? "border-primary bg-primary/10"
                          : selected === i
                            ? "border-kanji bg-kanji/10"
                            : "border-card-border hover:border-kanji/30"
                    }`}
                  >
                    {showResults && i === q.correctIndex && (
                      <Check className="h-4 w-4 text-success" />
                    )}
                    {showResults &&
                      selected === i &&
                      i !== q.correctIndex && (
                        <X className="h-4 w-4 text-primary" />
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

        {!showResults ? (
          <button
            type="button"
            onClick={() => setShowResults(true)}
            disabled={
              Object.keys(quizAnswers).length < story.comprehension.length
            }
            className="w-full rounded-xl bg-kanji py-3 text-sm font-semibold text-white hover:bg-secondary-hover disabled:opacity-40 transition-colors"
          >
            Check Answers
          </button>
        ) : (
          <div className="rounded-xl bg-surface p-4 text-center">
            <p className="text-2xl font-bold">
              {score}/{story.comprehension.length}
            </p>
            {score === story.comprehension.length && onComplete && (
              <button
                type="button"
                onClick={onComplete}
                className="mt-3 text-sm font-medium text-kanji hover:underline"
              >
                Mark story complete ✓
              </button>
            )}
          </div>
        )}
      </section>
    </article>
  );
}
