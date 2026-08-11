import type { FluencyStageId } from "@/lib/types";
import { fluencyStages } from "@/data/fluency";

const order: FluencyStageId[] = [
  "foundation",
  "survival",
  "daily",
  "intermediate",
  "advanced",
  "fluent",
];

export function StageRail({
  active,
  color = "speaking",
}: {
  active?: FluencyStageId;
  color?: "speaking" | "kanji";
}) {
  const accent = color === "speaking" ? "bg-speaking" : "bg-kanji";
  const soft = color === "speaking" ? "bg-speaking/15" : "bg-kanji/15";

  return (
    <div className="flex flex-wrap gap-2">
      {order.map((id) => {
        const stage = fluencyStages.find((s) => s.id === id)!;
        const isActive = active === id;
        return (
          <span
            key={id}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
              isActive ? `${accent} text-white` : `${soft} text-muted`
            }`}
          >
            {stage.name}
          </span>
        );
      })}
    </div>
  );
}
