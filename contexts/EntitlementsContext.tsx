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
      const next = await getUserEntitlements(userId);
      setEntitlements(next);
    } catch {
      setEntitlements(ANONYMOUS_ENTITLEMENTS);
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
