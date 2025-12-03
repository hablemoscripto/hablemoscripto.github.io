import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';
import { useGamification } from './GamificationContext';

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
  markLessonComplete: (lessonId: number, quizScore?: number) => Promise<void>;
  getCompletedCount: () => number;
  getTotalLessons: () => number;
  getProgressPercentage: () => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { addXp } = useGamification();

  // Load progress when user changes
  useEffect(() => {
    if (user) {
      loadProgress();
    } else {
      setProgress([]);
      setLoading(false);
    }
  }, [user]);

  const loadProgress = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error loading progress:', error);
        return;
      }

      const formattedProgress: LessonProgress[] = (data || []).map((item: any) => ({
        lessonId: item.lesson_id,
        completed: item.completed,
        quizScore: item.quiz_score,
        completedAt: item.completed_at,
      }));

      setProgress(formattedProgress);
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const isLessonCompleted = (lessonId: number): boolean => {
    return progress.some((p) => p.lessonId === lessonId && p.completed);
  };

  const getQuizScore = (lessonId: number): number | null => {
    const lesson = progress.find((p) => p.lessonId === lessonId);
    return lesson?.quizScore ?? null;
  };

  const markLessonComplete = async (lessonId: number, quizScore?: number) => {
    if (!user) return;

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
        console.error('Error saving progress:', error);
        return;
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

        // If it's a new completion, award XP
        // We need to access addXp here. Since we can't easily use the hook inside the setState callback,
        // we'll do it outside.
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

      // Award XP if this is a new completion (or we just want to reward re-completion? No, usually just once)
      // We check if it was already completed in the state before this update
      const wasAlreadyCompleted = progress.some(p => p.lessonId === lessonId && p.completed);
      if (!wasAlreadyCompleted) {
        // We need to access the context. 
        // Since ProgressProvider is a component, we can use the hook at the top level.
        // But we need to make sure we imported it.
        // We will assume 'addXp' is available from props or context.
        // Wait, we need to use useGamification() inside ProgressProvider.
      }
    } catch (error) {
      console.error('Error saving progress:', error);
    }

    // Award XP if it wasn't already completed
    const wasAlreadyCompleted = progress.some(p => p.lessonId === lessonId && p.completed);
    if (!wasAlreadyCompleted) {
      addXp(100);
    }
  };

  const getCompletedCount = (): number => {
    return progress.filter((p) => p.completed).length;
  };

  // Total lessons across all levels: Beginner (18) + Intermediate (16) + Advanced (14) = 48
  const getTotalLessons = (): number => {
    return 48;
  };

  const getProgressPercentage = (): number => {
    const total = getTotalLessons();
    if (total === 0) return 0;
    return Math.round((getCompletedCount() / total) * 100);
  };

  const value = {
    progress,
    loading,
    isLessonCompleted,
    getQuizScore,
    markLessonComplete,
    getCompletedCount,
    getTotalLessons,
    getProgressPercentage,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
