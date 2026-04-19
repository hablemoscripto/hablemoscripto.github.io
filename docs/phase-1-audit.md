# Phase 1 Audit — Factual Integrity & Time-Sensitive Claims

**Discovery date:** 2026-04-18
**Method:** systematic grep across `data/courseData.ts` for:
- Elapsed-time phrases (`\b\d+\s*años\s*(después|desde)`)
- Year literals + "actualmente/hoy" inside factual claims
- Performance claims (APY %, TPS figures, inflation %)
- Module-metadata vs lesson-body inconsistencies
- Time-stamped "current" examples (narratives, tokens, events)

All "hoy", "actual", "año" references were read in context. Most are natural usage ("de los traders que operan hoy", "el mercado actual") and don't need change. Only items below are actionable.

---

## Findings

| # | File:Line | Current text (quoted) | Issue | Proposed fix | Severity |
|---|-----------|------------------------|-------|--------------|----------|
| 1 | `data/courseData.ts:282` | "…rompió la promesa 'temporalmente'. **54 años después**, sigue rota." | Rolls each year; will be "55" in August 2026. Brittle anchor. | Replace with evergreen phrasing: "**Más de medio siglo después**, sigue rota." Preserves narrative punch; zero future maintenance. | 🟠 |
| 2 | `data/courseData.ts:318` | "El dólar actual lleva **54 años** sin respaldo en oro desde 1971—y ha perdido el 87% de su poder adquisitivo en ese periodo." | Same rolling anchor as #1. | "El dólar actual lleva **más de medio siglo** sin respaldo en oro desde 1971—y ha perdido el 87% de su poder adquisitivo en ese periodo." | 🟠 |
| 3 | `data/courseData.ts:2099` | Lesson 10, Solana outages box: "Solana tuvo varios 'apagones' en 2022-2023… Sin embargo, **desde 2024 ha funcionado sin problemas** y las mejoras técnicas han resuelto estos issues." | Absolutist claim ("sin problemas") that will be falsified by any future incident. Also "desde 2024" dates the claim. | Soften + drop date anchor: "Sin embargo, las mejoras técnicas y el desarrollo de clientes redundantes (Firedancer) han mejorado significativamente la estabilidad de la red." | 🟠 |
| 4 | `data/courseData.ts:7730` | Lesson 40, Staking APY box: "El APY de staking en Solana es **actualmente ~5-6%** (varía por epoch y validador). Pero la inflación de SOL es **~5.5% y decreciente**." | "Actualmente" without date anchor. Numbers were accurate 2024; SOL inflation schedule decays ~15%/yr and staking yield shifts with it. | Add explicit datestamp + soften bounds: "El APY de staking en Solana ronda el **~5-7% (al 2026)** y la inflación del protocolo desciende cada año (está entre **~4-5% actualmente, con trayectoria decreciente hacia 1.5%**)." | 🔴 |
| 5 | `data/courseData.ts:202` | Module metadata for Lesson 40: "Staking SOL: Gana por Asegurar la Red … Entiende validadores, epochs y cómo ganar **~7% anual** delegando." | Conflicts with lesson body's "~5-6%". Two numbers in the same file for the same thing. | Reconcile to match body: "cómo ganar **~5-7% anual** delegando." | 🟠 |
| 6 | `data/courseData.ts:227` | Module metadata for Lesson 33: "Firedancer & El Futuro — El nuevo cliente que hará a Solana imparable. (**20 min**)" | (a) Duration `20 min` mismatches lesson body's declared `25 min` (line 6498). (b) "hará a Solana imparable" is hype-y, clashes with the honest lesson-body voice. | Replace both: "Firedancer & El Futuro — Cliente validador independiente de Jump Crypto. Por qué la diversidad de clientes aumenta la resiliencia de Solana. (**25 min**)" | 🟠 |
| 7 | `data/courseData.ts:4235` | Lesson 20, narrative lifecycle section: "Memecoins y AI dominaron **2024-2025**." | Currently frames 2024–2025 as past. Given today is April 2026, this is tense-correct. No change needed. | ✅ No change. | ✅ |
| 8 | `data/courseData.ts:4246-4355` | Lesson 20, "current narrative" callouts + quiz question about 2024-2025 narratives. | Dated examples but framed with year anchors, so age gracefully as "historical examples." No changes needed this phase — future phases could refresh with 2026 narratives when relevant. | ✅ No change. | ✅ |
| 9 | `data/courseData.ts:633` | Lesson 3 Cantillon: "Ejemplo Concreto: La Pandemia 2020-2022" section treats monetary + fiscal stimulus as one story. | Audit agent flagged potential conflation. **On re-read: lesson handles it correctly** — line 638 explicitly says "cheques de estímulo ayudaron a sobrevivir pero no a comprar activos" which is exactly the fiscal-vs-monetary distinction. No change needed. | ✅ No change. | ✅ |
| 10 | `data/courseData.ts` (multiple lines: 1145, 1247, 1355, 1467, 2036, 2048, 6344) | Various "~2,000-4,000 TPS" / "~4,000 TPS" / "~7 TPS" claims for Solana/Bitcoin. | Claims are accurate as of 2024-2026. Within reasonable bounds. | ✅ No change. Note: revisit annually. | ✅ |
| 11 | `data/courseData.ts:493` | Lesson 2: "El dólar ha perdido **96% de su poder adquisitivo desde 1913** (cuando se creó la Reserva Federal)." | Factually correct (BLS data: $1 in 1913 ≈ $0.03 today). | ✅ No change. | ✅ |
| 12 | `data/courseData.ts:481-483` | Lesson 2: Argentina (2023-2024), Turquía (2021-2023), Líbano (2020-2023) boxes. | Explicitly dated. Ages gracefully. | ✅ No change. | ✅ |

