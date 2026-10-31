import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import {
  ANONYMOUS_ENTITLEMENTS,
  getUserEntitlements,
  type UserEntitlements,
} from '../services/paymentService';
import { useAuth } from './AuthContext';

export type EntitlementsStatus = 'loading' | 'ready' | 'unknown';

interface EntitlementsContextType {
  entitlements: UserEntitlements;
  loading: boolean;
  status: EntitlementsStatus;
  refresh: () => Promise<void>;
}

interface EntitlementsSnapshot {
  userId: string | null;
  entitlements: UserEntitlements;
  status: EntitlementsStatus;
  // Last user id whose read succeeded. A later failure for that same id keeps
  // the previous tier. A failure before the first success is `unknown`.
  confirmedUserId: string | null;
}

const EntitlementsContext = createContext<EntitlementsContextType | undefined>(undefined);

// Retry transient failures (network blip, Supabase hiccup) with a short backoff.
// getUserEntitlements resolves to free entitlements when there's simply no
// profile row yet; it only throws on real errors, which is what we retry.
async function fetchEntitlementsWithRetry(
  userId: string,
  attempts = 3
): Promise<UserEntitlements | null> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await getUserEntitlements(userId);
    } catch {
      if (i < attempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, 400 * (i + 1)));
      }
    }
  }
  return null;
}

export function EntitlementsProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  // Start loading so the first paint does not treat the anonymous default as
  // a confirmed free account. `loading` stays a boolean for existing guards;
  // `status` distinguishes "still fetching" from "fetch failed, do not sell".
  const [snapshot, setSnapshot] = useState<EntitlementsSnapshot>({
    userId,
    entitlements: ANONYMOUS_ENTITLEMENTS,
    status: userId ? 'loading' : 'ready',
    confirmedUserId: null,
  });

  // Reset before paint when the account changes, so the previous person's tier
  // cannot flash. The fetch result applies only if this userId is still current.
  if (snapshot.userId !== userId) {
    const stillConfirmed = userId !== null && snapshot.confirmedUserId === userId;
    setSnapshot({
      userId,
      entitlements: stillConfirmed ? snapshot.entitlements : ANONYMOUS_ENTITLEMENTS,
      status: userId === null || stillConfirmed ? 'ready' : 'loading',
      confirmedUserId: userId === null ? null : snapshot.confirmedUserId,
    });
  }

  const commit = useCallback((requested: string, next: UserEntitlements | null) => {
    setSnapshot((prev) => {
      if (prev.userId !== requested) return prev;
      if (next) {
        return {
          userId: requested,
          entitlements: next,
          status: 'ready',
          confirmedUserId: requested,
        };
      }
      if (prev.confirmedUserId === requested) {
        return { ...prev, status: 'ready' };
      }
      return { ...prev, entitlements: ANONYMOUS_ENTITLEMENTS, status: 'unknown' };
    });
  }, []);

  const refresh = useCallback(async () => {
    if (!userId) {
      setSnapshot({
        userId: null,
        entitlements: ANONYMOUS_ENTITLEMENTS,
        status: 'ready',
        confirmedUserId: null,
      });
      return;
    }
    const requested = userId;
    setSnapshot((prev) => {
      if (prev.userId !== requested) return prev;
      if (prev.confirmedUserId === requested) return prev;
      return { ...prev, entitlements: ANONYMOUS_ENTITLEMENTS, status: 'loading' };
    });
    commit(requested, await fetchEntitlementsWithRetry(requested));
  }, [commit, userId]);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    const requested = userId;
    void fetchEntitlementsWithRetry(requested).then((next) => {
      if (!cancelled) commit(requested, next);
    });
    return () => {
      cancelled = true;
    };
  }, [commit, userId]);

  const { entitlements, status } = snapshot;
  const loading = status === 'loading';

  const value = useMemo(
    () => ({ entitlements, loading, status, refresh }),
    [entitlements, loading, status, refresh]
  );

  return <EntitlementsContext.Provider value={value}>{children}</EntitlementsContext.Provider>;
}

export function useEntitlements() {
  const context = useContext(EntitlementsContext);
  if (context === undefined) {
    throw new Error('useEntitlements must be used within an EntitlementsProvider');
  }
  return context;
}
