import type { AchievementId } from "@/lib/types";

export const XP = {
  lessonComplete: 40,
  lessonPerfect: 15,
  vocabWord: 4,
  vocabBatchBonus: 10,
  reviewCard: 2,
  reviewPerfectBonus: 20,
  dailyGoalMet: 25,
  firstLessonBonus: 30,
  listeningDrill: 20,
  longForm: 35,
  inputSession: 15,
} as const;

export const DEFAULT_DAILY_GOAL = 50;

export const ranks = [
  { minXp: 0, id: "seedling", name: "Seedling", jp: "芽", color: "text-success" },
  { minXp: 200, id: "walker", name: "Path Walker", jp: "歩", color: "text-speaking" },
  { minXp: 600, id: "speaker", name: "Everyday Speaker", jp: "話", color: "text-accent" },
  { minXp: 1500, id: "fluentish", name: "Getting Fluent", jp: "流", color: "text-kanji" },
  { minXp: 3500, id: "nativeish", name: "Advanced Path", jp: "達", color: "text-primary" },
  { minXp: 7000, id: "master", name: "Long-haul Master", jp: "道", color: "text-primary" },
] as const;

export function getRank(xp: number) {
  let current: (typeof ranks)[number] = ranks[0];
  for (const rank of ranks) {
    if (xp >= rank.minXp) current = rank;
  }
  const idx = ranks.findIndex((r) => r.id === current.id);
  const next = ranks[idx + 1] as (typeof ranks)[number] | undefined;
  const floor = current.minXp;
  const ceiling = next?.minXp ?? floor + 1000;
  const progress = Math.min(1, (xp - floor) / (ceiling - floor));
  return { ...current, next, progress, xpToNext: next ? ceiling - xp : 0 };
}

export const achievements: {
  id: AchievementId;
  title: string;
  description: string;
  icon: string;
}[] = [
  {
    id: "first_step",
    title: "First Step",
    description: "Complete your first lesson",
    icon: "🎌",
  },
  {
    id: "streak_3",
    title: "Habit Spark",
    description: "Reach a 3-day streak",
    icon: "✨",
  },
  {
    id: "streak_7",
    title: "Week Warrior",
    description: "Reach a 7-day streak",
    icon: "🔥",
  },
  {
    id: "streak_30",
    title: "Month of Momentum",
    description: "Reach a 30-day streak",
    icon: "🏆",
  },
  {
    id: "vocab_50",
    title: "Word Collector",
    description: "Introduce 50 vocab words",
    icon: "📚",
  },
  {
    id: "vocab_500",
    title: "Lexicon Builder",
    description: "Introduce 500 vocab words",
    icon: "🧠",
  },
  {
    id: "review_25",
    title: "Memory Athlete",
    description: "Review 25 cards in one day",
    icon: "⚡",
  },
  {
    id: "unit_1_clear",
    title: "Foundation Cleared",
    description: "Finish every lesson in Unit 1",
    icon: "🌱",
  },
  {
    id: "daily_goal",
    title: "Goal Getter",
    description: "Hit your daily XP goal",
    icon: "🎯",
  },
  {
    id: "perfect_lesson",
    title: "Clean Sweep",
    description: "Ace a lesson quiz 100%",
    icon: "💯",
  },
];

export function achievementMeta(id: AchievementId) {
  return achievements.find((a) => a.id === id);
}
