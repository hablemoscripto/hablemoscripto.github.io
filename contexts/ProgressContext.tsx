import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  ReactNode,
} from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';
import { useGamification } from './GamificationContext';
import { getAllLessonsOrdered } from '../utils/courseUtils';
import { trackLessonComplete } from '../utils/analytics';
import { reportError } from '../utils/errorReporting';

interface LessonProgress {
  lessonId: number;
  completed: boolean;
  quizScore: number | null;
  completedAt: string | null;
}

interface ProgressContextType {
  progress: LessonProgress[];
  loading: boolean;
  isLessonCompleted: (lessonId: number) => boolean;
  getQuizScore: (lessonId: number) => number | null;
  markLessonComplete: (lessonId: number, quizScore?: number) => Promise<boolean>;
  getCompletedCount: () => number;
  getTotalLessons: () => number;
  getProgressPercentage: () => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

function buildActivityDates(completedItems: LessonProgress[]): string[] {
  return completedItems
    .filter((p) => p.completedAt)
    .map((p) => new Date(p.completedAt as string).toLocaleDateString('en-CA'));
}

function buildAchievementSnapshot(
  completedItems: LessonProgress[],
  streak: number,
  xpOverride?: number
) {
  const allLessons = getAllLessonsOrdered();
  const completedCount = completedItems.length;
  const totalLessons = allLessons.length;
  return {
    completedLessonIds: completedItems.map((p) => p.lessonId),
    completedCount,
    totalLessons,
    progressPercentage: totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0,
    xp: xpOverride ?? completedCount * 100,
    streak,
    completions: completedItems.map((p) => ({
      lessonId: p.lessonId,
      completedAt: p.completedAt,
    })),
    activityDates: buildActivityDates(completedItems),
  };
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const {
    addXp,
    checkAchievements,
    refreshStreak,
    xp,
    loading: gamificationLoading,
  } = useGamification();
  // Silent retroactive check + date repair runs once per user after both
  // progress and existing achievements have loaded (avoids the race that
  // stamped every logro with "now").
  const silentCheckUserRef = useRef<string | null>(null);

  const loadProgress = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_progress')
        .select('lesson_id, completed, quiz_score, completed_at')
        .eq('user_id', user.id);

      if (error) {
        reportError(error, { component: 'ProgressContext', action: 'loadProgress' });
        return;
      }

      const formattedProgress: LessonProgress[] = (data || []).map(
        (item: {
          lesson_id: number;
          completed: boolean;
          quiz_score: number | null;
          completed_at: string | null;
        }) => ({
          lessonId: item.lesson_id,
          completed: item.completed,
          quizScore: item.quiz_score,
          completedAt: item.completed_at,
        })
      );

      setProgress(formattedProgress);
    } catch (error) {
      reportError(error, { component: 'ProgressContext', action: 'loadProgress' });
    } finally {
      setLoading(false);
    }
    // Keyed on user.id (not the object): auth events mint fresh user objects,
    // and identity-keying refired this whole load several times per page view.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  useEffect(() => {
    if (user) {
      loadProgress();
    } else {
      setProgress([]);
      setLoading(false);
      silentCheckUserRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, loadProgress]);

  // After achievements are in memory and progress is loaded: grant any missing
  // logros and rewrite unlocked_at earlier when lesson history proves it.
  useEffect(() => {
    if (!user || loading || gamificationLoading) return;
    if (silentCheckUserRef.current === user.id) return;
    silentCheckUserRef.current = user.id;

    const completedItems = progress.filter((p) => p.completed);
    void (async () => {
      const freshStreak = await refreshStreak();
      // Review days also count for streak logros; missing table degrades fine.
      const { data: reviews, error: reviewsError } = await supabase
        .from('daily_review_activity')
        .select('review_date')
        .eq('user_id', user.id);
      const reviewDates =
        reviewsError || !reviews
          ? []
          : reviews.filter((r) => r.review_date).map((r) => String(r.review_date));

      const snapshot = buildAchievementSnapshot(completedItems, freshStreak);
      snapshot.activityDates = [...new Set([...snapshot.activityDates, ...reviewDates])];
      checkAchievements(snapshot, true);
    })();
  }, [user, loading, gamificationLoading, progress, refreshStreak, checkAchievements]);

  const isLessonCompleted = useCallback((lessonId: number): boolean => {
    return progress.some((p) => p.lessonId === lessonId && p.completed);
  }, [progress]);

  const getQuizScore = useCallback((lessonId: number): number | null => {
    const lesson = progress.find((p) => p.lessonId === lessonId);
    return lesson?.quizScore ?? null;
  }, [progress]);

  const markLessonComplete = useCallback(async (lessonId: number, quizScore?: number): Promise<boolean> => {
    if (!user) return false;

    const existing = progress.find((p) => p.lessonId === lessonId);
    const wasAlreadyCompleted = Boolean(existing?.completed);
    const now = new Date().toISOString();
    // Never clobber the original acquisition timestamp on quiz retakes — it
    // is the source of truth for logro dates.
    const completedAt = wasAlreadyCompleted && existing?.completedAt ? existing.completedAt : now;

    try {
      const payload: {
        user_id: string;
        lesson_id: number;
        completed: boolean;
        quiz_score: number | null;
        completed_at?: string;
      } = {
        user_id: user.id,
        lesson_id: lessonId,
        completed: true,
        quiz_score: quizScore ?? null,
      };
      if (!wasAlreadyCompleted) {
        payload.completed_at = completedAt;
      }

      const { error } = await supabase.from('user_progress').upsert(payload, {
        onConflict: 'user_id,lesson_id',
      });

      if (error) {
        reportError(error, { component: 'ProgressContext', action: 'markLessonComplete' });
        return false;
      }

      setProgress((prev) => {
        const row = prev.find((p) => p.lessonId === lessonId);
        if (row) {
          return prev.map((p) =>
            p.lessonId === lessonId
              ? {
                  ...p,
                  completed: true,
                  quizScore: quizScore ?? p.quizScore,
                  completedAt: p.completedAt ?? completedAt,
                }
              : p
          );
        }
        return [
          ...prev,
          {
            lessonId,
            completed: true,
            quizScore: quizScore ?? null,
            completedAt,
          },
        ];
      });
    } catch (error) {
      reportError(error, { component: 'ProgressContext', action: 'markLessonComplete' });
      return false;
    }

    // Award XP and check achievements for new completions only
    if (!wasAlreadyCompleted) {
      addXp(100);
      trackLessonComplete(lessonId, quizScore);

      // Recompute the streak now so the navbar updates immediately and the
      // streak achievements are evaluated against today's activity rather than
      // the value frozen at login.
      const newStreak = await refreshStreak();

      const completedItems: LessonProgress[] = [
        ...progress.filter((p) => p.completed && p.lessonId !== lessonId),
        {
          lessonId,
          completed: true,
          quizScore: quizScore ?? null,
          completedAt,
        },
      ];
      checkAchievements(buildAchievementSnapshot(completedItems, newStreak, xp + 100));
    }

    return true;
  }, [user, progress, xp, addXp, checkAchievements, refreshStreak]);

  const getCompletedCount = useCallback((): number => {
    return progress.filter((p) => p.completed).length;
  }, [progress]);

  const getTotalLessons = useCallback((): number => {
    return getAllLessonsOrdered().length;
  }, []);

  const getProgressPercentage = useCallback((): number => {
    const total = getTotalLessons();
    if (total === 0) return 0;
    return Math.round((getCompletedCount() / total) * 100);
  }, [getCompletedCount, getTotalLessons]);

  const value = useMemo(() => ({
    progress,
    loading,
    isLessonCompleted,
    getQuizScore,
    markLessonComplete,
    getCompletedCount,
    getTotalLessons,
    getProgressPercentage,
  }), [progress, loading, isLessonCompleted, getQuizScore, markLessonComplete, getCompletedCount, getTotalLessons, getProgressPercentage]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
