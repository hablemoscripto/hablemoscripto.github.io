import { LESSONS_DATA } from '../data/courseData';
import { supabase } from '../lib/supabase';
import { shuffleQuizOptions } from '../utils/quizShuffle';
import { reportError } from '../utils/errorReporting';

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
  countToday: number; // questions answered on lastDate
}

export { REVIEW_XP, MAX_REVIEWS_PER_DAY } from './reviewConstants';

const MIN_COMPLETIONS_FOR_REVIEW = 3;
// A question answered within this window is excluded from the pick (falls back
// to lastQuestionId-only exclusion if that would empty the pool).
const RECENTLY_SEEN_DAYS = 2;

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

interface RawReviewSource {
  id: string;
  type?: string;
  question: string;
  options: { id: string; text: string }[] | string[];
  correctAnswer: string | number;
  explanation: string;
}

// Normalize a lesson's quiz question into the ReviewQuestion shape.
// courseData uses legacy format: correctAnswer as letter ('a'-'d'), options as {id, text}[].
// New format (used by Phase 2 checkpoints) uses index + string[], but final quizzes remain legacy.
// Only single-answer multiple-choice questions are usable here — ordering,
// multi-select, and fill-in questions (present in paid lessons) return null.
function normalizeQuestion(
  q: RawReviewSource,
  lessonId: number,
  lessonTitle: string,
): ReviewQuestion | null {
  if (!q.question || !q.options || q.correctAnswer === undefined) return null;
  if (q.type && q.type !== 'multiple-choice') return null;
  if (typeof q.correctAnswer !== 'number' && typeof q.correctAnswer !== 'string') return null;

  // Flatten options to string[]
  const options = q.options.map((opt) =>
    typeof opt === 'string' ? opt : opt.text,
  );
  if (options.length < 2) return null;

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

  // Same deterministic shuffle as the lesson quiz (matching seed) so the review
  // card isn't biased toward the source's ~73%-"B" correct-answer position.
  const shuffled = shuffleQuizOptions(options, correctIndex, `${lessonId}-${q.id}`);

  return {
    questionId: `${lessonId}-${q.id}`,
    lessonId,
    lessonTitle,
    question: q.question,
    options: shuffled.options,
    correctIndex: shuffled.correctIndex,
    explanation: q.explanation || '',
  };
}

