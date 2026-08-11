"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type {
  AchievementId,
  AppProgress,
  GameStats,
  LessonProgress,
  PathId,
  ScriptMode,
} from "./types";
import { reviewItem } from "./srs";
import { XP } from "./gamification";
import { useSession } from "./auth-client";
import {
  STORAGE_KEY,
  defaultProgress,
  mergeProgress,
  normalizeProgress,
  touchProgress,
} from "./progress-shared";

export { defaultProgress } from "./progress-shared";

/** Avoid importing full speaking curriculum into every page via Providers. */
const UNIT_1_LESSON_IDS = ["sp-1-1", "sp-1-2", "sp-1-3", "sp-1-4"] as const;

export type Celebration =
  | {
      type: "xp";
      amount: number;
      label: string;
      id: string;
    }
  | {
      type: "achievement";
      achievementId: AchievementId;
      id: string;
    }
  | {
      type: "lesson";
      title: string;
      xp: number;
      perfect: boolean;
      id: string;
    }
  | {
      type: "daily_goal";
      id: string;
    };

function todayStr() {
  // Local calendar date — UTC midnight was resetting streaks early/late
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function shiftLocalDate(isoDate: string, deltaDays: number) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + deltaDays);
  const yy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, "0");
  const dd = String(dt.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

function loadProgress(): AppProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    return normalizeProgress(JSON.parse(raw));
  } catch {
    return defaultProgress;
  }
}

