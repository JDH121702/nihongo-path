"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@/lib/progress";
import { achievementMeta, getRank } from "@/lib/gamification";
import { X } from "lucide-react";

function Confetti() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  if (reduced) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 8) * 0.05}s`,
            background:
              i % 3 === 0 ? "var(--primary)" : i % 3 === 1 ? "var(--accent)" : "var(--kanji)",
          }}
        />
      ))}
    </div>
  );
}

export function CelebrationHost() {
  const { celebrations, dismissCelebration, progress } = useProgress();
  const top = celebrations[0];
  const rank = getRank(progress.game.xp);

  useEffect(() => {
    if (!top) return;
    if (top.type === "xp") {
      const t = setTimeout(() => dismissCelebration(top.id), 2200);
      return () => clearTimeout(t);
    }
  }, [top, dismissCelebration]);

  if (!top) return null;

  if (top.type === "xp") {
    return (
      <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 animate-pop-in">
        <div className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-lg">
          +{top.amount} XP · {top.label}
        </div>
      </div>
    );
  }

  if (top.type === "daily_goal") {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm">
        <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-card p-6 text-center card-shadow animate-pop-in">
          <Confetti />
          <p className="text-4xl">🎯</p>
          <h2 className="mt-3 text-xl font-bold">Daily goal crushed!</h2>
          <p className="mt-2 text-sm text-muted">
            You hit {progress.game.dailyGoal} XP today. Streak freeze topped up.
          </p>
          <button
            type="button"
            onClick={() => dismissCelebration(top.id)}
            className="mt-5 w-full rounded-xl bg-speaking py-3 text-sm font-semibold text-white"
          >
            Keep going
          </button>
        </div>
      </div>
    );
  }

  if (top.type === "achievement") {
    const meta = achievementMeta(top.achievementId);
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm">
        <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-card p-6 text-center card-shadow animate-pop-in">
          <Confetti />
          <p className="text-4xl">{meta?.icon ?? "🏅"}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Achievement unlocked
          </p>
          <h2 className="mt-1 text-xl font-bold">{meta?.title}</h2>
          <p className="mt-2 text-sm text-muted">{meta?.description}</p>
          <button
            type="button"
            onClick={() => dismissCelebration(top.id)}
            className="mt-5 w-full rounded-xl bg-secondary py-3 text-sm font-semibold text-white"
          >
            Nice
          </button>
        </div>
      </div>
    );
  }

  // lesson
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-card p-6 text-center card-shadow animate-pop-in">
        <Confetti />
        <button
          type="button"
          onClick={() => dismissCelebration(top.id)}
          className="absolute right-3 top-3 rounded-lg p-1 text-muted hover:bg-surface"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-4xl">{top.perfect ? "💯" : "🎉"}</p>
        <h2 className="mt-3 text-xl font-bold">
          {top.perfect ? "Perfect lesson!" : "Lesson complete!"}
        </h2>
        <p className="mt-1 text-sm text-muted">{top.title}</p>
        <p className="mt-4 text-2xl font-bold text-speaking">+{top.xp} XP</p>
        <p className="mt-1 text-xs text-muted">
          {rank.jp} {rank.name} · {progress.game.xp} XP total
        </p>
        <button
          type="button"
          onClick={() => dismissCelebration(top.id)}
          className="mt-5 w-full rounded-xl bg-speaking py-3 text-sm font-semibold text-white"
        >
          Onward →
        </button>
      </div>
    </div>
  );
}
