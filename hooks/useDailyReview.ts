import { useCallback, useEffect, useMemo, useState } from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { useGamification } from '../contexts/GamificationContext';
import { useAuth } from '../contexts/AuthContext';
import { getAllLessonsOrdered } from '../utils/courseUtils';
import {
  loadReviewState,
  logReviewActivity,
  MAX_REVIEWS_PER_DAY,
  pickReviewQuestion,
  recordReviewAnswer,
  REVIEW_XP,
  saveReviewState,
  todayISO,
  type ReviewQuestion,
  type ReviewState,
} from '../services/dailyReviewService';

export type ReviewStatus = 'hidden' | 'locked-teaser' | 'idle' | 'answered' | 'done-today';

interface UseDailyReviewResult {
  status: ReviewStatus;
  question: ReviewQuestion | null;
  selectedIndex: number | null;
  isCorrect: boolean | null;
  // Lessons still needed to unlock the daily review (only meaningful in
  // 'locked-teaser').
  lessonsToUnlock: number;
  // Questions the user can still answer today (drives the "una más" button).
  remainingToday: number;
  // True when the user has a streak that dies today unless they review or
  // complete a lesson before midnight.
  streakAtRisk: boolean;
  streak: number;
  xpPerReview: number;
  answer: (index: number) => void;
  nextQuestion: () => void;
  dismissUntilTomorrow: () => void;
}

/**
 * Provides the state machine for the daily review card.
 *
 * - `hidden`        — brand-new user (0 completions); nothing to tease yet
 * - `locked-teaser` — 1-2 completions; compact banner announcing the feature
 * - `idle`          — card shown, waiting for an answer
 * - `answered`      — feedback shown; user may pick "una más" (up to
 *                     MAX_REVIEWS_PER_DAY) or stop
 * - `done-today`    — compact banner state until midnight local time
 *
 * Answering a review is a first-class habit action: it awards REVIEW_XP,
 * logs to daily_review_activity (which qualifies the day for the streak),
 * and refreshes the streak so the navbar chip updates immediately.
 *
 * Persists state to localStorage so refreshing the page keeps the user in
 * the `done-today` state for the rest of the calendar day.
 */
export function useDailyReview(): UseDailyReviewResult {
  const { progress, loading } = useProgress();
  const { streak, addXp, xp, refreshStreak, checkAchievements } = useGamification();
  const { user } = useAuth();
  const [reviewState, setReviewState] = useState<ReviewState>(() => loadReviewState());
  const [dismissed, setDismissed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  // True while the user is actively reviewing this visit — keeps the card in
  // question mode after the first answer flips "already done today" on.
  const [sessionActive, setSessionActive] = useState(false);

  const completions = useMemo(
    () =>
      progress
        .filter((p) => p.completed && p.completedAt)
        .map((p) => ({ lessonId: p.lessonId, completedAt: p.completedAt! })),
    [progress],
  );

  const today = todayISO();
  const alreadyDone = reviewState.lastDate === today && reviewState.countToday > 0;
  const remainingToday =
    reviewState.lastDate === today
      ? Math.max(0, MAX_REVIEWS_PER_DAY - reviewState.countToday)
      : MAX_REVIEWS_PER_DAY;

  // Whether the card should currently offer a question. A finished-for-today
  // user only re-enters question mode within an active session (the "una más"
  // flow) — on a fresh page load they see the done-today banner.
  const eligible =
    !loading &&
    completions.length >= 3 &&
    !dismissed &&
    (!alreadyDone || sessionActive) &&
    remainingToday >= 0;

  // Freeze the picked question for the session. pickReviewQuestion is random AND
  // excludes reviewState.lastQuestionId, so re-deriving it after answer() writes
  // lastQuestionId would swap in a different question under the answered-state UI.
  const [picked, setPicked] = useState<ReviewQuestion | null>(null);
  useEffect(() => {
    if (eligible && !picked) {
       
      setPicked(pickReviewQuestion(completions, reviewState));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eligible, picked, completions]);

  const question = eligible ? picked : null;

  // A completion today also protects the streak — only warn when NOTHING
  // qualifying has happened yet today.
  const completedLessonToday = useMemo(
    () => completions.some((c) => todayISO(new Date(c.completedAt)) === today),
    [completions, today],
  );
  const streakAtRisk = streak >= 1 && !completedLessonToday && !alreadyDone;

  const answer = useCallback(
    (index: number) => {
      if (!question || selectedIndex !== null) return;
      const correct = index === question.correctIndex;
      setSelectedIndex(index);
      setIsCorrect(correct);
      setSessionActive(true);

      const nextState: ReviewState = {
        lastDate: today,
        lastQuestionId: question.questionId,
        countToday: reviewState.lastDate === today ? reviewState.countToday + 1 : 1,
      };
      setReviewState(nextState);
      saveReviewState(nextState);
      recordReviewAnswer(question.questionId, correct);
      addXp(REVIEW_XP);

      if (user) {
        // Persist the activity (streak qualification), then refresh the streak
        // so the navbar chip updates now, not on the next page load, and check
        // streak/XP achievements against the fresh values.
        void logReviewActivity(user.id, question.questionId, correct).then(async (logged) => {
          if (!logged) return;
          const freshStreak = await refreshStreak();
          const completedCount = completions.length;
          const totalLessons = getAllLessonsOrdered().length;
          checkAchievements({
            completedLessonIds: completions.map((c) => c.lessonId),
            completedCount,
            totalLessons,
            progressPercentage:
              totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0,
            xp: xp + REVIEW_XP,
            streak: freshStreak,
          });
        });
      }
    },
    [question, selectedIndex, today, reviewState, user, addXp, refreshStreak, checkAchievements, completions, xp],
  );

  // "Una más" — swap in a fresh question (the just-answered one is excluded
  // via lastQuestionId and the recently-seen window).
  const nextQuestion = useCallback(() => {
    if (remainingToday <= 0) return;
    const next = pickReviewQuestion(completions, reviewState);
    if (!next) return;
    setSelectedIndex(null);
    setIsCorrect(null);
    setPicked(next);
  }, [remainingToday, completions, reviewState]);

  const dismissUntilTomorrow = useCallback(() => {
    const nextState: ReviewState = {
      lastDate: today,
      lastQuestionId: reviewState.lastQuestionId,
      countToday: reviewState.lastDate === today ? reviewState.countToday : 0,
    };
    setReviewState(nextState);
    saveReviewState(nextState);
    setDismissed(true);
    setSessionActive(false);
    setSelectedIndex(null);
    setIsCorrect(null);
  }, [today, reviewState]);

  const status: ReviewStatus = useMemo(() => {
    if (loading) return 'hidden';
    if (completions.length === 0) return 'hidden';
    if (completions.length < 3) return 'locked-teaser';
    if (selectedIndex !== null) return 'answered';
    if (question) return 'idle';
    if (alreadyDone || dismissed) return 'done-today';
    return 'hidden';
  }, [loading, completions.length, alreadyDone, dismissed, selectedIndex, question]);

  return {
    status,
    question,
    selectedIndex,
    isCorrect,
    lessonsToUnlock: Math.max(0, 3 - completions.length),
    remainingToday,
    streakAtRisk,
    streak,
    xpPerReview: REVIEW_XP,
    answer,
    nextQuestion,
    dismissUntilTomorrow,
  };
}
