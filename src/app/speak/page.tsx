"use client";

import { longFormBank } from "@/data/speaking/longform";
import { LongFormPractice } from "@/components/lesson/LongFormPractice";
import { useProgress } from "@/lib/progress";
import { Mic } from "lucide-react";

export default function SpeakLabPage() {
  const { progress } = useProgress();
  const done = progress.game.longFormCompleted.length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-speaking/10 text-speaking">
            <Mic className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Speak lab</h1>
            <p className="text-sm text-muted">
              Long-form production — the missing half of fluency. Timer on, mouth
              open, then compare to the model.
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">
          {done}/{longFormBank.length} prompts completed
        </p>
      </div>

      <div className="space-y-5">
        {longFormBank.map((p) => (
          <LongFormPractice key={p.id} prompt={p} />
        ))}
      </div>
    </div>
  );
}
