import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from '../data/levels';
import type { Lesson } from '../data/courseData';

export const getAllLessonsOrdered = (): Lesson[] => {
  const levels = [BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL];
  const allLessons: Lesson[] = [];

  levels.forEach((level) => {
    level.modules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        allLessons.push(lesson);
      });
    });
  });

  return allLessons;
};

export const getPreviousLessonId = (currentLessonId: number): number | null => {
  const allLessons = getAllLessonsOrdered();
  const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId);

  if (currentIndex <= 0) {
    return null;
  }

  return allLessons[currentIndex - 1].id;
};

export const getNextLessonId = (currentLessonId: number): number | null => {
  const allLessons = getAllLessonsOrdered();
  const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId);

  if (currentIndex === -1 || currentIndex === allLessons.length - 1) {
    return null;
  }

  return allLessons[currentIndex + 1].id;
};

export const getLevelForLesson = (lessonId: number): CourseLevelId => {
  const levels = [
    { data: BEGINNER_LEVEL, route: 'beginner' as const },
    { data: INTERMEDIATE_LEVEL, route: 'intermediate' as const },
    { data: ADVANCED_LEVEL, route: 'advanced' as const },
  ];

  for (const level of levels) {
    for (const module of level.data.modules) {
      if (module.lessons.some((l) => l.id === lessonId)) {
        return level.route;
      }
    }
  }

  return 'beginner'; // Default fallback
};

export const getBeginnerLessonIds = (): number[] =>
  BEGINNER_LEVEL.modules.flatMap((m) => m.lessons.map((l) => l.id));

export const getIntermediateLessonIds = (): number[] =>
  INTERMEDIATE_LEVEL.modules.flatMap((m) => m.lessons.map((l) => l.id));

export const getAdvancedLessonIds = (): number[] =>
  ADVANCED_LEVEL.modules.flatMap((m) => m.lessons.map((l) => l.id));

export type CourseLevelId = 'beginner' | 'intermediate' | 'advanced';

export const getLessonIdsForLevel = (levelId: CourseLevelId): number[] => {
  if (levelId === 'beginner') return getBeginnerLessonIds();
  if (levelId === 'intermediate') return getIntermediateLessonIds();
  return getAdvancedLessonIds();
};

export const isLevelComplete = (
  levelId: CourseLevelId,
  isLessonCompleted: (lessonId: number) => boolean
): boolean => {
  const lessonIds = getLessonIdsForLevel(levelId);
  return lessonIds.length > 0 && lessonIds.every(isLessonCompleted);
};

export interface LessonRef {
  id: number;
  title: string;
}

/** Earliest incomplete lesson before `lessonId`, or null if none. */
export function getFirstIncompletePrerequisite(
  lessonId: number,
  isLessonCompleted: (id: number) => boolean
): LessonRef | null {
  const all = getAllLessonsOrdered();
  const byId = new Map(all.map((l) => [l.id, l]));
  let cursor = getPreviousLessonId(lessonId);
  let earliest: number | null = null;
  while (cursor !== null) {
    if (!isLessonCompleted(cursor)) earliest = cursor;
    cursor = getPreviousLessonId(cursor);
  }
  if (earliest === null) return null;
  const lesson = byId.get(earliest);
  return lesson ? { id: lesson.id, title: lesson.title } : null;
}

export function isSequentiallyLocked(
  lessonId: number,
  isLessonCompleted: (id: number) => boolean
): boolean {
  if (isLessonCompleted(lessonId)) return false;
  return getFirstIncompletePrerequisite(lessonId, isLessonCompleted) !== null;
}

export function getContinueTarget(
  lastLessonId: number | null,
  isLessonCompleted: (id: number) => boolean,
  canReadLesson: (id: number) => boolean
): (LessonRef & { resuming: boolean }) | null {
  const ordered = getAllLessonsOrdered();
  const readableIncomplete = (lesson: Lesson) =>
    !isLessonCompleted(lesson.id) && canReadLesson(lesson.id);

  const anchorIdx = lastLessonId ? ordered.findIndex((l) => l.id === lastLessonId) : -1;
  if (anchorIdx >= 0 && readableIncomplete(ordered[anchorIdx])) {
    return { id: ordered[anchorIdx].id, title: ordered[anchorIdx].title, resuming: true };
  }
  for (let i = anchorIdx + 1; i < ordered.length; i++) {
    if (readableIncomplete(ordered[i])) {
      return { id: ordered[i].id, title: ordered[i].title, resuming: false };
    }
  }
  const first = ordered.find(readableIncomplete);
  return first ? { id: first.id, title: first.title, resuming: false } : null;
}
