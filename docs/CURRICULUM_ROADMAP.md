# Curriculum Roadmap

Persistent plan for improving the educational content and retention design of hablemoscripto.io.

Each phase follows the same 6-step quality pattern so nothing is missed:

1. **Discovery** — systematic sweep, produces an audit doc (`docs/phase-N-audit.md`).
2. **Review** — Sebastian reads the audit, marks each item: ✅ fix / ✏️ edit / ⏭️ skip / ❓ question.
3. **Execute** — exactly the approved changes, nothing more.
4. **Verify** — re-run discovery, prove "0 items remaining."
5. **Commit + push** — clean commit referencing the audit.
6. **Close out** — this file updated with commit SHA + any overflow noted.

---

## Phase 1 — Factual integrity & time-sensitive claims

**Goal:** every claim in the corpus is either accurate as of today or explicitly marked historical. No silent staleness.

**Scope**
- Elapsed-time phrases that roll each year ("54 años después" class)
- Performance claims without date anchors (APY %, TPS figures)
- "Actualmente" / "hoy" references inside factual claims
- Cross-file inconsistencies (module metadata vs lesson body)
- Examples presented as "current" that are actually time-stamped

**Out of scope** — content expansion, new lessons, new infrastructure. Pure correctness.

**Discovery output**: `docs/phase-1-audit.md`

**Done criteria**
- [x] Every audit item has a decision (fix/edit/skip) applied
- [x] `npx tsc --noEmit` passes
- [x] Re-run of discovery script shows 0 unresolved items
- [x] Commit + push landed on `main`
- [x] Roadmap updated with commit SHA below

**Status:** ✅ done

**Commit SHA:** `daee316` (2026-04-18)

---

## Phase 2 — Retention infrastructure

**Goal:** close the retention gap identified in the audit. Research-backed: mid-lesson retrieval, inline glossary, spaced repetition.

**Scope**
- **2a** — `¿Qué significa?` inline callout component + wire at first occurrence of ~8 core terms that are currently assumed but undefined: TVL, gas, smart contract, protocol, public/private key, DAO, slippage, liquidity pool.
- **2b** — Checkpoint quiz questions added to the 6 longest / most-dense lessons: Lesson 2 (Inflación), Lesson 4 (Bitcoin), Lesson 17 (Tokenomics), Lesson 19 (DYOR), Lesson 27 (Lending), Lesson 40 (Staking). One checkpoint per lesson, placed at the ~60% mark.
- **2c** — Concept-review questions: one question per every 3rd lesson's final quiz that tests a term from 3–5 lessons earlier. Introduces light spaced repetition without new infrastructure.

**Discovery output**: `docs/phase-2-audit.md` — will list:
- Every first-occurrence of each glossary term (file:line)
- Every target lesson's ideal checkpoint insertion point (section index, word count around it)
- Every concept-review pairing (lesson N reviews term from lesson N-3 to N-5)

**Done criteria**
- [x] Glossary section type shipped (rendered in `SectionRenderer`, schema-typed)
- [x] 4 core terms wired at first-occurrence — Gas (L10), Smart Contract (L5), Slippage (L25), DAO (L29). Two original targets (TVL, Pool de liquidez) already had inline definitions and needed no new callout.
- [x] 6 checkpoint quizzes authored and placed (Lessons 2, 4, 17, 19, 27, 40)
- [x] 4 concept-review questions added to Lessons 3, 6, 9, 42 (Beginner-track spaced repetition). Intermediate/Advanced coverage logged for later phase.
- [x] TypeScript passes (`npx tsc --noEmit` clean)
- [x] Commit + push

**Status:** ✅ done

**Commit SHA:** `99c29d2` (2026-04-18)

---

## Phase 3 — Content expansions

**Goal:** fix the three lessons that the audit flagged as under-delivering. Plus the Cantillon nuance.

