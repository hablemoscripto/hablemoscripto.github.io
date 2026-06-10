import { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import {
  ANONYMOUS_ENTITLEMENTS,
  getUserEntitlements,
  type UserEntitlements,
} from '../services/paymentService';
import { useAuth } from './AuthContext';

interface EntitlementsContextType {
  entitlements: UserEntitlements;
  loading: boolean;
  refresh: () => Promise<void>;
}

const EntitlementsContext = createContext<EntitlementsContextType | undefined>(undefined);

// Retry transient failures (network blip, Supabase hiccup) with a short backoff.
// getUserEntitlements resolves to free entitlements when there's simply no
// profile row yet; it only throws on real errors, which is what we retry.
async function fetchEntitlementsWithRetry(
  userId: string,
  attempts = 3,
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
  const userId = user?.id;
  const [entitlements, setEntitlements] = useState<UserEntitlements>(ANONYMOUS_ENTITLEMENTS);
  // Start true (mirroring Auth/Progress contexts) so consumer guards like
  // `!entitlementsLoading && !canAccessLevel(...)` don't treat the default
  // anonymous entitlements as authoritative on the first render — that flashed a
  // "pay to unlock" paywall to paying users deep-linking/refreshing paid lessons.
  const [loading, setLoading] = useState(true);

  // Re-fetch on auth identity change (login / logout / account switch).
  // Depending on `userId` rather than `user` avoids re-fetching on benign
  // token-refresh events that emit a fresh user object with the same id.
  const refresh = useCallback(async () => {
    if (!userId) {
      setEntitlements(ANONYMOUS_ENTITLEMENTS);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const next = await fetchEntitlementsWithRetry(userId);
      // On total failure (next === null), deliberately KEEP the previous
      // entitlements rather than asserting anonymous: the initial default is
      // already anonymous (so a never-loaded user still can't see paid content),
      // but a paying user must not be demoted to the upgrade paywall by a
      // transient blip. The server re-checks is_premium before serving paid
      // content regardless, so a stale client value can never grant access it
      // shouldn't.
      if (next) {
        setEntitlements(next);
      }
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo(
    () => ({ entitlements, loading, refresh }),
    [entitlements, loading, refresh],
  );

  return (
    <EntitlementsContext.Provider value={value}>
      {children}
    </EntitlementsContext.Provider>
  );
}

export function useEntitlements() {
  const context = useContext(EntitlementsContext);
  if (context === undefined) {
    throw new Error('useEntitlements must be used within an EntitlementsProvider');
  }
  return context;
}
