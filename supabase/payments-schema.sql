-- Payments Schema for Wompi Integration

-- User profiles with premium status
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  is_premium BOOLEAN DEFAULT FALSE,
  premium_since TIMESTAMPTZ,
  premium_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Payments/Orders table
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  wompi_reference TEXT UNIQUE NOT NULL,
  wompi_transaction_id TEXT,
  amount_in_cents INTEGER NOT NULL,
  currency TEXT DEFAULT 'COP',
  status TEXT DEFAULT 'PENDING', -- PENDING, APPROVED, DECLINED, VOIDED, ERROR
  payment_method TEXT,
  product_type TEXT NOT NULL, -- 'premium_lifetime', 'premium_monthly', etc.
  product_name TEXT,
  customer_email TEXT,
  customer_name TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- User profiles policies
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

-- Payments policies
CREATE POLICY "Users can view own payments"
  ON payments FOR SELECT
  USING (auth.uid() = user_id);

-- Service role can do everything (for webhooks)
CREATE POLICY "Service role full access to payments"
  ON payments FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access to user_profiles"
  ON user_profiles FOR ALL
  USING (auth.role() = 'service_role');

-- Function to automatically create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update user to premium after successful payment
CREATE OR REPLACE FUNCTION public.upgrade_user_to_premium(
  p_user_id UUID,
  p_product_type TEXT
)
RETURNS VOID AS $$
BEGIN
  UPDATE user_profiles
  SET
    is_premium = TRUE,
    premium_since = NOW(),
    premium_expires_at = CASE
      WHEN p_product_type = 'premium_lifetime' THEN NULL
      WHEN p_product_type = 'premium_yearly' THEN NOW() + INTERVAL '1 year'
      WHEN p_product_type = 'premium_monthly' THEN NOW() + INTERVAL '1 month'
      ELSE NULL
    END,
    updated_at = NOW()
  WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Index for faster lookups
CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_wompi_reference ON payments(wompi_reference);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_user_profiles_is_premium ON user_profiles(is_premium);
