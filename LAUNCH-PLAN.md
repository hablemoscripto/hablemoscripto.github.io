# Hablemos Cripto — Production Readiness & Launch Plan

**Status:** Draft — May 2026  
**Goal:** Take the site from "code-complete and useful" to "professional, reliable, and ready to accept paying users with confidence."  
**Current Reality:** The product is already one of the strongest indie crypto education platforms in Spanish/LATAM (excellent content, thoughtful features, clean architecture). The remaining gaps are mostly **reliability around money**, **mobile polish**, **performance on real-world connections**, and **operational readiness**. No customers yet because these last pieces have been deferred.

This plan is the single source of truth for what must be done before public launch and paid acquisition.

---

## Executive Summary — Where We Stand

**Strengths (already excellent)**
- 42 high-quality, narrative-driven lessons with strong pedagogy and LATAM focus.
- Modern tech stack (React 19 + Vite + Supabase + framer-motion + PWA).
- AI tutor (CBas), gamification, spaced-repetition daily review, progress tracking, quizzes.
- Lifetime "Precio Fundador" pricing model (user-friendly, no subscriptions yet).
- Solid design system (navy + amber, glassmorphism, accessibility basics).
- Many launch-ready pieces (legal pages, email flows, admin tools, webhook idempotency fix, welcome emails).

**Critical Blockers (must fix before any real money moves)**
1. **Pricing / Payment catalog desync** (highest risk): Frontend has evolved to v2 plans (`basico_lifetime`, `completo_lifetime`, etc.). Server `PRODUCT_CATALOG` and webhook still speak the old `inversor_lifetime` / `vip_lifetime` model. Payments will fail or behave incorrectly.
2. **Incomplete payment flow infrastructure**: Production Wompi keys + webhook registration + Edge Function deploys not yet done.
3. **Legacy entitlement mapping** still in place while UI has moved to new multi-tier model.

**High-Impact Polish Needed**
- Mobile experience has ~25 documented issues (MOBILE_AUDIT.md). Chat and image interactions are currently broken or painful on phones.
- Bundle size (~325 kB gzip main chunk + 8+ MB PWA precache) hurts first-load on mobile/LATAM connections.
- Certificate flow exists in UI but is unrouted (major emotional win for users finishing Principiante).

**Definition of "Production Ready"**
- A new user can sign up, complete beginner content, upgrade to a paid tier with real (sandbox then prod) money, receive premium access + welcome email, and have a flawless experience on both desktop and mobile.
- You (as founder) can confidently debug/support payment issues.
- No "this will probably work" areas around money or core learning flows.
- Performance and polish are good enough that mobile users don't churn on first visit.

---

## Phase 0 — Strategic Decisions (Locked — May 2026)

**Status: Decisions finalized by founder.**

1. **Pricing model for launch**
   - Use **exactly the pricing that is currently live and rendered on https://www.hablemoscripto.io**.
   - This is the canonical source of truth for tier names, USD amounts, COP amounts, and positioning ("Precio Fundador").
   - The deployed frontend PRICING_PLANS (whatever is shown to visitors today) + the matching server catalog will be the locked launch set.
   - No reconciliation against old CLAUDE.md numbers or internal code variants — the live site wins.
   - **Action required**: Paste or confirm the exact live tiers (names, USD, COP, SKUs if visible in network tab) so the catalog sync in Phase 1.1 can be done precisely.

2. **Crypto (USDC) payments at launch**
   - **Approved for launch scope**. Goal: Offer maximum payment flexibility ("any and every reasonable option").
   - The existing Solana USDC path (`verify-crypto-payment` Edge Function + PaymentModal crypto tab) will be revived and modernized as part of Phase 1.
   - Note: This path was intentionally disabled during the recent v2 pricing refactor (frontend tab shows "próximamente", backend still on legacy vocab). It is **not** a trivial one-line enable — it requires porting to the new PlanId + entitlements model, proper reference/attribution for the transaction, frontend form revival, and full E2E testing. Treat it as real scoped work inside Phase 1.3.

