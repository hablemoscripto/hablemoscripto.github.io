# CLAUDE.md

Guidance for Claude Code (claude.ai/code) and future engineers working in this repo.

---

## Current launch state — snapshot, June 2026

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

### Wompi integration state — sandbox VERIFIED end-to-end (June 10, 2026)

- **Sandbox keys are set** in Vercel + Supabase Edge Function secrets. **No production keys yet** — at go-live, swap `VITE_WOMPI_PUBLIC_KEY` to `pub_prod_*` (Vercel) and the integrity/events secrets to production values (Supabase).
- Public key (`pub_test_*`) → `VITE_WOMPI_PUBLIC_KEY` (Vercel)
- Integrity secret → `WOMPI_INTEGRITY_SECRET` (Supabase)
- Events secret → `WOMPI_EVENTS_SECRET` (Supabase)
- Wompi private key (`prv_*`) is NOT used — Widget integration only, frontend-driven.

**Done (June 10):** webhook registered + deployed (**`--no-verify-jwt` is required** — without it the platform 401s Wompi before the function runs), payment functions deployed, full sandbox smoke test PASSED (signup → buy Inversor → webhook → premium granted → levels unlocked), and the 2026-05-28 RLS migration verified applied in prod (no client UPDATE policy on `user_profiles` — the self-upgrade hole is closed).

**Do NOT deploy `verify-crypto-payment`.** It never binds the on-chain payer to the authenticated user, so anyone could claim someone else's qualifying USDC transfer. The crypto tab in PaymentModal is intentionally disabled; launch is card-only. Add payer binding (signed nonce from the source wallet, or per-user memo) before reviving.

**Widget failure handling (June 11):** if `checkout.wompi.co/widget.js` fails to load (adblockers — common in this audience — or flaky networks), PaymentModal shows the cause, the support email, and a retry that re-injects the script. Loaded-state keys off `window.WidgetCheckout`, never off the presence of the script tag.

**First production payment:** watch the browser console for CSP violations — `connect-src` in `vercel.json` does not list Wompi's API hosts and this only manifests on the deployed site.

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

`cleanupDedupeRow()` in `wompi-webhook/index.ts` is the helper. The outer catch also calls it (June 10 fix), so even an unexpected throw after the marker insert leaves Wompi free to retry.

### Fundador badge in UI

Small `Fundador` pill (Award icon, brand colors) in `/education` sticky subheader. Renders only when `userTier !== 'free'`. Lives in `components/EducationPage.tsx`.

### AI tutor — migrated to Grok (xAI)

The AI tutor "CBas" persona is now powered by **Grok (xAI)** via the `grok-chat` Edge Function. The client is `services/aiService.ts` (`streamAIResponse`). The previous Gemini implementation (`services/geminiService.ts` and the `supabase/functions/gemini-chat/` function) was **deleted** May 2026 — the `GEMINI_API_KEY` Supabase secret is no longer used and can be removed. `grok-chat` reads `XAI_API_KEY` (and optional `XAI_MAIN_MODEL` / `XAI_RERANKER_MODEL`).

### Content architecture — paid/free split + hard paywall (June 2026)

Lesson data lives in **four files** now (see Prime directive 1 for the editing rules):

| File | Size | What | Delivery |
|---|---|---|---|
| `data/courseData.ts` | ~296 kB | Free-lesson bodies (`LESSONS_DATA`) | Bundled, lazy chunk (not on the landing path) |
| `data/paidContent.ts` | ~444 kB | Paid-lesson bodies (`PAID_LESSONS`) | **NOT bundled.** Seeded to `protected_lessons`, served by the `get-lesson-content` Edge Function after a premium check |
| `data/levels.ts` | ~12 kB | Level/module nav metadata (titles, durations, lesson stubs) | Bundled in the landing/dashboard entry chunk |
| `data/lessonInfographics.ts` | ~152 kB | Infographic specs | Bundled; attached client-side at read time, keyed by **exact section title** |

Hard paywall is live: `EntitlementsContext` + `canAccessLevel` (paymentService) gate Intermedio/Avanzado in the UI (`UpgradePaywall`), and `get-lesson-content` enforces it server-side.

### The infographic trap (bit us June 10)

`SectionRenderer` renders an infographic **instead of** the section's features/comparison block when a spec matches. Two consequences:

