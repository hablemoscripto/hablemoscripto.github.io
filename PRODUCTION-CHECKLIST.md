# Production launch checklist

Pre-flight for hablemoscripto.io. Complete every item before marketing a public launch.

## 1. Vercel environment variables

Set these in **Vercel → Project → Settings → Environment Variables** for the **Production** environment. Redeploy after changing.

| Variable | Required | Notes |
|---|---|---|
| `VITE_SUPABASE_URL` | ✅ | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | ✅ | Supabase anon key (safe to ship to browser) |
| `VITE_WOMPI_PUBLIC_KEY` | ✅ | **Must start with `pub_prod_`** — `pub_test_` keys will silently use sandbox |
| `VITE_GA4_MEASUREMENT_ID` | Optional | `G-XXXXXXXXXX`. Analytics no-op if unset. Only fires in prod build. |
| `VITE_ERROR_REPORTING_URL` | Optional | Endpoint for client error reports. No-op if unset. |
| `VITE_USDC_PAYMENT_ADDRESS` | Optional | Solana address that receives USDC. Leave empty to disable crypto tab. |

`SUPABASE_SERVICE_KEY` is only needed for the seed script (`npm run db:seed`) — it must **not** be set on Vercel (the seed never runs in the production build).

## 2. Supabase Edge Function secrets

Set these via `supabase secrets set` or the Supabase dashboard → **Project Settings → Edge Functions → Secrets**. These are ambient for every Edge Function.

| Secret | Required by | Notes |
|---|---|---|
| `GEMINI_API_KEY` | `gemini-chat` | Google AI Studio API key |
| `RESEND_API_KEY` | `send-newsletter` | Resend dashboard → API Keys |
| `WOMPI_INTEGRITY_SECRET` | `create-payment` | **Production secret, not sandbox** |
| `WOMPI_EVENTS_SECRET` | `wompi-webhook`, `send-newsletter` | **Production secret, not sandbox.** Also used as the HMAC key for unsubscribe tokens. |
| `USDC_PAYMENT_ADDRESS` | `verify-crypto-payment` | Only if crypto payments are live |
| `SOLANA_RPC_URL` | `verify-crypto-payment` | Mainnet RPC (Helius/QuickNode recommended) |

`SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are auto-injected by Supabase — do not set them manually.

## 3. Database migrations

Apply in order in the Supabase **SQL Editor**:

1. `supabase/payments-schema.sql` — creates `user_profiles`, `payments`, `upgrade_user_to_premium` RPC
2. `supabase/admin-setup.sql` — creates `profiles` table with `is_admin`, trigger, and RLS policies
3. `supabase/migrations/add_subscription_tiers.sql` — premium tier tracking
4. `supabase/migrations/create_user_achievements.sql` — gamification achievements
5. `supabase/migrations/add_processed_webhook_events.sql` — **new** idempotency table for Wompi retries

After step 2, promote your account:

```sql
UPDATE public.profiles
SET is_admin = true
WHERE email = 'sebastianbarrientosa@gmail.com';
```

## 4. Wompi webhook configuration

In the Wompi dashboard, register the webhook endpoint:

```
https://<your-supabase-project>.functions.supabase.co/wompi-webhook
```

Subscribe to `transaction.updated` events. The signature checksum on each event is recorded in `processed_webhook_events` so retries are safely deduplicated.

## 5. Smoke tests (do these before announcing)

- [ ] Load homepage — no console errors, hero animation plays, CTAs clickable
- [ ] Sign up with a throwaway email — verify email lands, verification link works
- [ ] Log in with Google — first-time user is created, lands on `/education`
- [ ] Complete Lesson 1 — XP and completion checkmark appear
- [ ] Try a premium payment with a Wompi test card — `pago-completado` shows correct state
- [ ] Visit `/admin/newsletter` as a non-admin account — redirected with error message
- [ ] Visit `/admin/newsletter` as your admin account — subscriber list loads
- [ ] Send a newsletter to one test subscriber — email arrives, unsubscribe link works
- [ ] Click an unsubscribe link — `/unsubscribe` sets `is_active = false`
- [ ] Hit `/nonexistent-xyz` — 404 page renders

## 6. Observability

- [ ] Open Vercel Analytics (or Umami/Plausible) — confirm page views recording
- [ ] Open Supabase **Logs → Edge Functions** — verify no 5xx on `wompi-webhook`, `gemini-chat`, `send-newsletter`
- [ ] If `VITE_GA4_MEASUREMENT_ID` is set, open GA4 real-time report and confirm events (`page_view`, `sign_up`, `lesson_complete`) are firing

## 7. Known post-launch work (not blocking)

- Split `data/courseData.ts` (~8.5MB) per level to cut first-load bundle size
- Replace in-memory rate limiting in `gemini-chat` / `create-payment` with Supabase Redis or Deno KV (resets on cold start today)
- Ship the certificate flow (`components/ui/Certificate.tsx` exists but has no route)
- Tighten CSP — drop `unsafe-eval` once the Wompi widget supports nonces
