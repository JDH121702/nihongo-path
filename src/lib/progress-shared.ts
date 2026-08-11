import type {
  AppProgress,
  GameStats,
  LessonProgress,
  PathProgress,
  SrsItem,
} from "./types";
import { DEFAULT_DAILY_GOAL } from "./gamification";

export const PROGRESS_SCHEMA_VERSION = 1;
export const STORAGE_KEY = "nihongo-path-progress";

const defaultPathProgress = (): PathProgress => ({
  currentLessonId: null,
  lessons: {},
  streak: 0,
  lastStudyDate: null,
});

const defaultGame = (): GameStats => ({
  xp: 0,
  dailyXp: 0,
  dailyXpDate: null,
  dailyGoal: DEFAULT_DAILY_GOAL,
  streakFreezes: 1,
  longestStreak: 0,
  achievements: [],
  reviewsToday: 0,
  reviewsTodayDate: null,
  totalReviews: 0,
  studyMinutes: 0,
  inputMinutes: 0,
  inputCompleted: [],
  longFormCompleted: [],
  listeningCompleted: [],
});

export const defaultProgress: AppProgress = {
  speaking: defaultPathProgress(),
  kanji: defaultPathProgress(),
  srs: [],
  scriptMode: "hiragana",
  vocabIntroduced: [],
  game: defaultGame(),
  schemaVersion: PROGRESS_SCHEMA_VERSION,
  updatedAt: new Date(0).toISOString(),
};

export function touchProgress(progress: AppProgress): AppProgress {
  return {
    ...progress,
    schemaVersion: PROGRESS_SCHEMA_VERSION,
    updatedAt: new Date().toISOString(),
  };
}

export function normalizeProgress(raw: unknown): AppProgress {
  const parsed = (raw ?? {}) as Partial<AppProgress>;
  return {
    ...defaultProgress,
    ...parsed,
    speaking: { ...defaultPathProgress(), ...parsed.speaking },
    kanji: { ...defaultPathProgress(), ...parsed.kanji },
    srs: parsed.srs ?? [],
    vocabIntroduced: parsed.vocabIntroduced ?? [],
    game: {
      ...defaultGame(),
      ...parsed.game,
      inputCompleted: parsed.game?.inputCompleted ?? [],
      longFormCompleted: parsed.game?.longFormCompleted ?? [],
      listeningCompleted: parsed.game?.listeningCompleted ?? [],
      studyMinutes: parsed.game?.studyMinutes ?? 0,
      inputMinutes: parsed.game?.inputMinutes ?? 0,
    },
    schemaVersion: parsed.schemaVersion ?? PROGRESS_SCHEMA_VERSION,
    updatedAt: parsed.updatedAt ?? new Date(0).toISOString(),
  };
}

function mergeLesson(
  a: LessonProgress | undefined,
  b: LessonProgress | undefined,
): LessonProgress {
  if (!a) return b ?? { completed: false, sectionsViewed: [] };
  if (!b) return a;
  const sections = Array.from(
    new Set([...(a.sectionsViewed ?? []), ...(b.sectionsViewed ?? [])]),
  );
  const completed = a.completed || b.completed;
  const quizScore =
    a.quizScore != null && b.quizScore != null
      ? Math.max(a.quizScore, b.quizScore)
      : (a.quizScore ?? b.quizScore);
  const startedAt =
    a.startedAt && b.startedAt
      ? a.startedAt < b.startedAt
        ? a.startedAt
        : b.startedAt
      : (a.startedAt ?? b.startedAt);
  const completedAt =
    a.completedAt && b.completedAt
      ? a.completedAt > b.completedAt
        ? a.completedAt
        : b.completedAt
      : (a.completedAt ?? b.completedAt);
  return { completed, sectionsViewed: sections, quizScore, startedAt, completedAt };
}

