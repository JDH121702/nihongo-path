"use client";

import Link from "next/link";
import { Check, Lock, Library } from "lucide-react";
import { vocabPacks, vocabStats, getVocabForUnit } from "@/data/vocab";
import { speakingUnits } from "@/data/speaking/units";
import { useProgress } from "@/lib/progress";
import { ProgressBar } from "@/components/ui/ProgressBar";

function isExpansionPack(unit: number) {
  return unit >= 101;
}

export default function VocabIndexPage() {
  const { progress, loaded, getLessonProgress } = useProgress();
  const introduced = new Set(progress.vocabIntroduced);

  const speakingUnitTouched = (unitId: number) => {
    const unit = speakingUnits.find((u) => u.id === unitId);
    if (!unit) return false;
    return unit.lessonIds.some((id) => {
      const lp = getLessonProgress("speaking", id);
      return lp.completed || !!lp.startedAt;
    });
  };

  const speakingUnitDone = (unitId: number) => {
    const unit = speakingUnits.find((u) => u.id === unitId);
    if (!unit) return false;
    return unit.lessonIds.every(
      (id) => getLessonProgress("speaking", id).completed,
    );
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-speaking/10 text-speaking">
            <Library className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Speaking Vocabulary</h1>
            <p className="text-sm text-muted">
              {vocabStats.total.toLocaleString()} frequency words — unit packs
              plus expansion decks. Introduce a pack, then keep them in Review.
            </p>
          </div>
        </div>
        {loaded && (
          <ProgressBar
            value={introduced.size}
            max={vocabStats.total}
            color="speaking"
            label="Words introduced into your SRS"
          />
        )}
        <p className="mt-3 text-xs text-muted">
          Target mass for advanced speaking: ~8,000 entries (~7.5k unique).
          Fluency still needs daily review + real listening — this is the vocab
          spine behind 20 speaking units and the immersion ladder.
        </p>
      </div>

      <div className="space-y-3">
        {vocabPacks.map((pack) => {
          let unlocked = false;

          if (isExpansionPack(pack.unit)) {
            const gateUnit = Math.min(4 + (pack.unit - 101), 16);
            const priorPack = vocabPacks.find((p) => p.unit === pack.unit - 1);
            const priorTouched =
              pack.unit === 101 ||
              (priorPack?.wordIds.some((id) => introduced.has(id)) ?? false);
            unlocked =
              speakingUnitTouched(gateUnit) ||
              speakingUnitDone(gateUnit) ||
              priorTouched ||
              progress.game.xp >= 200 + (pack.unit - 101) * 80;
          } else {
            const unit = speakingUnits.find((u) => u.id === pack.unit);
            const prevUnit = speakingUnits.find((u) => u.id === pack.unit - 1);
            const prevDone =
              pack.unit === 1 ||
              (prevUnit?.lessonIds.every(
                (id) => getLessonProgress("speaking", id).completed,
              ) ??
                false);
            const anyInUnit =
              unit?.lessonIds.some((id) => {
                const lp = getLessonProgress("speaking", id);
                return lp.completed || !!lp.startedAt;
              }) ?? false;
            unlocked = prevDone || anyInUnit;
          }

          const words = getVocabForUnit(pack.unit);
          const packIntroduced = pack.wordIds.filter((id) =>
            introduced.has(id),
          ).length;
          const label = isExpansionPack(pack.unit)
            ? `Pack ${pack.unit}: ${pack.title}`
            : `Unit ${pack.unit}: ${pack.title}`;

          return (
            <Link
              key={pack.unit}
              href={unlocked ? `/vocab/${pack.unit}` : "#"}
              onClick={(e) => !unlocked && e.preventDefault()}
              className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${
                unlocked
                  ? "border-card-border bg-card hover:border-speaking/30 hover:shadow-md card-shadow"
                  : "border-card-border bg-surface/50 opacity-60 cursor-not-allowed"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  packIntroduced === pack.wordIds.length &&
                  pack.wordIds.length > 0
                    ? "bg-success/20 text-success"
                    : unlocked
                      ? "bg-speaking/10 text-speaking"
                      : "bg-surface text-muted"
                }`}
              >
                {packIntroduced === pack.wordIds.length &&
                pack.wordIds.length > 0 ? (
                  <Check className="h-5 w-5" />
                ) : unlocked ? (
                  isExpansionPack(pack.unit) ? (
                    "★"
                  ) : (
                    pack.unit
                  )
                ) : (
                  <Lock className="h-4 w-4" />
                )}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold">{label}</p>
                <p className="text-sm text-muted truncate">
                  {words.length} words · {packIntroduced} in your deck
                  {isExpansionPack(pack.unit) ? " · expansion" : ""}
                </p>
              </div>
              {unlocked && (
                <span className="text-xs font-semibold text-speaking shrink-0">
                  Study →
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