function saveProgress(progress: AppProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function ensureDailyGame(game: GameStats): GameStats {
  const today = todayStr();
  return {
    ...game,
    dailyXp: game.dailyXpDate === today ? game.dailyXp : 0,
    dailyXpDate: today,
    reviewsToday: game.reviewsTodayDate === today ? game.reviewsToday : 0,
    reviewsTodayDate: today,
  };
}

function applyStreak(progress: AppProgress): AppProgress {
  const today = todayStr();
  const game = ensureDailyGame(progress.game);
  const last =
    progress.speaking.lastStudyDate && progress.kanji.lastStudyDate
      ? progress.speaking.lastStudyDate > progress.kanji.lastStudyDate
        ? progress.speaking.lastStudyDate
        : progress.kanji.lastStudyDate
      : (progress.speaking.lastStudyDate ?? progress.kanji.lastStudyDate);

  if (last === today) {
    return { ...progress, game };
  }

  const yesterdayStr = shiftLocalDate(today, -1);
  const currentStreak = Math.max(
    progress.speaking.streak,
    progress.kanji.streak,
  );

  let streak = 1;
  let freezes = game.streakFreezes;

  if (last === yesterdayStr) {
    streak = currentStreak + 1;
  } else if (last && last < yesterdayStr && freezes > 0) {
    // One freeze covers exactly one missed local day
    const dayBeforeYesterday = shiftLocalDate(today, -2);
    if (last === dayBeforeYesterday) {
      freezes -= 1;
      streak = currentStreak + 1;
    } else {
      streak = 1;
    }
  } else {
    streak = 1;
  }

  const longestStreak = Math.max(game.longestStreak, streak);

  return {
    ...progress,
    game: { ...game, streakFreezes: freezes, longestStreak },
    speaking: { ...progress.speaking, streak, lastStudyDate: today },
    kanji: { ...progress.kanji, streak, lastStudyDate: today },
  };
}

function unlockAchievements(
  progress: AppProgress,
  extra: AchievementId[] = [],
): { progress: AppProgress; unlocked: AchievementId[] } {
  const owned = new Set(progress.game.achievements);
  const newly: AchievementId[] = [];

  const consider = (id: AchievementId, cond: boolean) => {
    if (cond && !owned.has(id)) {
      owned.add(id);
      newly.push(id);
    }
  };

  const streak = Math.max(progress.speaking.streak, progress.kanji.streak);
  const completedLessons = Object.values(progress.speaking.lessons).filter(
    (l) => l.completed,
  ).length;

  consider("first_step", completedLessons >= 1);
  consider("streak_3", streak >= 3);
  consider("streak_7", streak >= 7);
  consider("streak_30", streak >= 30);
  consider("vocab_50", progress.vocabIntroduced.length >= 50);
  consider("vocab_500", progress.vocabIntroduced.length >= 500);
  consider("review_25", progress.game.reviewsToday >= 25);
  consider(
    "unit_1_clear",
    UNIT_1_LESSON_IDS.every((id) => progress.speaking.lessons[id]?.completed),
  );
  consider(
    "daily_goal",
    progress.game.dailyXp >= progress.game.dailyGoal,
  );

  for (const id of extra) consider(id, true);

  if (newly.length === 0) return { progress, unlocked: [] };

  return {
    progress: {
      ...progress,
      game: { ...progress.game, achievements: Array.from(owned) },
    },
    unlocked: newly,
  };
}

function grantXp(
  progress: AppProgress,
  amount: number,
): { progress: AppProgress; hitDailyGoal: boolean } {
  const game = ensureDailyGame(progress.game);
  const before = game.dailyXp;
  const dailyXp = before + amount;
  const hitDailyGoal =
    before < game.dailyGoal && dailyXp >= game.dailyGoal;
  let next: AppProgress = {
    ...progress,
    game: {
      ...game,
      xp: game.xp + amount,
      dailyXp,
      dailyXpDate: todayStr(),
      streakFreezes: hitDailyGoal
        ? Math.min(2, game.streakFreezes + (before < game.dailyGoal ? 0 : 0))
        : game.streakFreezes,
    },
  };
  // Reward a streak freeze the first time you hit daily goal that day
  if (hitDailyGoal) {
    next = {
      ...next,
      game: {
        ...next.game,
        streakFreezes: Math.min(2, next.game.streakFreezes + 1),
      },
    };
  }
  return { progress: next, hitDailyGoal };
}

type ProgressApi = {
  progress: AppProgress;
  loaded: boolean;
  celebrations: Celebration[];
  dismissCelebration: (id: string) => void;
  setScriptMode: (mode: ScriptMode) => void;
  setDailyGoal: (goal: number) => void;
  markSectionViewed: (path: PathId, lessonId: string, section: string) => void;
  startLesson: (path: PathId, lessonId: string) => void;
  completeLesson: (
    path: PathId,
    lessonId: string,
    quizScore?: number,
    lessonTitle?: string,
  ) => void;
  getLessonProgress: (path: PathId, lessonId: string) => LessonProgress;
  getPathCompletion: (
    path: PathId,
    lessonIds: string[],
  ) => { completed: number; total: number };
  addSrsItems: (items: AppProgress["srs"]) => void;
  removeSrsItems: (ids: string[]) => void;
  introduceVocab: (wordIds: string[], srsItems: AppProgress["srs"]) => void;
  rateSrsItem: (itemId: string, quality: 0 | 1 | 2 | 3) => void;
  completeListening: (drillId: string) => void;
  completeLongForm: (promptId: string) => void;
  completeInputSession: (itemId: string, minutes: number) => void;
  resetProgress: () => void;
  persist: (next: AppProgress) => void;
  /** True when signed in with Google (cloud sync active). */
  cloudSynced: boolean;
};

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { data: session, isPending: sessionPending } = useSession();
  const userId = session?.user?.id ?? null;
  const [progress, setProgress] = useState<AppProgress>(defaultProgress);
  const [loaded, setLoaded] = useState(false);
  const [cloudSynced, setCloudSynced] = useState(false);
  const [celebrations, setCelebrations] = useState<Celebration[]>([]);
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const cloudSyncEnabled = useRef(false);
  const cloudTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bootUserId = useRef<string | null | undefined>(undefined);

  const pushCelebration = useCallback((c: Celebration) => {
    const id =
      c.id ||
      `${c.type}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setCelebrations((prev) => [...prev, { ...c, id }]);
  }, []);

  const dismissCelebration = useCallback((id: string) => {
    setCelebrations((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const pushToCloud = useCallback(async (next: AppProgress) => {
    if (!cloudSyncEnabled.current) return;
    try {
      const res = await fetch("/api/progress", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          progress: next,
          updatedAt: next.updatedAt ?? new Date().toISOString(),
        }),
      });
      if (res.status === 409) {
        const data = (await res.json()) as {
          progress?: AppProgress;
          updatedAt?: string;
        };
        if (data.progress) {
          const merged = mergeProgress(
            progressRef.current,
            normalizeProgress(data.progress),
          );
          progressRef.current = merged;
          setProgress(merged);
          saveProgress(merged);
          await fetch("/api/progress", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              progress: merged,
              updatedAt: merged.updatedAt,
            }),
          });
        }
      }
    } catch {
      // Offline / API down — local cache remains source of truth for now.
    }
  }, []);

  const scheduleCloudSync = useCallback(
    (next: AppProgress) => {
      if (!cloudSyncEnabled.current) return;
      if (cloudTimer.current) clearTimeout(cloudTimer.current);
      cloudTimer.current = setTimeout(() => {
        void pushToCloud(next);
      }, 1500);
    },
    [pushToCloud],
  );

  const persist = useCallback(
    (next: AppProgress) => {
      const touched = touchProgress(next);
      progressRef.current = touched;
      setProgress(touched);
      saveProgress(touched);
      scheduleCloudSync(touched);
    },
    [scheduleCloudSync],
  );

  useEffect(() => {
    if (sessionPending) return;
    if (bootUserId.current === userId) return;
    bootUserId.current = userId;

    let cancelled = false;

    async function boot() {
      setLoaded(false);
      const local = loadProgress();

      if (!userId) {
        cloudSyncEnabled.current = false;
        setCloudSynced(false);
        if (!cancelled) {
          progressRef.current = local;
          setProgress(local);
          setLoaded(true);
        }
        return;
      }

      try {
        const res = await fetch("/api/progress");
        if (!res.ok) throw new Error("progress fetch failed");
        const data = (await res.json()) as {
          progress: AppProgress | null;
          updatedAt: string | null;
        };

        let next: AppProgress;
        if (data.progress) {
          next = mergeProgress(local, normalizeProgress(data.progress));
        } else {
          next = touchProgress(local);
        }

        if (cancelled) return;
        progressRef.current = next;
        setProgress(next);
        saveProgress(next);
        cloudSyncEnabled.current = true;
        setCloudSynced(true);
        setLoaded(true);
        await pushToCloud(next);
      } catch {
        if (cancelled) return;
        cloudSyncEnabled.current = false;
        setCloudSynced(false);
        progressRef.current = local;
        setProgress(local);
        setLoaded(true);
      }
    }

    void boot();
    return () => {
      cancelled = true;
    };
  }, [sessionPending, userId, pushToCloud]);

  useEffect(() => {
    return () => {
      if (cloudTimer.current) clearTimeout(cloudTimer.current);
    };
  }, []);

  const patch = useCallback(
    (updater: (current: AppProgress) => AppProgress) => {
      persist(updater(progressRef.current));
    },
    [persist],
  );

  const setScriptMode = useCallback(
    (mode: ScriptMode) => {
      patch((current) => ({ ...current, scriptMode: mode }));
    },
    [patch],
  );

  const setDailyGoal = useCallback(
    (goal: number) => {
      patch((current) => ({
        ...current,
        game: { ...current.game, dailyGoal: Math.max(20, Math.min(200, goal)) },
      }));
    },
    [patch],
  );

  const startLesson = useCallback(
    (path: PathId, lessonId: string) => {
      patch((current) => {
        const pathProgress = current[path];
        const existing = pathProgress.lessons[lessonId] ?? {
          completed: false,
          sectionsViewed: [],
        };
        return {
          ...current,
          [path]: {
            ...pathProgress,
            currentLessonId: lessonId,
            lessons: {
              ...pathProgress.lessons,
              [lessonId]: {
                ...existing,
                startedAt: existing.startedAt ?? new Date().toISOString(),
              },
            },
          },
        };
      });
    },
    [patch],
  );

  const markSectionViewed = useCallback(
    (path: PathId, lessonId: string, section: string) => {
      patch((current) => {
        const pathProgress = current[path];
        const existing: LessonProgress = pathProgress.lessons[lessonId] ?? {
          completed: false,
          sectionsViewed: [],
        };
        if (existing.sectionsViewed.includes(section)) return current;
        return {
          ...current,
          [path]: {
            ...pathProgress,
            currentLessonId: lessonId,
            lessons: {
              ...pathProgress.lessons,
              [lessonId]: {
                ...existing,
                startedAt: existing.startedAt ?? new Date().toISOString(),
                sectionsViewed: [...existing.sectionsViewed, section],
              },
            },
          },
        };
      });
    },
    [patch],
  );

  const completeLesson = useCallback(
    (
      path: PathId,
      lessonId: string,
      quizScore?: number,
      lessonTitle?: string,
    ) => {
      const wasComplete =
        progressRef.current[path].lessons[lessonId]?.completed ?? false;
      let awardedXp = 0;
      let perfect = quizScore === 100;

      patch((current) => {
        let next = applyStreak(current);
        const pathProgress = next[path];
        const existing: LessonProgress = pathProgress.lessons[lessonId] ?? {
          completed: false,
          sectionsViewed: [],
        };
        next = {
          ...next,
          [path]: {
            ...pathProgress,
            currentLessonId: lessonId,
            lessons: {
              ...pathProgress.lessons,
              [lessonId]: {
                ...existing,
                completed: true,
                completedAt: new Date().toISOString(),
                quizScore,
              },
            },
          },
        };

        if (!wasComplete) {
          awardedXp = XP.lessonComplete;
          if (perfect) awardedXp += XP.lessonPerfect;
          const completedCount = Object.values(next.speaking.lessons).filter(
            (l) => l.completed,
          ).length;
          if (path === "speaking" && completedCount === 1) {
            awardedXp += XP.firstLessonBonus;
          }
          const xpResult = grantXp(next, awardedXp);
          next = xpResult.progress;
          if (xpResult.hitDailyGoal) {
            queueMicrotask(() =>
              pushCelebration({ type: "daily_goal", id: `daily-${Date.now()}` }),
            );
          }
        }

        const extras: AchievementId[] = [];
        if (perfect) extras.push("perfect_lesson");
        const ach = unlockAchievements(next, extras);
        next = ach.progress;
        for (const id of ach.unlocked) {
          queueMicrotask(() =>
            pushCelebration({
              type: "achievement",
              achievementId: id,
              id: `ach-${id}-${Date.now()}`,
            }),
          );
        }

        return next;
      });

      if (!wasComplete) {
        pushCelebration({
          type: "lesson",
          title: lessonTitle ?? "Lesson complete",
          xp: awardedXp || XP.lessonComplete,
          perfect,
          id: `lesson-${lessonId}-${Date.now()}`,
        });
        pushCelebration({
          type: "xp",
          amount: awardedXp || XP.lessonComplete,
          label: perfect ? "Perfect lesson!" : "Lesson complete",
          id: `xp-lesson-${Date.now()}`,
        });
      }
    },
    [patch, pushCelebration],
  );

  const addSrsItems = useCallback(
    (items: AppProgress["srs"]) => {
      if (items.length === 0) return;
      patch((current) => {
        const map = new Map(current.srs.map((i) => [i.id, i]));
        for (const item of items) {
          const existing = map.get(item.id);
          if (!existing) {
            map.set(item.id, item);
          } else {
            // Refresh prompt/answer text; keep SM-2 schedule.
            map.set(item.id, {
              ...existing,
              front: item.front,
              back: item.back,
              path: item.path,
              kind: item.kind ?? existing.kind,
            });
          }
        }
        return { ...current, srs: Array.from(map.values()) };
      });
    },
    [patch],
  );

  const removeSrsItems = useCallback(
    (ids: string[]) => {
      if (ids.length === 0) return;
      const drop = new Set(ids);
      patch((current) => ({
        ...current,
        srs: current.srs.filter((i) => !drop.has(i.id)),
      }));
    },
    [patch],
  );

  const introduceVocab = useCallback(
    (wordIds: string[], srsItems: AppProgress["srs"]) => {
      const newIds = wordIds.filter(
        (id) => !progressRef.current.vocabIntroduced.includes(id),
      );
      patch((current) => {
        let next = applyStreak(current);
        const introduced = new Set(next.vocabIntroduced);
        for (const id of wordIds) introduced.add(id);
        const map = new Map(next.srs.map((i) => [i.id, i]));
        for (const item of srsItems) {
          if (!map.has(item.id)) map.set(item.id, item);
        }
        next = {
          ...next,
          vocabIntroduced: Array.from(introduced),
          srs: Array.from(map.values()),
        };

        if (newIds.length > 0) {
          let xp =
            newIds.length * XP.vocabWord +
            (newIds.length >= 10 ? XP.vocabBatchBonus : 0);
          const xpResult = grantXp(next, xp);
          next = xpResult.progress;
          if (xpResult.hitDailyGoal) {
            queueMicrotask(() =>
              pushCelebration({ type: "daily_goal", id: `daily-${Date.now()}` }),
            );
          }
          queueMicrotask(() =>
            pushCelebration({
              type: "xp",
              amount: xp,
              label: `+${newIds.length} words`,
              id: `xp-vocab-${Date.now()}`,
            }),
          );
        }

        const ach = unlockAchievements(next);
        next = ach.progress;
        for (const id of ach.unlocked) {
          queueMicrotask(() =>
            pushCelebration({
              type: "achievement",
              achievementId: id,
              id: `ach-${id}-${Date.now()}`,
            }),
          );
        }
        return next;
      });
    },
    [patch, pushCelebration],
  );

  const rateSrsItem = useCallback(
    (itemId: string, quality: 0 | 1 | 2 | 3) => {
      patch((current) => {
        const item = current.srs.find((i) => i.id === itemId);
        if (!item) return current;
        let next = applyStreak(current);
        const updated = reviewItem(item, quality);
        const game = ensureDailyGame(next.game);
        next = {
          ...next,
          srs: next.srs.map((i) => (i.id === itemId ? updated : i)),
          game: {
            ...game,
            reviewsToday: game.reviewsToday + 1,
            reviewsTodayDate: todayStr(),
            totalReviews: game.totalReviews + 1,
          },
        };
        const xpResult = grantXp(next, XP.reviewCard);
        next = xpResult.progress;
        if (xpResult.hitDailyGoal) {
          queueMicrotask(() =>
            pushCelebration({ type: "daily_goal", id: `daily-${Date.now()}` }),
          );
        }
        const ach = unlockAchievements(next);
        next = ach.progress;
        for (const id of ach.unlocked) {
          queueMicrotask(() =>
            pushCelebration({
              type: "achievement",
              achievementId: id,
              id: `ach-${id}-${Date.now()}`,
            }),
          );
        }
        return next;
      });
    },
    [patch, pushCelebration],
  );

  const completeListening = useCallback(
    (drillId: string) => {
      patch((current) => {
        if (current.game.listeningCompleted.includes(drillId)) return current;
        let next = applyStreak(current);
        next = {
          ...next,
          game: {
            ...ensureDailyGame(next.game),
            listeningCompleted: [...next.game.listeningCompleted, drillId],
            studyMinutes: next.game.studyMinutes + 10,
          },
        };
        const xpResult = grantXp(next, XP.listeningDrill);
        next = xpResult.progress;
        if (xpResult.hitDailyGoal) {
          queueMicrotask(() =>
            pushCelebration({ type: "daily_goal", id: `daily-${Date.now()}` }),
          );
        }
        queueMicrotask(() =>
          pushCelebration({
            type: "xp",
            amount: XP.listeningDrill,
            label: "Listening drill",
            id: `xp-listen-${Date.now()}`,
          }),
        );
        return unlockAchievements(next).progress;
      });
    },
    [patch, pushCelebration],
  );

  const completeLongForm = useCallback(
    (promptId: string) => {
      patch((current) => {
        if (current.game.longFormCompleted.includes(promptId)) return current;
        let next = applyStreak(current);
        next = {
          ...next,
          game: {
            ...ensureDailyGame(next.game),
            longFormCompleted: [...next.game.longFormCompleted, promptId],
            studyMinutes: next.game.studyMinutes + 8,
          },
        };
        const xpResult = grantXp(next, XP.longForm);
        next = xpResult.progress;
        if (xpResult.hitDailyGoal) {
          queueMicrotask(() =>
            pushCelebration({ type: "daily_goal", id: `daily-${Date.now()}` }),
          );
        }
        queueMicrotask(() =>
          pushCelebration({
            type: "xp",
            amount: XP.longForm,
            label: "Long-form speaking",
            id: `xp-lf-${Date.now()}`,
          }),
        );
        return unlockAchievements(next).progress;
      });
    },
    [patch, pushCelebration],
  );

  const completeInputSession = useCallback(
    (itemId: string, minutes: number) => {
      patch((current) => {
        const already = current.game.inputCompleted.includes(itemId);
        let next = applyStreak(current);
        next = {
          ...next,
          game: {
            ...ensureDailyGame(next.game),
            inputCompleted: already
              ? next.game.inputCompleted
              : [...next.game.inputCompleted, itemId],
            inputMinutes: next.game.inputMinutes + minutes,
            studyMinutes: next.game.studyMinutes + minutes,
          },
        };
        const xpResult = grantXp(next, XP.inputSession);
        next = xpResult.progress;
        if (xpResult.hitDailyGoal) {
          queueMicrotask(() =>
            pushCelebration({ type: "daily_goal", id: `daily-${Date.now()}` }),
          );
        }
        queueMicrotask(() =>
          pushCelebration({
            type: "xp",
            amount: XP.inputSession,
            label: `+${minutes}m input`,
            id: `xp-in-${Date.now()}`,
          }),
        );
        return unlockAchievements(next).progress;
      });
    },
    [patch, pushCelebration],
  );

  const getLessonProgress = useCallback(
    (path: PathId, lessonId: string): LessonProgress => {
      return (
        progress[path].lessons[lessonId] ?? {
          completed: false,
          sectionsViewed: [],
        }
      );
    },
    [progress],
  );

  const getPathCompletion = useCallback(
    (path: PathId, lessonIds: string[]) => {
      const completed = lessonIds.filter(
        (id) => progress[path].lessons[id]?.completed,
      ).length;
      return { completed, total: lessonIds.length };
    },
    [progress],
  );

  const resetProgress = useCallback(() => {
    const blank = touchProgress(defaultProgress);
    progressRef.current = blank;
    setProgress(blank);
    saveProgress(blank);
    setCelebrations([]);
    if (cloudSyncEnabled.current) {
      void fetch("/api/progress", { method: "DELETE" });
    }
  }, []);

  const value = useMemo(
    () => ({
      progress,
      loaded,
      celebrations,
      dismissCelebration,
      setScriptMode,
      setDailyGoal,
      markSectionViewed,
      startLesson,
      completeLesson,
      getLessonProgress,
      getPathCompletion,
      addSrsItems,
      removeSrsItems,
      introduceVocab,
      rateSrsItem,
      completeListening,
      completeLongForm,
      completeInputSession,
      resetProgress,
      persist,
      cloudSynced,
    }),
    [
      progress,
      loaded,
      celebrations,
      dismissCelebration,
      setScriptMode,
      setDailyGoal,
      markSectionViewed,
      startLesson,
      completeLesson,
      getLessonProgress,
      getPathCompletion,
      addSrsItems,
      removeSrsItems,
      introduceVocab,
      rateSrsItem,
      completeListening,
      completeLongForm,
      completeInputSession,
      resetProgress,
      persist,
      cloudSynced,
    ],
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return ctx;
}
