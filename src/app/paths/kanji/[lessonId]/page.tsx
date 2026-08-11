"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";
import { getKanjiLesson, kanjiLessons } from "@/data/kanji/curriculum";
import { useProgress } from "@/lib/progress";
import { kanjiSrsCards } from "@/lib/srs";
import { KanjiCard, RadicalGrid } from "@/components/kanji/KanjiCard";
import { Check, X } from "lucide-react";

export default function KanjiLessonPage({
  params,
}: PageProps<"/paths/kanji/[lessonId]">) {
  const { lessonId } = use(params);
  const lesson = getKanjiLesson(lessonId);
  const { loaded, completeLesson, getLessonProgress, startLesson, addSrsItems } =
    useProgress();
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const lessonIndex = kanjiLessons.findIndex((l) => l.id === lessonId);
  const nextLesson = kanjiLessons[lessonIndex + 1];
  const lp = getLessonProgress("kanji", lessonId);

  useEffect(() => {
    if (!lesson || !loaded) return;
    startLesson("kanji", lessonId);
    addSrsItems(lesson.kanji.flatMap((k) => kanjiSrsCards(k)));
  }, [lesson, lessonId, loaded, startLesson, addSrsItems]);

  if (!lesson) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href="/paths/kanji"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to path
      </Link>

      <header className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-kanji">
          Unit {lesson.unit} · {lesson.unitTitle}
        </span>
        <h1 className="mt-1 text-3xl font-bold">{lesson.title}</h1>
        <p className="mt-1 text-muted">{lesson.subtitle}</p>
        {lp.completed && (
          <span className="mt-2 inline-block text-sm text-success font-medium">
            ✓ Completed
          </span>
        )}
      </header>

      <div className="space-y-10">
        {lesson.radicals.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-4">Radicals</h2>
            <RadicalGrid radicals={lesson.radicals} />
          </section>
        )}

        <section>
          <h2 className="text-lg font-semibold mb-4">Kanji</h2>
          <div className="space-y-4">
            {lesson.kanji.map((k) => (
              <KanjiCard key={k.character} kanji={k} />
            ))}
          </div>
        </section>

        {lesson.storyId && (
          <section className="rounded-xl border border-kanji/30 bg-kanji/5 p-5">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-kanji" />
              <h2 className="font-semibold">Ready to read?</h2>
            </div>
            <p className="text-sm text-muted mb-3">
              This lesson unlocks a real reading passage using the kanji you just learned.
            </p>
            <Link
              href={`/paths/kanji/read/${lesson.storyId}`}
              className="inline-flex items-center gap-2 rounded-lg bg-kanji px-4 py-2 text-sm font-semibold text-white hover:bg-secondary-hover transition-colors"
            >
              Read story →
            </Link>
          </section>
        )}

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Check</h2>
          {lesson.quiz.map((q) => {
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
          {!showResults && (
            <button
              type="button"
              onClick={() => {
                setShowResults(true);
                const finalScore = lesson.quiz.filter(
                  (q) => quizAnswers[q.id] === q.correctIndex,
                ).length;
                const pct = Math.round(
                  (finalScore / lesson.quiz.length) * 100,
                );
                if (pct < 50) {
                  setShowResults(true);
                  return;
                }
                completeLesson("kanji", lessonId, pct, lesson.title);
              }}
              disabled={Object.keys(quizAnswers).length < lesson.quiz.length}
              className="w-full rounded-xl bg-kanji py-3 text-sm font-semibold text-white hover:bg-secondary-hover disabled:opacity-40 transition-colors"
            >
              Check answers (need ≥50% to complete)
            </button>
          )}
          {showResults && (
            <div className="rounded-xl bg-surface p-4 text-center space-y-2">
              <p className="text-2xl font-bold">
                {
                  lesson.quiz.filter(
                    (q) => quizAnswers[q.id] === q.correctIndex,
                  ).length
                }
                /{lesson.quiz.length}
              </p>
              {!lp.completed &&
                Math.round(
                  (lesson.quiz.filter(
                    (q) => quizAnswers[q.id] === q.correctIndex,
                  ).length /
                    lesson.quiz.length) *
                    100,
                ) < 50 && (
                  <p className="text-sm text-muted">
                    Score under 50% — review the kanji and try again to complete.
                  </p>
                )}
            </div>
          )}
        </section>
      </div>

      {lp.completed && (
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/review?kind=kanji"
            className="inline-flex items-center gap-2 rounded-xl border border-kanji/30 bg-kanji/5 px-6 py-3 text-sm font-semibold text-kanji hover:bg-kanji/10 transition-colors"
          >
            Review these kanji
          </Link>
          {nextLesson && (
            <Link
              href={`/paths/kanji/${nextLesson.id}`}
              className="inline-flex items-center gap-2 rounded-xl bg-kanji px-6 py-3 text-sm font-semibold text-white hover:bg-secondary-hover transition-colors"
            >
              Next: {nextLesson.title} →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
