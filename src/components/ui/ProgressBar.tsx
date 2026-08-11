interface ProgressBarProps {
  value: number;
  max: number;
  color?: "speaking" | "kanji" | "accent";
  label?: string;
}

const colors = {
  speaking: "bg-speaking",
  kanji: "bg-kanji",
  accent: "bg-accent",
};

export function ProgressBar({
  value,
  max,
  color = "speaking",
  label,
}: ProgressBarProps) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1.5 flex justify-between text-xs text-muted">
          <span>{label}</span>
          <span>
            {value}/{max} ({pct}%)
          </span>
        </div>
      )}
      <div className="h-2 overflow-hidden rounded-full bg-surface">
        <div
          className={`h-full rounded-full transition-all duration-500 ${colors[color]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
