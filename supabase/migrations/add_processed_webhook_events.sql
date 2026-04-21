-- Idempotency table for Wompi webhook events.
--
-- Wompi retries webhooks on non-2xx responses, and retries can also arrive
-- out-of-order or duplicate each other. Without an event-level dedupe key,
-- a retried APPROVED event could re-run `upgrade_user_to_premium` and
-- re-award benefits. A status-based check ("skip if payment already APPROVED")
-- also fails the "first call succeeded to update status but upgrade RPC
-- errored" edge case — the retry would see matching status and short-circuit
-- before retrying the upgrade.
--
-- The fix: record the signature checksum of every event we've already
-- processed. INSERT-then-work gives exactly-once semantics — the unique
-- violation on duplicate delivery tells us to skip.

CREATE TABLE IF NOT EXISTS public.processed_webhook_events (
  id TEXT PRIMARY KEY,            -- signature.checksum from the Wompi event
  event_type TEXT NOT NULL,       -- e.g. 'transaction.updated'
  reference TEXT,                 -- payment reference for diagnostics
  status TEXT,                    -- transaction status captured at receipt
  processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_processed_webhook_events_reference
  ON public.processed_webhook_events(reference);

CREATE INDEX IF NOT EXISTS idx_processed_webhook_events_processed_at
  ON public.processed_webhook_events(processed_at DESC);

ALTER TABLE public.processed_webhook_events ENABLE ROW LEVEL SECURITY;

-- Only the service role (Edge Functions) may read or write this table.
-- No user-facing policies — clients never touch webhook state.
CREATE POLICY "Service role full access to processed_webhook_events"
  ON public.processed_webhook_events FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');
