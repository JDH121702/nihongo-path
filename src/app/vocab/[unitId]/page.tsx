"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Volume2, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { getVocabForUnit, getVocabPack } from "@/data/vocab";
import { useProgress } from "@/lib/progress";
import { createSrsItem } from "@/lib/srs";
import { speakJapanese } from "@/lib/speech";
import { ScriptToggle, getScriptText } from "@/components/lesson/ScriptToggle";

const BATCH = 15;

export default function VocabUnitPage({
  params,
}: PageProps<"/vocab/[unitId]">) {
  const { unitId: unitIdRaw } = use(params);
  const unitId = Number(unitIdRaw);
  const pack = getVocabPack(unitId);
  const words = getVocabForUnit(unitId);
  const {
    progress,
    introduceVocab,
    loaded,
    setScriptMode,
  } = useProgress();

  const introduced = useMemo(
    () => new Set(progress.vocabIntroduced),
    [progress.vocabIntroduced],
  );

  const remaining = useMemo(
    () => words.filter((w) => !introduced.has(w.id)),
    [words, introduced],
  );

  const [batchIndex, setBatchIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionAdded, setSessionAdded] = useState(0);

  if (!pack || Number.isNaN(unitId) || words.length === 0) notFound();

  const batch = remaining.slice(0, BATCH);
  const current = batch[batchIndex];
  const doneWithNew = remaining.length === 0;

  const addCurrentToSrs = () => {
    if (!current) return;
    introduceVocab(
      [current.id],
      [
        createSrsItem(
          `srs-vocab-${current.id}`,
          "speaking",
          current.kana,
          `${current.english} · ${current.romaji}`,
          "vocab",
        ),
        createSrsItem(
          `srs-vocab-en-${current.id}`,
          "speaking",
          current.english,
          `${current.kana} (${current.romaji})`,
          "vocab",
        ),
      ],
    );
    setSessionAdded((n) => n + 1);
    setFlipped(false);
    if (batchIndex < batch.length - 1) {
      setBatchIndex((i) => i + 1);
    } else {
      setBatchIndex(0);
    }
  };

  const addWholeBatch = () => {
    if (batch.length === 0) return;
    const ids = batch.map((w) => w.id);
    const items = batch.flatMap((w) => [
      createSrsItem(
        `srs-vocab-${w.id}`,
        "speaking",
        w.kana,
        `${w.english} · ${w.romaji}`,
        "vocab",
      ),
      createSrsItem(
        `srs-vocab-en-${w.id}`,
        "speaking",
        w.english,
        `${w.kana} (${w.romaji})`,
        "vocab",
      ),
    ]);
    introduceVocab(ids, items);
    setSessionAdded((n) => n + batch.length);
    setBatchIndex(0);
    setFlipped(false);
  };

  if (!loaded) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center text-muted">
        Loading vocab…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Link
        href="/vocab"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> All vocab packs
      </Link>

      <header className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-speaking">
          Unit {unitId} vocab pack
        </span>
        <h1 className="mt-1 text-2xl font-bold">{pack.title}</h1>
        <p className="text-sm text-muted mt-1">{pack.description}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
          <span>{words.length} words in pack</span>
          <span>
            {words.filter((w) => introduced.has(w.id)).length} introduced
          </span>
          <span>{remaining.length} left to add</span>
          {sessionAdded > 0 && (
            <span className="text-success font-medium">
              +{sessionAdded} this session
            </span>
          )}
        </div>
        <div className="mt-4">
          <ScriptToggle
            mode={progress.scriptMode}
            onChange={setScriptMode}
          />
        </div>
      </header>

      {doneWithNew ? (
        <div className="rounded-2xl border border-success/30 bg-success/5 p-8 text-center">
          <Check className="mx-auto h-10 w-10 text-success mb-3" />
          <h2 className="text-xl font-bold">Pack introduced</h2>
          <p className="mt-2 text-sm text-muted">
            All {words.length} words are in your SRS. Keep them alive in Review
            daily — that&apos;s how vocab mass turns into fluency.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/review"
              className="rounded-xl bg-speaking px-5 py-2.5 text-sm font-semibold text-white"
            >
              Open Review
            </Link>
            <Link
              href="/vocab"
              className="rounded-xl border border-card-border px-5 py-2.5 text-sm font-semibold"
            >
              Next pack
            </Link>
          </div>
        </div>
      ) : current ? (
        <div className="space-y-4">
          <div className="flex justify-between text-xs text-muted">
            <span>
              New batch {batchIndex + 1}/{batch.length} (up to {BATCH} at a time)
            </span>
            <span className="uppercase tracking-wide">{current.frequency} · {current.pos}</span>
          </div>

          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="w-full rounded-2xl border border-card-border bg-card p-10 card-shadow min-h-[220px] text-center"
          >
            {!flipped ? (
              <>
                <p className="font-jp text-4xl">
                  {getScriptText(
                    progress.scriptMode,
                    current.romaji,
                    current.kana,
                  )}
                </p>
                <p className="mt-4 text-sm text-muted">Tap to reveal meaning</p>
              </>
            ) : (
              <div className="animate-fade-up space-y-3">
                <p className="text-2xl font-semibold">{current.english}</p>
                <p className="font-jp text-lg text-muted">{current.kana}</p>
                <p className="text-sm text-muted">{current.romaji}</p>
                <div className="rounded-lg bg-surface px-4 py-3 text-left text-sm">
                  <p className="font-jp">{current.exampleKana}</p>
                  <p className="text-muted mt-1">{current.exampleEnglish}</p>
                </div>
              </div>
            )}
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => speakJapanese(current.kana)}
              className="flex items-center justify-center gap-2 rounded-xl border border-card-border px-4 py-3 text-sm hover:bg-surface"
            >
              <Volume2 className="h-4 w-4" /> Hear
            </button>
            <button
              type="button"
              onClick={addCurrentToSrs}
              className="flex-1 rounded-xl bg-speaking py-3 text-sm font-semibold text-white hover:bg-primary-hover"
            >
              Got it — add to Review
            </button>
          </div>

          <button
            type="button"
            onClick={addWholeBatch}
            className="w-full text-sm text-muted hover:text-foreground"
          >
            Add all {batch.length} in this batch to Review
          </button>
        </div>
      ) : null}

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
          Pack list
        </h2>
        <div className="max-h-80 overflow-y-auto rounded-xl border border-card-border divide-y divide-card-border">
          {words.map((w) => (
            <div
              key={w.id}
              className="flex items-baseline gap-3 px-4 py-2.5 text-sm"
            >
              <span className="font-jp min-w-[5rem]">{w.kana}</span>
              <span className="text-muted truncate">{w.english}</span>
              {introduced.has(w.id) && (
                <Check className="h-3.5 w-3.5 text-success ml-auto shrink-0" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