---

## Actionable items (the fix list)

Six items need change. Each maps to one small edit.

1. ✏️ Replace "54 años después" with "Más de medio siglo después" at `courseData.ts:282`
2. ✏️ Replace "lleva 54 años" with "lleva más de medio siglo" at `courseData.ts:318`
3. ✏️ Soften "desde 2024 ha funcionado sin problemas" at `courseData.ts:2099`
4. ✏️ Add datestamp + soften APY/inflation claim at `courseData.ts:7730`
5. ✏️ Reconcile `~7%` → `~5-7%` in module metadata at `courseData.ts:202`
6. ✏️ Fix Lesson 33 module metadata (description + duration) at `courseData.ts:227`

---

## Verification plan

After executing fixes:

1. `grep -nE "\b(54|55) años" data/courseData.ts` → expect 0 hits
2. `grep -nE "actualmente.*APY|APY.*actualmente" data/courseData.ts` → expect only dated claims
3. `grep -nE "ha funcionado sin problemas" data/courseData.ts` → expect 0 hits
4. Confirm Lesson 33 module metadata (line 227) matches lesson body (line 6498)
5. `npx tsc --noEmit` passes
6. Visual spot-check: load Lesson 1 header → "más de medio siglo" reads cleanly

Pass = Phase 1 done.

## Decisions

Sebastian reviewing this document and marking decisions:

- Items #1–6: **✅ proceed with proposed fixes** (trusted Claude to execute per chat instruction)
- Items #7–12: **✅ no change needed** (already verified in discovery)

## Overflow

Non-Phase-1 items noticed during discovery:

- The Cantillon "Pandemia 2020-2022" section is correct but could be slightly tightened; this is editorial taste, not correctness → logs as Phase 3d optional consideration.
- Solana TPS numbers appear in 7+ places and would benefit from being sourced to a single constant or a visible "last verified" date. → logs for Phase 2 infrastructure discussion (a `<LastVerified />` component could handle this generically).