1. **Fact fixes must land in BOTH the lesson body and `lessonInfographics.ts`.** A prose-only fix is invisible wherever an infographic replaces that block — this is exactly how five corrected facts stayed wrong on screen until the June 10 audit caught it.
2. **Specs match by exact section title.** Renaming a section title in a PAID lesson means deploying the frontend and reseeding together, or the infographic silently stops rendering. Free lessons can't desync (title and spec ship in the same bundle).

### June 10-11 pre-launch audits

Two full audits (security, code, content accuracy, UX funnel, performance, browser-verified responsive) live in `REVIEW-2026-06-10.md` and `audit/REPORT.md`. **Both are gitignored because the repo is PUBLIC** — they document security posture and the verify-crypto-payment hole. Verdict: GO. The remaining conversion punch list is `audit/REPORT.md` §5; top items are testimonials/social proof, a support contact on the buying path, and plan-aware signup copy.

### Recent deletions

- `services/geminiService.ts` + `supabase/functions/gemini-chat/` — replaced by the Grok path (`services/aiService.ts` + `grok-chat`). Deleted May 2026.
- `components/PaymentButton.tsx` — was dead code (nothing imported it). Deleted May 2026 per "no backwards-compat shims" rule.
- Subscription/`billingCycle` types and parameters across `paymentService.ts`, `PaymentModal.tsx`, `EducationPage.tsx`, `PricingSection.tsx`, `verify-crypto-payment/index.ts`. All gone — re-add when subscriptions ship later.
- Referral-table seeding in `scripts/seed.ts` (June 11) — it read referrals from `levels.ts` nav stubs, which never carry them; inserted zero rows since the data split. The `referrals` DB table is **unused** (the app reads referrals from the lesson body) — drop it via migration when convenient.
- `resend` npm dependency (June 10) — Edge Functions call the Resend REST API via fetch; nothing imported the package.

---

## What this is

**Hablemos Cripto** is a Spanish-language crypto education platform for Latin America. 44 structured lessons (19 beginner / 13 intermediate / 12 advanced), with a Grok-powered AI tutor ("CBas"), gamification (XP / streaks / achievements), spaced-repetition review cards, and Wompi-based premium upgrades.

- **Language:** all user-facing copy is Spanish (LATAM register, not Spain)
- **Home market:** Colombia first — Wompi is Colombian, pricing examples use COP, local examples skew Colombian
- **Stage:** launch-ready — migrations applied, Edge Functions deployed, Wompi sandbox smoke test passed end-to-end (June 10). Remaining before real money: production Wompi keys. Remaining before marketing push: the conversion punch list in `audit/REPORT.md` §5. `PRODUCTION-CHECKLIST.md` has the ordered go-live steps.

---

## Prime directives — read these first

Things that will silently break if ignored:

