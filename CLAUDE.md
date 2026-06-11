# CLAUDE.md

Guidance for Claude Code (claude.ai/code) and future engineers working in this repo.

---

## Current launch state — snapshot, May 2026

This section is mid-launch context. Older sections below describe the steady-state architecture; **this is what's actually in flight right now.**

### Pricing model — lifetime, two tiers (Precio Fundador)

Settled May 2026 after auditing a triple price-disagreement (UI vs paymentService vs server catalog) and aligning a frontend that had drifted out of sync. Decision: **two paid lifetime tiers only at launch** plus the free Principiante level; monthly/yearly subscriptions deferred until a Wompi tokenization-based renewal cron is built.

| Tier | USD | COP | USDC | productType SKU | frontend tier | DB `premium_tier` |
|---|---|---|---|---|---|---|
| Principiante (free) | — | — | — | — | `free` | — |
| Inversor | $99 | 350,000 | 99 | `inversor_lifetime` | `inversor` | `premium` |
| Cripto Experto | $249 | 900,000 | 249 | `vip_lifetime` | `experto` | `vip` |

Framing in UI: **"Precio Fundador"** — no countdown, no fake urgency. The earlier "first 100 buyers = Fundador" limited-tier idea was **dropped** in favor of honest launch pricing: the price rises later with a 30-day-notice email, which is the conversion lever, not a fake scarcity counter or launch deadline.

The frontend `PRICING_PLANS` and tier vocabulary were renamed to `inversor` / `experto` to match this copy. Internally the DB still stores `premium_tier` as `'premium'` (Inversor) / `'vip'` (Cripto Experto) — do not conflate the UI-facing tier name with the stored value.

### Source-of-truth contract — keep these in sync

Two files hold the canonical price table. **They MUST agree.** No third source.

1. `services/paymentService.ts` → `PRICING_PLANS` (frontend source of truth — keyed by tier)
2. `supabase/functions/create-payment/index.ts` → `PRODUCT_CATALOG` (server source of truth — keyed by SKU)

The frontend sends `productType` (e.g. `inversor_lifetime`); the server ignores any client-supplied amount and looks up the canonical COP-cents amount in `PRODUCT_CATALOG`. If you add or rename a SKU, both files change in the same commit.

### Wompi integration state

- **Sandbox keys are set** in Vercel + Supabase Edge Function secrets (May 2026). No production keys yet.
- Public key (`pub_test_*`) → `VITE_WOMPI_PUBLIC_KEY` (Vercel)
- Integrity secret → `WOMPI_INTEGRITY_SECRET` (Supabase)
- Events secret → `WOMPI_EVENTS_SECRET` (Supabase)
- Wompi private key (`prv_*`) is NOT used — Widget integration only, frontend-driven.

**Still pending (operational, not code):**
- Register webhook URL in Wompi dashboard: `https://<project>.functions.supabase.co/wompi-webhook`, subscribed to `transaction.updated`
- Deploy three Edge Functions after the May rework:
  ```
  supabase functions deploy create-payment
  supabase functions deploy wompi-webhook
  supabase functions deploy verify-crypto-payment
  ```
- End-to-end sandbox smoke test (sign up → buy Inversor → webhook fires → premium granted → Fundador welcome email lands)

### Fundador welcome email

Every paid signup triggers a personal welcome email from CBas. Wired into both payment paths.

- Helper: `supabase/functions/_shared/welcome-email.ts` (`sendFundadorWelcome`)
- Called from `wompi-webhook/index.ts` (after `upgrade_user_to_premium` RPC) and `verify-crypto-payment/index.ts` (after profile update)
- Failure is non-fatal — upgrade has already succeeded by the time the email tries to send
- **Email body content lives in `BODY_HTML` in the helper** with a marked placeholder. Sebastián owns this — it's deliberately *his voice*, not a generic template
- From address: `CBas - Hablemos Cripto <cbas@mail.hablemoscripto.io>` (uses the verified `mail.hablemoscripto.io` domain on Resend)
- Open question (May 2026): replies bounce to a non-existent inbox unless a `reply_to` is added or the inbox is set up. Sebastián to decide.

