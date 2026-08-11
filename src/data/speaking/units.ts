import type { SpeakingUnit } from "@/lib/types";

/** Unit metadata only — safe for home/nav without loading full lesson bodies. */
export const speakingUnits: SpeakingUnit[] = [
  {
    id: 1,
    stage: "foundation",
    hoursBand: "0–40h",
    title: "Sound & Script Foundation",
    description:
      "Master hiragana and katakana through real words natives actually say—not isolated drills.",
    lessonIds: ["sp-1-1", "sp-1-2", "sp-1-3", "sp-1-4"],
  },
  {
    id: 2,
    stage: "foundation",
    hoursBand: "40–80h",
    title: "Survival Patterns",
    description:
      "The phrases you'll hear and use on day one in Japan: greetings, thanks, and getting help.",
    lessonIds: ["sp-2-1", "sp-2-2", "sp-2-3", "sp-2-4"],
  },
  {
    id: 3,
    stage: "survival",
    hoursBand: "80–150h",
    title: "Daily Life Dialogues",
    description:
      "Ordering food, riding trains, and shopping—built from reusable sentence patterns.",
    lessonIds: ["sp-3-1", "sp-3-2", "sp-3-3", "sp-3-4"],
  },
  {
    id: 4,
    stage: "daily",
    hoursBand: "150–280h",
    title: "Social & Connection",
    description:
      "Making plans, sharing opinions, and the casual-polite switch natives navigate daily.",
    lessonIds: ["sp-4-1", "sp-4-2", "sp-4-3", "sp-4-4"],
  },
  {
    id: 5,
    stage: "daily",
    hoursBand: "280–400h",
    title: "Natural Native Speech",
    description:
      "Fillers, softeners, and real rhythm—the difference between textbook and real conversation.",
    lessonIds: ["sp-5-1", "sp-5-2", "sp-5-3", "sp-5-4"],
  },
  {
    id: 6,
    stage: "daily",
    hoursBand: "400–500h",
    title: "Favors & Nuance",
    description:
      "Indirect requests, regret, and the patterns that separate textbook from real kindness.",
    lessonIds: ["sp-6-1", "sp-6-2", "sp-6-3", "sp-6-4"],
  },
  {
    id: 7,
    stage: "intermediate",
    hoursBand: "500–620h",
    title: "Work & Office",
    description:
      "お疲れ様, meetings, confirmation, being late, handoffs, remote work—the adult job register.",
    lessonIds: ["sp-7-1", "sp-7-2", "sp-7-3", "sp-7-4", "sp-7-5", "sp-7-6"],
  },
  {
    id: 8,
    stage: "intermediate",
    hoursBand: "620–740h",
    title: "Body, Health & Home",
    description:
      "Pharmacies, clinics, rent, trash day, and neighbors—life admin in Japanese.",
    lessonIds: ["sp-8-1", "sp-8-2", "sp-8-3", "sp-8-4", "sp-8-5", "sp-8-6"],
  },
  {
    id: 9,
    stage: "intermediate",
    hoursBand: "740–860h",
    title: "Relationships & Feelings",
    description:
      "Dating, apologies, advice, emotional distance—language that builds or breaks trust.",
    lessonIds: ["sp-9-1", "sp-9-2", "sp-9-3", "sp-9-4", "sp-9-5", "sp-9-6"],
  },
  {
    id: 10,
    stage: "intermediate",
    hoursBand: "860–1,000h",
    title: "Travel Deep",
    description:
      "Hotels, lost items, delays, complaints, police boxes—when travel stops being cute.",
    lessonIds: ["sp-10-1", "sp-10-2", "sp-10-3", "sp-10-4", "sp-10-5", "sp-10-6"],
  },
  {
    id: 11,
    stage: "advanced",
    hoursBand: "1,000–1,200h",
    title: "Opinions & Media",
    description:
      "Hearsay, appearance, fandom, softened criticism—talk about the world without sounding blunt.",
    lessonIds: ["sp-11-1", "sp-11-2", "sp-11-3", "sp-11-4", "sp-11-5", "sp-11-6"],
  },
  {
    id: 12,
    stage: "advanced",
    hoursBand: "1,200–1,400h",
    title: "Stories & Time",
    description:
      "When/if/after, excuses, reports, folktales—narrate your life the way natives do.",
    lessonIds: ["sp-12-1", "sp-12-2", "sp-12-3", "sp-12-4", "sp-12-5", "sp-12-6"],
  },
  {
    id: 13,
    stage: "advanced",
    hoursBand: "1,400–1,600h",
    title: "Keigo & Institutions",
    description:
      "Hospital, city hall, bank, interviews—raise them, humble yourself, get things done.",
    lessonIds: ["sp-13-1", "sp-13-2", "sp-13-3", "sp-13-4", "sp-13-5", "sp-13-6"],
  },
  {
    id: 14,
    stage: "advanced",
    hoursBand: "1,600–1,800h",
    title: "Conflict & Bureaucracy",
    description:
      "Returns, contracts, negotiation, staged apologies—protect the relationship while solving the problem.",
    lessonIds: ["sp-14-1", "sp-14-2", "sp-14-3", "sp-14-4", "sp-14-5", "sp-14-6"],
  },
  {
    id: 15,
    stage: "fluent",
    hoursBand: "1,800–2,100h",
    title: "Abstract & Culture",
    description:
      "はず/わけ/のに, values, お盆, proverb-in-speech—think in Japanese, not translated English.",
    lessonIds: ["sp-15-1", "sp-15-2", "sp-15-3", "sp-15-4", "sp-15-5", "sp-15-6"],
  },
  {
    id: 16,
    stage: "fluent",
    hoursBand: "2,100–2,500h+",
    title: "Near-native Fluency",
    description:
      "Unfinished sentences, implication, humor, light dialect, mixed-register meetings. Capstone.",
    lessonIds: ["sp-16-1", "sp-16-2", "sp-16-3", "sp-16-4", "sp-16-5", "sp-16-6"],
  },
  {
    id: 17,
    stage: "fluent",
    hoursBand: "2,500–2,800h",
    title: "Debate & Persuasion",
    description:
      "Soft disagreement, とはいえ, closing a point — argue without breaking rapport.",
    lessonIds: ["sp-17-1", "sp-17-2", "sp-17-3", "sp-17-4", "sp-17-5", "sp-17-6"],
  },
  {
    id: 18,
    stage: "fluent",
    hoursBand: "2,800–3,100h",
    title: "Presentation & Meetings",
    description:
      "結論から, agendas, Q&A — sound competent in rooms that matter.",
    lessonIds: ["sp-18-1", "sp-18-2", "sp-18-3", "sp-18-4", "sp-18-5", "sp-18-6"],
  },
  {
    id: 19,
    stage: "fluent",
    hoursBand: "3,100–3,400h",
    title: "Humor & Banter",
    description:
      "ツッコミ, teasing, self-deprecation — the social layer textbooks skip.",
    lessonIds: ["sp-19-1", "sp-19-2", "sp-19-3", "sp-19-4", "sp-19-5", "sp-19-6"],
  },
  {
    id: 20,
    stage: "fluent",
    hoursBand: "3,400–3,800h+",
    title: "Fluency Capstone",
    description:
      "Mixed-register days, phone calls, topic pivots, unfinished sentences. Capstone.",
    lessonIds: ["sp-20-1", "sp-20-2", "sp-20-3", "sp-20-4", "sp-20-5", "sp-20-6"],
  },
];

export const speakingLessonOrder = speakingUnits.flatMap((u) => u.lessonIds);
