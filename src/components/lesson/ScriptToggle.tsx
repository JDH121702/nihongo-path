import type { ScriptMode } from "@/lib/types";

interface ScriptToggleProps {
  mode: ScriptMode;
  onChange: (mode: ScriptMode) => void;
}

const modes: { id: ScriptMode; label: string }[] = [
  { id: "romaji", label: "Romaji" },
  { id: "hiragana", label: "Hiragana" },
  { id: "katakana", label: "Katakana" },
];

export function ScriptToggle({ mode, onChange }: ScriptToggleProps) {
  return (
    <div className="inline-flex rounded-lg border border-card-border bg-surface p-1">
      {modes.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
            mode === id
              ? "bg-card text-foreground shadow-sm"
              : "text-muted hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function getScriptText(
  mode: ScriptMode,
  romaji: string,
  hiragana: string,
): string {
  if (mode === "romaji") return romaji;
  if (mode === "katakana") {
    return hiragana.replace(/[\u3041-\u3096]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) + 0x60),
    );
  }
  return hiragana;
}
