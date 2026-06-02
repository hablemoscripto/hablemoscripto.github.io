import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
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

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { addXp, checkAchievements, refreshStreak, xp } = useGamification();

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

      const formattedProgress: LessonProgress[] = (data || []).map((item: { lesson_id: number; completed: boolean; quiz_score: number | null; completed_at: string | null }) => ({
        lessonId: item.lesson_id,
        completed: item.completed,
        quizScore: item.quiz_score,
        completedAt: item.completed_at,
      }));

      setProgress(formattedProgress);

      // Retroactive achievement check (silent — no toasts on page load).
      // Use authoritative values rather than the context closures: XP is exactly
      // 100 per completed lesson, and the streak is recomputed here. The closures
      // (xp/streak) can still be 0 on first load because GamificationContext's
      // fetchUserStats races this — which left streak achievements (streak_3/_7)
      // never unlocking even with a qualifying streak.
      const completedItems = formattedProgress.filter(p => p.completed);
      const allLessons = getAllLessonsOrdered();
      const completedCount = completedItems.length;
      const totalLessons = allLessons.length;
      const freshStreak = await refreshStreak();
      checkAchievements({
        completedLessonIds: completedItems.map(p => p.lessonId),
        completedCount,
        totalLessons,
        progressPercentage: totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0,
        xp: completedCount * 100,
        streak: freshStreak,
      }, true);
    } catch (error) {
      reportError(error, { component: 'ProgressContext', action: 'loadProgress' });
    } finally {
      setLoading(false);
    }
  }, [user, checkAchievements, refreshStreak]);

  useEffect(() => {
    if (user) {
      loadProgress();
    } else {
      setProgress([]);
      setLoading(false);
    }
  }, [user, loadProgress]);

  const isLessonCompleted = useCallback((lessonId: number): boolean => {
    return progress.some((p) => p.lessonId === lessonId && p.completed);
  }, [progress]);

  const getQuizScore = useCallback((lessonId: number): number | null => {
    const lesson = progress.find((p) => p.lessonId === lessonId);
    return lesson?.quizScore ?? null;
  }, [progress]);

  const markLessonComplete = useCallback(async (lessonId: number, quizScore?: number): Promise<boolean> => {
    if (!user) return false;

    const wasAlreadyCompleted = progress.some(p => p.lessonId === lessonId && p.completed);

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          lesson_id: lessonId,
          completed: true,
          quiz_score: quizScore ?? null,
          completed_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,lesson_id'
        });

      if (error) {
        reportError(error, { component: 'ProgressContext', action: 'markLessonComplete' });
        return false;
      }

      // Update local state
      setProgress((prev) => {
        const existing = prev.find((p) => p.lessonId === lessonId);
        if (existing) {
          return prev.map((p) =>
            p.lessonId === lessonId
              ? { ...p, completed: true, quizScore: quizScore ?? p.quizScore, completedAt: new Date().toISOString() }
              : p
          );
        }
        return [
          ...prev,
          {
            lessonId,
            completed: true,
            quizScore: quizScore ?? null,
            completedAt: new Date().toISOString(),
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

      const allLessons = getAllLessonsOrdered();
      const updatedCompleted = [...progress.filter(p => p.completed).map(p => p.lessonId), lessonId];
      const completedCount = updatedCompleted.length;
      const totalLessons = allLessons.length;
      const newXp = xp + 100;
      checkAchievements({
        completedLessonIds: updatedCompleted,
        completedCount,
        totalLessons,
        progressPercentage: totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0,
        xp: newXp,
        streak: newStreak,
      });
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
