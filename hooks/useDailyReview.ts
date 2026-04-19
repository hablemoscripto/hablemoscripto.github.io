import { useCallback, useEffect, useMemo, useState } from 'react';
import { useProgress } from '../contexts/ProgressContext';
import {
  loadReviewState,
  pickReviewQuestion,
  saveReviewState,
  todayISO,
  type ReviewQuestion,
  type ReviewState,
} from '../services/dailyReviewService';

export type ReviewStatus = 'hidden' | 'idle' | 'answered' | 'done-today';

interface UseDailyReviewResult {
  status: ReviewStatus;
  question: ReviewQuestion | null;
  selectedIndex: number | null;
  isCorrect: boolean | null;
  answer: (index: number) => void;
  dismissUntilTomorrow: () => void;
}

/**
 * Provides the state machine for the daily review card.
 *
 * - `hidden`        — user hasn't completed enough lessons yet (< 3)
 * - `idle`          — card shown, waiting for an answer
 * - `answered`      — user answered today; showing feedback
 * - `done-today`    — compact banner state until midnight local time
 *
 * Persists state to localStorage so refreshing the page keeps the user in
 * the `done-today` state for the rest of the calendar day.
 */
export function useDailyReview(): UseDailyReviewResult {
  const { progress, loading } = useProgress();
  const [reviewState, setReviewState] = useState<ReviewState>(() => loadReviewState());
  const [question, setQuestion] = useState<ReviewQuestion | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const completions = useMemo(
    () =>
      progress
        .filter((p) => p.completed && p.completedAt)
        .map((p) => ({ lessonId: p.lessonId, completedAt: p.completedAt! })),
    [progress],
  );

  const today = todayISO();
  const alreadyDone = reviewState.lastDate === today;

  // Pick a question on mount / when completions change / when day rolls.
  useEffect(() => {
    if (loading) return;
    if (alreadyDone) {
      setQuestion(null);
      return;
    }
    if (completions.length < 3) {
      setQuestion(null);
      return;
    }
    // Only pick once per render cycle; stable across re-renders until state changes.
    setQuestion((current) => current ?? pickReviewQuestion(completions, reviewState));
  }, [loading, completions, alreadyDone, reviewState]);

  const answer = useCallback(
    (index: number) => {
      if (!question || selectedIndex !== null) return;
      const correct = index === question.correctIndex;
      setSelectedIndex(index);
      setIsCorrect(correct);

      const nextState: ReviewState = {
        lastDate: today,
        lastQuestionId: question.questionId,
      };
      setReviewState(nextState);
      saveReviewState(nextState);
    },
    [question, selectedIndex, today],
  );

  const dismissUntilTomorrow = useCallback(() => {
    const nextState: ReviewState = {
      lastDate: today,
      lastQuestionId: reviewState.lastQuestionId,
    };
    setReviewState(nextState);
    saveReviewState(nextState);
    setQuestion(null);
    setSelectedIndex(null);
    setIsCorrect(null);
  }, [today, reviewState.lastQuestionId]);

  const status: ReviewStatus = useMemo(() => {
    if (loading) return 'hidden';
    if (completions.length < 3) return 'hidden';
    if (alreadyDone && selectedIndex === null) return 'done-today';
    if (selectedIndex !== null) return 'answered';
    if (question) return 'idle';
    return 'hidden';
  }, [loading, completions.length, alreadyDone, selectedIndex, question]);

  return {
    status,
    question,
    selectedIndex,
    isCorrect,
    answer,
    dismissUntilTomorrow,
  };
}
