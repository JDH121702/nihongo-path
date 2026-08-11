"use client";

import Link from "next/link";
import {
  Headphones,
  BookOpen,
  ArrowRight,
  Sparkles,
  Brain,
  MessageCircle,
  Route,
  Library,
  Mic,
  Radio,
} from "lucide-react";
import { fluencyStages, fluencyMethod } from "@/data/fluency";
import { speakingLessonOrder } from "@/data/speaking/units";
import { siteStats } from "@/data/site-stats";
import { GameDashboardCard } from "@/components/game/GameDashboardCard";
import { useProgress } from "@/lib/progress";
import { getDueItems } from "@/lib/srs";

const methods = [
  {
    icon: MessageCircle,
    title: "Pattern-first chunks",
    body: "Natives speak in constructions. You learn 〜てもらえませんか as a unit, then swap the verb.",
  },
  {
    icon: Brain,
    title: "Input, then retrieve",
    body: "Dialogue, immersion ladder, and stories at i+1. Shadow. Then produce long-form. SRS catches what you're about to forget.",
  },
  {
    icon: Sparkles,
    title: "Useful on day one",
    body: "Izakaya, trains, work, keigo, complaints—nothing you'll never say. Reading starts at unit 1.",
  },
];

export default function HomePage() {
  const { progress, loaded } = useProgress();
  const due = loaded ? getDueItems(progress).length : 0;
  const continueId =
    progress.speaking.currentLessonId ??
    speakingLessonOrder.find(
      (id) => !progress.speaking.lessons[id]?.completed,
    ) ??
    speakingLessonOrder[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="text-center animate-fade-up">
        <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
          Zero → fluency spine · playful habits
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
          Learn Japanese that{" "}
          <span className="text-primary">people actually speak</span>
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          {siteStats.speakingUnits} speaking units,{" "}
          {siteStats.vocabTotal.toLocaleString()} vocab entries, full Jōyō kanji
          path, immersion input, and speak lab — with streaks and XP so showing
          up feels good.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href={
              continueId ? `/paths/speaking/${continueId}` : "/paths/speaking"
            }
            className="inline-flex items-center gap-2 rounded-xl bg-speaking px-5 py-3 text-sm font-semibold text-white hover:bg-primary-hover transition-colors shadow-sm"
          >
            {loaded && progress.speaking.lessons[continueId ?? ""]?.startedAt
              ? "Continue learning"
              : "Start speaking"}{" "}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {due > 0 && (
            <Link
              href="/review"
              className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card px-5 py-3 text-sm font-semibold hover:border-accent/40 transition-colors"
            >
              Clear {due} reviews
            </Link>
          )}
        </div>
        <p className="mt-4 text-sm text-muted">
          {siteStats.speakingLessons} lessons ·{" "}
          {siteStats.vocabTotal.toLocaleString()} vocab · {siteStats.kanjiChars}{" "}
          kanji · {siteStats.stories} readings · {siteStats.inputItems} input ·{" "}
          {siteStats.longFormPrompts} speak prompts
        </p>
      </section>

      <div className="mt-8 max-w-2xl mx-auto">
        <GameDashboardCard />
      </div>

      <section className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {fluencyStages.map((stage, i) => (
          <div
            key={stage.id}
            className="rounded-xl border border-card-border bg-card p-4 card-shadow hover:-translate-y-0.5 transition-transform"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface text-xs font-bold">
                {i + 1}
              </span>
              <span className="text-[11px] text-muted">{stage.hours} h</span>
            </div>
            <h3 className="font-semibold">{stage.name}</h3>
            <p className="text-xs text-muted mt-0.5">{stage.level}</p>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              {stage.speakingGoal}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/paths/speaking"
          className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 card-shadow transition-all hover:border-speaking/40 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-speaking/10 text-speaking group-hover:scale-110 transition-transform">
            <Headphones className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Speaking</h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Dialogue → listening → patterns → culture → practice. Kana only.
            Built for speaking fluency alone.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-speaking">
            Open path <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        <Link
          href="/vocab"
          className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 card-shadow transition-all hover:border-accent/50 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:scale-110 transition-transform">
            <Library className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Vocab packs</h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {siteStats.vocabTotal.toLocaleString()} entries (~
            {siteStats.vocabUniqueKana.toLocaleString()} unique) — core units
            plus expansion packs.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Collect words <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        <Link
          href="/paths/kanji"
          className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 card-shadow transition-all hover:border-kanji/40 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kanji/10 text-kanji group-hover:scale-110 transition-transform">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Kanji reading</h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {siteStats.kanjiUnits} units · full Jōyō ({siteStats.joyoTarget}) ·{" "}
            {siteStats.stories} stories. Recognition toward literacy.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-kanji">
            Start reading <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        <Link
          href="/input"
          className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 card-shadow transition-all hover:border-accent/40 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:scale-110 transition-transform">
            <Radio className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Input library</h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Graded → native immersion ladder. Log sessions toward{" "}
            {fluencyMethod.inputHoursTarget.toLocaleString()}+ hours of real
            input.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Open ladder <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        <Link
          href="/speak"
          className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 card-shadow transition-all hover:border-speaking/40 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-speaking/10 text-speaking group-hover:scale-110 transition-transform">
            <Mic className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Speak lab</h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Long-form production — stories, soft complaints, keigo, deadlines.
            Timer on, mouth open.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-speaking">
            Practice speaking <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </section>

      <section className="mt-14">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-muted mb-8">
          Fun that serves learning
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {methods.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-card-border bg-card/60 p-6 text-center"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-card-border bg-surface/80 p-8">
        <div className="flex items-start gap-3">
          <Route className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xl font-bold">The fluency contract</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed max-w-3xl">
              Finishing the site gets you strong intermediate → early advanced
              conversation — not instant native fluency. Full fluency still needs
              months of SRS + real input/output. We built the spine: ~{" "}
              <strong className="text-foreground">
                {fluencyMethod.vocabTarget.toLocaleString()} vocab
              </strong>
              , full Jōyō literacy path, listening drills, speak lab, and
              immersion logging. About{" "}
              <strong className="text-foreground">
                {fluencyMethod.dailyMinutes} minutes a day
              </strong>{" "}
              beats a guilt spiral.
            </p>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-muted">
              {fluencyMethod.principle.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-primary">·</span>
                  {p}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
