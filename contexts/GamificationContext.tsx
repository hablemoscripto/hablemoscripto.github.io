import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';
import {
    getBeginnerLessonIds,
    getIntermediateLessonIds,
    getAdvancedLessonIds,
} from '../utils/courseUtils';

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlockedAt?: string;
}

export interface AchievementDefinition {
    id: string;
    title: string;
    description: string;
    icon: string;
    condition: (data: ProgressSnapshot) => boolean;
}

export interface ProgressSnapshot {
    completedLessonIds: number[];
    completedCount: number;
    totalLessons: number;
    progressPercentage: number;
    xp: number;
    streak: number;
}

const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[] = [
    {
        id: 'first_lesson',
        title: 'Primer Paso',
        description: 'Completa tu primera lección',
        icon: 'Footprints',
        condition: (d) => d.completedCount >= 1,
    },
    {
        id: 'five_lessons',
        title: 'Ritmo Constante',
        description: 'Completa 5 lecciones',
        icon: 'BookOpen',
        condition: (d) => d.completedCount >= 5,
    },
    {
        id: 'ten_lessons',
        title: 'Estudiante Dedicado',
        description: 'Completa 10 lecciones',
        icon: 'Award',
        condition: (d) => d.completedCount >= 10,
    },
    {
        id: 'halfway',
        title: 'Medio Camino',
        description: 'Alcanza el 50% del curso',
        icon: 'Flag',
        condition: (d) => d.progressPercentage >= 50,
    },
    {
        id: 'beginner_complete',
        title: 'Principiante Graduado',
        description: 'Completa todas las lecciones de Principiante',
        icon: 'GraduationCap',
        condition: (d) => {
            const ids = getBeginnerLessonIds();
            return ids.length > 0 && ids.every(id => d.completedLessonIds.includes(id));
        },
    },
    {
        id: 'intermediate_complete',
        title: 'Analista Certificado',
        description: 'Completa todas las lecciones de Intermedio',
        icon: 'TrendingUp',
        condition: (d) => {
            const ids = getIntermediateLessonIds();
            return ids.length > 0 && ids.every(id => d.completedLessonIds.includes(id));
        },
    },
    {
        id: 'advanced_complete',
        title: 'Experto Cripto',
        description: 'Completa todas las lecciones de Avanzado',
        icon: 'Crown',
        condition: (d) => {
            const ids = getAdvancedLessonIds();
            return ids.length > 0 && ids.every(id => d.completedLessonIds.includes(id));
        },
    },
    {
        id: 'all_complete',
        title: 'Maestro Absoluto',
        description: 'Completa todas las lecciones del curso',
        icon: 'Gem',
        condition: (d) => d.totalLessons > 0 && d.completedCount === d.totalLessons,
    },
    {
        id: 'xp_500',
        title: 'Aprendiz',
        description: 'Acumula 500 XP',
        icon: 'Zap',
        condition: (d) => d.xp >= 500,
    },
    {
        id: 'xp_2000',
        title: 'Estudioso',
        description: 'Acumula 2,000 XP',
        icon: 'Flame',
        condition: (d) => d.xp >= 2000,
    },
    {
        id: 'xp_5000',
        title: 'Sabio Cripto',
        description: 'Acumula 5,000 XP',
        icon: 'Star',
        condition: (d) => d.xp >= 5000,
    },
    {
        id: 'streak_3',
        title: 'En Racha',
        description: 'Mantén una racha de 3 días',
        icon: 'Activity',
        condition: (d) => d.streak >= 3,
    },
    {
        id: 'streak_7',
        title: 'Semana Imparable',
        description: 'Mantén una racha de 7 días',
        icon: 'Calendar',
        condition: (d) => d.streak >= 7,
    },
];

interface GamificationContextType {
    xp: number;
    level: number;
    streak: number;
    achievements: Achievement[];
    achievementDefinitions: AchievementDefinition[];
    pendingToasts: Achievement[];
    addXp: (amount: number) => Promise<void>;
    checkAchievements: (progressData: ProgressSnapshot, silent?: boolean) => void;
    dismissToast: (id: string) => void;
    loading: boolean;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const [xp, setXp] = useState(0);
    const [streak, setStreak] = useState(0);
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [pendingToasts, setPendingToasts] = useState<Achievement[]>([]);
    const [loading, setLoading] = useState(true);

    // Level calculation: Level = floor(sqrt(XP / 100)) + 1
    const level = Math.floor(Math.sqrt(xp / 100)) + 1;

