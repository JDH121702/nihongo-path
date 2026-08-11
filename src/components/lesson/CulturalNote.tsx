import { Globe } from "lucide-react";

interface CulturalNoteProps {
  title: string;
  body: string;
}

export function CulturalNote({ title, body }: CulturalNoteProps) {
  return (
    <section className="rounded-xl border border-accent/30 bg-accent-soft/50 p-5">
      <div className="flex items-center gap-2 mb-2">
        <Globe className="h-5 w-5 text-accent" />
        <h2 className="font-semibold">Cultural Note</h2>
      </div>
      <h3 className="text-sm font-medium text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </section>
  );
}