1. **Lesson content has four source files and two delivery paths.** Free lessons (`data/courseData.ts`) render from the bundle — users see edits on the next frontend deploy, but seed anyway because `lesson_details` feeds the AI tutor's RAG. Paid lessons (`data/paidContent.ts`) are served from the `protected_lessons` table — **edits do not exist for users until `npm run db:seed` runs.** Infographics (`data/lessonInfographics.ts`) replace matching section blocks at render — fact fixes must touch them too, and they match by exact section title (see "The infographic trap" above). Nav metadata is `data/levels.ts`. The seed is **DESTRUCTIVE** (wipe + reinsert): back up first — `supabase db dump --linked --data-only -f backup-data-<date>.sql` — and run it during low traffic; paid lessons 404 for a few seconds mid-run.
2. **`PRICING_PLANS` (`services/paymentService.ts`) and `PRODUCT_CATALOG` (`supabase/functions/create-payment/index.ts`) are paired sources of truth for prices.** They MUST stay in sync. Add/rename a SKU in one without the other and the payment flow either silently overcharges users or rejects valid plan selections. Server is authoritative for amounts (it ignores client-supplied prices, by design); frontend is authoritative for what's *shown*.
3. **Edge Functions deploy separately from the frontend.** `git push` deploys Vercel only. Supabase Edge Functions (`supabase/functions/*`) need `supabase functions deploy <name>` to go live (one name per command; some need `--no-verify-jwt` — see §Commands). After any change to `_shared/welcome-email.ts`, redeploy `wompi-webhook` (and `verify-crypto-payment` only if it's ever revived — it is deliberately NOT deployed, see launch-state section).
4. **Wompi keys must be `pub_prod_*` in production.** `pub_test_*` silently routes to sandbox — payments look normal, nothing settles. Sandbox keys are set everywhere as of June 2026 (pre-launch).
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
npm run db:seed      # push lesson data → Supabase. DESTRUCTIVE: backup first (Prime directive 1). REQUIRED for paid-content edits.
npm run lint         # eslint . (expects 0 errors, 0 warnings)
npm run lint:fix     # auto-fix what eslint can
npm run format       # prettier write
npx tsc --noEmit     # type check without emit

# Backup before any seed (schema lives in migrations; data-only is enough):
supabase db dump --linked --data-only -f backup-data-$(date +%F).sql

# Edge Function deploys (Supabase CLI; ONE name per command — the flags matter,
# without --no-verify-jwt the platform 401s non-JWT callers before the code runs):
supabase functions deploy create-payment
supabase functions deploy wompi-webhook --no-verify-jwt
supabase functions deploy grok-chat
supabase functions deploy get-lesson-content
supabase functions deploy unsubscribe --no-verify-jwt
supabase functions deploy send-newsletter --no-verify-jwt
supabase functions deploy mentoria-request --no-verify-jwt
# verify-crypto-payment: do NOT deploy (payer-binding hole — see launch state)
```

---

## Architecture — the data flow you must understand

```
FREE lessons   data/courseData.ts ── bundled (lazy chunk) ─────────────────┐
PAID lessons   data/paidContent.ts ─[db:seed]→ protected_lessons          │
                                        └─[get-lesson-content + premium check]→ fetchPaidLesson()
                                                                           │
               data/lessonInfographics.ts ── specs attached by section title at read time
                                                                           ↓
                                   services/lessonService.ts  (quiz option shuffle happens here)
                                                                           ↓
                                   components/LessonView.tsx → lesson/SectionRenderer.tsx

ALL lessons    ─[db:seed]→ lesson_details (RAG corpus for grok-chat) + levels/modules/lessons (catalog)
```

Free lessons never hit the network for content; paid lessons always do (server-side premium check). The seed feeds three consumers: paid lesson bodies (`protected_lessons`), the AI tutor's RAG corpus (`lesson_details`), and the catalog tables. The `referrals` DB table is unused — referrals ship inside the lesson body on both paths.

---

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | React 19 + TypeScript + Vite 6. **tsconfig is NOT strict** (no `strict` flag) — `tsc --noEmit` is a weaker gate than it looks; enabling `strictNullChecks` is known deferred work |
| Styling | Tailwind CSS 4 + custom `navy-*` and `brand-*` scales |
| Routing | react-router-dom 7, lazy-loaded route components via `React.lazy` |
| State | React Context (Auth, Entitlements, Progress, Gamification) |
| Animation | framer-motion + framer-motion page transitions |
| Backend | Supabase (Postgres + Auth + Edge Functions with Deno) |
| AI | Grok (xAI) via `grok-chat` Edge Function (server-side key) |
| Payments | Wompi Widget (cards, COP) — card-only at launch; USDC-on-Solana exists in code but is deferred (see launch state) |
| Email | Resend via `mail.hablemoscripto.io` domain |
| Hosting | Vercel (push to `main` auto-deploys; `vercel.json` does SPA rewrites + security headers) |
| SEO | react-helmet-async for per-route `<title>`, `canonical`, `og:*`, `twitter:*` |
| PWA | vite-plugin-pwa; workbox precaches the app shell, lesson images are runtime-cached on demand (deliberate — LATAM mobile data) |

Root-level entry points (`App.tsx`, `index.tsx`, `index.css`). **No `src/` folder.** Path alias `@/` maps to project root.

---

## Directory map (pointers — read the code for the details)

| Path | What lives there |
|---|---|
| `App.tsx` | Route tree, context providers, error boundary, lazy auth-gated chat widget mount |
| `data/courseData.ts` | Free-lesson bodies (`LESSONS_DATA`), ~296 kB. Bundled as a lazy chunk. |
| `data/paidContent.ts` | Paid-lesson bodies (`PAID_LESSONS`), ~444 kB. NOT bundled — DB-served via `get-lesson-content`. |
| `data/levels.ts` | Level/module nav metadata (lesson stubs only — no bodies, no referrals). What landing/dashboard import. |
| `data/lessonInfographics.ts` | Infographic specs keyed by lesson id + exact section title. Replaces matching section blocks at render. |
| `components/` | Top-level components + `lesson/`, `education/`, `ui/` subfolders |
| `contexts/` | `AuthContext`, `EntitlementsContext`, `ProgressContext`, `GamificationContext` — see §State below |
| `hooks/` | `useDailyReview`, `useLessonNavigation`, `useScrollProgress` |
| `services/` | `lessonService` (lesson read, quiz shuffle, infographic attach), `dailyReviewService` (SR picker), `aiService` (Grok AI client), `paymentService` (Wompi client, `PRICING_PLANS`, `canAccessLevel`) |
| `lib/supabase.ts` | Supabase client (browser-side, anon key) |
| `utils/` | `analytics.ts` (GA4 wrapper; gtag stub at module load), `errorReporting.ts`, `courseUtils.ts` (lesson ordering / prev-next), `quizShuffle.ts` (deterministic option shuffle — defeats the answer-position bias in source data) |
| `scripts/seed.ts` | Seeds all four data files → Supabase. DESTRUCTIVE, fails loudly (non-zero exit). Holds the allowed icon list. |
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
| `get-lesson-content` | Serves paid lesson bodies from `protected_lessons` after a premium check (`user_profiles.is_premium`) | JWT | Paid lessons are dead without it — it's in the deploy list |
| `mentoria-request` | Receives mentoría inquiries from `MentoriaModal`, emails via Resend | No JWT | Deploy with `--no-verify-jwt` |
| `send-newsletter` | Sends via Resend; sanitizes HTML; per-recipient HMAC unsubscribe token | Admin JWT | Checks `profiles.is_admin` server-side |
| `unsubscribe` | Public endpoint to set `newsletter_subscribers.is_active = false` | No (HMAC token) | Deploy with `--no-verify-jwt` |
| `verify-crypto-payment` | Confirms a Solana USDC transfer, upgrades user, sends Fundador welcome email | JWT | **NOT DEPLOYED — do not deploy.** Never binds the on-chain payer to the user (anyone can claim someone else's transfer). Crypto launch deferred; fix payer binding first. |

Secrets are Supabase dashboard → Project Settings → Edge Functions → Secrets. `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are auto-injected — do not set them manually.

---

## State management

Four React Contexts, all mounted in `App.tsx`. Read from them via the `use*` hooks in each file.

- **`AuthContext`** (`contexts/AuthContext.tsx`) — Supabase session. Exposes `signUp`, `signIn`, `signInWithGoogle`, `signOut`, `resetPassword`, `resendVerification`. Subscribes to `onAuthStateChange`.
- **`EntitlementsContext`** (`contexts/EntitlementsContext.tsx`) — Premium tier from `user_profiles`; drives the hard paywall via `canAccessLevel`. Retries transient fetch failures with backoff and keeps the previous entitlements on final failure — **never demote a paying user to free because of a network blip** (June 10 fix; preserve this behavior).
- **`ProgressContext`** (`contexts/ProgressContext.tsx`) — Lesson completion / quiz scores. Persists to `user_progress` in Supabase. Drives lesson locking (sequential) and the level-percentage math.
- **`GamificationContext`** (`contexts/GamificationContext.tsx`) — XP (100 per lesson), streaks, achievements. Persists to `user_achievements` with localStorage fallback. Emits achievement toasts through a pending queue.

Contexts load in series: Auth → Gamification → Progress. Progress depends on Gamification for XP awards on lesson completion.

**Funnel plumbing worth knowing:** a paid-plan CTA on the landing page stores `sessionStorage.redirectAfterLogin = '/education?upgrade=<planId>'`; LandingPage consumes it when `user` becomes truthy (covers both email/password and Google OAuth). Known gap: sessionStorage is per-tab, so the plan is lost through the email-verification flow.

---

## Lesson content model

Each lesson in `LESSONS_DATA` (`data/courseData.ts`, free) or `PAID_LESSONS` (`data/paidContent.ts`, paid) has:

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

### Adding or editing lesson content

1. Pick the right file: free lesson → `data/courseData.ts`; paid lesson → `data/paidContent.ts`; new lesson also needs a nav stub in `data/levels.ts`.
2. **Check `data/lessonInfographics.ts` for a spec on any section you touch** — if one exists, the facts must change there too or users keep seeing the old numbers (the infographic replaces the section block). Don't rename a paid lesson's section title without planning a same-day deploy + reseed.
3. Images go under `public/images/lessons/lesson-X/` as `.webp`; reference with absolute path `/images/lessons/lesson-X/filename.webp`.
4. Icons are Lucide components; `scripts/seed.ts` serializes them to strings. **Only icons listed in `ICONS` in `seed.ts` will seed correctly** — add new ones there first.
5. Backup, then `npm run db:seed` (see Prime directive 1). Verify after: open the lesson in the app, or query `protected_lessons` for the changed text.

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
| `crypto_payments` | `migrations/add_subscription_tiers.sql` | Solana USDC transaction ledger (dormant — crypto deferred) |
| `levels` / `modules` / `lessons` / `quizzes` / `quiz_questions` / `lesson_details` | course schema SQL | Content catalog + RAG corpus. Wiped and rebuilt by every seed run. |
| `protected_lessons` | `migrations/2026-05-30_content_protection.sql` | Paid lesson bodies (JSON blob), served by `get-lesson-content`. Deny-all RLS. Wiped and rebuilt by every seed run. |
| `referrals` | course schema SQL | **Unused** — app reads referrals from the lesson body. Kept empty by the seed; drop via migration when convenient. |

RLS is enabled on all of them. Service-role full-access policies for server writes; per-user read policies for client reads. `user_progress.user_id` cascades from `auth.users` (correct); there is **no** `lesson_id` FK on `user_progress`, so a reseed does NOT wipe user progress (verified June 10).

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
- **Migrations:** applied manually in Supabase SQL editor. Order matters; follow `PRODUCTION-CHECKLIST.md`. **All launch migrations are applied in prod as of June 10** (the 2026-05-28 RLS fix was explicitly verified: no client UPDATE policy on `user_profiles`). If you add a migration that redefines `handle_new_user()`, it must run AFTER `2026-06-02_newsletter_autosubscribe.sql` or newsletter opt-in silently disappears.
- **Reseeds:** backup → `npm run db:seed` → verify (see Prime directive 1). If a content change renames a paid lesson's section title, deploy the frontend and reseed together (infographic key coupling).

---

## Gotchas (the traps that have bitten us)

- **An infographic spec silently replaces the section it matches.** Fixing a fact in lesson prose does nothing on screen if `lessonInfographics.ts` has a spec for that section — fix both. This shipped five wrong facts to users in June before the audit caught it.
- **The repo is PUBLIC.** `audit/`, `REVIEW-*.md`, `INFOGRAPHIC-BRIEF.md`, `marketing/`, and DB dumps are gitignored on purpose — they contain security findings, strategy, or PII. Never commit internal review material here.
- **The seed is destructive.** It wipes and reinserts all content tables; `protected_lessons` is empty for a few seconds mid-run (paid lessons 404). It exits non-zero on failure — treat any non-zero exit as "DB is half-seeded, re-run after fixing". Backup first, always.
- **Landing first-load is ~207 kB gz JS** (post June 10 particles split; budget says 200). The free-lesson data chunk (~95 kB gz) is lazy and not on the landing path; `paidContent.ts` never ships to the client at all.
- **Vercel's `npm run build` does *not* run lint.** Lint drift will not block a deploy. Run `npm run lint` locally or wire a CI step before relying on it. Edge Functions have no static gate either — run `deno check supabase/functions/*/index.ts` before deploying them.
- **Edge Functions error opaquely on missing tables.** If `processed_webhook_events` isn't migrated, the webhook returns 500 on every event, Wompi retries indefinitely, and premium upgrades silently queue. Always apply migrations before deploying Edge Functions that reference new tables.
- **Rate limiting is in-memory.** A cold start resets the counter. Acceptable early; plan to move to Supabase KV / Redis before marketing push.
- **CSP still allows `unsafe-inline` and `unsafe-eval`.** Tech debt. Required by the Wompi widget + Vite inline styles; tighten incrementally.
- **react-helmet-async appends rather than replaces static meta tags.** If you add a static `og:title` to `index.html`, scrapers may pick the wrong tag. Per-route `og:title` lives in component `<Helmet>` blocks; keep only site-wide defaults in `index.html`.
- **`VITE_SUPABASE_ANON_KEY` is required at build time.** A local `npm run build` with it unset throws `supabaseKey is required` at runtime and the app refuses to mount.

---

## Known deferred work

Ordered by priority. None blocks launch. The conversion-focused punch list lives in `audit/REPORT.md` §5 (gitignored, local) — top of that list: testimonials/social proof, support contact on the buying path, plan-aware signup copy, surfacing Wompi `ERROR` transaction status in the widget callback.

1. **Persistent rate limiting** for `grok-chat` and `create-payment`. Supabase KV or Redis. Do this before the marketing push.
2. **Quiz a11y semantics** (radiogroup/radio/aria-checked in Quiz, CheckpointQuiz, DailyReviewCard) + skip link + `<main>` landmarks.
3. **`tailwindcss-animate` classes are dead** — the plugin was never installed, so `animate-in`/`fade-in`/etc. in ~9 components do nothing. Install the plugin (Tailwind 4 uses `@plugin` in CSS) or strip the classes.
4. **Certificate flow.** `components/ui/Certificate.tsx` is built but unrouted. Users completing Nivel Principiante expect a downloadable PDF or shareable image.
5. **Enable `strictNullChecks`** in tsconfig and fix the fallout (CLAUDE.md used to claim strict mode; it was never on).
6. **Tighten CSP** — drop `unsafe-eval` (needs Wompi widget cooperation) and move inline styles to CSS files or nonces.
7. **Community / forum** — currently single-player except for the AI chat. The Cripto Experto tier sells Discord access — make sure that loop is real before scaling Experto sales.
8. **Drop the unused `referrals` table** via migration.

See `marketing/strategy.md` for the growth angle these would enable.

---

## Style rules for code you write here

- **No emojis in source** unless the user explicitly asks for them in user-facing copy.
- **No em-dashes or en-dashes in user-facing copy Sebastián owns** (landing, emails, payment UI, lesson voice). Use a comma, colon, or period instead. Plain hyphens in number ranges ("5-6%") are fine. Commit messages and code comments are exempt.
- **Comments:** default to none. Add one only when the *why* isn't obvious (hidden constraint, subtle invariant, workaround for a specific bug). Don't narrate the *what*; names do that.
- **Commits:** lowercase-prefix style matching the existing log (`fix(scope): short detail`, `content(lessons): ...`, `chore: ...`). Include the current model's trailer, e.g. `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`, when Claude drafted the commit.
- **No backwards-compat shims** for unused code paths. Delete cleanly.
- **Do not commit without explicit ask** from the user. Never force-push or reset without approval.

---

## Quick commands for common tasks

```bash
# I edited lesson content (paid lessons / RAG need the seed; backup first)
supabase db dump --linked --data-only -f backup-data-$(date +%F).sql
npm run db:seed

# I want to check if my changes break anything
npm run lint && npx tsc --noEmit && npm run build

# I touched an Edge Function
deno check supabase/functions/<name>/index.ts   # then deploy (see §Commands for flags)

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

- **Lesson content or structure** → `data/courseData.ts` (free) / `data/paidContent.ts` (paid) / `data/levels.ts` (nav) / `data/lessonInfographics.ts` (infographics), then `components/LessonView.tsx` and `components/lesson/SectionRenderer.tsx`
- **Auth flow** → `contexts/AuthContext.tsx` + `components/AuthModal.tsx`
- **Paywall / entitlements** → `contexts/EntitlementsContext.tsx` + `canAccessLevel` in `services/paymentService.ts` + `components/ui/UpgradePaywall.tsx` + `supabase/functions/get-lesson-content`
- **Payments** → `services/paymentService.ts` + `components/PaymentModal.tsx` + `supabase/functions/create-payment` + `supabase/functions/wompi-webhook`
- **AI chat** → `services/aiService.ts` (Grok client) + `components/ChatWidget.tsx` + `supabase/functions/grok-chat`
- **Gamification** → `contexts/GamificationContext.tsx`
- **Spaced repetition review** → `hooks/useDailyReview.ts` + `services/dailyReviewService.ts` + `components/education/DailyReviewCard.tsx`
- **Anything deploy-related** → `PRODUCTION-CHECKLIST.md`
- **Go-to-market / paid acquisition** → `marketing/` (gitignored, local only)
