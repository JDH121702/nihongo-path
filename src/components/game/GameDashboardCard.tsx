"use client";

import Link from "next/link";
import { achievements, getRank } from "@/lib/gamification";
import { useProgress } from "@/lib/progress";
import { DailyGoalRing, RankChip } from "./DailyGoalRing";

export function GameDashboardCard() {
  const { progress, loaded, setDailyGoal } = useProgress();
  if (!loaded) return null;

  const { game } = progress;
  const rank = getRank(game.xp);
  const streak = Math.max(progress.speaking.streak, progress.kanji.streak);
  const owned = new Set(game.achievements);

  return (
    <section className="rounded-2xl border border-card-border bg-card p-5 card-shadow animate-fade-up">
      <div className="flex flex-wrap items-center gap-4">
        <DailyGoalRing game={game} size={72} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <RankChip xp={game.xp} />
            <span className="text-xs text-muted">{game.xp} XP</span>
          </div>
          <p className="mt-1 text-sm font-semibold">
            {game.dailyXp >= game.dailyGoal
              ? "Daily goal done — nice work"
              : `${game.dailyGoal - game.dailyXp} XP to today's goal`}
          </p>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted">
            <span>🔥 {streak} day streak</span>
            <span>❄️ {game.streakFreezes} freeze{game.streakFreezes === 1 ? "" : "s"}</span>
            <span>📚 {progress.vocabIntroduced.length} words</span>
            <span>🎧 {Math.round(game.inputMinutes)}m input</span>
            <span>🎙 {game.longFormCompleted.length} speak labs</span>
          </div>
          {rank.next && (
            <div className="mt-3">
              <div className="mb-1 flex justify-between text-[10px] text-muted">
                <span>Next: {rank.next.name}</span>
                <span>{rank.xpToNext} XP</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-500"
                  style={{ width: `${rank.progress * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted">Daily goal:</span>
        {[30, 50, 80].map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setDailyGoal(g)}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              game.dailyGoal === g
                ? "bg-speaking text-white"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {g} XP
          </button>
        ))}
        <Link
          href="/achievements"
          className="ml-auto text-xs font-semibold text-speaking hover:underline"
        >
          Badges {owned.size}/{achievements.length} →
        </Link>
      </div>
    </section>
  );
}
