import React, { createContext, useContext, useState, useEffect, useRef, useCallback, useMemo, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { trackSignUp, trackLogin } from '../utils/analytics';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName?: string, newsletter?: boolean) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  resendVerification: (email: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  // Dedupe SIGNED_IN attribution per page-load: SIGNED_IN can refire on tab
  // focus / token refresh, and we must not double-count a sign-up/login.
  const trackedSignInsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      // Attribution for Google OAuth only (email is tracked in AuthModal, which
      // stays mounted through that flow; Google redirects away and back).
      const u = session?.user;
      if (
        event === 'SIGNED_IN' &&
        u &&
        u.app_metadata?.provider === 'google' &&
        !trackedSignInsRef.current.has(u.id)
      ) {
        trackedSignInsRef.current.add(u.id);
        const created = u.created_at ? Date.parse(u.created_at) : 0;
        const lastSignIn = u.last_sign_in_at
          ? Date.parse(u.last_sign_in_at)
          : created;
        // First OAuth sign-in: Supabase stamps created_at and last_sign_in_at
        // together, so a near-zero gap means a brand-new account.
        const isNewUser = created > 0 && Math.abs(lastSignIn - created) < 30_000;
        if (isNewUser) {
          trackSignUp('google');
        } else {
          trackLogin('google');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = useCallback(async (email: string, password: string, fullName?: string, newsletter?: boolean) => {
    const trimmedName = fullName?.trim();
    // Pass full_name + newsletter intent through user_metadata; the
    // handle_new_user() trigger reads these to create the profile rows and
    // (when newsletter is true) add the email to newsletter_subscribers.
    const data: Record<string, unknown> = {};
    if (trimmedName) data.full_name = trimmedName;
    if (newsletter) data.newsletter = true;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: Object.keys(data).length ? { data } : undefined,
    });
    return { error: error as Error | null };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error: error as Error | null };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
    return { error: error as Error | null };
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/education`,
    });
    return { error: error as Error | null };
  }, []);

  const resendVerification = useCallback(async (email: string) => {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
    });
    return { error: error as Error | null };
  }, []);

  const value = useMemo(() => ({
    user,
    session,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    resetPassword,
    resendVerification,
  }), [user, session, loading, signUp, signIn, signInWithGoogle, signOut, resetPassword, resendVerification]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
