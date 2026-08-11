"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getStory } from "@/data/kanji/stories";
import { ReadingStoryView } from "@/components/kanji/ReadingStoryView";
import { useProgress } from "@/lib/progress";

export default function ReadStoryPage({
  params,
}: PageProps<"/paths/kanji/read/[storyId]">) {
  const { storyId } = use(params);
  const story = getStory(storyId);
  const { completeLesson } = useProgress();

  if (!story) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href="/paths/kanji"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to kanji path
      </Link>

      <ReadingStoryView
        story={story}
        onComplete={() => {
          completeLesson("kanji", `story-${storyId}`);
        }}
      />
    </div>
  );
}
