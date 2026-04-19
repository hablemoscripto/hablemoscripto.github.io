# Phase 2 Audit — Retention Infrastructure

**Discovery date:** 2026-04-18

Phase 2 activates unused pedagogical infrastructure (`CheckpointQuiz` component exists but **zero lessons use it**) and closes three research-backed retention gaps identified in the curriculum audit:

1. **2a** — inline glossary for terms assumed-but-not-defined
2. **2b** — mid-lesson retrieval quizzes (evidence: Szpunar et al. 2013 — ~50% reduction in mind-wandering)
3. **2c** — spaced-review questions across lesson quizzes (evidence: Cepeda et al. 2006 meta-analysis)

---

## 2a — Inline glossary system

### Component design

New section type added to the schema: `type: 'glossary'`. Renders below whatever section precedes it. Matches existing brand tokens (brand-500 border, navy background) so it reads as part of the same lesson rhythm as `highlight` and `imageSummary` boxes — not as a foreign UI element.

Mobile-safe (no hover-only patterns). Always-visible (no popover / tooltip). One or more terms per callout.

Schema:

```typescript
{
  type: 'glossary';
  terms: {
    term: string;          // "Gas", "DAO", etc.
    definition: string;    // Plain-Spanish explanation
    whyItMatters?: string; // Optional: one-sentence stake
  }[];
}
```

### Terms to wire

Only 6 terms needed inline definitions — the other two from the original roadmap (TVL, pool de liquidez) already have inline definitions at first mention. Don't create redundancy.

| # | Term | First use (file:line) | Current handling | Decision |
|---|------|----------------------|------------------|----------|
| 1 | **Gas** | `courseData.ts:2073` (Lesson 10, Solana vs Ethereum) | Used without definition | ➕ Add glossary callout after this section |
| 2 | **Smart contract** | `courseData.ts:1129` (Lesson 5, Blockchain) | Brief inline: "programas que se ejecutan en la blockchain" | ➕ Expand with dedicated glossary callout |
| 3 | **DAO** | `courseData.ts:5867` (Lesson 29, NFTs) | Casual use before Lesson 46 formally teaches it | ➕ Add glossary callout |
| 4 | **Slippage** | `courseData.ts:5110` (Lesson 25, Jupiter) | Used without definition | ➕ Add glossary callout |
| 5 | **TVL** | `courseData.ts:4055` (Lesson 19, DYOR) | "TVL (Total Value Locked)" expanded in same feature | ✅ Already adequate |
| 6 | **Pool de liquidez** | `courseData.ts:5310` (Lesson 26, Liquidity) | Defined inline as first line of the lesson's main section | ✅ Already adequate |

Four new glossary callouts will ship in Phase 2a.

---

## 2b — Mid-lesson checkpoint quizzes

One checkpoint per target lesson, placed to maximize retrieval while the user is still in the lesson.

All follow the existing `CheckpointQuizData` shape (see `services/lessonService.ts:21`). The `sectionIndex` determines where the checkpoint appears — rendered after the section at that index.

| Lesson | Title | Section count | `sectionIndex` | Focus of checkpoint |
|--------|-------|---------------|----------------|---------------------|
| 2 | La Trampa de la Inflación | 11 | 3 | Real-yield math after understanding nominal vs real |
| 4 | Bitcoin: La Salida | 12 | 4 | Why scarcity matters after Bitcoin's properties intro |
| 17 | Tokenomics 101 | 6 | 2 | Market Cap vs FDV after supply concepts introduced |
| 19 | Investigación On-Chain (DYOR) | 8 | 3 | TVL interpretation after the 4 tools section |
| 27 | Lending & Borrowing | 7 | 1 | LTV + liquidation after core mechanics |
| 40 | Staking SOL | 6 | 2 | Validator selection after epochs/delegation |

### Authored questions

**Lesson 2 — Checkpoint: Inflación Real vs Nominal**
Question: Ganas un aumento del 8% este año. La inflación oficial del país es del 5%. ¿Cuál es el cambio real en tu poder de compra?
- A) +8% (ganaste el aumento completo)
- B) +3% (aumento menos inflación — correcta)
- C) -5% (la inflación anula tu aumento)
- D) 0% (empataste con la inflación)
Explanation: "Poder de compra real = aumento nominal − inflación. 8% − 5% = 3%. Ganaste ese aumento, pero solo 3 puntos te acercan a más capacidad de compra real. Si la inflación hubiera sido 8%, tu aumento habría sido inflación disfrazada de mejora."

