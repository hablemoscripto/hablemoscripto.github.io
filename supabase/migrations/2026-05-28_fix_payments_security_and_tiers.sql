-- Migration: payment security + tier persistence fixes (2026-05-28)
--
-- Run in the Supabase SQL Editor BEFORE deploying the updated wompi-webhook
-- Edge Function: this migration changes the upgrade_user_to_premium signature
-- (p_product_type -> p_tier) and the new webhook calls the new signature.
--
-- Fixes three launch blockers:
--   1. RLS privilege escalation — users could self-grant premium.
--   2. premium_tier was never persisted on upgrade — paid users got free access.
--   3. Duplicate handle_new_user() trigger — only one profile row was created.

-- ============================================================
-- 1. Close the RLS privilege-escalation hole on user_profiles.
--
-- The old "Users can update own profile" policy had a USING clause but NO
-- WITH CHECK, so any logged-in user (the browser holds the anon key + their
-- JWT) could UPDATE their own row and set is_premium / premium_tier /
-- premium_expires_at to anything — free lifetime premium, bypassing payment.
--
-- Clients never need to write user_profiles directly: premium is granted only
-- by the service-role webhook via the SECURITY DEFINER RPC below. Drop the
-- client UPDATE policy entirely. (SELECT-own and service-role-full-access
-- policies from payments-schema.sql remain.)
-- ============================================================
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;

-- user_achievements uses client-side .upsert(), which needs UPDATE. The
-- existing policy had USING but no WITH CHECK; add WITH CHECK so a user can
-- only write rows scoped to their own user_id (still permits the upsert).
DROP POLICY IF EXISTS "Users can update their own achievements" ON user_achievements;
CREATE POLICY "Users can update their own achievements"
  ON user_achievements FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- 2. Persist premium_tier on upgrade.
--
-- The old RPC set is_premium but never wrote premium_tier, and its expiry
-- CASE only matched premium_lifetime/_yearly/_monthly — none of which the
-- webhook ever passed — so premium_tier stayed at its 'free' default and
-- getUserEntitlements mapped paid buyers back to free course access.
--
-- New signature takes the stored tier directly. The webhook passes 'premium'
-- (Inversor / inversor_lifetime) or 'vip' (Cripto Experto / vip_lifetime).
-- Launch is lifetime-only -> premium_expires_at stays NULL.
-- ============================================================
DROP FUNCTION IF EXISTS public.upgrade_user_to_premium(UUID, TEXT);

CREATE FUNCTION public.upgrade_user_to_premium(
  p_user_id UUID,
  p_tier TEXT
)
RETURNS VOID AS $$
BEGIN
  IF p_tier NOT IN ('premium', 'vip') THEN
    RAISE EXCEPTION 'upgrade_user_to_premium: invalid tier %', p_tier;
  END IF;

  UPDATE user_profiles
  SET
    is_premium = TRUE,
    premium_tier = p_tier,
    premium_since = NOW(),
    premium_expires_at = NULL, -- lifetime
    updated_at = NOW()
  WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- ============================================================
-- 3. One signup trigger that creates BOTH profile rows.
--
-- admin-setup.sql and payments-schema.sql each defined handle_new_user() and
-- the same trigger name on_auth_user_created, so whichever ran last won and
-- only one of profiles / user_profiles was auto-created. This merged version
-- inserts both; ON CONFLICT keeps it safe to re-run and idempotent per signup.
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, is_admin)
  VALUES (NEW.id, NEW.email, false)
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', '')
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Backfill: ensure every existing auth user has both rows.
INSERT INTO public.profiles (id, email, is_admin)
SELECT id, email, false FROM auth.users
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.user_profiles (id, email, full_name)
SELECT id, email, COALESCE(raw_user_meta_data->>'full_name', raw_user_meta_data->>'name', '')
FROM auth.users
ON CONFLICT (id) DO NOTHING;
