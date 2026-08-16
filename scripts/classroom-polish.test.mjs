/**
 * Batch 3 polish anchors on shipped classroom files.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('lesson outline and unique takeaways heading', () => {
  const view = read('components/LessonView.tsx');
  assert.match(view, /outlineItems/);
  assert.match(view, /En esta lección/);
  assert.match(view, /sectionHeadingId/);
  const section = read('components/lesson/SectionRenderer.tsx');
  assert.match(section, /section\.type !== 'takeaways'/);
  assert.match(section, /id=\{headingId\}/);
  assert.match(section, /Ampliar/);
  assert.doesNotMatch(section, /Click para ampliar/);
});

test('lightbox traps focus and supports pinch', () => {
  const box = read('components/lesson/ImageLightbox.tsx');
  assert.match(box, /pinchRef/);
  assert.match(box, /Pellizca o toca para acercar/);
  assert.match(box, /closeBtnRef/);
  assert.match(box, /document\.activeElement === last/);
});

test('lock paywall and error states keep classroom chrome and #contenido', () => {
  const view = read('components/LessonView.tsx');
  assert.match(view, /classroomChrome/);
  assert.match(view, /id="contenido"/);
  const paywall = read('components/ui/UpgradePaywall.tsx');
  assert.match(paywall, /id="contenido"/);
  const level = read('components/LevelDetail.tsx');
  assert.match(level, /<UpgradePaywall/);
  assert.match(level, /<EducationNavbar/);
});

test('Ctrl+K lives on the shared navbar', () => {
  const nav = read('components/EducationNavbar.tsx');
  assert.match(nav, /e\.key === 'k'/);
  const dash = read('components/EducationPage.tsx');
  assert.doesNotMatch(dash, /e\.key === 'k'/);
});

test('quiz reveals MC/TF immediately; checkpoint persists', () => {
  const quiz = read('components/education/Quiz.tsx');
  assert.match(quiz, /isRevealed/);
  assert.match(quiz, /q\.type === 'multiple-choice'/);
  const cp = read('components/education/CheckpointQuiz.tsx');
  assert.match(cp, /hc_checkpoint_/);
  assert.match(cp, /min-h-11/);
});

test('locked rows keep readable copy; selection chip is stable on coarse', () => {
  const level = read('components/LevelDetail.tsx');
  assert.doesNotMatch(level, /opacity-50 cursor-not-allowed/);
  const tip = read('components/lesson/SelectionTooltip.tsx');
  assert.match(tip, /pointer: coarse/);
  assert.match(tip, /min-h-11/);
});