**Lesson 4 — Checkpoint: ¿Por qué importa la escasez?**
Question: Alguien crea "Bitcoin 2.0": idéntico a Bitcoin en todo excepto que el máximo es 42 millones en lugar de 21. ¿Cuál es el problema principal?
- A) 42 millones es demasiado — no habría suficiente minería
- B) La cantidad máxima no importa si está definida; sería igual de valioso
- C) Una vez que aceptas cambiar el máximo una vez, se puede cambiar de nuevo — pierde la credibilidad de escasez absoluta (correcta)
- D) Sería igual de bueno porque igualmente está limitado
Explanation: "La clave no es el número — es la inmutabilidad del número. Bitcoin tiene 21M no porque 21M sea mágico, sino porque 'nadie puede cambiarlo, ni siquiera Satoshi'. Si existiera un Bitcoin 2.0, demostraría que el máximo es negociable, y por tanto no es verdaderamente escaso. La credibilidad del límite es lo que da valor, no el número."

**Lesson 17 — Checkpoint: La Trampa del Token "Barato"**
Question: Token A cuesta $200 por unidad, con 1M circulantes y 1M total. Token B cuesta $0.001 por unidad, con 10B circulantes y 100B total. Un amigo dice "Token B está baratísimo". ¿Qué le respondes?
- A) Tiene razón — $0.001 es mucho más barato que $200
- B) Token A tiene market cap de $200M; Token B tiene market cap de $10M pero FDV de $100M. Token B tiene 90% del supply por desbloquearse — la dilución va a aplastar el precio (correcta)
- C) Los dos son equivalentes porque el precio no importa
- D) Token B es mejor porque puedes comprar más unidades
Explanation: "El precio por unidad es irrelevante. Lo que importa es Market Cap (precio × supply circulante) y FDV (precio × supply total). Token B tiene ratio Market Cap / FDV de 0.1 — solo 10% circula, 90% está esperando para diluirte. Token A tiene ratio 1.0 — todo ya circula, sin riesgo de dilución. 'Barato por unidad' es una ilusión psicológica que los insiders usan contra novatos."

**Lesson 19 — Checkpoint: La Primera Herramienta**
Question: Descubres un protocolo nuevo en Twitter y quieres evaluarlo seriamente. ¿Cuál es la PRIMERA herramienta que abres y por qué?
- A) Twitter/X — para ver qué dice la comunidad
- B) DefiLlama — porque es el único lugar donde veo si el protocolo tiene TVL real, fees reales, y usuarios reales en tiempo real. Todo lo demás es opinión; esto son datos (correcta)
- C) El sitio web del protocolo — para leer el whitepaper
- D) Dune — para buscar análisis on-chain sofisticados
Explanation: "Siempre empiezas por DefiLlama. Si el protocolo no aparece ahí con TVL y fees, es porque no tiene producto real — es solo un token y un roadmap bonito. El 99% de los proyectos que pierden todo nunca pasaron esta prueba. Dune y análisis on-chain son herramientas 2 y 3 — profundizas después de confirmar que hay algo que analizar."

**Lesson 27 — Checkpoint: Health Factor en Peligro**
Question: Depositaste 10 SOL ($1,800) y pediste prestado $1,200 USDC. SOL cae 25%. Ahora tu colateral vale $1,350. El umbral de liquidación del protocolo está en 80% LTV. ¿Qué pasa?
- A) Te liquidan inmediatamente porque tu LTV subió
- B) Tu LTV ahora es 89% ($1,200/$1,350) — superaste el umbral, te liquidan parcialmente y pagas penalización (correcta)
- C) No pasa nada porque tu colateral sigue valiendo más que tu deuda
- D) El protocolo te da 24 horas para añadir colateral
Explanation: "LTV = Deuda / Colateral = $1,200 / $1,350 = 89%. Cruzaste el umbral del 80%. La liquidación es automática — un bot vende parte de tu colateral en milisegundos. Pierdes la cantidad liquidada + penalización de 5-10%. Sin advertencias. Esta es la razón por la que los profesionales NUNCA empiezan cerca del máximo LTV. Con LTV inicial del 30-40%, SOL tendría que caer 50-60% antes de acercarse a liquidación."

