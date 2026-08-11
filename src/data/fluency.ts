import type { FluencyStage, FluencyStageId } from "@/lib/types";

export const fluencyStages: FluencyStage[] = [
  {
    id: "foundation",
    name: "Foundation",
    level: "Zero → first conversations",
    hours: "0–80",
    speakingGoal:
      "Hear and produce core chunks: greetings, thanks, requests, where/what. Kana is automatic.",
    kanjiGoal:
      "Radicals + first 80–100 kanji. Read 4–6 sentence stories with furigana and feel a win.",
  },
  {
    id: "survival",
    name: "Survival",
    level: "You can function in Japan",
    hours: "80–250",
    speakingGoal:
      "Order food, ride trains, shop, ask for help, decline politely. Understand staff scripts.",
    kanjiGoal:
      "N5 set in context. Signs, menus, station names, and dates start unlocking.",
  },
  {
    id: "daily",
    name: "Daily Life",
    level: "Friends, not just staff",
    hours: "250–500",
    speakingGoal:
      "Make plans, share opinions, switch polite/casual, follow backchannels and contractions.",
    kanjiGoal:
      "N4–early N3. Short articles and easy news. Compounds beat isolated characters.",
  },
  {
    id: "intermediate",
    name: "Intermediate",
    level: "Work, stories, media",
    hours: "500–1,000",
    speakingGoal:
      "Workplace talk, health, relationships, storytelling. Follow podcasts at 0.8–1.0x.",
    kanjiGoal:
      "N3 core. NHK Easy-style news without panic. 600+ characters in vocabulary.",
  },
  {
    id: "advanced",
    name: "Advanced",
    level: "Native media with work",
    hours: "1,000–1,800",
    speakingGoal:
      "Keigo, complaints, bureaucracy, nuance (わけ/はず/のに). TV and meetings are usable.",
    kanjiGoal:
      "N2 + newspaper compounds. Read real articles with a lookup habit, not a crutch.",
  },
  {
    id: "fluent",
    name: "Fluent",
    level: "Comfortable adult Japanese",
    hours: "1,800–3,800+",
    speakingGoal:
      "Implication, humor, unfinished sentences, register shifts. Debate, present, banter. You think in patterns, not English.",
    kanjiGoal:
      "Jōyō literacy path: 2,000+ recognition. Novels and news are normal reading, not study.",
  },
];

export const fluencyMethod = {
  speakingHours: 3800,
  kanjiHours: 5000,
  vocabTarget: 8000,
  kanjiTarget: 2136,
  dailyMinutes: 45,
  inputHoursTarget: 1000,
  principle: [
    "Comprehensible input at i+1 — dialogue, stories, and an immersion ladder",
    "Pattern chunks over word lists — natives speak in constructions",
    "Unit vocab packs → SRS — push toward ~8,000 known items",
    "Kanji recognition toward Jōyō — reading unlocks the written world",
    "Listening drills + long-form speaking — ear and mouth, not just quizzes",
    "Retrieval daily — Review is half the curriculum",
  ],
};

export function stageLabel(id: FluencyStageId) {
  return fluencyStages.find((s) => s.id === id)?.name ?? id;
}
