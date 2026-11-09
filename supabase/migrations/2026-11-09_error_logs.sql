-- Client error log (2026-11-09)
--
-- Run in the Supabase SQL editor BEFORE deploying the log-client-error Edge
-- Function, which inserts here with the service role. RLS is on with no
-- policies, so the browser cannot read or write this table directly.
--
-- Rows hold page URLs, user agents and sometimes a user id. The function
-- deletes rows older than 30 days as it goes; keep the privacy policy in line
-- with that retention.

CREATE TABLE IF NOT EXISTS public.error_logs (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  level TEXT NOT NULL CHECK (level IN ('info', 'warning', 'error')),
  message TEXT NOT NULL,
  stack TEXT,
  component TEXT,
  action TEXT,
  url TEXT,
  user_agent TEXT,
  context JSONB
);

CREATE INDEX IF NOT EXISTS idx_error_logs_created_at ON public.error_logs (created_at DESC);

ALTER TABLE public.error_logs ENABLE ROW LEVEL SECURITY;
