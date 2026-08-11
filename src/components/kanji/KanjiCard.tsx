"use client";

import type { KanjiEntry, Radical } from "@/lib/types";
import { Volume2 } from "lucide-react";
import { speakJapanese } from "@/lib/speech";
import { readingsWithRomaji } from "@/lib/kana";

function ReadingColumn({
  label,
  readings,
}: {
  label: string;
  readings: string[];
}) {
  const items = readingsWithRomaji(readings);
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-muted mb-1">{label}</p>
      {items.length === 0 ? (
        <p className="text-muted">—</p>
      ) : (
        <div className="space-y-2">
          {items.map(({ kana, romaji }) => (
            <div key={kana}>
              <p className="font-jp">{kana}</p>
              <p className="text-xs text-muted">{romaji}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function KanjiReadings({ kanji }: { kanji: KanjiEntry }) {
  return (
    <div className="grid grid-cols-2 gap-3 text-sm">
      <ReadingColumn label="On'yomi" readings={kanji.onyomi} />
      <ReadingColumn label="Kun'yomi" readings={kanji.kunyomi} />
    </div>
  );
}

interface KanjiCardProps {
  kanji: KanjiEntry;
  /** Hide meaning/readings/vocab until revealed (review mode). */
  revealed?: boolean;
  showMnemonic?: boolean;
  showRadicals?: boolean;
  showVocab?: boolean;
}

export function KanjiCard({
  kanji,
  revealed = true,
  showMnemonic = true,
  showRadicals = true,
  showVocab = true,
}: KanjiCardProps) {
  return (
    <div className="rounded-xl border border-card-border bg-card p-5 card-shadow text-left">
      <div className="flex items-start justify-between">
        <span className="font-jp text-5xl font-medium text-kanji">
          {kanji.character}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            speakJapanese(kanji.vocabulary[0]?.word ?? kanji.character);
          }}
          className="rounded-lg p-2 text-muted hover:bg-surface hover:text-kanji transition-colors"
          aria-label="Play reading"
        >
          <Volume2 className="h-4 w-4" />
        </button>
      </div>

      {revealed ? (
        <>
          <p className="mt-3 text-lg font-semibold">{kanji.meaning}</p>
          {showMnemonic && (
            <p className="mt-1 text-sm text-muted italic">{kanji.mnemonic}</p>
          )}

          {showRadicals && kanji.radicals.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {kanji.radicals.map((r) => (
                <span
                  key={r}
                  className="rounded-md bg-surface px-2 py-1 text-xs font-jp"
                >
                  {r}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4">
            <KanjiReadings kanji={kanji} />
          </div>

          {showVocab && kanji.vocabulary.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-xs font-semibold uppercase text-muted">
                Vocabulary
              </p>
              {kanji.vocabulary.map((v) => (
                <div
                  key={v.word}
                  className="flex flex-wrap items-baseline gap-2 rounded-lg bg-surface px-3 py-2 text-sm"
                >
                  <span className="font-jp font-medium">{v.word}</span>
                  <span className="font-jp text-muted">{v.reading}</span>
                  <span className="text-xs text-muted">{toRomajiSafe(v.reading)}</span>
                  <span className="text-muted">— {v.meaning}</span>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="mt-6 text-sm text-muted">Tap to reveal</p>
      )}
    </div>
  );
}

function toRomajiSafe(reading: string) {
  return readingsWithRomaji([reading])[0]?.romaji ?? "";
}

interface RadicalGridProps {
  radicals: Radical[];
}

export function RadicalGrid({ radicals }: RadicalGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {radicals.map((r) => (
        <div
          key={r.character}
          className="flex gap-4 rounded-xl border border-card-border bg-card p-4"
        >
          <span className="font-jp text-3xl text-kanji">{r.character}</span>
          <div>
            <p className="font-medium">{r.meaning}</p>
            <p className="text-xs text-muted">{r.name}</p>
            <p className="text-sm text-muted mt-1">{r.mnemonic}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
