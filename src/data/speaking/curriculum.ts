import type { SpeakingLesson } from "@/lib/types";
import { speakingLessons712 } from "./units-7-12";
import { speakingLessons1316 } from "./units-13-16";
import { speakingLessonsFull16 } from "./units-full-1-6";
import { speakingLessons1720 } from "./units-17-20";

export { speakingUnits, speakingLessonOrder } from "./units";

export const speakingLessons: SpeakingLesson[] = [
  ...speakingLessonsFull16,
  ...speakingLessons712,
  ...speakingLessons1316,
  ...speakingLessons1720,
].sort((a, b) => a.unit - b.unit || a.order - b.order);

export function getSpeakingLesson(id: string) {
  return speakingLessons.find((l) => l.id === id);
}

export function getAllSpeakingLessonIds() {
  return speakingLessons.map((l) => l.id);
}
