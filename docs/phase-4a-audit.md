# Phase 4a Audit — Daily Review Card (Spaced Repetition v1)

**Discovery date:** 2026-04-19

## Context from existing code

### What we have

**Supabase tables** (read from existing migrations + code):
- `user_progress` — lesson-level only: `user_id`, `lesson_id`, `completed`, `quiz_score` (aggregate), `completed_at`
- `user_achievements` — unlocked achievements with timestamps
- No per-question answer tracking anywhere in the system

**Existing contexts:**
- `ProgressContext` — tracks lesson completion with `completed_at` timestamps ✓ usable
- `GamificationContext` — already computes streaks from consecutive-days-with-completion ✓ reusable pattern

**Existing components:**
- `Quiz.tsx` — in-lesson final quiz; does NOT currently persist individual answers
- `CheckpointQuiz.tsx` — mid-lesson; now used in 6 lessons (Phase 2b)

### The critical constraint

**There is zero per-question answer history in the system today.** This rules out "real" SM-2 or Half-Life Regression algorithms for v1 — those require knowing what each user got wrong. Even if we added tracking today, it would be empty for weeks.

## Design decisions

### Decision 1 — Algorithm: Weighted random from completed-lesson quiz pool

v1 ignores per-question correctness. It draws from the union of quiz questions in lessons the user has completed, weighted by time-since-completion to approximate spacing:

| Days since lesson completion | Weight |
|------------------------------|--------|
| 0-3 days | 0.5× (recent; less SR benefit) |
| 4-30 days | 2× (SR sweet spot per Cepeda 2006) |
| 31+ days | 1× (baseline) |

After picking a weighted-random lesson, draw a random question from its quiz.

**Deliberately not building:** SM-2, Leitner 2-box, per-question history tracking. Those are v1.1+ when real data exists. Adding them now would be premature optimization on empty data.

**Why this is still pedagogically valuable:** even random retrieval across completed lessons triggers the testing effect (Roediger & Karpicke 2006). The measurable retention benefit is real, just smaller than full SR.

### Decision 2 — UI placement: Top of `/education`, above "Continuar aprendiendo"

Justification:
- First thing user sees after login → maximum engagement
- Above the existing "Continuar aprendiendo" card → preserves the "next lesson" affordance below it
- Only shows if user has completed ≥ 3 lessons (otherwise no meaningful pool)
- Shown once per day; dismissible to "done state" after answering

### Decision 3 — State: localStorage only for v1, no backend changes

v1 stores per-device:
- `hc_review_last_date` — YYYY-MM-DD of last answer
- `hc_review_last_question_id` — ID of last question shown (prevents same question twice in a row)

Trade-offs:
- ✅ Zero backend complexity; ships this session
- ✅ No Supabase migration needed
- ❌ Per-device (reviewing on laptop then phone shows same question twice) — acceptable for v1
- ❌ Clearing localStorage resets state — acceptable

**Forward-looking:** v1.1 would add a `user_review_answers` table to persist across devices + enable real SR. I'm **not** creating that migration in v1 — we should let v1 run and get real usage signal first.

### Decision 4 — Once-per-day lock with reset

- If user answers today → show "Ya revisaste hoy ✓" compact banner until midnight local time
- If user dismisses without answering → reappears tomorrow
- No penalties for missing days (philosophical: we're not Duolingo-shaming people)

## Component architecture

```
components/
  education/
    DailyReviewCard.tsx       ← new component
    dailyReviewService.ts     ← new pure-function picker
hooks/
  useDailyReview.ts           ← new hook
```

### `dailyReviewService.ts` — pure picker logic

```typescript
type Completion = { lessonId: number; completedAt: string };
type ReviewState = { lastDate: string | null; lastQuestionId: string | null };

function pickReviewQuestion(
  completions: Completion[],
  state: ReviewState,
  today: Date
): { lessonId: number; question: Question } | null
```

- Filters to ≥3 completions
- Applies time-weighted randomness
- Excludes question matching `state.lastQuestionId`
- Returns null if no eligible pool

### `DailyReviewCard.tsx` — UI

Three states:
1. **Idle** — shows prompt "Una pregunta rápida para reforzar lo que aprendiste" + lesson context + question + answer buttons
2. **Answered** — immediate feedback (green/red) + explanation + "Hasta mañana" button
3. **Done for today** — compact banner "Ya revisaste hoy ✓" with small Trophy icon

Brand tokens: `brand-500/20` background, matches `CheckpointQuiz` aesthetic.

### `useDailyReview` hook

```typescript
const { question, status, answer, dismiss } = useDailyReview();
```

- Reads `ProgressContext.progress` for completions
- Reads localStorage for state
- Invokes `pickReviewQuestion`
- Exposes answer handler that writes answered state + calls `onCorrectAnswer` for optional XP hook

## Done criteria

- [ ] New files: `dailyReviewService.ts`, `useDailyReview.ts`, `DailyReviewCard.tsx`
- [ ] Wired into `EducationPage.tsx` dashboard view (inside `isDashboard` block, above "Continuar aprendiendo")
- [ ] Respects `completed ≥ 3` threshold (no card for brand-new users)
- [ ] Honors once-per-day via localStorage
- [ ] TypeScript passes
- [ ] Preview build loads `/education` without errors
- [ ] Question + explanation render correctly (tested visually)
- [ ] Commit + push

## Verification plan

1. Manual QA on local preview with a test account that has ≥ 3 completed lessons
2. Verify card shows, questions draw correctly from completed lessons
3. Verify "done state" persists across page reload (same day)
4. Verify "reset" behavior when localStorage date changes
5. `npx tsc --noEmit` passes
6. Visual check on mobile viewport

## Overflow (for v1.1)

- Real SR: add `user_review_answers` table, track correctness, upgrade algorithm
- Cross-device sync (requires the above)
- Notification nudge if user has active streak but hasn't reviewed today (Phase 4b territory)
- Review questions from checkpoint quizzes (not just final quizzes)
- Stats: "You've reviewed X concepts this month"

None of these are v1. Ship v1 → measure → decide.
