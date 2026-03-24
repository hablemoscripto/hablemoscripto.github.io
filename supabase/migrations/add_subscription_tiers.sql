-- Add subscription tier tracking to user_profiles
-- Run this migration in Supabase SQL Editor (Dashboard > SQL Editor).

-- New columns for tier-based subscriptions
ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS premium_tier TEXT DEFAULT 'free';
ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS billing_cycle TEXT;

-- Backfill: existing premium users get 'premium' tier
UPDATE user_profiles
  SET premium_tier = 'premium'
  WHERE is_premium = true AND premium_tier = 'free';

-- Crypto payments table — tracks USDC payments verified on Solana
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

-- Row Level Security
ALTER TABLE crypto_payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own crypto payments"
  ON crypto_payments FOR SELECT
  USING (auth.uid() = user_id);
