# CLAUDE.md

Guidance for Claude Code (claude.ai/code) and future engineers working in this repo.

---

## What this is

**Hablemos Cripto** is a Spanish-language crypto education platform for Latin America. 42 structured lessons across beginner / intermediate / advanced, with a Gemini-powered AI tutor ("CBas"), gamification (XP / streaks / achievements), spaced-repetition review cards, and Wompi-based premium upgrades.

- **Language:** all user-facing copy is Spanish (LATAM register, not Spain)
- **Home market:** Colombia first — Wompi is Colombian, pricing examples use COP, local examples skew Colombian
- **Stage:** code-complete and launch-ready. See `PRODUCTION-CHECKLIST.md` for the ordered deploy steps still blocked on human hands (migrations, env vars, Wompi webhook registration, smoke test).

---

## Prime directives — read these first

Things that will silently break if ignored:

1. **`data/courseData.ts` is the source of truth for lesson content.** Any edit to it requires `npm run db:seed` before it's visible in the app — the UI reads from Supabase, seeded by this script. Skip the seed and your change does not exist for users.
2. **Edge Functions deploy separately from the frontend.** `git push` deploys Vercel only. Supabase Edge Functions (`supabase/functions/*`) need `supabase functions deploy <name>` to go live.
3. **Wompi keys must be `pub_prod_*` in production.** `pub_test_*` silently routes to sandbox — payments look normal, nothing settles.
4. **Two profile tables exist and they are different.** `profiles` holds admin flags (`is_admin`). `user_profiles` holds premium status (`is_premium`, `premium_tier`). Do not conflate.
5. **Rate limiting is in-memory and resets on Vercel/Supabase cold start.** Acceptable <100 concurrent users; budget work to move to Supabase / Deno KV before scaling.
6. **Do not commit without explicit ask.** User-facing instruction: only commit when requested.
7. **Do not run destructive git ops** (force push, reset --hard, branch delete) without explicit approval.
8. **`marketing/` is gitignored on purpose.** Strategy, creator outreach, messaging docs live there locally and do not ship.

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
supabase functions deploy gemini-chat
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
| AI | Google Gemini 2.5 Flash via `gemini-chat` Edge Function (server-side key) |
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
| `data/courseData.ts` | **All 42 lessons**, levels, modules, quizzes. ~8.5 MB monolith (Babel deoptimizes styling; splitting is known post-launch work). |
| `components/` | 26 top-level components + `lesson/`, `education/`, `ui/` subfolders |
| `contexts/` | `AuthContext`, `ProgressContext`, `GamificationContext` — see §State below |
| `hooks/` | `useDailyReview`, `useLessonNavigation`, `useScrollProgress` |
| `services/` | `lessonService` (lesson read), `dailyReviewService` (SR picker), `geminiService` (AI client), `paymentService` (Wompi client) |
| `lib/supabase.ts` | Supabase client (browser-side, anon key) |
| `utils/` | `analytics.ts` (GA4 wrapper), `errorReporting.ts`, `courseUtils.ts` (lesson ordering / prev-next) |
| `scripts/seed.ts` | Seeds `courseData.ts` → Supabase. Holds the allowed icon list. |
| `scripts/optimize-images.mjs` | Generates PWA icons + responsive WebP variants from `public/images/og-cover.png` |
| `scripts/verify-migration.ts` | Ad-hoc migration verifier (diagnostic) |
| `scripts/check-dns.sh` | DNS sanity check for `hablemoscripto.io` |
| `supabase/functions/*` | Edge Functions — see §Edge Functions |
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
| `gemini-chat` | Proxies to Gemini 2.5 Flash with SSE streaming | JWT | Rate limited 20/min in-memory |
| `create-payment` | Creates Wompi payment row + integrity signature | JWT | Rate limited 5/min |
| `wompi-webhook` | Receives `transaction.updated`, verifies signature, upgrades user to premium | Webhook (no JWT) | **Idempotency via `processed_webhook_events` table keyed on `signature.checksum`.** Old status-compare dedupe was insufficient — see commit `eca5422`. |
| `send-newsletter` | Sends via Resend; sanitizes HTML; per-recipient HMAC unsubscribe token | Admin JWT | Checks `profiles.is_admin` server-side |
| `unsubscribe` | Public endpoint to set `newsletter_subscribers.is_active = false` | No (HMAC token) | Deploy with `--no-verify-jwt` |
| `verify-crypto-payment` | Confirms a Solana USDC transfer and upgrades user | JWT | Requires `SOLANA_RPC_URL`, `USDC_PAYMENT_ADDRESS` secrets |

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
- **Supabase Edge Function secrets:** `GEMINI_API_KEY`, `RESEND_API_KEY`, `WOMPI_INTEGRITY_SECRET`, `WOMPI_EVENTS_SECRET`, `SOLANA_RPC_URL`, `USDC_PAYMENT_ADDRESS`.

---

## Deployment

- **Frontend:** `git push origin main` → Vercel builds and deploys. `vercel.json` handles SPA rewrites, cache headers, and CSP.
- **Edge Functions:** `supabase functions deploy <name>` per function. Do not assume git push updates these — it does not.
- **Migrations:** applied manually in Supabase SQL editor. Order matters; follow `PRODUCTION-CHECKLIST.md`.

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
2. **Persistent rate limiting** for `gemini-chat` and `create-payment`. Supabase KV or Redis.
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
- **AI chat** → `services/geminiService.ts` + `components/ChatWidget.tsx` + `supabase/functions/gemini-chat`
- **Gamification** → `contexts/GamificationContext.tsx`
- **Spaced repetition review** → `hooks/useDailyReview.ts` + `services/dailyReviewService.ts` + `components/education/DailyReviewCard.tsx`
- **Anything deploy-related** → `PRODUCTION-CHECKLIST.md`
- **Go-to-market / paid acquisition** → `marketing/` (gitignored, local only)