3. **NEAR / Multichain receiving (research summary & decision)**
   - **Research performed** (Chain Signatures, NEAR native USDC via Circle, wallet unification features on near.com / wallet.near.org, developer verification patterns).
   - **Key findings**:
     - NEAR's Chain Signatures (MPC) is genuinely impressive technology. A single NEAR account can derive and control addresses on many chains (EVMs, Solana, Bitcoin, etc.) and sign transactions on those chains using your NEAR key. This is powerful for *unified custody and programmable cross-chain actions*.
     - NEAR has native USDC support (Circle partnership).
     - Wallet UX (near.com experiences) can present a merged view of assets across chains and derived addresses — this is excellent for *users*.
     - For a simple "user sends exact USDC amount to receive lifetime access" merchant flow, the receiving + verification story is more nuanced:
       - You still need to monitor the *destination chain's* ledger (Solana RPC, or NEAR RPC, or EVM RPC) for incoming transfers to the specific address the user was told to send to.
       - Chain Signatures shines brightest when *you* want to move or use the received funds programmatically across chains later. For passive inbound payment verification, it does not eliminate the need to watch the target chain.
       - Adding true "pay from any chain the user prefers" would likely involve additional layers (intents, relayers, or explicit support for multiple destination chains), increasing complexity, testing surface, and support load ("I sent on Base, why no access?").
   - **Decision**: 
     - For **launch**: Revive and ship the **existing Solana USDC implementation cleanly** (one well-understood chain, fast finality, simple SPL token verification logic already present in the Edge Function). This keeps verification reliable and low-risk.
     - NEAR (and broader multichain receiving) is **worth exploring post-launch** as a Phase B+ enhancement (e.g., offer a NEAR-native USDC address as a second option, or later experiment with intents for "pay with whatever you have"). It is not required for a strong launch and would add non-trivial work if we tried to make it first-class on day 1.
   - Hybrid path possible later: Solana as primary crypto rail + NEAR as nice-to-have.

4. **Support & ops model**
   - **Disputes, refunds, and support tickets** will be handled manually by the founder initially (via Supabase Studio + manual profile updates if needed).
   - Future automation (Hermes-style agent or custom Edge Function + Resend flows) is noted as post-launch work. No need to build agent tooling before first revenue.
   - Reply-to for Fundador welcome emails: To be decided and implemented before launch (current state per CLAUDE.md has potential bounce issues).

**Output of Phase 0**: Decisions locked above. Update CLAUDE.md pricing section to point to the live site as source of truth. Proceed to Phase 1 with these constraints.

---

## Phase 1 — Payments & Monetization Reliability (Highest Priority — Do Not Skip)

This is the only true launch blocker involving real user money.

### 1.1 Catalog & Code Sync (Critical)
- [ ] Make `PRICING_PLANS` (frontend) and `PRODUCT_CATALOG` (server) identical in SKUs, names, and COP-cent amounts. One source of truth in practice.
  - Files: `services/paymentService.ts` + `supabase/functions/create-payment/index.ts`
- [ ] Update `wompiSku` values and the reference encoding spec (`${userId}:${planId}`) per the big TODO block in paymentService.ts.
- [ ] Update `wompi-webhook/index.ts` to handle the new PlanId logic (grantsCourseTier + grantsCommunityMonths) instead of calling legacy `upgrade_user_to_premium` RPC. Implement the full event handling spec in the TODO.
- [ ] Update `PaymentModal.tsx`, `PricingSection.tsx` (including the currently-hidden Comunidad/Acceso Total cards), and any place that calls `createPaymentWithSignature`.
- [ ] Update `getUserEntitlements()` + legacy mapping logic. Make `canAccessLevel()` the single source of truth and use it consistently in `EducationPage.tsx`, `LevelDetail.tsx`, `LessonView.tsx`.
- [ ] Update `EntitlementsContext` refresh logic if needed after webhook changes.
- [ ] Clean up all "Phase B", "Phase C", "launch-blocker" TODO comments once the chosen launch scope is implemented.

### 1.2 Infrastructure & Secrets
- [ ] Set production Wompi keys (pub_prod_*, integrity secret, events secret) in Vercel + Supabase Edge Functions secrets. **Never mix sandbox/prod.**
- [ ] Deploy (or redeploy) the three payment-related functions:
  ```
  supabase functions deploy create-payment
  supabase functions deploy wompi-webhook --no-verify-jwt
  supabase functions deploy verify-crypto-payment   # even if crypto disabled at launch
  ```
  (Also redeploy any that import `_shared/welcome-email.ts` after changes.)
- [ ] Register the webhook URL in the real Wompi dashboard: `https://<project>.functions.supabase.co/wompi-webhook` subscribed to `transaction.updated`.
- [ ] Verify `RESEND_API_KEY` and `GEMINI_API_KEY` are production keys.
- [ ] Confirm `VITE_WOMPI_PUBLIC_KEY` on Vercel is the production one.

### 1.3 End-to-End Validation (Non-Negotiable)
Run the full smoke test list from PRODUCTION-CHECKLIST.md (items involving payments especially):
- Sign up → complete free lesson → attempt paid upgrade with Wompi test cards → webhook fires → user sees premium access immediately → Fundador welcome email arrives.
- Test failure/retry paths (idempotency via `processed_webhook_events`).
- Test crypto path if enabling it (even in sandbox).
- Verify "already processed" dedupe works and that failed upgrades correctly clean up the marker row (`cleanupDedupeRow`).

