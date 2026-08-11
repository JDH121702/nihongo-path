"use client";

import { getRank } from "@/lib/gamification";
import type { GameStats } from "@/lib/types";

export function DailyGoalRing({
  game,
  size = 56,
}: {
  game: GameStats;
  size?: number;
}) {
  const pct = Math.min(1, game.dailyXp / Math.max(1, game.dailyGoal));
  const stroke = 5;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);
  const done = pct >= 1;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      title={`Daily goal ${game.dailyXp}/${game.dailyGoal} XP`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--surface)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={done ? "var(--success)" : "var(--accent)"}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className="transition-all duration-500"
        />
      </svg>
      <span className="absolute text-[10px] font-bold tabular-nums">
        {done ? "✓" : `${Math.round(pct * 100)}%`}
      </span>
    </div>
  );
}

export function RankChip({ xp }: { xp: number }) {
  const rank = getRank(xp);
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-surface px-2 py-0.5 text-xs font-semibold ${rank.color}`}
    >
      <span className="font-jp">{rank.jp}</span>
      <span className="text-muted font-medium">{rank.name}</span>
    </span>
  );
}