function mergePath(a: PathProgress, b: PathProgress): PathProgress {
  const ids = new Set([
    ...Object.keys(a.lessons),
    ...Object.keys(b.lessons),
  ]);
  const lessons: Record<string, LessonProgress> = {};
  for (const id of ids) {
    lessons[id] = mergeLesson(a.lessons[id], b.lessons[id]);
  }
  const streak = Math.max(a.streak, b.streak);
  const lastStudyDate =
    a.lastStudyDate && b.lastStudyDate
      ? a.lastStudyDate > b.lastStudyDate
        ? a.lastStudyDate
        : b.lastStudyDate
      : (a.lastStudyDate ?? b.lastStudyDate);
  const currentLessonId = a.currentLessonId ?? b.currentLessonId;
  return { currentLessonId, lessons, streak, lastStudyDate };
}

function mergeSrs(a: SrsItem[], b: SrsItem[]): SrsItem[] {
  const map = new Map<string, SrsItem>();
  for (const item of [...a, ...b]) {
    const prev = map.get(item.id);
    if (!prev) {
      map.set(item.id, item);
      continue;
    }
    // Prefer further-along card (more reps / longer interval / later review).
    const score = (x: SrsItem) =>
      x.repetitions * 1000 +
      x.interval * 10 +
      (Date.parse(x.nextReview) || 0);
    map.set(item.id, score(item) >= score(prev) ? item : prev);
  }
  return Array.from(map.values());
}

function mergeGame(a: GameStats, b: GameStats): GameStats {
  return {
    xp: Math.max(a.xp, b.xp),
    dailyXp: Math.max(a.dailyXp, b.dailyXp),
    dailyXpDate:
      a.dailyXpDate && b.dailyXpDate
        ? a.dailyXpDate > b.dailyXpDate
          ? a.dailyXpDate
          : b.dailyXpDate
        : (a.dailyXpDate ?? b.dailyXpDate),
    dailyGoal: Math.max(a.dailyGoal, b.dailyGoal),
    streakFreezes: Math.max(a.streakFreezes, b.streakFreezes),
    longestStreak: Math.max(a.longestStreak, b.longestStreak),
    achievements: Array.from(
      new Set([...(a.achievements ?? []), ...(b.achievements ?? [])]),
    ),
    reviewsToday: Math.max(a.reviewsToday, b.reviewsToday),
    reviewsTodayDate:
      a.reviewsTodayDate && b.reviewsTodayDate
        ? a.reviewsTodayDate > b.reviewsTodayDate
          ? a.reviewsTodayDate
          : b.reviewsTodayDate
        : (a.reviewsTodayDate ?? b.reviewsTodayDate),
    totalReviews: Math.max(a.totalReviews, b.totalReviews),
    studyMinutes: Math.max(a.studyMinutes, b.studyMinutes),
    inputMinutes: Math.max(a.inputMinutes, b.inputMinutes),
    inputCompleted: Array.from(
      new Set([...(a.inputCompleted ?? []), ...(b.inputCompleted ?? [])]),
    ),
    longFormCompleted: Array.from(
      new Set([...(a.longFormCompleted ?? []), ...(b.longFormCompleted ?? [])]),
    ),
    listeningCompleted: Array.from(
      new Set([
        ...(a.listeningCompleted ?? []),
        ...(b.listeningCompleted ?? []),
      ]),
    ),
  };
}

/** Merge guest/local progress with cloud for first login / multi-device. */
export function mergeProgress(local: AppProgress, cloud: AppProgress): AppProgress {
  return touchProgress({
    speaking: mergePath(local.speaking, cloud.speaking),
    kanji: mergePath(local.kanji, cloud.kanji),
    srs: mergeSrs(local.srs, cloud.srs),
    scriptMode: local.scriptMode || cloud.scriptMode,
    vocabIntroduced: Array.from(
      new Set([
        ...(local.vocabIntroduced ?? []),
        ...(cloud.vocabIntroduced ?? []),
      ]),
    ),
    game: mergeGame(local.game, cloud.game),
  });
}
