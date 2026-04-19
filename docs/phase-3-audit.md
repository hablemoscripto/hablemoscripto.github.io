# Phase 3 Audit — Content Expansions (Revised Scope)

**Discovery date:** 2026-04-18

## Critical finding: the original audit overestimated the gap

Direct reads of Lessons 33, 44, and 46 show the content is substantially richer than the Phase 1 survey agent's word counts suggested. Actual measurements:

| Lesson | Survey estimate | Real word count | Status |
|--------|-----------------|-----------------|--------|
| L33 Firedancer | 1,600 | ~3,300 | Already substantial |
| L44 Capstone | 1,900 | ~3,500 | Includes LATAM tax section |
| L46 DAO | 2,100 | ~3,800 | Covers 4 voting mechanisms + attack vectors + Jupiter tutorial |

Wholesale rewrites would risk degrading quality. Phase 3 scope revised to **targeted surgical enhancement** — only where genuine gaps exist.

---

## 3a — Lesson 44 (Beginner Capstone)

**Current strengths:** 8 sections including Financial Readiness, Portfolio Base, DCA Setup, Security Checklist, Rules & Goals, LATAM Taxes (Colombia/México/Argentina), and Action Plan takeaways. Strong 5-question quiz.

**Real gaps:**

1. **Missing "first action NOW" trigger.** The takeaways say "Ejecuta Esta Semana" but there's no visceral single-action starting point. Adult learning research (Bucher, behavioral science) shows "one specific action in the next 10 minutes" drives completion ~3× better than "this week" framing.

2. **5 → 7 quiz questions.** For a 22-minute capstone on a foundational action plan, 5 questions is thin. Add 2 questions covering: (a) when NOT to invest (emergency fund failure case), (b) handling a bear market drawdown of -40% at 12 months in.

**Proposed changes:**

- **Add new "Paso 6" section: "Tu Primera Acción AHORA"** — 10-minute concrete starting action for the learner who just finished the course (write down 3 numbers on paper: ingresos netos, emergency fund status, DCA amount).
- **Add 2 quiz questions** to the final quiz covering emergency-fund edge case and bear-market discipline.
- **Enhance the takeaway list** with the 10-minute-now framing.

Word count delta: +~400 words (to ~3,900). Sections: 8 → 9.

---

## 3b — Lesson 33 (Firedancer)

**Current strengths:** 7 sections covering Client Diversity Theory, Why C over Rust, Agave vs Firedancer comparison, Future (Token Extensions / SVM / Blinks / compression), SIMD governance, honest risks. Strong 6-question quiz.

**Real gaps:**

1. **"1 millón TPS" claim overstates without caveat.** Appears in both description (line 6686) and main body (line 6714). Factually this is a *lab benchmark under ideal conditions*, not production behavior. A careful reader might call this hype-adjacent. Soften with "hasta 1M TPS en pruebas de laboratorio (rendimiento real en producción será sustancialmente menor)".

2. **Missing user-impact bridge.** The lesson is highly technical (C vs Rust, consensus mechanics, SIMDs) but never answers the direct question: **"¿Qué significa Firedancer para TI, el usuario?"** An advanced learner can follow all the technical material and still not know if they should care.

**Proposed changes:**

- **Soften the 1M TPS claim** in description + main section with proper caveat
- **Add a new "¿Qué Significa Firedancer para Ti?" section** — ~250 words on concrete user impact: more reliable transactions during congestion, better UX for DeFi users during peak activity, lower validator costs → more decentralization over time, same fees (gas is cheap either way), no action required by users.

Word count delta: +~350 words (to ~3,650). Sections: 7 → 8.

---

## 3c — Lesson 46 (DAO Governance)

**Current strengths:** Covers 4 voting mechanisms, delegation, attack vectors (flash loans, treasury drain, Sybil), centralized-vs-decentralized comparison, and a step-by-step Jupiter voting tutorial.

**Real gaps:**

1. **No concrete case study.** Abstract treatment of mechanisms without a real DAO decision walked through. A specific case (e.g., Uniswap's long-running Fee Switch debate, MakerDAO's collateral additions, Jupiter's tokenomics vote) would make the concepts concrete.

2. **5 → 7 quiz questions.** The 13-lesson Advanced track has several 6-7 question quizzes. This capstone-adjacent lesson could match that.

**Proposed changes:**

- **Add new "Caso de Estudio: La Propuesta de Jupiter que Cambió la Tokenomics" section** — ~350 words walking through Jupiter's JUP circulation debate of 2024 (community voted on releasing tokens from treasury vs not). Shows real voting in action, real stakes, real outcome. Deeply on-brand since the course teaches Jupiter extensively.
- **Add 2 quiz questions** covering: (a) real analysis of a hypothetical proposal using the red-flag framework, (b) identifying conviction-voting vs vote-escrow differences in a scenario.

Word count delta: +~500 words (to ~4,300). Sections: 6 → 7.

---

## Decisions

Per Sebastian's continued autonomous-execution grant:

- ✅ 3a: add Paso 6 + 2 quiz questions
- ✅ 3b: soften 1M TPS + add "¿Qué Significa para Ti?" section
- ✅ 3c: add Jupiter case study + 2 quiz questions

## Verification plan

- `grep -cE "id: (33|44|46)" data/courseData.ts` — confirm structure integrity
- `npx tsc --noEmit` — passes
- Load each lesson in preview, visually verify new sections render cleanly
- Quiz count per lesson: L33 stays 6, L44 → 7, L46 → 7

## Overflow

The survey-agent-suggested "downloadable checklist asset" for L44 capstone is out of scope — it would need design + content + hosting decisions. Logged for Phase 4 consideration if the content-quality-alone approach has gaps.

Similarly, a Uniswap Fee Switch case study for L46 would also work — I chose Jupiter because it's the course's primary example protocol and the story is well-documented publicly. If you'd rather have Uniswap, we can swap.
