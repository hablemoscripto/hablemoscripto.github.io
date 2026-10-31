-- No downgrade on a second charge (2026-10-31)
--
-- Run in the Supabase SQL editor BEFORE deploying the updated wompi-webhook.
-- The return type changes from VOID to BOOLEAN, so this DROPs the old function
-- first. CREATE OR REPLACE cannot change a return type.
--
-- upgrade_user_to_premium used to assign premium_tier unconditionally. A later
-- Inversor charge (or an unknown product the webhook mapped to 'premium')
-- demoted Cripto Experto. The function now:
--   * returns FALSE and writes nothing when an active row already holds vip,
--     or already holds premium and the new tier is also premium
--   * still promotes premium -> vip
--   * returns TRUE only when it actually grants
--   * raises if a write should have happened and no row changed, so the
--     webhook can drop its dedupe marker and Wompi can retry
--
-- Active means premium_expires_at IS NULL (lifetime) OR still in the future.
-- A free row with a null expiry is not protected: its tier is neither vip
-- nor premium, so the first real grant still writes.
--
-- EXECUTE is revoked from PUBLIC, anon, and authenticated. Only service_role
-- (the webhook) may call it. Do not re-run supabase/payments-schema.sql after
-- this file: that bootstrap recreates the old VOID function.

DROP FUNCTION IF EXISTS public.upgrade_user_to_premium(UUID, TEXT);

CREATE FUNCTION public.upgrade_user_to_premium(
  p_user_id UUID,
  p_tier TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_tier TEXT;
  v_expires TIMESTAMPTZ;
  v_active BOOLEAN;
  v_blocked BOOLEAN;
  v_updated INTEGER;
BEGIN
  IF p_tier NOT IN ('premium', 'vip') THEN
    RAISE EXCEPTION 'upgrade_user_to_premium: invalid tier %', p_tier;
  END IF;

  SELECT premium_tier, premium_expires_at
    INTO v_tier, v_expires
  FROM user_profiles
  WHERE id = p_user_id
  FOR UPDATE;

  IF NOT FOUND THEN
    INSERT INTO user_profiles (
      id,
      email,
      full_name,
      is_premium,
      premium_tier,
      premium_since,
      premium_expires_at,
      updated_at
    )
    SELECT
      u.id,
      u.email,
      COALESCE(u.raw_user_meta_data->>'full_name', u.raw_user_meta_data->>'name', ''),
      TRUE,
      p_tier,
      NOW(),
      NULL,
      NOW()
    FROM auth.users u
    WHERE u.id = p_user_id
    ON CONFLICT (id) DO NOTHING;

    GET DIAGNOSTICS v_updated = ROW_COUNT;
    IF v_updated = 1 THEN
      RETURN TRUE;
    END IF;

    SELECT premium_tier, premium_expires_at
      INTO v_tier, v_expires
    FROM user_profiles
    WHERE id = p_user_id
    FOR UPDATE;

    IF NOT FOUND THEN
      RAISE EXCEPTION 'upgrade_user_to_premium: no profile for %', p_user_id;
    END IF;
  END IF;

  v_active := v_expires IS NULL OR v_expires > NOW();
  v_blocked := v_active AND (
    v_tier = 'vip'
    OR (v_tier = 'premium' AND p_tier = 'premium')
  );

  IF v_blocked THEN
    RETURN FALSE;
  END IF;

  -- Same predicate as v_blocked, so a write cannot land on a row the guard
  -- would have refused. FOR UPDATE already holds the row; this is the backstop.
  UPDATE user_profiles
  SET
    is_premium = TRUE,
    premium_tier = p_tier,
    premium_since = NOW(),
    premium_expires_at = NULL,
    updated_at = NOW()
  WHERE id = p_user_id
    AND NOT (
      (premium_expires_at IS NULL OR premium_expires_at > NOW())
      AND (
        premium_tier = 'vip'
        OR (premium_tier = 'premium' AND p_tier = 'premium')
      )
    );

  GET DIAGNOSTICS v_updated = ROW_COUNT;
  IF v_updated = 0 THEN
    RAISE EXCEPTION 'upgrade_user_to_premium: no row updated for %', p_user_id;
  END IF;

  RETURN TRUE;
END;
$$;

REVOKE ALL ON FUNCTION public.upgrade_user_to_premium(UUID, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.upgrade_user_to_premium(UUID, TEXT) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.upgrade_user_to_premium(UUID, TEXT) TO service_role;