    useEffect(() => {
        if (user) {
            fetchUserStats();
        } else {
            setXp(0);
            setStreak(0);
            setAchievements([]);
            setPendingToasts([]);
            setLoading(false);
        }
    }, [user]);

    const fetchUserStats = async () => {
        if (!user) return;

        try {
            // 1. Fetch completed lessons count to calculate XP
            const { count, error: progressError } = await supabase
                .from('user_progress')
                .select('*', { count: 'exact', head: true })
                .eq('user_id', user.id)
                .eq('completed', true);

            if (progressError) {
                console.error('Error fetching progress for gamification:', progressError);
            }

            // Calculate XP based on completed lessons (100 XP per lesson)
            const calculatedXp = (count || 0) * 100;
            setXp(calculatedXp);

            // 2. Fetch Streak — count consecutive calendar days with completions
            const { data: completions } = await supabase
                .from('user_progress')
                .select('completed_at')
                .eq('user_id', user.id)
                .eq('completed', true);

            if (completions && completions.length > 0) {
                // Extract unique calendar dates (YYYY-MM-DD in local time)
                const uniqueDates = [...new Set(
                    completions
                        .filter(c => c.completed_at)
                        .map(c => new Date(c.completed_at).toLocaleDateString('en-CA'))
                )].sort().reverse();

                if (uniqueDates.length > 0) {
                    const today = new Date().toLocaleDateString('en-CA');
                    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');

                    // Streak only counts if most recent activity is today or yesterday
                    if (uniqueDates[0] === today || uniqueDates[0] === yesterday) {
                        let streakCount = 1;
                        for (let i = 1; i < uniqueDates.length; i++) {
                            const curr = new Date(uniqueDates[i - 1] + 'T00:00:00');
                            const prev = new Date(uniqueDates[i] + 'T00:00:00');
                            const diffMs = curr.getTime() - prev.getTime();
                            if (diffMs === 86400000) {
                                streakCount++;
                            } else {
                                break;
                            }
                        }
                        setStreak(streakCount);
                    } else {
                        setStreak(0);
                    }
                }
            }

            // 3. Load achievements from localStorage
            const localStats = localStorage.getItem(`gamification_${user.id}`);
            if (localStats) {
                const stats = JSON.parse(localStats);
                setAchievements(stats.achievements || []);
            }

        } catch (error) {
            console.error('Error fetching gamification stats:', error);
        } finally {
            setLoading(false);
        }
    };

    const saveStats = (newXp: number, newStreak: number, newAchievements: Achievement[]) => {
        if (!user) return;
        const stats = { xp: newXp, streak: newStreak, achievements: newAchievements };
        localStorage.setItem(`gamification_${user.id}`, JSON.stringify(stats));
    };

    const addXp = async (amount: number) => {
        const newXp = xp + amount;
        setXp(newXp);
        saveStats(newXp, streak, achievements);
    };

    const checkAchievements = useCallback((progressData: ProgressSnapshot, silent?: boolean) => {
        setAchievements(prev => {
            const unlockedIds = new Set(prev.map(a => a.id));
            const newlyUnlocked: Achievement[] = [];

            for (const def of ACHIEVEMENT_DEFINITIONS) {
                if (unlockedIds.has(def.id)) continue;
                if (def.condition(progressData)) {
                    newlyUnlocked.push({
                        id: def.id,
                        title: def.title,
                        description: def.description,
                        icon: def.icon,
                        unlockedAt: new Date().toISOString(),
                    });
                }
            }

            if (newlyUnlocked.length === 0) return prev;

            const updated = [...prev, ...newlyUnlocked];

            // Save to localStorage
            if (user) {
                const localStats = localStorage.getItem(`gamification_${user.id}`);
                const stats = localStats ? JSON.parse(localStats) : {};
                stats.achievements = updated;
                localStorage.setItem(`gamification_${user.id}`, JSON.stringify(stats));
            }

            // Queue toasts (unless silent)
            if (!silent) {
                setPendingToasts(t => [...t, ...newlyUnlocked]);
            }

            return updated;
        });
    }, [user]);

    const dismissToast = useCallback((id: string) => {
        setPendingToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    return (
        <GamificationContext.Provider value={{
            xp, level, streak, achievements,
            achievementDefinitions: ACHIEVEMENT_DEFINITIONS,
            pendingToasts,
            addXp, checkAchievements, dismissToast,
            loading,
        }}>
            {children}
        </GamificationContext.Provider>
    );
}

export function useGamification() {
    const context = useContext(GamificationContext);
    if (context === undefined) {
        throw new Error('useGamification must be used within a GamificationProvider');
    }
    return context;
}
