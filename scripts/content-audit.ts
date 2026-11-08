/* eslint-disable @typescript-eslint/no-explicit-any */
// Editorial quality gate for lesson content. Run: npm run content:check
// Flags: --scope=free|paid|all (default all), --summary, --no-fail
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from '../data/levels';
import { LESSONS_DATA } from '../data/courseData';
import { PAID_LESSONS } from '../data/paidContent';
import { LESSON_INFOGRAPHICS } from '../data/lessonInfographics';
import { computeLessonMinutes, statedMinutes } from './lesson-metrics';

type Severity = 'error' | 'warn';
interface Finding {
  lessonId: number;
  rule: string;
  severity: Severity;
  message: string;
}

const args = new Map(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? 'true'] as const;
  })
);
const scope = args.get('scope') ?? 'all';
const summaryOnly = args.has('summary');
const noFail = args.has('no-fail');

const LEVELS = [BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL];
const ALL: Record<number, any> = { ...LESSONS_DATA, ...PAID_LESSONS };

const levelOrder = new Map<string, number[]>();
const levelOf = new Map<number, string>();
const catalogTitle = new Map<number, string>();
for (const level of LEVELS) {
  const ids = level.modules.flatMap((m) => m.lessons.map((l) => l.id));
  levelOrder.set(level.id, ids);
  for (const m of level.modules) for (const l of m.lessons) catalogTitle.set(l.id, l.title);
  for (const id of ids) levelOf.set(id, level.id);
}

const inScope = (id: number) =>
  scope === 'all' ||
  (scope === 'free' && levelOf.get(id) === 'beginner') ||
  (scope === 'paid' && levelOf.get(id) !== 'beginner');

const findings: Finding[] = [];
const add = (lessonId: number, rule: string, severity: Severity, message: string) =>
  findings.push({ lessonId, rule, severity, message });

const optionText = (o: unknown) =>
  typeof o === 'string' ? o : ((o as { text?: string })?.text ?? '');

function correctIndex(q: any): number | null {
  const a = q.correctAnswer;
  if (typeof a === 'number') return a;
  if (typeof a === 'string' && /^[a-d]$/i.test(a.trim())) return a.trim().toLowerCase().charCodeAt(0) - 97;
  return null;
}

function* strings(value: unknown, path = ''): Generator<[string, string]> {
  if (typeof value === 'string') yield [path, value];
  else if (Array.isArray(value)) for (const [i, v] of value.entries()) yield* strings(v, `${path}[${i}]`);
  else if (value && typeof value === 'object')
    for (const [k, v] of Object.entries(value)) {
      if (k === 'icon' || k === 'image' || k === 'link' || k === 'videoId') continue;
      yield* strings(v, path ? `${path}.${k}` : k);
    }
}

const NEGATION = /\b(no|nada|nadie|ning[uú]n[oa]?|nunca|sin|ni)\b[^.]{0,40}$/i;
// [pattern, label, allowed when negated ("no existe dinero gratis")]
const BANNED: [RegExp, string, boolean][] = [
  [/[\u2014\u2013]/, 'raya o semirraya (usa coma, dos puntos o paréntesis)', false],
  [/dinero gratis/i, '"dinero gratis"', true],
  [/riesgo cero|cero riesgo/i, '"riesgo cero"', true],
  [/objetivamente mejor/i, '"objetivamente mejor"', false],
  [/\b(no|tampoco) (van|va|se va|se van) a (ir a )?cero/i, 'afirma que un activo no puede ir a cero', false],
  [/estudios cient[ií]ficos/i, 'estadística de "estudios científicos" sin fuente', false],
  [/riqueza generacional/i, '"riqueza generacional"', false],
  [/hicieron fortunas/i, '"hicieron fortunas"', false],
  [/mediados de 2026/i, 'sello de fecha "mediados de 2026" (usa asOf con mes y año)', false],
];

const JOKE_DISTRACTORS = [
  /logo m[aá]s bonito/i,
  /color (m[aá]s )?bonito/i,
  /porque es ilegal/i,
  /satoshi lo (impedir[ií]a|prohib)/i,
  /\bpor (pura )?suerte\b/i,
  /\bmagia\b/i,
];

