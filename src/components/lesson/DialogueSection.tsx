"use client";

import { useEffect, useState } from "react";
import { Volume2, ChevronDown, ChevronUp } from "lucide-react";
import type { DialogueLine, ScriptMode } from "@/lib/types";
import { speakJapanese } from "@/lib/speech";
import { getScriptText, ScriptToggle } from "./ScriptToggle";

interface DialogueSectionProps {
  dialogue: DialogueLine[];
  scriptMode: ScriptMode;
  onScriptChange: (mode: ScriptMode) => void;
  onView?: () => void;
}

export function DialogueSection({
  dialogue,
  scriptMode,
  onScriptChange,
  onView,
}: DialogueSectionProps) {
  const [expandedLine, setExpandedLine] = useState<number | null>(0);
  const [showBreakdown, setShowBreakdown] = useState(true);

  useEffect(() => {
    onView?.();
  }, [onView]);

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Real Dialogue</h2>
        <ScriptToggle mode={scriptMode} onChange={onScriptChange} />
      </div>

      <p className="text-sm text-muted">
        Listen first, then read. Tap a line to expand the breakdown.
      </p>

      <div className="space-y-2">
        {dialogue.map((line, i) => {
          const isOpen = expandedLine === i;
          const displayText = getScriptText(
            scriptMode,
            line.romaji,
            line.hiragana,
          );

          return (
            <div
              key={i}
              className={`rounded-xl border transition-all ${
                isOpen
                  ? "border-primary/30 bg-accent-soft/30 card-shadow"
                  : "border-card-border bg-card hover:border-primary/20"
              }`}
            >
              <div className="flex w-full items-start gap-1 p-4">
                <button
                  type="button"
                  onClick={() => setExpandedLine(isOpen ? null : i)}
                  className="flex min-w-0 flex-1 items-start gap-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-semibold text-muted">
                    {line.speaker[0]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted">
                      {line.speaker}
                    </span>
                    <p className="font-jp mt-1 text-lg leading-relaxed">
                      {displayText}
                    </p>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="mt-1 h-4 w-4 shrink-0 text-muted" />
                  ) : (
                    <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-muted" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => speakJapanese(line.hiragana)}
                  className="shrink-0 rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-primary"
                  aria-label="Play audio"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>

              {isOpen && (
                <div className="border-t border-card-border px-4 pb-4 pt-3 ml-10 space-y-2 animate-fade-up">
                  <p className="text-sm text-foreground">{line.english}</p>
                  {showBreakdown && (
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="rounded-md bg-surface px-2 py-1 text-muted">
                        Romaji: {line.romaji}
                      </span>
                      <span className="rounded-md bg-surface px-2 py-1 font-jp">
                        {line.hiragana}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setShowBreakdown(!showBreakdown)}
        className="text-xs text-muted hover:text-foreground"
      >
        {showBreakdown ? "Hide" : "Show"} romaji hints
      </button>
    </section>
  );
}
