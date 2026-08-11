"use client";

import Link from "next/link";
import { Radio, Check, ExternalLink } from "lucide-react";
import { inputLibrary } from "@/data/input/library";
import {
  unitListenPacks,
  unitListenStats,
} from "@/data/input/unit-listen";
import { fluencyStages, fluencyMethod } from "@/data/fluency";
import { speakingUnits } from "@/data/speaking/units";
import { useProgress } from "@/lib/progress";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { UnitListenBlock } from "@/components/input/UnitListenBlock";
import type { FluencyStageId } from "@/lib/types";

const order: FluencyStageId[] = [
  "foundation",
  "survival",
  "daily",
  "intermediate",
  "advanced",
  "fluent",
];

export default function InputLibraryPage() {
  const { progress, loaded, completeInputSession, getLessonProgress } =
    useProgress();
  const done = new Set(progress.game.inputCompleted);
  const stats = unitListenStats();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Radio className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Input library</h1>
            <p className="text-sm text-muted">
              After each speaking unit: curated videos aimed at ~90%
              comprehension of <em>that</em> media — plus a graded → native
              ladder.
            </p>
          </div>
        </div>
        {loaded && (
          <ProgressBar
            value={Math.round(progress.game.inputMinutes)}
            max={fluencyMethod.inputHoursTarget * 60}
            color="accent"
            label={`${Math.round(progress.game.inputMinutes / 60)}h ${progress.game.inputMinutes % 60}m logged (target ${fluencyMethod.inputHoursTarget.toLocaleString()}+ hours)`}
          />
        )}
        <p className="mt-2 text-xs text-muted">
          {stats.items} unit-tied watch items across {stats.packs} units · not
          the same as understanding random native YouTube at 90%.
        </p>
      </div>

      <section className="mb-14">
        <h2 className="font-bold text-lg mb-1">After each speaking unit</h2>
        <p className="text-sm text-muted mb-5">
          Finish the unit → unlock its listen pack. Do these before racing ahead
          — this is how the ear catches up to the mouth.
        </p>
        <div className="space-y-6">
          {unitListenPacks.map((pack) => {
            const unit = speakingUnits.find((u) => u.id === pack.unit);
            const unitDone =
              unit?.lessonIds.every(
                (id) => getLessonProgress("speaking", id).completed,
              ) ?? false;
            return (
              <div key={pack.unit}>
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    Unit {pack.unit}
                    {unit ? `: ${unit.title}` : ""}
                  </h3>
                  <Link
                    href="/paths/speaking"
                    className="text-xs font-semibold text-speaking hover:underline"
                  >
                    {unitDone ? "Unit complete" : "Go finish unit"} →
                  </Link>
                </div>
                <UnitListenBlock pack={pack} unlocked={unitDone} />
              </div>
            );
          })}
        </div>
      </section>

      <div className="space-y-10">
        <h2 className="font-bold text-lg">Stage immersion ladder</h2>
        {order.map((stageId) => {
          const stage = fluencyStages.find((s) => s.id === stageId)!;
          const items = inputLibrary.filter((i) => i.stage === stageId);
          return (
            <section key={stageId}>
              <h3 className="font-bold">{stage.name}</h3>
              <p className="text-sm text-muted mb-3">{stage.speakingGoal}</p>
              <div className="space-y-3">
                {items.map((item) => {
                  const completed = done.has(item.id);
                  return (
                    <div
                      key={item.id}
                      className={`rounded-xl border p-4 ${
                        completed
                          ? "border-success/30 bg-success/5"
                          : "border-card-border bg-card card-shadow"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                            {item.type} · {item.levelLabel} · {item.minutes} min
                          </p>
                          <h3 className="font-semibold mt-1">{item.title}</h3>
                          <p className="text-sm text-muted mt-1">
                            {item.description}
                          </p>
                          <ul className="mt-2 text-xs text-muted space-y-0.5">
                            {item.tips.map((t) => (
                              <li key={t}>· {t}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col gap-2 shrink-0">
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg border border-card-border px-3 py-2 text-xs font-semibold hover:bg-surface"
                            >
                              Open <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                          {item.relatedUnit && (
                            <Link
                              href="/paths/speaking"
                              className="text-xs font-semibold text-speaking hover:underline"
                            >
                              Related: Unit {item.relatedUnit}
                            </Link>
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              completeInputSession(item.id, item.minutes)
                            }
                            className="rounded-lg bg-accent px-3 py-2 text-xs font-bold text-foreground"
                          >
                            {completed ? (
                              <span className="inline-flex items-center gap-1">
                                <Check className="h-3 w-3" /> Log again
                              </span>
                            ) : (
                              "Log session +XP"
                            )}
                          </button>
                        </div>
                      </div>
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
