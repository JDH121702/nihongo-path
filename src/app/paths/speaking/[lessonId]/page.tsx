"use client";

import { use, useCallback, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Target } from "lucide-react";
import { notFound } from "next/navigation";
import { getSpeakingLesson, speakingLessons } from "@/data/speaking/curriculum";
import { useProgress } from "@/lib/progress";
import { createSrsItem } from "@/lib/srs";
import { DialogueSection } from "@/components/lesson/DialogueSection";
import { PatternSection } from "@/components/lesson/PatternSection";
import { CulturalNote } from "@/components/lesson/CulturalNote";
import { PracticeSection } from "@/components/lesson/PracticeSection";
import { ListeningSection } from "@/components/lesson/ListeningSection";
import { LongFormPractice } from "@/components/lesson/LongFormPractice";

export default function SpeakingLessonPage({
  params,
}: PageProps<"/paths/speaking/[lessonId]">) {
  const { lessonId } = use(params);
  const lesson = getSpeakingLesson(lessonId);
  const {
    progress,
    loaded,
    setScriptMode,
    markSectionViewed,
    startLesson,
    completeLesson,
    getLessonProgress,
    addSrsItems,
  } = useProgress();

  const lessonIndex = speakingLessons.findIndex((l) => l.id === lessonId);
  const nextLesson = speakingLessons[lessonIndex + 1];
  const lp = getLessonProgress("speaking", lessonId);

  useEffect(() => {
    if (!lesson || !loaded) return;
    startLesson("speaking", lessonId);
    addSrsItems(
      lesson.patterns.map((p) =>
        createSrsItem(`srs-${p.id}`, "speaking", p.hiragana, p.meaning, "pattern"),
      ),
    );
  }, [lesson, lessonId, loaded, startLesson, addSrsItems]);

  const handleSection = useCallback(
    (section: string) => markSectionViewed("speaking", lessonId, section),
    [lessonId, markSectionViewed],
  );

  if (!lesson) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href="/paths/speaking"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to path
      </Link>

      <header className="mb-8 animate-fade-up">
        <span className="text-xs font-semibold uppercase tracking-widest text-speaking">
          Unit {lesson.unit} · {lesson.unitTitle}
        </span>
        <h1 className="mt-1 text-3xl font-bold">{lesson.title}</h1>
        <p className="mt-1 text-muted">{lesson.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {lesson.durationMin} min
          </span>
          {lp.completed ? (
            <span className="flex items-center gap-1 text-success font-medium">
              ✓ Completed
            </span>
          ) : lp.startedAt ? (
            <span className="text-speaking font-medium">In progress — saved</span>
          ) : null}
        </div>

        <p className="mt-4 rounded-xl bg-surface p-4 text-sm leading-relaxed">
          {lesson.scenario}
        </p>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase text-muted mb-2 flex items-center gap-1">
            <Target className="h-3 w-3" /> Objectives
          </p>
          <ul className="space-y-1">
            {lesson.objectives.map((obj) => (
              <li key={obj} className="text-sm text-muted flex gap-2">
                <span className="text-speaking">·</span> {obj}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="space-y-10">
        <DialogueSection
          dialogue={lesson.dialogue}
          scriptMode={progress.scriptMode}
          onScriptChange={setScriptMode}
          onView={() => handleSection("dialogue")}
        />

        <PatternSection
          patterns={lesson.patterns}
          onView={() => handleSection("patterns")}
        />

        {lesson.grammarNotes.map((note) => (
          <section
            key={note.title}
            className="rounded-xl border border-card-border bg-card p-5"
          >
            <h2 className="font-semibold mb-1">{note.title}</h2>
            <p className="text-sm text-muted leading-relaxed">{note.body}</p>
          </section>
        ))}

        <CulturalNote
          title={lesson.culturalNote.title}
          body={lesson.culturalNote.body}
        />

        <ListeningSection
          lessonId={lesson.id}
          dialogue={lesson.dialogue}
          drill={lesson.listening}
        />

        <PracticeSection
          shadowingLines={lesson.shadowingLines}
          quiz={lesson.quiz}
          production={lesson.production}
          alreadyComplete={lp.completed}
          onComplete={(score) =>
            completeLesson("speaking", lessonId, score, lesson.title)
          }
          onView={() => handleSection("practice")}
        />

        {lesson.longForm && <LongFormPractice prompt={lesson.longForm} />}
      </div>

      {lp.completed && nextLesson && (
        <div className="mt-10 text-center">
          <Link
            href={`/paths/speaking/${nextLesson.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-speaking px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Next: {nextLesson.title} →
          </Link>
        </div>
      )}
    </div>
  );
}
