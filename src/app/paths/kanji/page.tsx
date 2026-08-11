"use client";

import Link from "next/link";
import { Check, Lock, BookOpen, FileText, RotateCcw } from "lucide-react";
import { kanjiUnits, kanjiLessons } from "@/data/kanji/curriculum";
import { readingStories } from "@/data/kanji/stories";
import { fluencyStages } from "@/data/fluency";
import { useProgress } from "@/lib/progress";
import { getDueItems } from "@/lib/srs";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StageRail } from "@/components/fluency/StageRail";
import type { FluencyStageId } from "@/lib/types";

const stageOrder: FluencyStageId[] = [
  "foundation",
  "survival",
  "daily",
  "intermediate",
  "advanced",
  "fluent",
];

export default function KanjiPathPage() {
  const { loaded, progress, getLessonProgress, getPathCompletion } =
    useProgress();
  const allIds = kanjiLessons.map((l) => l.id);
  const { completed, total } = getPathCompletion("kanji", allIds);
  const kanjiCount = kanjiLessons.reduce((n, l) => n + l.kanji.length, 0);
  const kanjiDue = loaded ? getDueItems(progress, { kind: "kanji" }).length : 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-kanji/10 text-kanji">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Reading Kanji</h1>
            <p className="text-sm text-muted">
              Recognition + reading recall through the full Jōyō set (~2,136).{" "}
              {kanjiCount} characters · {readingStories.length} stories. Spaced
              review after each lesson — no writing drills.
            </p>
          </div>
        </div>
        <StageRail color="kanji" />
        {loaded && (
          <div className="mt-4 space-y-3">
            <ProgressBar
              value={completed}
              max={total}
              color="kanji"
              label={`${total} lessons · ${readingStories.length} readings · full Jōyō path (~${kanjiCount} chars)`}
            />
            <Link
              href="/review?kind=kanji"
              className="flex items-center justify-between gap-3 rounded-xl border border-kanji/25 bg-kanji/5 px-4 py-3 text-sm transition-colors hover:border-kanji/40 hover:bg-kanji/10"
            >
              <span className="inline-flex items-center gap-2 font-semibold text-kanji">
                <RotateCcw className="h-4 w-4" />
                Kanji review
              </span>
              <span className="text-muted">
                {kanjiDue > 0
                  ? `${kanjiDue} due — same layout as lessons`
                  : "Spaced cards unlock as you open lessons"}
              </span>
            </Link>
          </div>
        )}
      </div>

      <div className="space-y-12">
        {stageOrder.map((stageId) => {
          const stage = fluencyStages.find((s) => s.id === stageId)!;
          const units = kanjiUnits.filter((u) => u.stage === stageId);
          if (units.length === 0) return null;

          return (
            <section key={stageId}>
              <div className="mb-5 rounded-xl border border-kanji/15 bg-kanji/5 px-4 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-bold">{stage.name}</h2>
                  <span className="text-xs text-muted">{stage.level}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{stage.kanjiGoal}</p>
                <p className="mt-2 text-xs text-muted">
                  Designed study band for this stage: {stage.hours} hours
                  (lessons + SRS + reading — not one sitting).
                </p>
              </div>

              <div className="space-y-8">
                {units.map((unit) => {
                  const lessons = unit.lessonIds
                    .map((id) => kanjiLessons.find((l) => l.id === id))
                    .filter(Boolean);
                  const stories = unit.storyIds
                    .map((id) => readingStories.find((s) => s.id === id))
                    .filter(Boolean);

                  return (
                    <div key={unit.id}>
                      <div className="mb-3">
                        <span className="text-xs font-semibold uppercase tracking-widest text-kanji">
                          Unit {unit.id} · {lessons.length} lessons ·{" "}
                          {lessons.reduce(
                            (n, l) => n + (l?.kanji.length ?? 0),
                            0,
                          )}{" "}
                          kanji
                        </span>
                        <h3 className="text-lg font-bold">{unit.title}</h3>
                        <p className="text-sm text-muted">{unit.description}</p>
                      </div>

                      <div className="space-y-2 mb-3">
                        {lessons.map((lesson) => {
                          if (!lesson) return null;
                          const lp = getLessonProgress("kanji", lesson.id);
                          const globalIdx = kanjiLessons.findIndex(
                            (l) => l.id === lesson.id,
                          );
                          const prevLesson = kanjiLessons[globalIdx - 1];
                          const prevDone =
                            globalIdx === 0 ||
                            !prevLesson ||
                            getLessonProgress("kanji", prevLesson.id)
                              .completed;
                          const locked = !prevDone;

                          return (
                            <Link
                              key={lesson.id}
                              href={locked ? "#" : `/paths/kanji/${lesson.id}`}
                              className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${
                                locked
                                  ? "border-card-border bg-surface/50 opacity-60 cursor-not-allowed"
                                  : lp.completed
                                    ? "border-success/30 bg-success/5 hover:shadow-md"
                                    : "border-card-border bg-card hover:border-kanji/30 hover:shadow-md card-shadow"
                              }`}
                              onClick={(e) => locked && e.preventDefault()}
                            >
                              <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                                  lp.completed
                                    ? "bg-success/20 text-success"
                                    : locked
                                      ? "bg-surface text-muted"
                                      : "bg-kanji/10 text-kanji"
                                }`}
                              >
                                {lp.completed ? (
                                  <Check className="h-5 w-5" />
                                ) : locked ? (
                                  <Lock className="h-4 w-4" />
                                ) : (
                                  lesson.order
                                )}
                              </span>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold truncate">
                                  {lesson.title}
                                </p>
                                <p className="text-sm text-muted truncate">
                                  {lesson.subtitle} · {lesson.kanji.length} kanji
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {stories.length > 0 && (
                        <div className="rounded-xl border border-kanji/20 bg-kanji/5 p-4">
                          <p className="text-xs font-semibold uppercase tracking-widest text-kanji mb-3 flex items-center gap-1">
                            <FileText className="h-3 w-3" /> Reading unlock
                          </p>
                          <div className="space-y-2">
                            {stories.map((story) => {
                              if (!story) return null;
                              const unitLessonsDone = unit.lessonIds.every(
                                (id) =>
                                  getLessonProgress("kanji", id).completed,
                              );
                              return (
                                <Link
                                  key={story.id}
                                  href={
                                    unitLessonsDone
                                      ? `/paths/kanji/read/${story.id}`
                                      : "#"
                                  }
                                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-all ${
                                    unitLessonsDone
                                      ? "border-kanji/30 bg-card hover:shadow-md"
                                      : "border-card-border opacity-50 cursor-not-allowed"
                                  }`}
                                  onClick={(e) =>
                                    !unitLessonsDone && e.preventDefault()
                                  }
                                >
                                  <span className="font-jp font-medium">
                                    {story.title}
                                  </span>
                                  <span className="text-muted">
                                    — {story.subtitle}
                                  </span>
                                  {!unitLessonsDone && (
                                    <Lock className="h-3 w-3 text-muted ml-auto" />
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
