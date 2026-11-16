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

const LEVEL_SEQUENCE: { id: CourseLevelId; data: typeof BEGINNER_LEVEL }[] = [
  { id: 'beginner', data: BEGINNER_LEVEL },
  { id: 'intermediate', data: INTERMEDIATE_LEVEL },
  { id: 'advanced', data: ADVANCED_LEVEL },
];

interface PlacedLesson {
  id: number;
  levelId: CourseLevelId;
  moduleIndex: number;
  lessonIndex: number;
  optional: boolean;
}

const PLACED: PlacedLesson[] = LEVEL_SEQUENCE.flatMap(({ id: levelId, data }) =>
  data.modules.flatMap((module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      id: lesson.id,
      levelId,
      moduleIndex,
      lessonIndex,
      optional: Boolean(module.optional),
    }))
  )
);

const PLACED_BY_ID = new Map(PLACED.map((lesson) => [lesson.id, lesson]));

function lastCoreLessonOfLevel(levelId: CourseLevelId): number | null {
  const core = PLACED.filter((lesson) => lesson.levelId === levelId && !lesson.optional);
  return core.length ? core[core.length - 1].id : null;
}

export const getCoreLessonIdsForLevel = (levelId: CourseLevelId): number[] =>
  PLACED.filter((lesson) => lesson.levelId === levelId && !lesson.optional).map(
    (lesson) => lesson.id
  );

/**
 * Required-path predecessor. Optional modules do not sit on this chain:
 * the first lesson of an optional module depends on the previous level's
 * last core lesson, and the lesson after a core module skips optional ones.
 */
export function getSequentialPredecessor(lessonId: number): number | null {
  const placed = PLACED_BY_ID.get(lessonId);
  if (!placed) return null;

  if (placed.lessonIndex > 0) {
    const previous = PLACED.find(
      (lesson) =>
        lesson.levelId === placed.levelId &&
        lesson.moduleIndex === placed.moduleIndex &&
        lesson.lessonIndex === placed.lessonIndex - 1
    );
    return previous ? previous.id : null;
  }

  if (placed.optional) {
    const levelIndex = LEVEL_SEQUENCE.findIndex((level) => level.id === placed.levelId);
    if (levelIndex <= 0) return null;
    return lastCoreLessonOfLevel(LEVEL_SEQUENCE[levelIndex - 1].id);
  }

  const earlierCore = PLACED.filter(
    (lesson) =>
      lesson.levelId === placed.levelId &&
      !lesson.optional &&
      lesson.moduleIndex < placed.moduleIndex
  );
  if (earlierCore.length) return earlierCore[earlierCore.length - 1].id;

  const levelIndex = LEVEL_SEQUENCE.findIndex((level) => level.id === placed.levelId);
  if (levelIndex <= 0) return null;
  return lastCoreLessonOfLevel(LEVEL_SEQUENCE[levelIndex - 1].id);
}

/** Mirror of getSequentialPredecessor. An optional module ends at its last lesson. */
export function getSequentialSuccessor(lessonId: number): number | null {
  const placed = PLACED_BY_ID.get(lessonId);
  if (!placed) return null;

  const moduleLessons = PLACED.filter(
    (lesson) => lesson.levelId === placed.levelId && lesson.moduleIndex === placed.moduleIndex
  );
  if (placed.lessonIndex < moduleLessons.length - 1) {
    return moduleLessons[placed.lessonIndex + 1].id;
  }

  if (placed.optional) return null;

  const laterCore = PLACED.filter(
    (lesson) =>
      lesson.levelId === placed.levelId &&
      !lesson.optional &&
      lesson.moduleIndex > placed.moduleIndex
  );
  if (laterCore.length) return laterCore[0].id;

  const levelIndex = LEVEL_SEQUENCE.findIndex((level) => level.id === placed.levelId);
  if (levelIndex < 0 || levelIndex === LEVEL_SEQUENCE.length - 1) return null;
  const nextCore = PLACED.filter(
    (lesson) => lesson.levelId === LEVEL_SEQUENCE[levelIndex + 1].id && !lesson.optional
  );
  return nextCore.length ? nextCore[0].id : null;
}

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
  const lessonIds = getCoreLessonIdsForLevel(levelId);
  return lessonIds.length > 0 && lessonIds.every(isLessonCompleted);
};

export interface LessonRef {
  id: number;
  title: string;
}

/** Earliest incomplete lesson on the required path before `lessonId`, or null. */
export function getFirstIncompletePrerequisite(
  lessonId: number,
  isLessonCompleted: (id: number) => boolean
): LessonRef | null {
  const all = getAllLessonsOrdered();
  const byId = new Map(all.map((l) => [l.id, l]));
  let cursor = getSequentialPredecessor(lessonId);
  let earliest: number | null = null;
  const seen = new Set<number>();
  while (cursor !== null && !seen.has(cursor)) {
    seen.add(cursor);
    if (!isLessonCompleted(cursor)) earliest = cursor;
    cursor = getSequentialPredecessor(cursor);
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
  const byId = new Map(ordered.map((lesson) => [lesson.id, lesson]));
  const readableIncomplete = (lesson: Lesson) =>
    !isLessonCompleted(lesson.id) && canReadLesson(lesson.id);

  if (lastLessonId) {
    const anchor = byId.get(lastLessonId);
    if (anchor && readableIncomplete(anchor)) {
      return { id: anchor.id, title: anchor.title, resuming: true };
    }
  }

  for (const placed of PLACED) {
    if (placed.optional) continue;
    const lesson = byId.get(placed.id);
    if (lesson && readableIncomplete(lesson)) {
      return { id: lesson.id, title: lesson.title, resuming: false };
    }
  }
  return null;
}