/**
 * Pick a single review question drawn from completed lessons, weighted by
 * time-since-completion to approximate spaced repetition. Questions the user
 * got wrong before are weighted up (they need the retrieval practice most);
 * questions seen in the last RECENTLY_SEEN_DAYS are excluded when possible.
 *
 * The pool covers free lessons (bundled) plus any paid lessons the client has
 * cached quiz questions for (cached at fetch time — see cachePaidLessonQuestions).
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

  const history = loadReviewHistory();
  const paidPool = loadPaidReviewPool();

  // Build a pool of (weight, ReviewQuestion) tuples from every completed
  // lesson's final quiz.
  const pool: { weight: number; rq: ReviewQuestion; seenRecently: boolean }[] = [];

  for (const c of completions) {
    const lesson = LESSONS_DATA[c.lessonId];
    const paid = lesson ? null : paidPool[c.lessonId];
    const questions = lesson?.quiz?.questions ?? paid?.questions;
    const title = lesson?.title ?? paid?.title ?? `Lección ${c.lessonId}`;
    if (!Array.isArray(questions) || questions.length === 0) continue;

    const completedAt = new Date(c.completedAt);
    const ageDays = daysBetween(completedAt, now);
    const ageWeight = weightForAge(ageDays);

    for (const q of questions) {
      const rq = normalizeQuestion(q as RawReviewSource, c.lessonId, title);
      if (!rq) continue;
      // Exclude the question shown last to avoid immediate repetition.
      if (rq.questionId === state.lastQuestionId) continue;

      const h = history[rq.questionId];
      const seenRecently = h?.lastSeen
        ? daysBetween(new Date(h.lastSeen + 'T00:00:00'), now) <= RECENTLY_SEEN_DAYS
        : false;
      // Lapsed questions come back sooner and more often: up to 4x weight.
      const missBoost = 1 + Math.min(h?.misses ?? 0, 2) * 1.5;
      pool.push({ weight: ageWeight * missBoost, rq, seenRecently });
    }
  }

  if (pool.length === 0) return null;

  // Prefer questions not seen in the last few days; fall back to the full
  // pool when everything is recent (small pools early on).
  const fresh = pool.filter((p) => !p.seenRecently);
  const candidates = fresh.length > 0 ? fresh : pool;

  // Weighted random selection
  const totalWeight = candidates.reduce((sum, p) => sum + p.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const p of candidates) {
    roll -= p.weight;
    if (roll <= 0) return p.rq;
  }
  return candidates[candidates.length - 1]?.rq ?? null;
}

// ----- Per-question history (localStorage) — the spaced-repetition memory -----

interface QuestionHistory {
  lastSeen: string; // YYYY-MM-DD
  misses: number;   // wrong answers minus right answers, floored at 0
}

const HISTORY_KEY = 'hc_review_history_v1';

export function loadReviewHistory(): Record<string, QuestionHistory> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(HISTORY_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

// Record an answer: bumps lastSeen, and adjusts the miss counter that drives
// the "wrong answers come back sooner" weighting.
export function recordReviewAnswer(questionId: string, correct: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    const history = loadReviewHistory();
    const prev = history[questionId];
    history[questionId] = {
      lastSeen: todayISO(),
      misses: correct ? Math.max(0, (prev?.misses ?? 0) - 1) : (prev?.misses ?? 0) + 1,
    };
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    // localStorage disabled or full — non-fatal
  }
}

// ----- Paid-lesson question cache (localStorage) -----
// Paid lesson bodies are never bundled; they arrive via the gated Edge Function
// only for entitled users. Caching their quiz questions at fetch time lets the
// daily review draw from ALL completed lessons, not just the free tier —
// otherwise paying users review beginner material forever.

interface PaidPoolEntry {
  title: string;
  questions: RawReviewSource[];
}

const PAID_POOL_KEY = 'hc_paid_review_pool_v1';

export function loadPaidReviewPool(): Record<number, PaidPoolEntry> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(PAID_POOL_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function cachePaidLessonQuestions(lesson: {
  id: number;
  title?: string;
  quiz?: { questions?: unknown[] };
}): void {
  if (typeof window === 'undefined') return;
  try {
    const questions = (lesson.quiz?.questions ?? []) as RawReviewSource[];
    // Keep only questions the review card can render (single-answer MC).
    const usable = questions.filter(
      (q) =>
        q?.question &&
        Array.isArray(q.options) &&
        q.options.length >= 2 &&
        (typeof q.correctAnswer === 'number' || typeof q.correctAnswer === 'string') &&
        (!q.type || q.type === 'multiple-choice'),
    ).map((q) => ({
      id: q.id,
      type: q.type,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation || '',
    }));
    if (usable.length === 0) return;

    const pool = loadPaidReviewPool();
    pool[lesson.id] = { title: lesson.title || `Lección ${lesson.id}`, questions: usable };
    window.localStorage.setItem(PAID_POOL_KEY, JSON.stringify(pool));
  } catch {
    // localStorage disabled or full — non-fatal
  }
}

// ----- Server-side activity log — feeds streak + XP -----

// Fire-and-forget insert. Returns true on success. Degrades gracefully when
// the daily_review_activity table hasn't been migrated yet (or the network is
// down): the review still works locally, it just doesn't feed streak/XP.
export async function logReviewActivity(
  userId: string,
  questionId: string,
  correct: boolean,
): Promise<boolean> {
  try {
    const { error } = await supabase.from('daily_review_activity').insert({
      user_id: userId,
      review_date: todayISO(),
      question_id: questionId,
      correct,
    });
    if (error) {
      // 23505 = same question already logged today on another device — fine.
      if (error.code === '23505') return true;
      reportError(error, {
        component: 'dailyReviewService',
        action: 'logReviewActivity',
        metadata: { hint: 'Run supabase/migrations/2026-07-17_daily_review_activity.sql' },
      });
      return false;
    }
    return true;
  } catch (err) {
    reportError(err, { component: 'dailyReviewService', action: 'logReviewActivity' });
    return false;
  }
}

// ----- localStorage helpers -----

const STORAGE_KEY = 'hc_daily_review_state_v1';

export function loadReviewState(): ReviewState {
  if (typeof window === 'undefined') return { lastDate: null, lastQuestionId: null, countToday: 0 };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { lastDate: null, lastQuestionId: null, countToday: 0 };
    const parsed = JSON.parse(raw);
    return {
      lastDate: typeof parsed.lastDate === 'string' ? parsed.lastDate : null,
      lastQuestionId: typeof parsed.lastQuestionId === 'string' ? parsed.lastQuestionId : null,
      // Pre-existing states (written before countToday existed) answered at
      // most one question that day.
      countToday: typeof parsed.countToday === 'number' ? parsed.countToday : (parsed.lastDate ? 1 : 0),
    };
  } catch {
    return { lastDate: null, lastQuestionId: null, countToday: 0 };
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