**Gate:** Do not proceed to paid acquisition or public launch until you have personally executed a successful paid upgrade end-to-end with real test money and confirmed the user profile + email side effects.

---

## Phase 2 — Core Infrastructure, Security & Observability

- [ ] Confirm all migrations from PRODUCTION-CHECKLIST.md have been applied in Supabase (especially `add_processed_webhook_events.sql`).
- [ ] Promote your admin account (`profiles.is_admin`).
- [ ] Review and lock down RLS policies on `user_profiles`, `payments`, `processed_webhook_events`, etc.
- [ ] Production GA4 (`VITE_GA4_MEASUREMENT_ID`) + verification that `sign_up`, `lesson_complete`, `purchase` events fire.
- [ ] Error reporting endpoint (if using one) or at minimum Sentry/equivalent basic setup.
- [ ] Review current CSP in `vercel.json`. Document the `unsafe-inline` + `unsafe-eval` requirement (Wompi widget + Vite). Consider adding nonces for inline styles as a future hardening task.
- [ ] Add basic logging / alerting for Edge Function errors (especially webhook 5xx rates).
- [ ] Test password reset, email verification, Google OAuth, and magic-link flows in production-like environment.

---

## Phase 3 — Mobile Experience & Touch Polish (High User-Impact)

Follow the exact priority order in [MOBILE_AUDIT.md](/home/cbas/Documents/Programming/hablemoscripto.github.io/MOBILE_AUDIT.md):

