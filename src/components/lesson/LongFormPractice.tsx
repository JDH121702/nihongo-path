"use client";

import { useEffect, useState } from "react";
import { Mic, Volume2, Timer } from "lucide-react";
import type { LongFormPrompt } from "@/lib/types";
import { speakJapanese } from "@/lib/speech";
import { useProgress } from "@/lib/progress";

export function LongFormPractice({
  prompt,
  onDone,
}: {
  prompt: LongFormPrompt;
  onDone?: () => void;
}) {
  const { completeLongForm, progress } = useProgress();
  const done = progress.game.longFormCompleted.includes(prompt.id);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  return (
    <div className="rounded-2xl border border-card-border bg-card p-5 card-shadow space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-speaking/10 text-speaking">
          <Mic className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-bold">{prompt.title}</h3>
          <p className="text-sm text-muted mt-1">{prompt.promptEnglish}</p>
        </div>
      </div>

      <ul className="text-sm text-muted space-y-1">
        {prompt.tips.map((t) => (
          <li key={t}>· {t}</li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setRunning((r) => !r);
            if (!running) setSeconds(0);
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-speaking px-4 py-2.5 text-sm font-semibold text-white"
        >
          <Timer className="h-4 w-4" />
          {running ? "Pause" : "Start timer"}
        </button>
        <span className="text-sm font-mono tabular-nums">
          {seconds}s / ~{prompt.targetSeconds}s
        </span>
        {done && (
          <span className="text-xs font-semibold text-success">Completed</span>
        )}
      </div>

      <button
        type="button"
        onClick={() => setShowModel((s) => !s)}
        className="text-sm font-medium text-secondary hover:underline"
      >
        {showModel ? "Hide" : "Show"} model answer
      </button>

      {showModel && (
        <div className="rounded-xl bg-surface p-4 space-y-2">
          <p className="font-jp text-lg leading-relaxed">{prompt.modelHiragana}</p>
          <p className="text-sm text-muted">{prompt.modelRomaji}</p>
          <button
            type="button"
            onClick={() => speakJapanese(prompt.modelHiragana, 0.9)}
            className="inline-flex items-center gap-1 text-xs text-speaking"
          >
            <Volume2 className="h-3 w-3" /> Hear model
          </button>
        </div>
      )}

      {!done && (
        <button
          type="button"
          onClick={() => {
            completeLongForm(prompt.id);
            onDone?.();
          }}
          className="w-full rounded-xl border border-speaking/30 py-3 text-sm font-semibold text-speaking hover:bg-speaking/5"
        >
          I spoke it — mark complete (+XP)
        </button>
      )}
    </div>
  );
}
