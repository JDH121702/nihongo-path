"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Headphones,
  Library,
  Menu,
  Mic,
  Radio,
  RotateCcw,
  Trophy,
  X,
} from "lucide-react";
import { useProgress } from "@/lib/progress";
import { getDueItems } from "@/lib/srs";
import { DailyGoalRing } from "@/components/game/DailyGoalRing";
import { AuthButton } from "@/components/auth/AuthButton";

export function Header() {
  const pathname = usePathname();
  const { progress, loaded } = useProgress();
  const dueCount = loaded ? getDueItems(progress).length : 0;
  const streak = Math.max(progress.speaking.streak, progress.kanji.streak);
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/paths/speaking", label: "Speaking", icon: Headphones },
    { href: "/vocab", label: "Vocab", icon: Library },
    { href: "/paths/kanji", label: "Kanji", icon: BookOpen },
    { href: "/input", label: "Input", icon: Radio },
    { href: "/speak", label: "Speak", icon: Mic },
    { href: "/review", label: "Review", icon: RotateCcw, badge: dueCount },
    { href: "/achievements", label: "Badges", icon: Trophy },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
            道
          </span>
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors hidden sm:inline">
            Nihongo Path
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map(({ href, label, icon: Icon, badge }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`relative flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-surface text-foreground"
                    : "text-muted hover:text-foreground hover:bg-surface/60"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
                {badge !== undefined && badge > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                    {badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          {loaded && (
            <>
              <DailyGoalRing game={progress.game} size={36} />
              <div className="hidden sm:flex flex-col items-end leading-tight">
                <span className="text-xs font-bold tabular-nums">
                  {progress.game.xp} XP
                </span>
                <span className="text-[10px] text-muted">
                  {streak > 0 ? `${streak} day streak` : "Start a streak"}
                  {progress.game.streakFreezes > 0
                    ? ` · ${progress.game.streakFreezes} freeze${progress.game.streakFreezes === 1 ? "" : "s"}`
                    : ""}
                </span>
              </div>
            </>
          )}
          <AuthButton />
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-muted hover:bg-surface hover:text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-card-border bg-card px-4 py-3 space-y-1">
          {nav.map(({ href, label, icon: Icon, badge }) => {
            const active =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                  active
                    ? "bg-surface text-foreground"
                    : "text-muted hover:bg-surface/60 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1">{label}</span>
                {badge !== undefined && badge > 0 && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">
                    {badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
