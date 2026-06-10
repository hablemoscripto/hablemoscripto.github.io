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
| `XAI_API_KEY` | `grok-chat` | xAI (Grok) API key for the AI tutor |
| `RESEND_API_KEY` | `send-newsletter`, welcome email | Resend dashboard → API Keys |
| `WOMPI_INTEGRITY_SECRET` | `create-payment` | **Production secret, not sandbox** |
| `WOMPI_EVENTS_SECRET` | `wompi-webhook` | **Production secret, not sandbox** |
| `UNSUBSCRIBE_HMAC_SECRET` | `unsubscribe`, `send-newsletter` | **Required.** Long random string for signing unsubscribe tokens. No fallback — both functions return 500 if unset. Must be identical in both. |
| `USDC_PAYMENT_ADDRESS` | `verify-crypto-payment` | Only if crypto payments are live (dormant at launch) |
| `SOLANA_RPC_URL` | `verify-crypto-payment` | Mainnet RPC (Helius/QuickNode recommended) |

The old `GEMINI_API_KEY` secret is no longer used (the AI tutor moved to Grok) and can be removed.

`SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are auto-injected by Supabase — do not set them manually.

## 3. Database migrations

Apply in this exact order in the Supabase **SQL Editor**. **Order matters** — later files redefine functions and reference tables created earlier. The base `*.sql` files use bare `CREATE TABLE`/`CREATE POLICY` (no `IF NOT EXISTS`), so they are **fresh-DB only** and will error on re-run; the dated `migrations/*` files are idempotent and safe to re-run.

**Course content schema:**
1. `supabase/course-schema.sql` — creates `levels`, `modules`, `lessons`, `quiz_questions`, `referrals`
2. `supabase/add-level-fields.sql` — adds `icon_name` / `color` / `order` to `levels`
3. `supabase/quiz-enhancements.sql` — multi-type questions, checkpoint quizzes

**User / payments / admin schema:**
4. `supabase/payments-schema.sql` — `user_profiles`, `payments`, `upgrade_user_to_premium` RPC, signup trigger v1
5. `supabase/admin-setup.sql` — `profiles` table with `is_admin`, trigger, RLS policies *(creates a policy on `newsletter_subscribers` — that table must already exist; see note below)*
6. `supabase/migrations/create_user_achievements.sql` — gamification achievements table
7. `supabase/migrations/add_subscription_tiers.sql` — premium tier tracking + `crypto_payments`
8. `supabase/migrations/add_processed_webhook_events.sql` — idempotency table for Wompi retries
9. `supabase/migrations/2026-05-26_fix_user_profiles_and_achievements_rls.sql` — adds `premium_tier` column, fixes achievements upsert RLS

**Security + content protection (apply last, in this order):**
10. `supabase/migrations/2026-05-28_fix_payments_security_and_tiers.sql` — **critical.** Closes the RLS hole that let any logged-in user self-grant premium, makes `premium_tier` persist on purchase (changes `upgrade_user_to_premium` to `(uuid, tier)`), and merges the duplicate signup trigger. **Apply before deploying the updated `wompi-webhook`** — the new function calls the new RPC signature.
11. `supabase/migrations/2026-05-30_content_protection.sql` — creates `protected_lessons` (references `lessons(id)`) and locks paid content tables to service-role-only. **Without this, the paid-lesson path 500s.**
12. `supabase/migrations/2026-06-02_newsletter_autosubscribe.sql` — **MUST run last.** Both this and step 10 `CREATE OR REPLACE handle_new_user()`; if 10 runs after this, the newsletter signup opt-in is silently dropped.

> **Not in the repo (gap):** the DDL for `user_progress` and `newsletter_subscribers` lives only in the live DB (an earlier external migration), not in `supabase/`. A fresh-environment rebuild needs both created **before** step 5 (which adds a policy to `newsletter_subscribers`) and before the seed. Capture their real DDL into `supabase/` so the schema is reproducible. `supabase/verify-order-column.sql` is a diagnostic, not a migration — do not apply it.

After step 5, promote your account:

```sql
UPDATE public.profiles
SET is_admin = true
WHERE email = 'sebastianbarrientosa@gmail.com';
```

## 3a. Seed lesson content

After migrations, push course content to the DB. The AI tutor's RAG grounding (`lesson_details`) and all 25 paid lessons (`protected_lessons`) only exist after this runs:

```
npm run db:seed   # requires SUPABASE_SERVICE_KEY in the local environment
```

**Take a database backup first** (see §8). The current seed deletes-then-reinserts content tables, so a failed run can leave content tables empty until it succeeds.

## 3b. Deploy Edge Functions

`git push` deploys only the Vercel frontend. Deploy (or redeploy) the functions **after** applying migrations:

```
supabase functions deploy create-payment
supabase functions deploy wompi-webhook
supabase functions deploy grok-chat
supabase functions deploy get-lesson-content
supabase functions deploy unsubscribe --no-verify-jwt
supabase functions deploy send-newsletter --no-verify-jwt
supabase functions deploy mentoria-request --no-verify-jwt
```

`get-lesson-content` serves the 25 paid lessons after a server-side premium check — **paid lessons are dead without it.** `mentoria-request` is a public form endpoint and needs `--no-verify-jwt`.

**Do NOT deploy `verify-crypto-payment` at launch.** Crypto payments are deferred. The function does not bind the on-chain payer to the authenticated user, so anyone could claim someone else's USDC transfer. Leave it undeployed until payer-binding is implemented (a signed nonce from the source wallet, or a per-user memo). The crypto tab is already disabled in the UI.

`_shared/welcome-email.ts` is imported by `wompi-webhook` (and `verify-crypto-payment` when it ships later), so redeploy `wompi-webhook` after any change to it.

## 4. Wompi webhook configuration

In the Wompi dashboard, register the webhook endpoint:

```
https://<your-supabase-project>.functions.supabase.co/wompi-webhook
```

Subscribe to `transaction.updated` events. The signature checksum on each event is recorded in `processed_webhook_events` so retries are safely deduplicated.

## 4b. Supabase Auth configuration

In the Supabase dashboard → **Authentication**:

- [ ] **URL Configuration → Site URL** = `https://hablemoscripto.io` (used as the default redirect for email links). A wrong Site URL sends password-reset / verification links to localhost or a preview domain.
- [ ] **URL Configuration → Redirect URLs** — add the production domain (and any Vercel preview domains you test on) so Google OAuth callback and password-reset return correctly: `https://hablemoscripto.io/**`.
- [ ] **Providers → Email → Confirm email** = **ON.** With confirmations off, new email signups are returned an active session while the UI shows the "verify your email" screen — a dead end. (The signup flow assumes confirmation is required.)
- [ ] **Providers → Google** — OAuth client ID/secret set, and the Supabase callback URL added to the Google Cloud console authorized redirect URIs.

## 5. Smoke tests (do these before announcing)

> **Run these against a deployed Vercel preview URL, not `localhost`.** Local dev serves no CSP or security headers, so a CSP rule that blocks the Wompi widget's API calls (or any header regression) will pass locally and only fail in production. Watch the browser console for CSP violations during the payment test.

- [ ] Load homepage — no console errors, hero animation plays, CTAs clickable
- [ ] Sign up with a throwaway email — verify email lands, verification link works
- [ ] Log in with Google — first-time user is created, lands on `/education` (not stranded on the landing page)
- [ ] On the public landing page, click **"Convertirme en Cripto Experto"**, sign up, and confirm you land on `/education` with the **Experto** payment modal already open (plan carried through signup)
- [ ] Complete Lesson 1 — XP and completion checkmark appear
- [ ] Buy **Inversor** with a Wompi sandbox card — `pago-completado` shows APPROVED, and within a few seconds `/education` unlocks all levels (verify `user_profiles.premium_tier` = `premium`)
- [ ] Buy **Cripto Experto** — `premium_tier` = `vip` and the "Comunidad Activa" badge appears in the `/education` subheader
- [ ] Confirm the Fundador welcome email arrives
- [ ] As a logged-in non-premium user, try to UPDATE your own `user_profiles` row from the browser console — it must be **rejected** (RLS no longer allows self-upgrade)
- [ ] Visit `/admin/newsletter` as a non-admin account — redirected with error message
- [ ] Visit `/admin/newsletter` as your admin account — subscriber list loads
- [ ] Send a newsletter to one test subscriber — email arrives, unsubscribe link works
- [ ] Click an unsubscribe link — `/unsubscribe` sets `is_active = false`
- [ ] Hit `/nonexistent-xyz` — 404 page renders

## 6. Observability

- [ ] Open Vercel Analytics (or Umami/Plausible) — confirm page views recording
- [ ] Open Supabase **Logs → Edge Functions** — verify no 5xx on `wompi-webhook`, `grok-chat`, `send-newsletter`. **Check daily during launch week** — a "paid but no premium" failure surfaces here first.
- [ ] If `VITE_GA4_MEASUREMENT_ID` is set, open GA4 real-time report and confirm events (`page_view`, `sign_up`, `lesson_complete`) are firing — including the **landing-page** `page_view` (the first one, which ad attribution depends on)
- [ ] Client errors currently `console.error` in the browser unless `VITE_ERROR_REPORTING_URL` points somewhere. Set it (even to a tiny Edge Function that inserts into an `error_logs` table) so production errors are captured, not lost.

## 7. Known post-launch work (not blocking)

- Split `data/courseData.ts` (~8.5MB) per level to cut first-load bundle size
- Replace in-memory rate limiting in `grok-chat` / `create-payment` with Supabase Redis or Deno KV (resets on cold start today)
- Ship the certificate flow (`components/ui/Certificate.tsx` exists but has no route)
- Tighten CSP — drop `unsafe-eval` once the Wompi widget supports nonces
- Wire `verify-crypto-payment` payer-binding, then deploy and re-enable the USDC tab
- Reconcile stuck `PENDING` payments (a daily job querying Wompi by reference) in case a webhook is never delivered

## 8. Backups & data safety

- [ ] Confirm the Supabase plan tier. **Free tier has no automated backups.** Enable daily backups (Pro) or schedule a `pg_dump` before launch.
- [ ] **Take a manual backup before every `npm run db:seed`** against production — the seed deletes-then-reinserts content tables, so a bad run is unrecoverable without one.
- [x] **Verified (2026-06-10): a reseed does NOT wipe user progress.** `user_progress` has a single foreign key — `user_id → auth.users` with `ON DELETE CASCADE`, which is correct and desirable (deleting a user removes their progress). There is **no** `lesson_id → lessons` foreign key, so deleting all `lessons` rows during a reseed does not cascade into `user_progress`. Re-check if the schema changes:
  ```sql
  SELECT conname, confdeltype, confrelid::regclass AS references_table
  FROM pg_constraint
  WHERE conrelid = 'user_progress'::regclass AND contype = 'f';
  ```
  A CASCADE referencing `auth.users` is fine. The danger would be a CASCADE referencing a **reseeded content table** (`lessons`) — none exists today.
