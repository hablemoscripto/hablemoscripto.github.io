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
            // Fetch XP and Streak from profiles table (assuming columns exist or we use a separate table)
            // For now, we'll mock it or try to fetch from a 'user_stats' table if it existed.
            // Since we can't easily migrate DB, we will use localStorage for demo purposes if DB fails,
            // or try to use a 'profiles' table if it has a jsonb column for metadata.

            // Let's assume we use localStorage for this demo to ensure it works without DB migration
            const localStats = localStorage.getItem(`gamification_${user.id}`);
            if (localStats) {
                const stats = JSON.parse(localStats);
                setXp(stats.xp || 0);
                setStreak(stats.streak || 0);
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
