/**
 * Structural anchors for the public landing conversion path.
 * Reads shipped landing files. Does not open /education.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('hero ships Empezar gratis + Ver planes, with CTAs before proof chips', () => {
  const hero = read('components/Hero.tsx');
  assert.match(hero, />Empezar gratis</);
  assert.match(hero, />Ver planes</);
  assert.doesNotMatch(hero, /Ver planes y precios/);
  const ctaAt = hero.indexOf('>Empezar gratis<');
  const statsAt = hero.indexOf('7+ años');
  assert.ok(ctaAt > 0 && statsAt > ctaAt);
});

test('navbar conversion labels: Empezar gratis primary, Ingresar secondary', () => {
  const nav = read('components/Navbar.tsx');
  assert.match(nav, /Empezar gratis/);
  assert.match(nav, /Ingresar/);
  assert.match(nav, /Sobre CBas/);
  assert.match(nav, /Ver planes/);
  assert.doesNotMatch(nav, /Por Qué HC/);
  assert.doesNotMatch(nav, /Ver planes y precios/);
  assert.match(nav, /initialView=\{authView\}/);
});

test('courses cards use Empezar gratis / Ver planes and parent onStartFree', () => {
  const courses = read('components/Courses.tsx');
  assert.match(courses, /ctaLabel: 'Empezar gratis'/);
  assert.match(courses, /ctaLabel: 'Ver planes'/);
  assert.match(courses, /onStartFree: \(\) => void/);
  assert.doesNotMatch(courses, /showAuth/);
});

test('landing section order is courses then pricing then mentoría', () => {
  const landing = read('components/LandingPage.tsx');
  const coursesAt = landing.indexOf('<Courses ');
  const pricingAt = landing.indexOf('id="pricing"');
  const mentoriaAt = landing.indexOf('id="mentoria"');
  const faqAt = landing.indexOf('id="faq"');
  assert.ok(coursesAt > 0 && pricingAt > coursesAt);
  assert.ok(mentoriaAt > pricingAt && faqAt > mentoriaAt);
  assert.match(landing, /onStartFree=\{handleNavigateToEducation\}/);
});

test('auth modal clears abandoned plan intent except after signup', () => {
  const auth = read('components/AuthModal.tsx');
  assert.match(auth, /function pendingPlan/);
  assert.match(auth, /handleDismiss/);
  assert.match(auth, /redirectAfterLogin/);
  assert.match(auth, /view !== 'verify-email'/);
});

test('particles do not intercept pointer events', () => {
  const particles = read('components/ParticlesBackground.tsx');
  assert.match(particles, /pointer-events-none/);
  assert.doesNotMatch(particles, /pointer-events-auto/);
});