**Lesson 40 — Checkpoint: Elegir Validador**
Question: Validador A: 0% comisión, 95% uptime. Validador B: 3% comisión, 99.5% uptime. Asumiendo que ambos tienen buen staking, ¿cuál genera más rendimiento para ti?
- A) A — no paga comisión, así recibes todos los rewards
- B) B — el 4.5% extra de uptime más que compensa la comisión de 3% (correcta)
- C) Son iguales matemáticamente
- D) A si haces staking corto plazo, B si es largo plazo
Explanation: "Uptime se traduce directamente en rendimiento. Validador A pierde el 5% del tiempo potencial de rewards. Validador B pierde solo 0.5% pero cobra 3% comisión. Rendimiento neto A ≈ 100% × 95% × (1-0%) = 95% del máximo teórico. Rendimiento neto B ≈ 100% × 99.5% × (1-3%) = 96.5%. B gana por ~1.5 puntos, además de ser más confiable. Comisiones bajas pueden ser una trampa si el validador es inconsistente."

---

## 2c — Concept-review questions (spaced repetition)

Every 3rd lesson (numbered 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42) gets one new question appended to its final quiz that tests a concept from 3–5 lessons earlier. This creates light spaced repetition without any new infrastructure — just new `questions` entries in existing `quiz.questions` arrays.

For Phase 2, I'm scoping this to **Beginner track only** (lessons 3, 6, 9, ... 42 that exist in Beginner) — 6 new questions. Intermediate/Advanced follow in a later pass if this works.

Target lessons and their review concepts (all terms defined in earlier lessons):

| Lesson | Reviews concept from | New question focus |
|--------|---------------------|---------------------|
| 3 (Cantillon) | L1 — escasez | Why a government "printing money" isn't neutral redistribution |
| 6 (Descentralización) | L3 — Cantillon | Who benefits first from monetary expansion |
| 9 (Phantom Wallet) | L5 — Blockchain | What makes a wallet self-custodial |
| 42 (DCA) | L38 — scams | Why urgency signals from "investment opportunities" are almost always red flags |

Scoped to **4 lessons** for Phase 2c — these are the Beginner lessons divisible by 3 that have quiz arrays and whose review question adds genuine value. Additional coverage for later phases.

### Authored questions

**Lesson 3 — Review of escasez (from L1):**
Question: El gobierno anuncia que inyectará $2 trillones "para estimular la economía y llegar a todos". Conectando con lo que aprendiste sobre el dinero en la Lección 1, ¿por qué esto NO es redistribución neutral?
- A) Porque el dinero no es real
- B) Porque el dinero nuevo entra primero a bancos y activos financieros — los precios de esos activos suben ANTES de que el dinero llegue al resto. Cuando tú recibes tu parte, las cosas ya cuestan más (correcta)
- C) Porque los políticos roban una parte
- D) No tiene efecto, es solo inflación
Explanation: "Aprendiste en L1 que la escasez es lo que da valor al dinero. Cuando un gobierno crea $2T nuevos, diluye el valor del dinero existente — pero no afecta a todos igual. Los primeros en recibir (bancos, fondos, corporaciones) compran activos a precios viejos. Para cuando el dinero llega a ti vía sueldo o subsidio, los activos ya subieron. Perdiste capacidad de compra relativa. Esto es el Efecto Cantillon que desarrollaremos a continuación."

**Lesson 6 — Review of Cantillon (from L3):**
Question: Un banco central grande accede a crédito al 0.5%. Tú pagas 28% en tu tarjeta de crédito. Aplicando lo que aprendiste sobre el Efecto Cantillon, ¿qué explica mejor esta diferencia?
- A) Los bancos son más responsables
- B) La proximidad a la fuente del dinero — estar "cerca de la impresora" te da acceso a crédito casi gratuito que puedes prestar a otros con márgenes enormes (correcta)
- C) Los bancos tienen mejor historial crediticio
- D) Es pura casualidad y varía con el tiempo
Explanation: "El Efecto Cantillon no es solo sobre quién gana en una impresión específica — es sobre la estructura permanente del sistema. Los bancos centrales crean dinero que fluye primero a bancos comerciales. Esos bancos prestan ese dinero casi-gratuito a tu tarjeta al 28%. La diferencia es ganancia pura por estar 'cerca de la impresora'. Entender esto explica por qué los mismos actores ganan consistentemente década tras década."