1. Chat widget full-screen on phones + keyboard + safe-area handling (`components/ChatWidget.tsx`).
2. ImageLightbox touch/pinch/zoom + mobile instructions (`components/lesson/ImageLightbox.tsx`).
3. SelectionTooltip / "Explicar con CBas" on mobile (long-press + `selectionchange`).
4. All touch targets ≥44×44px (quiz dots, buttons, icons, nav toggles).
5. Add `active:` states for instant touch feedback across buttons/cards.
6. Mobile menu animations + body scroll lock (`Navbar.tsx`, `EducationNavbar.tsx`).
7. Reduce excessive padding/spacing on small screens (Hero, Features, EducationPage, Quiz, etc.).
8. AuthModal scroll + keyboard behavior.
9. Sticky header consolidation in lessons (multiple fixed bars eating space).
10. Safe area insets at root + theme-color meta.
11. Remaining nice-to-haves (PWA manifest is actually present in vite.config.ts — verify it's emitted correctly; responsive images; font loading; Certificate mobile layout).

**Success criteria:** Spend 10–15 minutes on an iPhone/Android in real conditions (not just dev tools) and feel no major friction in the core learning + chat + payment flows.

---

## Phase 4 — Performance & Perceived Speed

- [ ] **Biggest win**: Split `data/courseData.ts` (~8.5 MB monolith) by level. Load only the needed level's data on `/education/beginner` etc. (known deferred work in CLAUDE.md and PRODUCTION-CHECKLIST).
  - This directly improves the 325 kB main bundle pain point.
- [ ] Fix PWA precache limit (`vite.config.ts`: `maximumFileSizeToCacheInBytes: 3MB`). Either raise it intelligently or exclude heavy lesson images from precache (use runtime caching only).
- [ ] Audit current lesson images — ensure WebP + proper sizing. Add `srcset` / `<picture>` for hero banner and lesson images (currently mostly single-src).
- [ ] Add loading skeletons or optimistic UI for lesson navigation, quiz submission, and payment initiation.
- [ ] Measure and document Lighthouse scores on mobile (target: Performance ≥ 80–85 on 3G simulation for key flows).
- [ ] Review large gradient blobs in Hero on low-end devices (hide or reduce on mobile).

---

## Phase 5 — Feature Completeness & Emotional Polish

- [ ] **Certificate flow** (high ROI): Route `/education/certificate/:level` or a "Claim Certificate" button after 100% level completion. Wire `components/ui/Certificate.tsx` + make it downloadable (PDF or nice image share). This is a major completion/celebration moment.
- [ ] Review every user-facing error message and empty state (especially payment failures, quiz retries, AI chat rate limits, no daily reviews yet).
- [ ] Newsletter signup: Consider adding double opt-in or at least clearer confirmation UX + rate limiting.
- [ ] Final review of founder welcome email body (`supabase/functions/_shared/welcome-email.ts` — Sebastián owns the voice). Add `reply_to` if the inbox is not yet set up.
- [ ] Legal pages (`/privacidad`, `/terminos`) — quick legal review for accuracy.
- [ ] "Last lesson" resume experience — make it more prominent on EducationPage.
- [ ] Minor: Ensure Fundador badge (in EducationPage sticky header) renders correctly for all paid tiers.

---

## Phase 6 — Validation, Testing & Soft-Launch Preparation

### Comprehensive Smoke Tests
Execute the full list in PRODUCTION-CHECKLIST.md section 5, plus:
- All three levels fully navigable with correct locking + entitlements.
- Daily review flow end-to-end.
- AI chat rate limiting and streaming under load.
- Unsubscribe flow from newsletter.
- 404 and error boundary states.
- Google sign-in + first-time profile creation.
- Cross-device: Desktop Chrome + Safari + mobile Safari/Chrome (real devices if possible).

### Operational Readiness
- [ ] Create a simple internal "Support Dashboard" view (or just documented Supabase queries) so you can quickly check: user entitlements, recent payments, webhook events for a given email/reference.
- [ ] Write a 1-page "Payment Support Runbook" (what to do when a user says "I paid but didn't get access").
- [ ] Set up basic uptime monitoring for the Edge Functions (or at least bookmark the Supabase logs view).
- [ ] Document the exact `supabase functions deploy` commands + secret rotation process.

### Soft Launch Criteria
Before spending money on creators/ads:
- At least 5–10 successful paid upgrades (sandbox + at least one real small test) with zero support tickets about access not being granted.
- Mobile experience feels good for 80%+ of flows.
- No P0 bugs in core learning path.

---

## Phase 7 — Launch Execution & First 30 Days

- Integrate tightly with the existing [marketing/launch-30-days.md](/home/cbas/Documents/Programming/hablemoscripto.github.io/marketing/launch-30-days.md) playbook.
- Week 0 tech items (GA4, Meta Pixel, etc.) should already be complete from earlier phases.
- During paid push: daily monitoring of payment success rate, webhook errors, support volume, and mobile crash reports.
- Post-launch iteration queue (see "Deferred" section below).

---

## Deferred / Post-Launch (Do Not Block On These)

From CLAUDE.md, PRODUCTION-CHECKLIST, and code TODOs (intentional):
- Persistent rate limiting (Supabase KV / Redis) for gemini-chat and create-payment.
- Full community + bundle product launch (Phase B work).
- Crypto payments revival with new PlanId vocab (Phase C).
- Certificate download/share polish beyond basic flow.
- Subscriptions / recurring billing (needs Wompi tokenization + cron).
- Splitting courseData + other bundle wins (do the first split in Phase 4; further refinement later).
- Advanced analytics funnels and A/B testing on pricing page.
- Forum / community features.
- Tightening CSP further.

These are valuable but not required for a professional, trustworthy first launch.

---

## Risk Matrix

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Payment desync causes users to pay but not get access | High (current state) | Critical (trust + refunds + reputation) | Phase 1 complete + E2E test before any marketing |
| Mobile frustration causes high bounce/churn | High | High (retention + word-of-mouth) | Phase 3 prioritized work |
| Large initial bundle on slow mobile networks | Medium | Medium-High | Phase 4 splitting + PWA tuning |
| Wompi webhook or Edge Function outage | Low-Medium | High | Idempotency already good; monitoring + runbook in Phase 6 |
| Founder email reply-to not set up | Low | Medium (bad first impression) | Decide + implement in Phase 0/5 |

---

## Recommended Execution Order (Pragmatic)

1. **Today / This week**: Phase 0 decisions (pricing model lock).
2. **Next 1–2 weeks**: Phase 1 (payments sync + infra + E2E test) — treat as a focused project.
3. **Parallel or immediately after**: Start Phase 3 mobile work (big user-visible quality jump).
4. **Then**: Phase 2 (observability) + Phase 4 (perf) + Phase 5 (certificate + polish).
5. **Final gate**: Full Phase 6 validation.
6. **Launch**: Phase 7 + marketing playbook.

---

## How to Track Progress

- Keep this file (`LAUNCH-PLAN.md`) updated with checkbox status and dates.
- Re-run `npm run lint && npx tsc --noEmit && npm run build` before every major push.
- After any Edge Function change that touches payments or emails, redeploy both affected functions.
- Before touching pricing again, re-read the "source-of-truth contract" section in CLAUDE.md.

---

## Next Steps for You (Immediate)

1. Review this plan and the open questions in Phase 0.
2. Decide on the exact launch pricing/SKUs/COP amounts.
3. Reply with approval (or edits) on the plan + "start Phase 1" (or whichever piece you want to tackle first).
4. I can immediately help with the pricing catalog unification (the highest-leverage single change) or any other slice.

This product deserves paying users. The content and experience are already legitimately useful. The remaining work is finite, well-understood, and mostly about making the "pay → instantly get value" loop boringly reliable and the mobile experience delightful.

Let's make the jump cleanly.

---

**Document Version:** 1.0 (initial draft after full codebase + docs review)  
**Last Updated:** May 2026  
**Owner:** Sebastián / CBas + AI pair-programming support as needed
