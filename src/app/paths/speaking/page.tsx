"use client";

import Link from "next/link";
import { Check, Lock, Headphones, Library } from "lucide-react";
import { speakingUnits } from "@/data/speaking/units";
import { speakingLessons } from "@/data/speaking/curriculum";
import { getVocabCountForUnit } from "@/data/vocab/manifest";
import { getUnitListenPack } from "@/data/input/unit-listen";
import { fluencyStages } from "@/data/fluency";
import { useProgress } from "@/lib/progress";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StageRail } from "@/components/fluency/StageRail";
import { UnitListenBlock } from "@/components/input/UnitListenBlock";
import type { FluencyStageId } from "@/lib/types";

const stageOrder: FluencyStageId[] = [
  "foundation",
  "survival",
  "daily",
  "intermediate",
  "advanced",
  "fluent",
];

export default function SpeakingPathPage() {
  const { loaded, getLessonProgress, getPathCompletion } = useProgress();
  const allIds = speakingLessons.map((l) => l.id);
  const { completed, total } = getPathCompletion("speaking", allIds);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-speaking/10 text-speaking">
            <Headphones className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Speaking & Listening</h1>
            <p className="text-sm text-muted">
              Zero → speaking fluency. Full lessons + unit vocab + after-unit
              listen packs (~90% target media) + Review. Romaji, hiragana,
              katakana only.
            </p>
          </div>
        </div>
        <StageRail color="speaking" />
        {loaded && (
          <div className="mt-4">
            <ProgressBar
              value={completed}
              max={total}
              color="speaking"
              label={`${total} lessons across the speaking spine`}
            />
          </div>
        )}
      </div>

      <div className="space-y-12">
        {stageOrder.map((stageId) => {
          const stage = fluencyStages.find((s) => s.id === stageId)!;
          const units = speakingUnits.filter((u) => u.stage === stageId);
          if (units.length === 0) return null;

          return (
            <section key={stageId}>
              <div className="mb-5 rounded-xl border border-speaking/15 bg-speaking/5 px-4 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-bold">{stage.name}</h2>
                  <span className="text-xs text-muted">
                    {stage.level}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{stage.speakingGoal}</p>
                <p className="mt-2 text-xs text-muted">
                  Designed study band for this stage: {stage.hours} hours
                  (lessons + review + shadowing — not one sitting).
                </p>
              </div>

              <div className="space-y-8">
                {units.map((unit) => {
                  const lessons = unit.lessonIds
                    .map((id) => speakingLessons.find((l) => l.id === id))
                    .filter(Boolean);

                  return (
                    <div key={unit.id}>
                      <div className="mb-3">
                        <span className="text-xs font-semibold uppercase tracking-widest text-speaking">
                          Unit {unit.id} · {lessons.length} lessons · ~
                          {lessons.reduce(
                            (n, l) => n + (l?.durationMin ?? 0),
                            0,
                          )}{" "}
                          min
                        </span>
                        <h3 className="text-lg font-bold">{unit.title}</h3>
                        <p className="text-sm text-muted">{unit.description}</p>
                      </div>

                      <div className="space-y-2">
                        {lessons.map((lesson) => {
                          if (!lesson) return null;
                          const lp = getLessonProgress("speaking", lesson.id);
                          const globalIdx = speakingLessons.findIndex(
                            (l) => l.id === lesson.id,
                          );
                          const prevLesson = speakingLessons[globalIdx - 1];
                          const prevDone =
                            globalIdx === 0 ||
                            !prevLesson ||
                            getLessonProgress("speaking", prevLesson.id)
                              .completed;
                          const locked = !prevDone;

                          return (
                            <Link
                              key={lesson.id}
                              href={
                                locked ? "#" : `/paths/speaking/${lesson.id}`
                              }
                              className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${
                                locked
                                  ? "border-card-border bg-surface/50 opacity-60 cursor-not-allowed"
                                  : lp.completed
                                    ? "border-success/30 bg-success/5 hover:shadow-md"
                                    : "border-card-border bg-card hover:border-speaking/30 hover:shadow-md card-shadow"
                              }`}
                              onClick={(e) => locked && e.preventDefault()}
                            >
                              <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                                  lp.completed
                                    ? "bg-success/20 text-success"
                                    : locked
                                      ? "bg-surface text-muted"
                                      : lp.startedAt
                                        ? "bg-accent/20 text-accent"
                                        : "bg-speaking/10 text-speaking"
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
                                  {lesson.subtitle}
                                  {!lp.completed && lp.startedAt
                                    ? " · In progress"
                                    : ""}
                                </p>
                              </div>
                              <span className="text-xs text-muted shrink-0">
                                {lesson.durationMin} min
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      {(() => {
                        const vocabCount = getVocabCountForUnit(unit.id);
                        if (vocabCount === 0) return null;
                        const firstUnlocked = lessons.some((lesson) => {
                          if (!lesson) return false;
                          const globalIdx = speakingLessons.findIndex(
                            (l) => l.id === lesson.id,
                          );
                          const prevLesson = speakingLessons[globalIdx - 1];
                          return (
                            globalIdx === 0 ||
                            !prevLesson ||
                            getLessonProgress("speaking", prevLesson.id)
                              .completed
                          );
                        });
                        return (
                          <Link
                            href={firstUnlocked ? `/vocab/${unit.id}` : "#"}
                            onClick={(e) => !firstUnlocked && e.preventDefault()}
                            className={`mt-3 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${
                              firstUnlocked
                                ? "border-speaking/25 bg-speaking/5 hover:shadow-md"
                                : "border-card-border opacity-50 cursor-not-allowed"
                            }`}
                          >
                            <Library className="h-4 w-4 text-speaking" />
                            <span className="font-medium">
                              Unit {unit.id} vocab pack
                            </span>
                            <span className="text-muted">
                              · {vocabCount} words → SRS
                            </span>
                            {firstUnlocked ? (
                              <span className="ml-auto text-speaking font-semibold">
                                Study
                              </span>
                            ) : (
                              <Lock className="h-3 w-3 text-muted ml-auto" />
                            )}
                          </Link>
                        );
                      })()}

                      {(() => {
                        const pack = getUnitListenPack(unit.id);
                        if (!pack) return null;
                        const unitDone = unit.lessonIds.every(
                          (id) =>
                            getLessonProgress("speaking", id).completed,
                        );
                        return (
                          <UnitListenBlock pack={pack} unlocked={unitDone} />
                        );
                      })()}
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
