export const LESSON_PLACE_KEY = 'hc_lesson_place';

export interface LessonPlace {
  lessonId: number;
  sectionId: string;
  sectionTitle: string;
}

export function readLessonPlace(): LessonPlace | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(LESSON_PLACE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LessonPlace>;
    if (
      typeof parsed.lessonId !== 'number' ||
      typeof parsed.sectionId !== 'string' ||
      !parsed.sectionId ||
      typeof parsed.sectionTitle !== 'string'
    ) {
      return null;
    }
    return {
      lessonId: parsed.lessonId,
      sectionId: parsed.sectionId,
      sectionTitle: parsed.sectionTitle,
    };
  } catch {
    return null;
  }
}

export function writeLessonPlace(place: LessonPlace): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LESSON_PLACE_KEY, JSON.stringify(place));
    window.localStorage.setItem('last_lesson_id', String(place.lessonId));
  } catch {
    /* */
  }
}

/**
 * Index of the section the reader is in, or -1 while they are still above
 * the first heading. The chosen heading is the one closest to the reading
 * line from above, so the last section stays current at the bottom of the
 * lesson and the order of the measurements does not matter.
 */
export function currentSectionIndex(headingTops: number[], readingLine: number): number {
  let index = -1;
  let bestTop = -Infinity;
  for (let i = 0; i < headingTops.length; i++) {
    const top = headingTops[i];
    if (top <= readingLine && top >= bestTop) {
      bestTop = top;
      index = i;
    }
  }
  return index;
}

/**
 * Y position of the line just under the bars that cover the top of the
 * viewport. Clamped so a tall bar on a short window cannot push the line
 * off screen.
 */
export function readingLineFromInsets(bottoms: number[], viewportHeight: number): number {
  let inset = 0;
  for (const bottom of bottoms) {
    if (bottom > inset) inset = bottom;
  }
  const limit = Math.max(0, viewportHeight - 32);
  return Math.min(Math.max(inset, 0), limit);
}

export function lessonPath(lessonId: number, place?: LessonPlace | null): string {
  if (place && place.lessonId === lessonId && place.sectionId) {
    return `/education/lesson/${lessonId}#${place.sectionId}`;
  }
  return `/education/lesson/${lessonId}`;
}