**Scope**
- **3a** — Lesson 44 (Beginner Capstone: "Tu Plan de Inversión Personal"). Currently ~1,900 words. Restructure into the 6-step action plan (goals → risk → first transaction → DCA schedule → security checklist → 90-day review). Target ~3,000 words. Possibly a downloadable checklist asset.
- **3b** — Lesson 33 (Firedancer). Currently 25 min declared but thin. Expand to match ambition (already has the framing right, just needs more depth around client diversity, MEV implications, timeline honesty).
- **3c** — Lesson 46 (DAO Governance). Shortest Advanced lesson. Expand to cover: types of governance (token-weighted vs delegated vs conviction), real DAO case studies (Uniswap, Optimism, Realms on Solana), how to actually vote, red flags.
- **3d** — (Optional) Add a brief Cantillon nuance paragraph distinguishing monetary vs fiscal mechanisms in the 2020 example — only if Sebastian thinks it strengthens the lesson without breaking the narrative.

**Discovery output**: `docs/phase-3-audit.md` — will contain:
- Current structure of each target lesson (section breakdown)
- Proposed new structure with section titles + bullet-point outlines
- Word count targets per section
- New quiz questions that the expanded content requires

**Workflow**: Claude drafts structure → Sebastian rewrites prose in his voice → Claude integrates into courseData.ts.

**Done criteria**
- [ ] All 3 target lessons meet word count targets
- [ ] Each has expanded quiz (8+ questions for Advanced lessons)
- [ ] Seed phrase / prerequisite assumptions delivered inline
- [ ] Commit + push (likely split into 3a, 3b, 3c commits)

**Status:** ⏸️ blocked by Phase 2

**Commit SHA:** _pending_

---

## Phase 4 — Product-level retention features

**Goal:** go from content quality to Duolingo-level stickiness.

**Scope**
- **4a** — Daily review card on `/education`. Surfaces one concept from the user's weakest answered quizzes. Spaced repetition via simple interval logic (Leitner 2-box or SM-2 lite).
- **4b** — Optional streak mechanic. Research shows streaks drive ~3.6× 1-year retention, but carry anxiety risk — Duolingo only ships it with streak-freeze mercy. We copy the forgiving model.
- **4c** — Regulatory micro-lesson. Short (15-20 min) lesson covering Bitcoin/Solana/stablecoin legal + tax status in Mexico, Colombia, Argentina, Venezuela. Biggest value-add for LATAM users specifically.
- **4d** — (Optional) Cohort / live session scheduling component. MOOCs complete at 6.5%, cohorts at 70–80% (Kizilcec et al. 2017).

**Discovery output**: `docs/phase-4-audit.md` — technical design for each component.

**Done criteria**: TBD per component. This phase is larger, will break into multiple sessions.

**Status:** ⏸️ blocked by Phase 3

**Commit SHA:** _pending_

---

## Guardrails

- **No work on a later phase until the earlier is fully closed.** Drift kills discipline.
- **Sebastian owns editorial voice.** Claude drafts content proposals; Sebastian rewrites prose in his voice before anything ships.
- **Each phase ships as an atomic deploy.** Vercel auto-deploys `main`; we don't ship broken states.
- **Type-check after every phase.** `npx tsc --noEmit` must pass.
- **No skipping verify step.** If discovery script still finds unresolved items, phase is not done.

## Overflow log

Items discovered mid-phase that belong elsewhere get logged here, not silently dropped:

_(empty)_

## Session log

| Date | Phase | Commit | Notes |
|------|-------|--------|-------|
| 2026-04-18 | 1 | `daee316` | 6 items fixed (elapsed-time anchors made evergreen, staking APY datestamped, module metadata reconciled, absolutist claims softened). Roadmap + Phase 1 audit docs committed to repo. |
| 2026-04-18 | 2 | `99c29d2` | Retention infrastructure: glossary section type + 4 inline callouts (Gas, Smart Contract, Slippage, DAO); 6 mid-lesson checkpoint quizzes (L2, L4, L17, L19, L27, L40); 4 concept-review questions (L3, L6, L9, L42). Activates unused CheckpointQuiz infrastructure. |
