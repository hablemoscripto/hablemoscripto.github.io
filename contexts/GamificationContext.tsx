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
import {
  getBeginnerLessonIds,
  getIntermediateLessonIds,
  getAdvancedLessonIds,
} from '../utils/courseUtils';
import { trackAchievementUnlock } from '../utils/analytics';
import { reportError } from '../utils/errorReporting';
import { REVIEW_XP } from '../services/reviewConstants';

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
  // Partial progress toward the unlock, for rendering "3 / 5" on locked cards.
  // `suffix` is appended to the target (e.g. ' XP', ' días', '%').
  progress?: (data: ProgressSnapshot) => { current: number; target: number; suffix?: string };
}

export interface LessonCompletionStamp {
  lessonId: number;
  completedAt: string | null;
}

export interface ProgressSnapshot {
  completedLessonIds: number[];
  completedCount: number;
  totalLessons: number;
  progressPercentage: number;
  xp: number;
  streak: number;
  /** Per-lesson completion times used to estimate real acquisition dates. */
  completions?: LessonCompletionStamp[];
  /** Qualifying activity calendar days (YYYY-MM-DD) for streak achievement dates. */
  activityDates?: string[];
}

/** Completions ordered oldest → newest (timestamped only). */
function sortedTimedCompletions(
  data: ProgressSnapshot
): { lessonId: number; completedAt: string }[] {
  const source =
    data.completions ??
    data.completedLessonIds.map((lessonId) => ({ lessonId, completedAt: null as string | null }));
  return source
    .filter((c): c is { lessonId: number; completedAt: string } => Boolean(c.completedAt))
    .sort((a, b) => a.completedAt.localeCompare(b.completedAt));
}

function nthCompletionAt(
  sorted: { lessonId: number; completedAt: string }[],
  n: number
): string | null {
  if (n < 1 || sorted.length < n) return null;
  return sorted[n - 1].completedAt;
}

function latestAmongLessonIds(
  sorted: { lessonId: number; completedAt: string }[],
  lessonIds: number[]
): string | null {
  const want = new Set(lessonIds);
  const dates = sorted.filter((c) => want.has(c.lessonId)).map((c) => c.completedAt);
  if (dates.length === 0) return null;
  return dates.sort().reverse()[0];
}

/** First calendar day on which a consecutive streak of `target` days was reached. */
function firstDayStreakReached(activityDates: string[], target: number): string | null {
  if (target < 1 || activityDates.length === 0) return null;
  const days = [...new Set(activityDates)].sort();
  let streak = 1;
  if (target === 1) return `${days[0]}T12:00:00.000Z`;
  for (let i = 1; i < days.length; i++) {
    const curr = Date.parse(`${days[i]}T00:00:00Z`);
    const prev = Date.parse(`${days[i - 1]}T00:00:00Z`);
    if (curr - prev === 86400000) {
      streak++;
      if (streak >= target) return `${days[i]}T12:00:00.000Z`;
    } else {
      streak = 1;
    }
  }
  return null;
}

/**
 * Best-effort real acquisition time for a logro from progress history.
 * Falls back to null when history cannot support an estimate (caller uses now).
 */
export function estimateAchievementUnlockedAt(
  achievementId: string,
  data: ProgressSnapshot
): string | null {
  const sorted = sortedTimedCompletions(data);

  switch (achievementId) {
    case 'first_lesson':
      return nthCompletionAt(sorted, 1);
    case 'five_lessons':
      return nthCompletionAt(sorted, 5);
    case 'ten_lessons':
      return nthCompletionAt(sorted, 10);
    case 'halfway': {
      if (data.totalLessons <= 0) return null;
      const need = Math.ceil(data.totalLessons * 0.5);
      return nthCompletionAt(sorted, need);
    }
    case 'beginner_complete':
      return latestAmongLessonIds(sorted, getBeginnerLessonIds());
    case 'intermediate_complete':
      return latestAmongLessonIds(sorted, getIntermediateLessonIds());
    case 'advanced_complete':
      return latestAmongLessonIds(sorted, getAdvancedLessonIds());
    case 'all_complete':
      return sorted.length > 0 ? sorted[sorted.length - 1].completedAt : null;
    case 'xp_500':
      // Lesson XP is 100 each; threshold dates use the Nth completion as a floor.
      return nthCompletionAt(sorted, Math.ceil(500 / 100));
    case 'xp_2000':
      return nthCompletionAt(sorted, Math.ceil(2000 / 100));
    case 'xp_5000':
      // Definition target is 4000 XP (id kept stable); see ACHIEVEMENT_DEFINITIONS.
      return nthCompletionAt(sorted, Math.ceil(4000 / 100));
    case 'streak_3':
      return firstDayStreakReached(data.activityDates ?? [], 3);
    case 'streak_7':
      return firstDayStreakReached(data.activityDates ?? [], 7);
    default:
      return null;
  }
}