### Webhook idempotency — fixed May 2026

`wompi-webhook` previously had a subtle bug: marker row in `processed_webhook_events` was inserted before the upgrade RPC ran. If the RPC failed and Wompi retried, the dedupe row was already there, retry hit "Already processed", and the user paid but never got premium.

Current pattern (still INSERT-then-work, but with cleanup):
1. INSERT marker row keyed on `signature.checksum` (race protection)
2. Do all the work
3. **If anything fails after the insert, DELETE the marker row before returning non-2xx** so retries actually retry

`cleanupDedupeRow()` in `wompi-webhook/index.ts` is the helper.

### Fundador badge in UI

Small `Fundador` pill (Award icon, brand colors) in `/education` sticky subheader. Renders only when `userTier !== 'free'`. Lives in `components/EducationPage.tsx`.

### AI tutor — migrated to Grok (xAI)

The AI tutor "CBas" persona is now powered by **Grok (xAI)** via the `grok-chat` Edge Function. The client is `services/aiService.ts` (`streamAIResponse`). The previous Gemini implementation (`services/geminiService.ts` and the `supabase/functions/gemini-chat/` function) was **deleted** May 2026 — the `GEMINI_API_KEY` Supabase secret is no longer used and can be removed. `grok-chat` reads `XAI_API_KEY` (and optional `XAI_MAIN_MODEL` / `XAI_RERANKER_MODEL`).

### Recent deletions

- `services/geminiService.ts` + `supabase/functions/gemini-chat/` — replaced by the Grok path (`services/aiService.ts` + `grok-chat`). Deleted May 2026.
- `components/PaymentButton.tsx` — was dead code (nothing imported it). Deleted May 2026 per "no backwards-compat shims" rule.
- Subscription/`billingCycle` types and parameters across `paymentService.ts`, `PaymentModal.tsx`, `EducationPage.tsx`, `PricingSection.tsx`, `verify-crypto-payment/index.ts`. All gone — re-add when subscriptions ship later.

---

## What this is

**Hablemos Cripto** is a Spanish-language crypto education platform for Latin America. 44 structured lessons (19 beginner / 13 intermediate / 12 advanced), with a Grok-powered AI tutor ("CBas"), gamification (XP / streaks / achievements), spaced-repetition review cards, and Wompi-based premium upgrades.

- **Language:** all user-facing copy is Spanish (LATAM register, not Spain)
- **Home market:** Colombia first — Wompi is Colombian, pricing examples use COP, local examples skew Colombian
- **Stage:** code-complete and launch-ready. See `PRODUCTION-CHECKLIST.md` for the ordered deploy steps still blocked on human hands (migrations, env vars, Wompi webhook registration, smoke test).

---

## Prime directives — read these first

Things that will silently break if ignored:

1. **`data/courseData.ts` is the source of truth for lesson content.** Any edit to it requires `npm run db:seed` before it's visible in the app — the UI reads from Supabase, seeded by this script. Skip the seed and your change does not exist for users.
2. **`PRICING_PLANS` (`services/paymentService.ts`) and `PRODUCT_CATALOG` (`supabase/functions/create-payment/index.ts`) are paired sources of truth for prices.** They MUST stay in sync. Add/rename a SKU in one without the other and the payment flow either silently overcharges users or rejects valid plan selections. Server is authoritative for amounts (it ignores client-supplied prices, by design); frontend is authoritative for what's *shown*.
3. **Edge Functions deploy separately from the frontend.** `git push` deploys Vercel only. Supabase Edge Functions (`supabase/functions/*`) need `supabase functions deploy <name>` to go live. After any change to `_shared/welcome-email.ts`, redeploy **both** `wompi-webhook` and `verify-crypto-payment` — they import the shared file.
4. **Wompi keys must be `pub_prod_*` in production.** `pub_test_*` silently routes to sandbox — payments look normal, nothing settles. Currently sandbox keys are set everywhere (May 2026, pre-launch).
5. **Two profile tables exist and they are different.** `profiles` holds admin flags (`is_admin`). `user_profiles` holds premium status (`is_premium`, `premium_tier`, `premium_expires_at`). Do not conflate. Lifetime tiers leave `premium_expires_at` NULL — only enforce expiration when it's set.
6. **Rate limiting is in-memory and resets on Vercel/Supabase cold start.** Acceptable <100 concurrent users; budget work to move to Supabase / Deno KV before scaling.
7. **Do not commit without explicit ask.** User-facing instruction: only commit when requested.
8. **Do not run destructive git ops** (force push, reset --hard, branch delete) without explicit approval.
9. **`marketing/` is gitignored on purpose.** Strategy, creator outreach, messaging docs live there locally and do not ship.

