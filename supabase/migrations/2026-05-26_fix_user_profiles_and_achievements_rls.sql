-- Migration: Fix missing columns and RLS policies
-- Run this in Supabase SQL Editor if you are seeing:
--   - "column user_profiles.premium_tier does not exist"
--   - 403 Forbidden errors when unlocking achievements (upserts)

-- ============================================
-- 1. Add missing columns to user_profiles
-- ============================================
ALTER TABLE user_profiles 
  ADD COLUMN IF NOT EXISTS premium_tier TEXT DEFAULT 'free';

ALTER TABLE user_profiles 
  ADD COLUMN IF NOT EXISTS billing_cycle TEXT;

-- Backfill existing premium users (safe)
UPDATE user_profiles
SET premium_tier = 'premium'
WHERE is_premium = true 
  AND (premium_tier IS NULL OR premium_tier = 'free');


-- ============================================
-- 2. Fix RLS for user_achievements
--    (Needed because the app uses .upsert() which requires UPDATE permission on conflict)
-- ============================================
DROP POLICY IF EXISTS "Users can update their own achievements" ON user_achievements;

CREATE POLICY "Users can update their own achievements"
  ON user_achievements FOR UPDATE
  USING (auth.uid() = user_id);


-- ============================================
-- 3. Ensure crypto_payments table exists (from earlier payments work)
-- ============================================
CREATE TABLE IF NOT EXISTS crypto_payments (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  transaction_signature TEXT NOT NULL UNIQUE,
  amount_usdc DECIMAL(10,2) NOT NULL,
  tier TEXT NOT NULL,
  billing_cycle TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'verified',
  verified_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_crypto_payments_user_id 
  ON crypto_payments(user_id);

CREATE INDEX IF NOT EXISTS idx_crypto_payments_tx_sig 
  ON crypto_payments(transaction_signature);

ALTER TABLE crypto_payments ENABLE ROW LEVEL SECURITY;

-- Drop and recreate to avoid duplicates if re-running
DROP POLICY IF EXISTS "Users can view their own crypto payments" ON crypto_payments;

CREATE POLICY "Users can view their own crypto payments"
  ON crypto_payments FOR SELECT
  USING (auth.uid() = user_id);
