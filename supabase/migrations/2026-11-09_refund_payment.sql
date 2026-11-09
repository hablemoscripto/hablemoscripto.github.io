-- Refunds (2026-11-09)
--
-- Run in the Supabase SQL editor. The money goes back through the Wompi
-- dashboard; this function is the second half: it marks the payment refunded
-- and takes back the access that payment granted. Procedure in
-- PRODUCTION-CHECKLIST.md §9.
--
-- refund_payment(reference, note) returns the tier the user holds afterwards:
-- 'vip', 'premium' or 'free'.
--   * accepts APPROVED or VOIDED payments (the webhook writes whatever status
--     Wompi sends, so a voided card charge may already read VOIDED)
--   * calling it again on a REFUNDED payment changes nothing
--   * the new tier is the best one among the user's remaining APPROVED
--     payments, and it never rises above the current tier
--   * when the user already holds a higher tier than the refunded payment
--     granted (Experto refunding an earlier Inversor charge), the profile is
--     left alone
--
-- Tiers are rebuilt from Wompi payments only. A manually granted tier with no
-- payment row is lost if the user's last paid tier at or above it is refunded.
-- crypto_payments is dormant; include it here before the crypto path ships.
--
-- EXECUTE is service_role only. The SQL editor runs as postgres, so it can
-- call this directly.
--
-- The ALTERs need an exclusive lock on payments. A running pg_dump (the
-- pre-seed backup) holds a share lock on every table until it finishes, so
-- fail fast instead of hanging until the SQL editor times out.

SET lock_timeout = '5s';

ALTER TABLE payments ADD COLUMN IF NOT EXISTS refunded_at TIMESTAMPTZ;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS refund_note TEXT;

CREATE OR REPLACE FUNCTION public.refund_payment(
  p_reference TEXT,
  p_note TEXT DEFAULT NULL
)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_payment payments%ROWTYPE;
  v_tier TEXT;
  v_active BOOLEAN;
  v_refunded_rank INTEGER;
  v_current_rank INTEGER;
  v_remaining_rank INTEGER;
  v_new_rank INTEGER;
BEGIN
  SELECT * INTO v_payment
  FROM payments
  WHERE wompi_reference = p_reference
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'refund_payment: no payment with reference %', p_reference;
  END IF;

  IF v_payment.status <> 'REFUNDED' THEN
    IF v_payment.status NOT IN ('APPROVED', 'VOIDED') THEN
      RAISE EXCEPTION 'refund_payment: payment % is %, expected APPROVED or VOIDED',
        p_reference, v_payment.status;
    END IF;

    UPDATE payments
    SET
      status = 'REFUNDED',
      refunded_at = NOW(),
      refund_note = p_note,
      updated_at = NOW()
    WHERE id = v_payment.id;
  END IF;

  IF v_payment.user_id IS NULL THEN
    RETURN 'free';
  END IF;

  SELECT
    premium_tier,
    is_premium AND (premium_expires_at IS NULL OR premium_expires_at > NOW())
  INTO v_tier, v_active
  FROM user_profiles
  WHERE id = v_payment.user_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RETURN 'free';
  END IF;

  v_current_rank := CASE
    WHEN NOT COALESCE(v_active, FALSE) THEN 0
    WHEN v_tier = 'vip' THEN 2
    WHEN v_tier = 'premium' THEN 1
    ELSE 0
  END;

  v_refunded_rank := CASE v_payment.product_type
    WHEN 'vip_lifetime' THEN 2
    WHEN 'inversor_lifetime' THEN 1
    ELSE 0
  END;

  IF v_current_rank = 0 OR v_current_rank > v_refunded_rank THEN
    RETURN CASE v_current_rank WHEN 2 THEN 'vip' WHEN 1 THEN 'premium' ELSE 'free' END;
  END IF;

  SELECT COALESCE(MAX(CASE product_type
    WHEN 'vip_lifetime' THEN 2
    WHEN 'inversor_lifetime' THEN 1
    ELSE 0
  END), 0)
  INTO v_remaining_rank
  FROM payments
  WHERE user_id = v_payment.user_id
    AND status = 'APPROVED';

  v_new_rank := LEAST(v_current_rank, v_remaining_rank);

  IF v_new_rank <> v_current_rank THEN
    UPDATE user_profiles
    SET
      is_premium = v_new_rank > 0,
      premium_tier = CASE v_new_rank WHEN 2 THEN 'vip' WHEN 1 THEN 'premium' ELSE 'free' END,
      premium_since = CASE WHEN v_new_rank > 0 THEN premium_since ELSE NULL END,
      premium_expires_at = NULL,
      updated_at = NOW()
    WHERE id = v_payment.user_id;
  END IF;

  RETURN CASE v_new_rank WHEN 2 THEN 'vip' WHEN 1 THEN 'premium' ELSE 'free' END;
END;
$$;

REVOKE ALL ON FUNCTION public.refund_payment(TEXT, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.refund_payment(TEXT, TEXT) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.refund_payment(TEXT, TEXT) TO service_role;
