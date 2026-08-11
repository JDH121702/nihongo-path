"use client";

import { useEffect } from "react";
import { Sparkles } from "lucide-react";
import type { Pattern } from "@/lib/types";

interface PatternSectionProps {
  patterns: Pattern[];
  onView?: () => void;
}

export function PatternSection({ patterns, onView }: PatternSectionProps) {
  useEffect(() => {
    onView?.();
  }, [onView]);

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-accent" />
        <h2 className="text-lg font-semibold">Pattern Spotlight</h2>
      </div>
      <p className="text-sm text-muted">
        These are the reusable chunks natives actually use—not isolated grammar rules.
      </p>

      <div className="space-y-4">
        {patterns.map((pattern) => (
          <div
            key={pattern.id}
            className="rounded-xl border border-card-border bg-card p-5 card-shadow"
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-jp text-2xl font-medium text-primary">
                {pattern.hiragana}
              </span>
              <span className="text-sm text-muted">{pattern.romaji}</span>
            </div>
            <p className="mt-2 font-medium">{pattern.meaning}</p>
            <p className="mt-1 text-sm text-muted">{pattern.whenToUse}</p>

            <div className="mt-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Examples
              </p>
              {pattern.examples.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-surface px-3 py-2 text-sm"
                >
                  <span className="font-jp">{ex.text}</span>
                  <span className="mx-2 text-muted">·</span>
                  <span className="text-muted">{ex.english}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
