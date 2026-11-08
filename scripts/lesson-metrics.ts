/* eslint-disable @typescript-eslint/no-explicit-any */
import { LESSON_INFOGRAPHICS } from '../data/lessonInfographics';

export const WORDS_PER_MINUTE = 200;
export const SECONDS_PER_QUESTION = 45;
export const SECONDS_PER_IMAGE = 30;
export const SECONDS_PER_INFOGRAPHIC = 60;

function sectionText(s: any): string[] {
  return [
    s.title,
    s.content,
    s.imageSummary,
    s.highlight?.title,
    s.highlight?.text,
    ...(s.features ?? []).flatMap((f: any) => [f.title, f.text]),
    ...(s.items ?? []),
    s.leftSide?.title,
    ...(s.leftSide?.points ?? []),
    s.rightSide?.title,
    ...(s.rightSide?.points ?? []),
    ...(s.terms ?? []).flatMap((t: any) => [t.term, t.definition, t.whyItMatters]),
  ].filter((x): x is string => typeof x === 'string');
}

export function countWords(text: string): number {
  return text.replace(/[*_#>`[\]()|]/g, ' ').split(/\s+/).filter(Boolean).length;
}

export function lessonWords(lesson: any): number {
  return (lesson.sections ?? []).flatMap(sectionText).reduce((n: number, t: string) => n + countWords(t), 0);
}

export function lessonQuestions(lesson: any): number {
  const quiz = lesson.quiz?.questions?.length ?? 0;
  const checkpoints = (lesson.checkpointQuizzes ?? []).reduce(
    (n: number, c: any) => n + (c.questions?.length ?? 0),
    0
  );
  return quiz + checkpoints;
}

export function lessonVisuals(lesson: any): { images: number; infographics: number } {
  const titles = new Set((lesson.sections ?? []).map((s: any) => s.title));
  return {
    images: (lesson.sections ?? []).filter((s: any) => s.image).length,
    infographics: Object.keys(LESSON_INFOGRAPHICS[lesson.id] ?? {}).filter((t) => titles.has(t)).length,
  };
}

export function computeLessonMinutes(lesson: any): number {
  const { images, infographics } = lessonVisuals(lesson);
  const raw =
    lessonWords(lesson) / WORDS_PER_MINUTE +
    (lessonQuestions(lesson) * SECONDS_PER_QUESTION +
      images * SECONDS_PER_IMAGE +
      infographics * SECONDS_PER_INFOGRAPHIC) /
      60 +
    (Number(lesson.practiceMinutes) || 0);
  return Math.max(5, Math.round(raw));
}

export function statedMinutes(duration: unknown): number | null {
  if (typeof duration !== 'string') return null;
  const m = duration.match(/(\d+)\s*min/);
  return m ? Number(m[1]) : null;
}

export function formatLevelDuration(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = Math.round((totalMinutes % 60) / 15) * 15;
  if (m === 60) return `~${h + 1} h`;
  if (h === 0) return `~${m} min`;
  return m ? `~${h} h ${m} min` : `~${h} h`;
}