---

## Commands

```bash
npm run dev          # Vite dev server on :3000
npm run build        # production build to dist/
npm run preview      # serve the prod build locally on :4173
npm run db:seed      # push data/courseData.ts → Supabase (REQUIRED after content edits)
npm run lint         # eslint . (expects 0 errors, 0 warnings)
npm run lint:fix     # auto-fix what eslint can
npm run format       # prettier write
npx tsc --noEmit     # type check without emit

# Edge Function deploys (Supabase CLI required):
supabase functions deploy wompi-webhook --no-verify-jwt
supabase functions deploy grok-chat
supabase functions deploy create-payment
supabase functions deploy send-newsletter --no-verify-jwt
supabase functions deploy unsubscribe --no-verify-jwt
```

---

## Architecture — the data flow you must understand

```
data/courseData.ts  ─[npm run db:seed]─→  Supabase (lessons table)
                                               │
                                               ↓
                                  services/lessonService.ts  ←  (fallback: reads bundled courseData directly)
                                               │
                                               ↓
                                      components/LessonView.tsx
```

The app is currently wired to read from `LESSONS_DATA` in `data/courseData.ts` *directly* (no network), so seed-to-Supabase keeps the DB in sync for any future migration but isn't on the hot path. The seed still matters because the seed script is the authority for the shape of lesson data.

---

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | React 19 + TypeScript (strict) + Vite 6 |
| Styling | Tailwind CSS 4 + custom `navy-*` and `brand-*` scales |
| Routing | react-router-dom 7, lazy-loaded route components via `React.lazy` |
| State | React Context (Auth, Progress, Gamification) |
| Animation | framer-motion + framer-motion page transitions |
| Backend | Supabase (Postgres + Auth + Edge Functions with Deno) |
| AI | Grok (xAI) via `grok-chat` Edge Function (server-side key) |
| Payments | Wompi (cards, COP) + USDC-on-Solana (verify-crypto-payment) |
| Email | Resend via `mail.hablemoscripto.io` domain |
| Hosting | Vercel (push to `main` auto-deploys; `vercel.json` does SPA rewrites + security headers) |
| SEO | react-helmet-async for per-route `<title>`, `canonical`, `og:*`, `twitter:*` |
| PWA | vite-plugin-pwa with workbox precache of lesson images + fonts |

Root-level entry points (`App.tsx`, `index.tsx`, `index.css`). **No `src/` folder.** Path alias `@/` maps to project root.

---

## Directory map (pointers — read the code for the details)

