import { LESSONS_DATA } from '../data/courseData';

// A question from a completed lesson, flattened for the review card.
// Handles both legacy format (options as {id, text}, correctAnswer as letter)
// and modern format (options as string[], correctAnswer as number index).
export interface ReviewQuestion {
  questionId: string;
  lessonId: number;
  lessonTitle: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Completion {
  lessonId: number;
  completedAt: string; // ISO timestamp
}

export interface ReviewState {
  lastDate: string | null; // YYYY-MM-DD
  lastQuestionId: string | null;
}

const MIN_COMPLETIONS_FOR_REVIEW = 3;

// Cepeda et al. (2006) — SR sweet spot is 10-20% of retention interval.
// For a course with lessons, questions from lessons completed 4-30 days ago
// give the strongest retrieval benefit.
function weightForAge(daysAgo: number): number {
  if (daysAgo <= 3) return 0.5;   // too recent, low SR benefit
  if (daysAgo <= 30) return 2;    // sweet spot
  return 1;                        // baseline — still useful
}

function daysBetween(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

// Normalize a lesson's quiz question into the ReviewQuestion shape.
// courseData uses legacy format: correctAnswer as letter ('a'-'d'), options as {id, text}[].
// New format (used by Phase 2 checkpoints) uses index + string[], but final quizzes remain legacy.
function normalizeQuestion(
  q: { id: string; question: string; options: { id: string; text: string }[] | string[]; correctAnswer: string | number; explanation: string },
  lessonId: number,
  lessonTitle: string,
): ReviewQuestion | null {
  if (!q.question || !q.options || q.correctAnswer === undefined) return null;

  // Flatten options to string[]
  const options = q.options.map((opt) =>
    typeof opt === 'string' ? opt : opt.text,
  );
  if (options.length === 0) return null;

  // Resolve correctAnswer to numeric index
  let correctIndex: number;
  if (typeof q.correctAnswer === 'number') {
    correctIndex = q.correctAnswer;
  } else {
    // Letter form: 'a' → 0, 'b' → 1, etc.
    const charCode = q.correctAnswer.toLowerCase().charCodeAt(0);
    correctIndex = charCode - 97; // 'a' = 97
  }
  if (correctIndex < 0 || correctIndex >= options.length) return null;

  return {
    questionId: `${lessonId}-${q.id}`,
    lessonId,
    lessonTitle,
    question: q.question,
    options,
    correctIndex,
    explanation: q.explanation || '',
  };
}

/**
 * Pick a single review question drawn from completed lessons, weighted by
 * time-since-completion to approximate spaced repetition.
 *
 * Returns null when the user has completed fewer than MIN_COMPLETIONS_FOR_REVIEW
 * lessons (no meaningful pool) or when every completed lesson lacks usable
 * quiz questions.
 */
export function pickReviewQuestion(
  completions: Completion[],
  state: ReviewState,
  now: Date = new Date(),
): ReviewQuestion | null {
  if (completions.length < MIN_COMPLETIONS_FOR_REVIEW) return null;

  // Build a pool of (weight, ReviewQuestion) tuples from every completed
  // lesson's final quiz.
  const pool: { weight: number; rq: ReviewQuestion }[] = [];

  for (const c of completions) {
    const lesson = (LESSONS_DATA as Record<number, any>)[c.lessonId];
    if (!lesson) continue;
    const questions = lesson.quiz?.questions;
    if (!Array.isArray(questions) || questions.length === 0) continue;

    const completedAt = new Date(c.completedAt);
    const ageDays = daysBetween(completedAt, now);
    const ageWeight = weightForAge(ageDays);

    for (const q of questions) {
      const rq = normalizeQuestion(q, lesson.id, lesson.title || `Lección ${lesson.id}`, );
      if (!rq) continue;
      // Exclude the question shown yesterday to avoid immediate repetition.
      if (rq.questionId === state.lastQuestionId) continue;
      pool.push({ weight: ageWeight, rq });
    }
  }

  if (pool.length === 0) return null;

  // Weighted random selection
  const totalWeight = pool.reduce((sum, p) => sum + p.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const p of pool) {
    roll -= p.weight;
    if (roll <= 0) return p.rq;
  }
  return pool[pool.length - 1]?.rq ?? null;
}

// ----- localStorage helpers -----

const STORAGE_KEY = 'hc_daily_review_state_v1';

export function loadReviewState(): ReviewState {
  if (typeof window === 'undefined') return { lastDate: null, lastQuestionId: null };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { lastDate: null, lastQuestionId: null };
    const parsed = JSON.parse(raw);
    return {
      lastDate: typeof parsed.lastDate === 'string' ? parsed.lastDate : null,
      lastQuestionId: typeof parsed.lastQuestionId === 'string' ? parsed.lastQuestionId : null,
    };
  } catch {
    return { lastDate: null, lastQuestionId: null };
  }
}

export function saveReviewState(state: ReviewState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage disabled or full — non-fatal
  }
}

export function todayISO(now: Date = new Date()): string {
  return now.toLocaleDateString('en-CA'); // YYYY-MM-DD
}
