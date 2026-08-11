export type ScriptMode = "romaji" | "hiragana" | "katakana";

export type PathId = "speaking" | "kanji";

export type SrsKind = "pattern" | "kanji" | "vocab";

export type FluencyStageId =
  | "foundation"
  | "survival"
  | "daily"
  | "intermediate"
  | "advanced"
  | "fluent";

export interface DialogueLine {
  speaker: string;
  romaji: string;
  hiragana: string;
  english: string;
}

export interface Pattern {
  id: string;
  chunk: string;
  romaji: string;
  hiragana: string;
  meaning: string;
  whenToUse: string;
  examples: { text: string; romaji: string; english: string }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ProductionPrompt {
  id: string;
  english: string;
  hint: string;
  answerRomaji: string;
  answerHiragana: string;
}

export interface LongFormPrompt {
  id: string;
  title: string;
  promptEnglish: string;
  tips: string[];
  modelRomaji: string;
  modelHiragana: string;
  targetSeconds: number;
}

export interface ListeningDrill {
  id: string;
  title: string;
  lines: { romaji: string; hiragana: string }[];
  questions: QuizQuestion[];
}

export interface SpeakingLesson {
  id: string;
  unit: number;
  unitTitle: string;
  order: number;
  title: string;
  subtitle: string;
  scenario: string;
  durationMin: number;
  objectives: string[];
  dialogue: DialogueLine[];
  patterns: Pattern[];
  grammarNotes: { title: string; body: string }[];
  culturalNote: { title: string; body: string };
  shadowingLines: { romaji: string; hiragana: string }[];
  quiz: QuizQuestion[];
  production: ProductionPrompt[];
  listening?: ListeningDrill;
  longForm?: LongFormPrompt;
}

export interface SpeakingUnit {
  id: number;
  stage: FluencyStageId;
  title: string;
  description: string;
  hoursBand: string;
  lessonIds: string[];
}

export interface Radical {
  character: string;
  name: string;
  meaning: string;
  mnemonic: string;
}

export interface KanjiEntry {
  character: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  radicals: string[];
  mnemonic: string;
  vocabulary: { word: string; reading: string; meaning: string }[];
}

export interface KanjiLesson {
  id: string;
  unit: number;
  unitTitle: string;
  order: number;
  title: string;
  subtitle: string;
  radicals: Radical[];
  kanji: KanjiEntry[];
  storyId: string | null;
  quiz: QuizQuestion[];
}

export interface KanjiUnit {
  id: number;
  stage: FluencyStageId;
  title: string;
  description: string;
  hoursBand: string;
  lessonIds: string[];
  storyIds: string[];
}

export interface FluencyStage {
  id: FluencyStageId;
  name: string;
  level: string;
  hours: string;
  speakingGoal: string;
  kanjiGoal: string;
}

export interface StoryParagraph {
  japanese: string;
  furigana: Record<string, string>;
  english: string;
}

export interface ReadingStory {
  id: string;
  title: string;
  subtitle: string;
  type: "story" | "news" | "article";
  level: number;
  requiredKanji: string[];
  paragraphs: StoryParagraph[];
  comprehension: QuizQuestion[];
}

export interface LessonProgress {
  completed: boolean;
  startedAt?: string;
  completedAt?: string;
  quizScore?: number;
  sectionsViewed: string[];
}

export interface PathProgress {
  currentLessonId: string | null;
  lessons: Record<string, LessonProgress>;
  streak: number;
  lastStudyDate: string | null;
}

export interface SrsItem {
  id: string;
  path: PathId;
  kind?: SrsKind;
  front: string;
  back: string;
  ease: number;
  interval: number;
  repetitions: number;
  nextReview: string;
}

export interface VocabWord {
  id: string;
  unit: number;
  romaji: string;
  kana: string;
  english: string;
  pos: "noun" | "verb" | "adj" | "adv" | "phrase" | "particle" | "counter" | "other";
  exampleKana: string;
  exampleRomaji: string;
  exampleEnglish: string;
  frequency: "core" | "high" | "mid";
}

export interface VocabPack {
  unit: number;
  title: string;
  description: string;
  wordIds: string[];
}

export type AchievementId =
  | "first_step"
  | "streak_3"
  | "streak_7"
  | "streak_30"
  | "vocab_50"
  | "vocab_500"
  | "review_25"
  | "unit_1_clear"
  | "daily_goal"
  | "perfect_lesson";

export interface InputItem {
  id: string;
  stage: FluencyStageId;
  type: "audio" | "video" | "article" | "podcast" | "drama";
  title: string;
  description: string;
  minutes: number;
  levelLabel: string;
  tips: string[];
  /** Optional external URL for native content; null = in-app practice */
  url: string | null;
  relatedUnit?: number;
}

/** Curated listen/watch pack unlocked after finishing a speaking unit. */
export interface UnitListenItem {
  id: string;
  title: string;
  source: string;
  url: string;
  minutes: number;
  /** Realistic comprehension target *for this specific media* after the unit */
  targetComprehension: number;
  why: string;
  howToWatch: string[];
}

export interface UnitListenPack {
  unit: number;
  /** What “~90%” means here — graded CI early, carefully chosen native later */
  afterUnitGoal: string;
  items: UnitListenItem[];
}

export interface GameStats {
  xp: number;
  dailyXp: number;
  dailyXpDate: string | null;
  dailyGoal: number;
  streakFreezes: number;
  longestStreak: number;
  achievements: AchievementId[];
  reviewsToday: number;
  reviewsTodayDate: string | null;
  totalReviews: number;
  studyMinutes: number;
  inputMinutes: number;
  inputCompleted: string[];
  longFormCompleted: string[];
  listeningCompleted: string[];
}

export interface AppProgress {
  speaking: PathProgress;
  kanji: PathProgress;
  srs: SrsItem[];
  scriptMode: ScriptMode;
  vocabIntroduced: string[];
  game: GameStats;
  /** Cloud sync metadata */
  schemaVersion?: number;
  updatedAt?: string;
}
