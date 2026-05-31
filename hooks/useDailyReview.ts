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
  const [dismissed, setDismissed] = useState(false);
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

  // Whether the card should currently offer a question. Gated on
  // `selectedIndex === null` for the already-done case so that answering today
  // (which flips alreadyDone true) does NOT hide the question being answered —
  // that was the bug where the whole card vanished the instant you answered.
  const eligible =
    !loading && completions.length >= 3 && !dismissed && !(alreadyDone && selectedIndex === null);

  // Freeze the picked question for the session. pickReviewQuestion is random AND
  // excludes reviewState.lastQuestionId, so re-deriving it after answer() writes
  // lastQuestionId would swap in a different question under the answered-state UI.
  const [picked, setPicked] = useState<ReviewQuestion | null>(null);
  useEffect(() => {
    if (eligible && !picked) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPicked(pickReviewQuestion(completions, reviewState));
    }
  }, [eligible, picked, completions, reviewState]);

  const question = eligible ? picked : null;

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
    setDismissed(true);
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