const MONTHS = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];
const MAX_AS_OF_AGE_DAYS = 180;

function parseAsOf(s: string): Date | null {
  const m = s.toLowerCase().match(new RegExp(`(${MONTHS.join('|')}) de (20\\d\\d)`));
  return m ? new Date(Number(m[2]), MONTHS.indexOf(m[1]), 1) : null;
}

const normalize = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((w) => w.length > 3);

const stems: { lessonId: number; id: string; words: Set<string>; text: string }[] = [];
let mcTotal = 0;
let mcLongest = 0;

for (const [key, lesson] of Object.entries(ALL)) {
  const id = Number(key);
  if (!inScope(id)) continue;

  for (const [path, text] of strings(lesson)) {
    for (const [re, label, negatable] of BANNED) {
      const global = new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`);
      for (const m of text.matchAll(global)) {
        if (negatable && NEGATION.test(text.slice(0, m.index))) continue;
        add(id, 'banned-phrase', 'error', `${label} en ${path}: "…${text.slice(Math.max(0, (m.index ?? 0) - 40), (m.index ?? 0) + 40)}…"`);
        break;
      }
    }
  }

  for (const [i, s] of (lesson.sections ?? []).entries()) {
    if (!s.asOf) continue;
    const d = parseAsOf(s.asOf);
    if (!d) add(id, 'as-of', 'error', `sections[${i}].asOf no tiene formato "<mes> de <año>": ${s.asOf}`);
    else if ((Date.now() - d.getTime()) / 86_400_000 > MAX_AS_OF_AGE_DAYS)
      add(id, 'as-of', 'error', `sections[${i}] "${s.title}" tiene datos de ${s.asOf}; revisar y actualizar`);
  }

  const titles = new Set((lesson.sections ?? []).map((s: any) => s.title));
  for (const specTitle of Object.keys(LESSON_INFOGRAPHICS[id] ?? {}))
    if (!titles.has(specTitle)) add(id, 'infographic-orphan', 'error', `infografía sin sección: "${specTitle}"`);

  const quizQs: any[] = lesson.quiz?.questions ?? [];
  const checkpointQs: any[] = (lesson.checkpointQuizzes ?? []).flatMap((c: any) => c.questions ?? []);
  let lessonMc = 0;
  let lessonLongest = 0;
  for (const q of [...quizQs, ...checkpointQs]) {
    const type = q.type ?? 'multiple-choice';
    stems.push({ lessonId: id, id: q.id, words: new Set(normalize(q.question ?? '')), text: q.question ?? '' });
    if (type !== 'multiple-choice') continue;
    const opts = (q.options ?? []).map(optionText);
    const ci = correctIndex(q);
    if (ci === null || ci < 0 || ci >= opts.length) {
      add(id, 'answer-key', 'error', `${q.id}: correctAnswer inválido`);
      continue;
    }
    lessonMc++;
    const lens = opts.map((o: string) => o.length);
    const correctLen = lens[ci];
    const others = lens.filter((_: number, i: number) => i !== ci).sort((a: number, b: number) => a - b);
    if (others.every((l: number) => correctLen > l)) lessonLongest++;
    const median = others[Math.floor(others.length / 2)] || 1;
    if (correctLen > 1.5 * median)
      add(id, 'length-bias', 'warn', `${q.id}: la correcta mide ${correctLen} caracteres vs mediana ${median}`);
    for (const [i, o] of opts.entries()) {
      if (i === ci) continue;
      if (JOKE_DISTRACTORS.some((re) => re.test(o))) add(id, 'joke-distractor', 'error', `${q.id}: "${o}"`);
      if (o.length < 0.4 * correctLen) add(id, 'weak-distractor', 'warn', `${q.id}: distractor muy corto "${o}"`);
    }
  }
  mcTotal += lessonMc;
  mcLongest += lessonLongest;
  if (lessonMc && lessonLongest / lessonMc > 0.4)
    add(id, 'length-bias', 'error', `la opción más larga es la correcta en ${lessonLongest}/${lessonMc} preguntas`);

  if (quizQs.length && quizQs.every((q) => (q.type ?? 'multiple-choice') === 'multiple-choice'))
    add(id, 'question-mix', 'error', 'el quiz final no tiene ninguna pregunta que no sea de opción múltiple');

  const computed = computeLessonMinutes(lesson);
  const stated = statedMinutes(lesson.duration);
  if (stated === null) add(id, 'duration', 'error', `duración ilegible: ${lesson.duration}`);
  else if (Math.abs(stated - computed) / computed > 0.2)
    add(id, 'duration', 'error', `dice ${stated} min, estimado ${computed} min (npm run content:durations)`);

  const levelId = levelOf.get(id);
  const order = levelId ? levelOrder.get(levelId)! : [];
  const myPos = order.indexOf(id) + 1;
  for (const [path, text] of strings(lesson)) {
    for (const m of text.matchAll(/Lecci[oó]n (\d+)(?: de este nivel)?(?::\s*([^.,;\n*]+))?/g)) {
      const n = Number(m[1]);
      const target = order[n - 1];
      const refTitle = m[2]?.trim();
      if (refTitle) {
        const want = new Set(normalize(refTitle));
        const overlap = (tid?: number) =>
          tid ? [...new Set(normalize(catalogTitle.get(tid) ?? ''))].filter((w) => want.has(w)).length : 0;
        const looksLikeTitle = [...catalogTitle.keys()].some((tid) => overlap(tid) > 0);
        if (looksLikeTitle && !overlap(target)) {
          const byId = overlap(n) ? ` (coincide con el id ${n}: usa su número de posición)` : '';
          add(id, 'cross-ref', 'error', `"${m[0].trim()}" no coincide con la lección ${n} de su nivel${byId} en ${path}`);
        }
      }
      if (target && n > myPos && !/m[aá]s adelante|pr[oó]xim|siguiente|veremos|vemos|ver[aá]s|profundizamos/i.test(text))
        add(id, 'cross-ref', 'warn', `"${m[0].trim()}" apunta a una lección posterior en ${path}`);
    }
  }
}

for (let i = 0; i < stems.length; i++)
  for (let j = i + 1; j < stems.length; j++) {
    const a = stems[i];
    const b = stems[j];
    if (a.words.size < 5 || b.words.size < 5) continue;
    const inter = [...a.words].filter((w) => b.words.has(w)).length;
    const jaccard = inter / (a.words.size + b.words.size - inter);
    if (jaccard >= 0.7)
      add(a.lessonId, 'duplicate-question', 'warn', `${a.id} se parece a ${b.id} (lección ${b.lessonId})`);
  }

const courseRatio = mcTotal ? mcLongest / mcTotal : 0;
if (courseRatio > 0.35)
  add(0, 'length-bias', 'error', `en todo el alcance la correcta es la más larga en ${mcLongest}/${mcTotal} (${Math.round(courseRatio * 100)}%), máximo 35%`);

const byRule = new Map<string, { error: number; warn: number }>();
for (const f of findings) {
  const r = byRule.get(f.rule) ?? { error: 0, warn: 0 };
  r[f.severity]++;
  byRule.set(f.rule, r);
}

if (!summaryOnly) {
  const byLesson = new Map<number, Finding[]>();
  for (const f of findings) byLesson.set(f.lessonId, [...(byLesson.get(f.lessonId) ?? []), f]);
  for (const [lessonId, list] of [...byLesson].sort((a, b) => a[0] - b[0])) {
    const label = lessonId === 0 ? 'Global' : `Lección id ${lessonId}: ${ALL[lessonId]?.title ?? ''}`;
    console.log(`\n${label}`);
    for (const f of list) console.log(`  ${f.severity === 'error' ? 'ERROR' : 'aviso'} [${f.rule}] ${f.message}`);
  }
}

console.log(`\nResumen (alcance: ${scope})`);
for (const [rule, c] of [...byRule].sort()) console.log(`  ${rule.padEnd(20)} errores ${String(c.error).padStart(4)}  avisos ${String(c.warn).padStart(4)}`);
console.log(`  correcta = más larga: ${mcLongest}/${mcTotal} (${Math.round(courseRatio * 100)}%)`);

const errors = findings.filter((f) => f.severity === 'error').length;
if (errors && !noFail) {
  console.error(`\n${errors} errores. La puerta de calidad no pasa.`);
  process.exit(1);
}
