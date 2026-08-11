"use client";

import { achievements } from "@/lib/gamification";
import { useProgress } from "@/lib/progress";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AchievementsPage() {
  const { progress, loaded } = useProgress();
  const owned = new Set(progress.game.achievements);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Home
      </Link>
      <h1 className="text-2xl font-bold">Badges</h1>
      <p className="mt-1 text-sm text-muted">
        Small wins that mark real habits — not fluff. Unlock them by learning.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {achievements.map((a) => {
          const unlocked = loaded && owned.has(a.id);
          return (
            <div
              key={a.id}
              className={`rounded-xl border p-4 transition-all ${
                unlocked
                  ? "border-accent/40 bg-accent-soft/40 card-shadow"
                  : "border-card-border bg-surface/40 opacity-70"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`text-2xl ${unlocked ? "" : "grayscale"}`}>
                  {a.icon}
                </span>
                <div>
                  <p className="font-semibold">{a.title}</p>
                  <p className="text-sm text-muted">{a.description}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
                    {unlocked ? "Unlocked" : "Locked"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