function resolveUnlockedAt(achievementId: string, data: ProgressSnapshot): string {
  return estimateAchievementUnlockedAt(achievementId, data) ?? new Date().toISOString();
}

/** True when `candidate` is a meaningfully earlier acquisition than `current`. */
function isEarlierUnlock(candidate: string, current: string | undefined): boolean {
  if (!current) return true;
  const c = Date.parse(candidate);
  const u = Date.parse(current);
  if (Number.isNaN(c) || Number.isNaN(u)) return !current;
  // Ignore sub-second noise; only rewrite when history is clearly earlier.
  return c < u - 1000;
}

const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[] = [
  {
    id: 'first_lesson',
    title: 'Primer Paso',
    description: 'Completa tu primera lección',
    icon: 'Footprints',
    condition: (d) => d.completedCount >= 1,
    progress: (d) => ({ current: d.completedCount, target: 1 }),
  },
  {
    id: 'five_lessons',
    title: 'Ritmo Constante',
    description: 'Completa 5 lecciones',
    icon: 'BookOpen',
    condition: (d) => d.completedCount >= 5,
    progress: (d) => ({ current: d.completedCount, target: 5 }),
  },
  {
    id: 'ten_lessons',
    title: 'Estudiante Dedicado',
    description: 'Completa 10 lecciones',
    icon: 'Award',
    condition: (d) => d.completedCount >= 10,
    progress: (d) => ({ current: d.completedCount, target: 10 }),
  },
  {
    id: 'halfway',
    title: 'Medio Camino',
    description: 'Alcanza el 50% del curso',
    icon: 'Flag',
    condition: (d) => d.progressPercentage >= 50,
    progress: (d) => ({ current: d.progressPercentage, target: 50, suffix: '%' }),
  },
  {
    id: 'beginner_complete',
    title: 'Principiante Graduado',
    description: 'Completa todas las lecciones de Principiante',
    icon: 'GraduationCap',
    condition: (d) => {
      const ids = getBeginnerLessonIds();
      return ids.length > 0 && ids.every((id) => d.completedLessonIds.includes(id));
    },
    progress: (d) => {
      const ids = getBeginnerLessonIds();
      return {
        current: ids.filter((id) => d.completedLessonIds.includes(id)).length,
        target: ids.length,
      };
    },
  },
  {
    id: 'intermediate_complete',
    title: 'Analista Certificado',
    description: 'Completa todas las lecciones de Intermedio',
    icon: 'TrendingUp',
    condition: (d) => {
      const ids = getIntermediateLessonIds();
      return ids.length > 0 && ids.every((id) => d.completedLessonIds.includes(id));
    },
    progress: (d) => {
      const ids = getIntermediateLessonIds();
      return {
        current: ids.filter((id) => d.completedLessonIds.includes(id)).length,
        target: ids.length,
      };
    },
  },
  {
    id: 'advanced_complete',
    title: 'Experto Cripto',
    description: 'Completa todas las lecciones de Avanzado',
    icon: 'Crown',
    condition: (d) => {
      const ids = getAdvancedLessonIds();
      return ids.length > 0 && ids.every((id) => d.completedLessonIds.includes(id));
    },
    progress: (d) => {
      const ids = getAdvancedLessonIds();
      return {
        current: ids.filter((id) => d.completedLessonIds.includes(id)).length,
        target: ids.length,
      };
    },
  },
  {
    id: 'all_complete',
    title: 'Maestro Absoluto',
    description: 'Completa todas las lecciones del curso',
    icon: 'Gem',
    condition: (d) => d.totalLessons > 0 && d.completedCount === d.totalLessons,
    progress: (d) => ({ current: d.completedCount, target: d.totalLessons }),
  },
  {
    id: 'xp_500',
    title: 'Aprendiz',
    description: 'Acumula 500 XP',
    icon: 'Zap',
    condition: (d) => d.xp >= 500,
    progress: (d) => ({ current: d.xp, target: 500, suffix: ' XP' }),
  },
  {
    id: 'xp_2000',
    title: 'Estudioso',
    description: 'Acumula 2,000 XP',
    icon: 'Flame',
    condition: (d) => d.xp >= 2000,
    progress: (d) => ({ current: d.xp, target: 2000, suffix: ' XP' }),
  },
  {
    id: 'xp_5000',
    title: 'Sabio Cripto',
    description: 'Acumula 4,000 XP',
    icon: 'Star',
    // Max XP is 44 lessons x 100 = 4400, so the top tier must sit at or below
    // that to be reachable. Keep the id stable to preserve persisted unlocks.
    condition: (d) => d.xp >= 4000,
    progress: (d) => ({ current: d.xp, target: 4000, suffix: ' XP' }),
  },
  {
    id: 'streak_3',
    title: 'En Racha',
    description: 'Mantén una racha de 3 días',
    icon: 'Activity',
    condition: (d) => d.streak >= 3,
    progress: (d) => ({ current: d.streak, target: 3, suffix: ' días' }),
  },
  {
    id: 'streak_7',
    title: 'Semana Imparable',
    description: 'Mantén una racha de 7 días',
    icon: 'Calendar',
    condition: (d) => d.streak >= 7,
    progress: (d) => ({ current: d.streak, target: 7, suffix: ' días' }),
  },
];