**Lesson 9 — Review of Blockchain (from L5):**
Question: Tu amigo te dice: 'Mi banco me devolvió $200 que un hacker robó de mi cuenta.' Luego pregunta: '¿Pueden hacer lo mismo con mi wallet Phantom si me roban cripto?' Aplicando lo que aprendiste sobre blockchain, ¿qué le respondes?
- A) Sí, Phantom tiene un servicio al cliente que puede revertir transacciones
- B) No. En blockchain no hay autoridad central que pueda revertir transacciones — esa es precisamente la característica que la hace descentralizada. TÚ eres tu propio banco, lo que significa que TÚ eres responsable de tu seguridad. Una transacción firmada es irreversible (correcta)
- C) Depende de cuánto dinero sea
- D) Solo si reporta rápidamente
Explanation: "Esta es la otra cara de la autocustodia que aprendiste en L5 (Blockchain) y L7 (Wallets): nadie puede confiscar tus fondos, pero nadie puede recuperarlos si los pierdes. El banco tradicional devuelve el dinero porque es un intermediario centralizado — puede revertir decisiones. La blockchain no tiene esa autoridad. Esta es la razón por la que la educación en seguridad (frase semilla, evitar estafas) no es opcional — es la infraestructura mínima de sobrevivencia en cripto."

**Lesson 42 — Review of scams (from L38):**
Question: Alguien en Discord te dice: '¡Oportunidad única! Este token va a explotar en las próximas 2 horas, tengo información privilegiada. Solo quedan 50 cupos.' Aplicando lo que aprendiste sobre estafas Web3, ¿cuáles son los 3 red flags aquí y qué haces?
- A) Compro rápido antes de que se acabe el cupo
- B) (1) Urgencia artificial ('2 horas', 'solo 50 cupos'), (2) promesa de retornos garantizados ('va a explotar'), (3) 'información privilegiada' — las tres son tácticas clásicas de estafa. Lo ignoro, lo reporto, y NUNCA comparto wallet ni fondos por mensajes directos (correcta)
- C) Investigo el token pero sin invertir mucho
- D) Pregunto a otros en el Discord si es legítimo
Explanation: "Aprendiste en L38 que las estafas Web3 siguen patrones predecibles: urgencia, promesas garantizadas, e información 'privilegiada' son las tres más comunes. DCA (esta lección) es la defensa estructural contra estas tácticas — si tu estrategia es 'invertir X semanalmente en activos que ya conoces', no hay espacio mental para 'oportunidades únicas de 2 horas'. La disciplina del DCA es inmune al FOMO."

---

## Decisions

All execution decisions pre-approved per Sebastian's instruction ("I trust you with the fixes"):

- ✅ Glossary: ship 4 callouts (Gas, Smart contract, DAO, Slippage)
- ✅ Checkpoint quizzes: ship 6 as specified
- ✅ Concept-review questions: ship 4 as specified

## Verification plan

1. `grep -nE "type: 'glossary'" data/courseData.ts` — expect 4 hits
2. `grep -nE "checkpointQuizzes:" data/courseData.ts` — expect 6 hits
3. `npx tsc --noEmit` — passes
4. Visual spot-check: load Lesson 10 (first glossary callout), Lesson 17 (first checkpoint), Lesson 3 (first review question) — verify rendering
5. No console errors or layout regressions

Pass = Phase 2 done.

## Overflow

- Lesson 18 (Ciclos de Mercado) checkpoint noted but not implemented — could be Phase 3 or Phase 2 follow-up if the 6 above are well-received.
- Intermediate/Advanced concept-review coverage: Phase 3 scope.
- A `<LastVerified />` component for TPS/APY-type claims — flagged in Phase 1 overflow, now Phase 2b-adjacent because it relates to content confidence.
