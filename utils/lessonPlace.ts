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

export function lessonPath(lessonId: number, place?: LessonPlace | null): string {
  if (place && place.lessonId === lessonId && place.sectionId) {
    return `/education/lesson/${lessonId}#${place.sectionId}`;
  }
  return `/education/lesson/${lessonId}`;
}