interface GamificationContextType {
  xp: number;
  level: number;
  streak: number;
  achievements: Achievement[];
  achievementDefinitions: AchievementDefinition[];
  pendingToasts: Achievement[];
  addXp: (amount: number) => void;
  checkAchievements: (progressData: ProgressSnapshot, silent?: boolean) => void;
  refreshStreak: () => Promise<number>;
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

  // Track previously persisted achievement IDs to detect new unlocks
  const persistedIdsRef = useRef<Set<string>>(new Set());
  // Last known unlocked_at per achievement — used to detect historical repairs
  // (earlier estimate) without re-writing every render.
  const lastUnlockedAtRef = useRef<Map<string, string>>(new Map());

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
      persistedIdsRef.current = new Set();
      lastUnlockedAtRef.current = new Map();
      setLoading(false);
    }
    // `fetchUserStats` is declared after this effect and is stable per-mount
    // because it only closes over `user`. Keyed on user.id, not the user
    // object: onAuthStateChange emits a fresh object on every token refresh
    // and navigation event, and keying on identity refired this fetch (and
    // aborted the in-flight one) several times per page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  // Persist new unlocks (insert-only) and historical date repairs (update-only).
  // Inserts use ignoreDuplicates so a load race can never overwrite unlocked_at
  // with "now". Repairs only move unlocked_at earlier when progress history
  // proves a real acquisition date.
  useEffect(() => {
    if (!user || achievements.length === 0) return;

    const newOnes = achievements.filter((a) => !persistedIdsRef.current.has(a.id));
    const repairs = achievements.filter((a) => {
      if (!a.unlockedAt || !persistedIdsRef.current.has(a.id)) return false;
      const prev = lastUnlockedAtRef.current.get(a.id);
      return isEarlierUnlock(a.unlockedAt, prev);
    });

    if (newOnes.length === 0 && repairs.length === 0) {
      // Still refresh local cache when the list itself is unchanged in id set
      // but we may have just loaded.
      try {
        localStorage.setItem(`gamification_${user.id}`, JSON.stringify({ achievements }));
      } catch {
        // localStorage may be full or unavailable
      }
      return;
    }

    for (const a of newOnes) {
      persistedIdsRef.current.add(a.id);
      if (a.unlockedAt) lastUnlockedAtRef.current.set(a.id, a.unlockedAt);
    }
    for (const a of repairs) {
      if (a.unlockedAt) lastUnlockedAtRef.current.set(a.id, a.unlockedAt);
    }

    const writes: PromiseLike<unknown>[] = [
      ...newOnes.map((a) =>
        supabase.from('user_achievements').upsert(
          {
            user_id: user.id,
            achievement_id: a.id,
            unlocked_at: a.unlockedAt || new Date().toISOString(),
          },
          { onConflict: 'user_id,achievement_id', ignoreDuplicates: true }
        )
      ),
      ...repairs.map((a) =>
        supabase
          .from('user_achievements')
          .update({ unlocked_at: a.unlockedAt })
          .eq('user_id', user.id)
          .eq('achievement_id', a.id)
      ),
    ];

    Promise.all(writes).catch((err) => {
      reportError(err, { component: 'GamificationContext', action: 'persistAchievements' });
    });

    try {
      localStorage.setItem(`gamification_${user.id}`, JSON.stringify({ achievements }));
    } catch {
      // localStorage may be full or unavailable
    }
  }, [achievements, user]);

  // Recompute the streak from qualifying-activity dates and return it. A day
  // qualifies if the user completed a lesson OR answered a daily review — the
  // 1-minute review is deliberately enough to keep the streak alive (a streak
  // only sustainable via full 20-minute lessons dies in week one). Exposed so
  // a lesson completion can refresh the streak mid-session (it would otherwise
  // stay frozen at login until a full page reload).
  const refreshStreak = useCallback(async (): Promise<number> => {
    if (!user) return 0;
    try {
      const { data: completions } = await supabase
        .from('user_progress')
        .select('completed_at')
        .eq('user_id', user.id)
        .eq('completed', true);

      // Review activity also counts. Missing table (migration not yet run)
      // returns an error — degrade to completion-only streaks.
      const { data: reviews, error: reviewsError } = await supabase
        .from('daily_review_activity')
        .select('review_date')
        .eq('user_id', user.id);
      const reviewDates: string[] = reviewsError || !reviews
        ? []
        : reviews.filter((r) => r.review_date).map((r) => String(r.review_date));

      let streakCount = 0;
      if ((completions && completions.length > 0) || reviewDates.length > 0) {
        const uniqueDates = [
          ...new Set([
            ...(completions ?? [])
              .filter((c) => c.completed_at)
              .map((c) => new Date(c.completed_at).toLocaleDateString('en-CA')),
            ...reviewDates,
          ]),
        ]
          .sort()
          .reverse();

        if (uniqueDates.length > 0) {
          const today = new Date().toLocaleDateString('en-CA');
          const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');
          if (uniqueDates[0] === today || uniqueDates[0] === yesterday) {
            streakCount = 1;
            for (let i = 1; i < uniqueDates.length; i++) {
              // Parse as UTC midnights so DST transitions (23h/25h local
              // days) don't break the consecutive-day check for LATAM users.
              const curr = Date.parse(uniqueDates[i - 1] + 'T00:00:00Z');
              const prev = Date.parse(uniqueDates[i] + 'T00:00:00Z');
              if (curr - prev === 86400000) {
                streakCount++;
              } else {
                break;
              }
            }
          }
        }
      }
      setStreak(streakCount);
      return streakCount;
    } catch (error) {
      reportError(error, { component: 'GamificationContext', action: 'refreshStreak' });
      return 0;
    }
    // Keyed on user.id (not the object): auth events mint fresh user objects
    // and identity-keying cascaded refetches through every consumer callback.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const fetchUserStats = async () => {
    if (!user) return;

    try {
      // 1. Calculate XP: 100 per completed lesson + REVIEW_XP per answered
      // daily review. Both are recomputed from source tables so XP can never
      // drift (missing review table pre-migration simply contributes 0).
      const { count, error: progressError } = await supabase
        .from('user_progress')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .eq('completed', true);

      if (progressError) {
        reportError(progressError, { component: 'GamificationContext', action: 'fetchXp' });
      }

      const { count: reviewCount, error: reviewCountError } = await supabase
        .from('daily_review_activity')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);

      const calculatedXp =
        (count || 0) * 100 + (reviewCountError ? 0 : (reviewCount || 0) * REVIEW_XP);
      setXp(calculatedXp);

      // 2. Streak from consecutive calendar days with completions
      await refreshStreak();

      // 3. Load achievements: try Supabase first, fall back to localStorage
      const { data: dbAchievements, error: achError } = await supabase
        .from('user_achievements')
        .select('achievement_id, unlocked_at')
        .eq('user_id', user.id);

      if (!achError && dbAchievements && dbAchievements.length > 0) {
        const loaded = dbAchievements.map((a) => {
          const def = ACHIEVEMENT_DEFINITIONS.find((d) => d.id === a.achievement_id);
          return {
            id: a.achievement_id,
            title: def?.title || a.achievement_id,
            description: def?.description || '',
            icon: def?.icon || 'Award',
            unlockedAt: a.unlocked_at,
          };
        });
        setAchievements(loaded);
        persistedIdsRef.current = new Set(loaded.map((a) => a.id));
        lastUnlockedAtRef.current = new Map(
          loaded
            .filter((a) => a.unlockedAt)
            .map((a) => [a.id, a.unlockedAt as string])
        );
      } else {
        // Fall back to localStorage (migration path for existing users)
        try {
          const localStats = localStorage.getItem(`gamification_${user.id}`);
          if (localStats) {
            const stats = JSON.parse(localStats);
            const localAchievements: Achievement[] = stats.achievements || [];
            setAchievements(localAchievements);
            // Empty persisted set so the insert path migrates them to Supabase.
            persistedIdsRef.current = new Set();
            lastUnlockedAtRef.current = new Map(
              localAchievements
                .filter((a) => a.unlockedAt)
                .map((a) => [a.id, a.unlockedAt as string])
            );
          }
        } catch {
          // Corrupted localStorage — start fresh
        }

        // If we got a table-not-found error, log it once for awareness
        if (achError && achError.code !== 'PGRST116') {
          reportError(achError, {
            component: 'GamificationContext',
            action: 'fetchAchievements',
            metadata: { hint: 'Run supabase/migrations/create_user_achievements.sql' },
          });
        }
      }
    } catch (error) {
      reportError(error, { component: 'GamificationContext', action: 'fetchUserStats' });
    } finally {
      setLoading(false);
    }
  };

  const addXp = useCallback((amount: number) => {
    setXp((prev) => prev + amount);
  }, []);

  const checkAchievements = useCallback((progressData: ProgressSnapshot, silent?: boolean) => {
    setAchievements((prev) => {
      // Repair already-unlocked rows whose stored date is later than history
      // (classic "all logros say today" from a silent backfill / load race).
      let repaired = false;
      const withRepairs = prev.map((a) => {
        const estimated = estimateAchievementUnlockedAt(a.id, progressData);
        if (estimated && isEarlierUnlock(estimated, a.unlockedAt)) {
          repaired = true;
          return { ...a, unlockedAt: estimated };
        }
        if (!a.unlockedAt) {
          const fallback = resolveUnlockedAt(a.id, progressData);
          repaired = true;
          return { ...a, unlockedAt: fallback };
        }
        return a;
      });

      const unlockedIds = new Set(withRepairs.map((a) => a.id));
      const newlyUnlocked: Achievement[] = [];

      for (const def of ACHIEVEMENT_DEFINITIONS) {
        if (unlockedIds.has(def.id)) continue;
        if (def.condition(progressData)) {
          newlyUnlocked.push({
            id: def.id,
            title: def.title,
            description: def.description,
            icon: def.icon,
            unlockedAt: resolveUnlockedAt(def.id, progressData),
          });
        }
      }

      if (newlyUnlocked.length === 0 && !repaired) return prev;

      if (!silent && newlyUnlocked.length > 0) {
        setPendingToasts((t) => [...t, ...newlyUnlocked]);
        newlyUnlocked.forEach((a) => trackAchievementUnlock(a.id));
      }

      return newlyUnlocked.length > 0 ? [...withRepairs, ...newlyUnlocked] : withRepairs;
    });
  }, []);

  const dismissToast = useCallback((id: string) => {
    setPendingToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      xp,
      level,
      streak,
      achievements,
      achievementDefinitions: ACHIEVEMENT_DEFINITIONS,
      pendingToasts,
      addXp,
      checkAchievements,
      refreshStreak,
      dismissToast,
      loading,
    }),
    [
      xp,
      level,
      streak,
      achievements,
      pendingToasts,
      addXp,
      checkAchievements,
      refreshStreak,
      dismissToast,
      loading,
    ]
  );

  return <GamificationContext.Provider value={value}>{children}</GamificationContext.Provider>;
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}
