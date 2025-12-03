import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlockedAt?: string;
}

interface GamificationContextType {
    xp: number;
    level: number;
    streak: number;
    achievements: Achievement[];
    addXp: (amount: number) => Promise<void>;
    checkAchievements: () => Promise<void>;
    loading: boolean;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const [xp, setXp] = useState(0);
    const [streak, setStreak] = useState(0);
    const [achievements, setAchievements] = useState<Achievement[]>([]);
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
            // This ensures we sync with existing progress even if gamification is new
            const calculatedXp = (count || 0) * 100;
            setXp(calculatedXp);

            // 2. Fetch Streak (mock logic for now, or fetch from a future 'streaks' table)
            // For now, we'll check the most recent completed_at date
            const { data: lastLesson } = await supabase
                .from('user_progress')
                .select('completed_at')
                .eq('user_id', user.id)
                .eq('completed', true)
                .order('completed_at', { ascending: false })
                .limit(1)
                .single();

            if (lastLesson && lastLesson.completed_at) {
                // Simple logic: if last lesson was today or yesterday, streak is active.
                // This is a simplification. A real streak system needs a separate table.
                // We'll set a default streak of 1 if they have been active recently.
                const lastDate = new Date(lastLesson.completed_at);
                const now = new Date();
                const diffDays = Math.floor((now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

                if (diffDays <= 1) {
                    setStreak(prev => Math.max(prev, 1));
                }
            }

            // 3. Load other stats from localStorage as a fallback/cache
            const localStats = localStorage.getItem(`gamification_${user.id}`);
            if (localStats) {
                const stats = JSON.parse(localStats);
                // We prefer the calculated XP, but might want to merge other data
                if (stats.streak > 1) setStreak(stats.streak);
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

        // Here we would sync with Supabase
        // supabase.from('profiles').update({ gamification_stats: stats }).eq('id', user.id);
    };

    const addXp = async (amount: number) => {
        const newXp = xp + amount;
        setXp(newXp);
        saveStats(newXp, streak, achievements);

        // Check for level up or other events here
    };

    const checkAchievements = async () => {
        // Logic to check and unlock achievements
    };

    return (
        <GamificationContext.Provider value={{ xp, level, streak, achievements, addXp, checkAchievements, loading }}>
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
