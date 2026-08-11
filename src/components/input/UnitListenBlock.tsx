"use client";

import Link from "next/link";
import { Check, ExternalLink, Radio } from "lucide-react";
import type { UnitListenPack } from "@/lib/types";
import { useProgress } from "@/lib/progress";

function isInternal(url: string) {
  return url.startsWith("/");
}

export function UnitListenBlock({
  pack,
  unlocked,
}: {
  pack: UnitListenPack;
  unlocked: boolean;
}) {
  const { progress, completeInputSession } = useProgress();
  const done = new Set(progress.game.inputCompleted);
  const completedCount = pack.items.filter((i) => done.has(i.id)).length;

  return (
    <div
      className={`mt-3 rounded-xl border px-4 py-3 ${
        unlocked
          ? "border-accent/30 bg-accent-soft/40"
          : "border-card-border bg-surface/50 opacity-70"
      }`}
    >
      <div className="flex items-start gap-2 mb-2">
        <Radio className="h-4 w-4 text-accent shrink-0 mt-0.5" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">
            After Unit {pack.unit}: listen pack
            {unlocked ? (
              <span className="text-muted font-normal">
                {" "}
                · {completedCount}/{pack.items.length} logged
              </span>
            ) : (
              <span className="text-muted font-normal"> · unlocks when unit complete</span>
            )}
          </p>
          <p className="text-xs text-muted mt-0.5 leading-relaxed">
            {pack.afterUnitGoal}
          </p>
        </div>
      </div>

      {unlocked && (
        <div className="space-y-2 mt-2">
          {pack.items.map((item) => {
            const completed = done.has(item.id);
            const internal = isInternal(item.url);
            return (
              <div
                key={item.id}
                className={`rounded-lg border p-3 ${
                  completed
                    ? "border-success/30 bg-success/5"
                    : "border-card-border bg-card"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                      ~{item.targetComprehension}% target · {item.minutes} min ·{" "}
                      {item.source}
                    </p>
                    <p className="font-medium text-sm mt-0.5">{item.title}</p>
                    <p className="text-xs text-muted mt-1">{item.why}</p>
                    <ul className="mt-1.5 text-[11px] text-muted space-y-0.5">
                      {item.howToWatch.map((t) => (
                        <li key={t}>· {t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-1.5 shrink-0">
                    {internal ? (
                      <Link
                        href={item.url}
                        className="inline-flex items-center justify-center gap-1 rounded-lg border border-card-border px-2.5 py-1.5 text-[11px] font-semibold hover:bg-surface"
                      >
                        Open
                      </Link>
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1 rounded-lg border border-card-border px-2.5 py-1.5 text-[11px] font-semibold hover:bg-surface"
                      >
                        Watch <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        completeInputSession(item.id, item.minutes)
                      }
                      className="rounded-lg bg-accent px-2.5 py-1.5 text-[11px] font-bold text-foreground"
                    >
                      {completed ? (
                        <span className="inline-flex items-center gap-1">
                          <Check className="h-3 w-3" /> Again
                        </span>
                      ) : (
                        "Log +XP"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