| Path | What lives there |
|---|---|
| `App.tsx` | Route tree, context providers, error boundary, chat widget mount |
| `data/courseData.ts` | **All 44 lessons**, levels, modules, quizzes. ~762 kB (Babel deoptimizes styling; splitting is known post-launch work). |
| `components/` | 26 top-level components + `lesson/`, `education/`, `ui/` subfolders |
| `contexts/` | `AuthContext`, `ProgressContext`, `GamificationContext` — see §State below |
| `hooks/` | `useDailyReview`, `useLessonNavigation`, `useScrollProgress` |
| `services/` | `lessonService` (lesson read), `dailyReviewService` (SR picker), `aiService` (Grok AI client), `paymentService` (Wompi client) |
| `lib/supabase.ts` | Supabase client (browser-side, anon key) |
| `utils/` | `analytics.ts` (GA4 wrapper), `errorReporting.ts`, `courseUtils.ts` (lesson ordering / prev-next) |
| `scripts/seed.ts` | Seeds `courseData.ts` → Supabase. Holds the allowed icon list. |
| `scripts/optimize-images.mjs` | Generates PWA icons + responsive WebP variants from `assets/source/og-cover.png` (source kept outside `public/` so the unoptimized 6.7 MB original doesn't ship to the deployed site) |
| `scripts/verify-migration.ts` | Ad-hoc migration verifier (diagnostic) |
| `scripts/check-dns.sh` | DNS sanity check for `hablemoscripto.io` |
| `supabase/functions/*` | Edge Functions — see §Edge Functions |
| `supabase/functions/_shared/welcome-email.ts` | Fundador welcome email helper. Imported by `wompi-webhook` and `verify-crypto-payment`. **`BODY_HTML` is the email content** — Sebastián owns it; placeholder is clearly marked. |
| `supabase/migrations/*.sql` | Run manually in the Supabase SQL editor, in the order listed in `PRODUCTION-CHECKLIST.md` |
| `supabase/payments-schema.sql` | One-shot schema bootstrap for `user_profiles` + `payments` |
| `supabase/admin-setup.sql` | One-shot schema bootstrap for `profiles` (admin role) |
| `public/` | Static assets (sitemap, robots, images, icons, manifest) |
| `PRODUCTION-CHECKLIST.md` | Ordered pre-launch steps. Read before deploying. |
| `marketing/` (gitignored) | Go-to-market playbook — strategy, creator outreach templates, messaging, KPIs |

---

## Routes

| Path | Component | Auth |
|---|---|---|
| `/` | LandingPage | No |
| `/education` | EducationPage (dashboard) | Yes |
| `/education/beginner` | LevelDetail (BEGINNER_LEVEL) | Yes |
| `/education/intermediate` | LevelDetail (INTERMEDIATE_LEVEL) | Yes |
| `/education/advanced` | LevelDetail (ADVANCED_LEVEL) | Yes |
| `/education/lesson/:lessonId` | LessonView | Yes |
| `/admin/newsletter` | NewsletterAdmin | Yes + `profiles.is_admin = true` |
| `/privacidad` | LegalPage (privacy) | No |
| `/terminos` | LegalPage (terms) | No |
| `/unsubscribe` | UnsubscribePage | No (public, token-signed) |
| `/pago-completado` | PaymentSuccess | No |
| `*` | NotFoundPage | No |

All non-public routes are gated by `ProtectedRoute`. All Helmet-driven routes set `<title>`, `<canonical>`, `og:*`, and `twitter:*` per-route. Index-level defaults live in `index.html` for `og:image`, `og:type`, `og:locale`, `og:site_name`, `twitter:card`.

---

## Edge Functions (Supabase, Deno)

| Function | Purpose | Auth | Notes |
|---|---|---|---|
| `grok-chat` | Proxies to Grok (xAI) with SSE streaming; keyword + Grok reranker RAG over lesson content | JWT | Rate limited 20/min in-memory. Client is `services/aiService.ts`. |
| `create-payment` | Creates Wompi payment row + integrity signature | JWT | Rate limited 5/min |
| `wompi-webhook` | Receives `transaction.updated`, verifies signature, upgrades user to premium, sends Fundador welcome email | Webhook (no JWT) | **Idempotency via `processed_webhook_events` table keyed on `signature.checksum`.** Insert-then-work pattern with cleanup-on-failure (May 2026 fix) — if the upgrade RPC or any later step fails, `cleanupDedupeRow()` deletes the marker row before returning non-2xx so retries actually retry. |
| `send-newsletter` | Sends via Resend; sanitizes HTML; per-recipient HMAC unsubscribe token | Admin JWT | Checks `profiles.is_admin` server-side |
| `unsubscribe` | Public endpoint to set `newsletter_subscribers.is_active = false` | No (HMAC token) | Deploy with `--no-verify-jwt` |
| `verify-crypto-payment` | Confirms a Solana USDC transfer, upgrades user, sends Fundador welcome email | JWT | Requires `SOLANA_RPC_URL`, `USDC_PAYMENT_ADDRESS` secrets. Lifetime tiers — sets `premium_expires_at = NULL`. |

Secrets are Supabase dashboard → Project Settings → Edge Functions → Secrets. `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are auto-injected — do not set them manually.

---

## State management

Three React Contexts, all mounted in `App.tsx`. Read from them via the `use*` hooks in each file.

- **`AuthContext`** (`contexts/AuthContext.tsx`) — Supabase session. Exposes `signUp`, `signIn`, `signInWithGoogle`, `signOut`, `resetPassword`, `resendVerification`. Subscribes to `onAuthStateChange`.
- **`ProgressContext`** (`contexts/ProgressContext.tsx`) — Lesson completion / quiz scores. Persists to `user_progress` in Supabase. Drives lesson locking (sequential) and the level-percentage math.
- **`GamificationContext`** (`contexts/GamificationContext.tsx`) — XP (100 per lesson), streaks, achievements. Persists to `user_achievements` with localStorage fallback. Emits achievement toasts through a pending queue.

Contexts load in series: Auth → Gamification → Progress. Progress depends on Gamification for XP awards on lesson completion.

---

## Lesson content model

Each lesson in `LESSONS_DATA` (`data/courseData.ts`) has:

```ts
{
  id: number,
  title: string,
  level: 'Principiante' | 'Intermedio' | 'Avanzado',
  number: string,       // e.g. "1 de 19"
  duration: string,     // e.g. "18 minutos"
  type: string,         // free-form descriptor
  description: string,
  videoId?: string,     // YouTube ID
  sections: Section[],
  quiz?: { questions: Question[] },
  checkpointQuizzes?: CheckpointQuizData[],  // mid-lesson checks
  referrals?: Referral[],                    // exchange / tool referral CTAs
}
```

### Section types

| type | Renders |
|---|---|
| `intro` | Title + content + optional image + optional highlight box |
| `main` | Standard content block with markdown + optional features (icon grid) + optional image |
| `comparison` | Two-column left-vs-right comparison (`leftSide` / `rightSide`) |
| `takeaways` | Bulleted "lo esencial" recap |

Optional on any section: `highlight` (callout box), `image` + `imageAlt` + `imageCaption` + `imageSummary` (the "Lo Esencial" box under the image), `terms` (inline glossary).

### Adding new lesson content

1. Edit `data/courseData.ts`. Images go under `public/images/lessons/lesson-X/` as `.webp`.
2. Reference images with absolute path: `/images/lessons/lesson-X/filename.webp`.
3. Run `npm run db:seed` to push to Supabase.
4. Icons are Lucide components in `courseData.ts`; `scripts/seed.ts` serializes them to strings. **Only icons listed in `ICONS` in `seed.ts` will seed correctly** — add new ones there first.

---

## Database tables (canonical)

Full schema is in `supabase/payments-schema.sql`, `supabase/admin-setup.sql`, and `supabase/migrations/*.sql`. Quick map:

| Table | Defined in | Purpose |
|---|---|---|
| `user_profiles` | `payments-schema.sql` | Premium status per user (`is_premium`, `premium_since`, `premium_expires_at`, `premium_tier`) |
| `payments` | `payments-schema.sql` | Wompi transaction ledger, keyed by `wompi_reference` |
| `profiles` | `admin-setup.sql` | Admin role flag (`is_admin`), auto-created on signup via trigger |
| `user_progress` | (external / earlier migration) | Lesson completion + quiz scores per user |
| `user_achievements` | `migrations/create_user_achievements.sql` | Unlocked achievement IDs with timestamp |
| `newsletter_subscribers` | (external / earlier migration) | Email list with `is_active` flag |
| `processed_webhook_events` | `migrations/add_processed_webhook_events.sql` | **Idempotency key store** for Wompi webhook retries |
| `crypto_payments` | `migrations/add_subscription_tiers.sql` | Solana USDC transaction ledger |

RLS is enabled on all of them. Service-role full-access policies for server writes; per-user read policies for client reads.

### Auth / admin model

- Every Supabase Auth user auto-gets a `profiles` row via `handle_new_user()` trigger.
- `profiles.is_admin` defaults `false`; manually promote via SQL: `UPDATE profiles SET is_admin = true WHERE email = '...'`.
- Admin gate is enforced in **three places**: `NewsletterAdmin.tsx` (client UX), `send-newsletter/index.ts` (server-side, actual enforcement), `newsletter_subscribers` RLS policy (DB last line of defense).

---

## Styling conventions

- Dark theme throughout. Palette: `navy-950` (#020617) base, `navy-900` / `navy-800` surfaces, `brand-500` (#f59e0b amber) for accents.
- **Contrast floor:** `text-navy-400` on `bg-navy-950`. Do not use `text-navy-500` or lower — it fails WCAG AA. This is the single most common a11y regression.
- Glass panels: `bg-slate-900/50 backdrop-blur-sm border border-white/10`.
- Fonts: `font-sans` (Inter) for body, `font-heading` (Outfit) for display. Loaded via Google Fonts preload in `index.html`; CSP includes `fonts.googleapis.com` + `fonts.gstatic.com` in `connect-src`, `style-src`, `font-src`.
- Icons: Lucide React, always `aria-hidden="true"` when purely decorative.
- Motion respects `prefers-reduced-motion`.
- Focus rings on interactive elements: `outline: 2px solid #f59e0b; outline-offset: 2px`.

---

## Environment variables

Full table + production setup in `PRODUCTION-CHECKLIST.md`. Local dev uses `.env.local` (see `.env.local.example`).

Quick reference:

- **Frontend (Vite, must start with `VITE_`):** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_WOMPI_PUBLIC_KEY` (`pub_prod_*` in prod), `VITE_GA4_MEASUREMENT_ID` (optional), `VITE_ERROR_REPORTING_URL` (optional), `VITE_USDC_PAYMENT_ADDRESS` (optional).
- **Seed script only (not exposed to client):** `SUPABASE_SERVICE_KEY`.
- **Supabase Edge Function secrets:** `XAI_API_KEY`, `RESEND_API_KEY`, `WOMPI_INTEGRITY_SECRET`, `WOMPI_EVENTS_SECRET`, `SOLANA_RPC_URL`, `USDC_PAYMENT_ADDRESS`. (Optional: `XAI_MAIN_MODEL`, `XAI_RERANKER_MODEL` — default to `grok-3-fast`.) The old `GEMINI_API_KEY` secret is no longer used and can be removed.

---

## Deployment

- **Frontend:** `git push origin main` → Vercel builds and deploys. `vercel.json` handles SPA rewrites, cache headers, and CSP.
- **Edge Functions:** `supabase functions deploy <name>` per function. Do not assume git push updates these — it does not.
- **Migrations:** applied manually in Supabase SQL editor. Order matters; follow `PRODUCTION-CHECKLIST.md`.
- **Pending launch migration:** apply `supabase/migrations/2026-05-28_fix_payments_security_and_tiers.sql` — closes an RLS self-upgrade hole and makes the premium tier persist on purchase.

---

## Gotchas (the traps that have bitten us)

- **`data/courseData.ts` is 8.5 MB.** Babel deoptimizes its styling; Vite chunks it into the main bundle; first-load size is ~323 kB gzip. Splitting per-level is known post-launch work.
- **Vercel's `npm run build` does *not* run lint.** Lint drift will not block a deploy. Run `npm run lint` locally or wire a CI step before relying on it.
- **Edge Functions error opaquely on missing tables.** If `processed_webhook_events` isn't migrated, the webhook returns 500 on every event, Wompi retries indefinitely, and premium upgrades silently queue. Always apply migrations before deploying Edge Functions that reference new tables.
- **Rate limiting is in-memory.** A cold start resets the counter. Acceptable early; plan to move to Supabase KV / Redis before marketing push.
- **CSP still allows `unsafe-inline` and `unsafe-eval`.** Tech debt. Required by the Wompi widget + Vite inline styles; tighten incrementally.
- **react-helmet-async appends rather than replaces static meta tags.** If you add a static `og:title` to `index.html`, scrapers may pick the wrong tag. Per-route `og:title` lives in component `<Helmet>` blocks; keep only site-wide defaults in `index.html`.
- **`VITE_SUPABASE_ANON_KEY` is required at build time.** A local `npm run build` with it unset throws `supabaseKey is required` at runtime and the app refuses to mount.

---

## Known deferred work

Ordered by priority. None blocks launch.

1. **Split `data/courseData.ts` per level.** Saves ~100–200 kB on first load. Non-trivial — touches `LESSONS_DATA`, `BEGINNER_LEVEL`, `INTERMEDIATE_LEVEL`, `ADVANCED_LEVEL`, and the seed script.
2. **Persistent rate limiting** for `grok-chat` and `create-payment`. Supabase KV or Redis.
3. **Certificate flow.** `components/ui/Certificate.tsx` is built but unrouted. Users completing Nivel Principiante expect a downloadable PDF or shareable image.
4. **Tighten CSP** — drop `unsafe-eval` (needs Wompi widget cooperation) and move inline styles to CSS files or nonces.
5. **Community / forum** — currently single-player except for the AI chat.

See `marketing/strategy.md` for the growth angle these would enable.

---

## Style rules for code you write here

- **No emojis in source** unless the user explicitly asks for them in user-facing copy.
- **Comments:** default to none. Add one only when the *why* isn't obvious (hidden constraint, subtle invariant, workaround for a specific bug). Don't narrate the *what*; names do that.
- **Commits:** lowercase-prefix + em-dash style, matching existing log (`fix: short — detail`, `content: ... — ...`, `feat: ...`). Include `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>` when Claude drafted the commit.
- **No backwards-compat shims** for unused code paths. Delete cleanly.
- **Do not commit without explicit ask** from the user. Never force-push or reset without approval.

---

## Quick commands for common tasks

```bash
# I added a lesson / edited content
npm run db:seed

# I want to check if my changes break anything
npm run lint && npx tsc --noEmit && npm run build

# I want to see the prod bundle locally
npm run build && npm run preview

# I deployed an Edge Function — verify it's live
curl -sI https://<project>.functions.supabase.co/wompi-webhook

# I want to check who's subscribed to newsletter (admin)
# → visit /admin/newsletter while logged in as admin

# I'm triaging why a user didn't get premium after paying
# → Supabase Studio: payments (by wompi_reference) + processed_webhook_events + user_profiles
```

---

## Where to look when you're stuck

- **Lesson content or structure** → `data/courseData.ts`, then `components/LessonView.tsx` and `components/lesson/SectionRenderer.tsx`
- **Auth flow** → `contexts/AuthContext.tsx` + `components/AuthModal.tsx`
- **Payments** → `services/paymentService.ts` + `components/PaymentModal.tsx` + `supabase/functions/create-payment` + `supabase/functions/wompi-webhook`
- **AI chat** → `services/aiService.ts` (Grok client) + `components/ChatWidget.tsx` + `supabase/functions/grok-chat`
- **Gamification** → `contexts/GamificationContext.tsx`
- **Spaced repetition review** → `hooks/useDailyReview.ts` + `services/dailyReviewService.ts` + `components/education/DailyReviewCard.tsx`
- **Anything deploy-related** → `PRODUCTION-CHECKLIST.md`
- **Go-to-market / paid acquisition** → `marketing/` (gitignored, local only)
