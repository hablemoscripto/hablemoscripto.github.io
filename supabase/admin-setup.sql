-- Add admin role to users
-- This extends your existing Supabase auth.users table

-- Step 1: Create a profiles table to store user roles
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 2: Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Step 3: Policies for profiles table
-- Users can read their own profile
CREATE POLICY "Users can read own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- Only admins can update profiles
CREATE POLICY "Only admins can update profiles" ON public.profiles
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Step 4: Create function to automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, is_admin)
  VALUES (
    NEW.id,
    NEW.email,
    false -- Default new users to non-admin
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 5: Create trigger for automatic profile creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Step 6: Update newsletter_subscribers RLS policy to require admin
DROP POLICY IF EXISTS "Authenticated users can view" ON newsletter_subscribers;
CREATE POLICY "Only admins can view subscribers" ON newsletter_subscribers
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Step 7: Function to check if user is admin (useful for frontend)
CREATE OR REPLACE FUNCTION public.is_user_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND is_admin = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 8: Make YOUR account an admin
-- ⚠️ IMPORTANT: Run this after the setup, replacing with your actual email
-- UPDATE public.profiles SET is_admin = true WHERE email = 'hablemoscrypto.es@gmail.com';

-- Step 9: Create index for faster admin checks
CREATE INDEX IF NOT EXISTS idx_profiles_admin ON public.profiles(id, is_admin);

-- Step 10: Backfill existing users (if any)
INSERT INTO public.profiles (id, email, is_admin)
SELECT id, email, false
FROM auth.users
ON CONFLICT (id) DO NOTHING;
