/**
 * Marketing and catalog copy must not promise what the product does not deliver.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');

const payment = read('services/paymentService.ts');
const landing = read('components/LandingPage.tsx');
const lessonView = read('components/LessonView.tsx');
const levels = read('data/levels.ts');
const course = read('data/courseData.ts');
const paid = read('data/paidContent.ts');
const tutor = read('supabase/functions/grok-chat/index.ts');

test('no plan or lesson type promises video', () => {
  const plans = payment.slice(payment.indexOf('export const PRICING_PLANS'));
  assert.doesNotMatch(plans, /v[ií]deo/i);
  for (const src of [levels, course, paid]) assert.doesNotMatch(src, /type: '[^']*v[ií]deo/i);
});

test('FAQ is honest about referrals and derives level hours from the catalog', () => {
  assert.doesNotMatch(landing, /comisi[oó]n de tus decisiones/);
  assert.match(landing, /enlaces de referido/i);
  assert.doesNotMatch(landing, /\d+ horas de lectura/);
  for (const level of ['BEGINNER_LEVEL', 'INTERMEDIATE_LEVEL', 'ADVANCED_LEVEL'])
    assert.match(landing, new RegExp(`\\$\\{${level}\\.stats\\.duration\\}`));
});

test('referrals render with one standard disclosure and every lesson shows the disclaimer', () => {
  const block = lessonView.slice(lessonView.indexOf('lesson.referrals.length > 0'));
  assert.match(block.slice(0, 400), /\{REFERRAL_DISCLOSURE\}/);
  assert.doesNotMatch(lessonView, />\s*Recomendado\s*</);
  assert.match(lessonView, /\{LESSON_DISCLAIMER\}/);
  for (const src of [course, paid]) {
    for (const m of src.matchAll(/referrals: \[([\s\S]*?)\n {4}\]/g))
      assert.doesNotMatch(m[1], /(link|enlace) de referido|ambos obtenemos/i);
  }
});

test('catalog durations match the lesson bodies', () => {
  for (const m of levels.matchAll(/\{ id: (\d+), title: [^\n]*?duration: '(\d+) min'/g)) {
    const [, id, minutes] = m;
    const src = course.includes(`\n  ${id}: {`) ? course : paid;
    const start = src.indexOf(`\n  ${id}: {`);
    assert.ok(start >= 0, `lesson ${id} body not found`);
    const body = src.slice(start).match(/duration: '(\d+) (min|minutos)'/);
    assert.equal(body?.[1], minutes, `lesson ${id}: catalog ${minutes} vs body ${body?.[1]}`);
  }
});

test('AI tutor may explain curriculum tools without recommending purchases', () => {
  assert.doesNotMatch(tutor, /Nunca recomiendes proyectos, tokens, exchanges/);
  assert.match(tutor, /qué token o proyecto comprar/);
});
