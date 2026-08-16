import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('lessonPath only hashes when place matches the lesson', () => {
  const result = spawnSync('npx', ['vite-node', 'scripts/classroom-session-runtime.mjs'], {
    cwd: root,
    encoding: 'utf8',
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /PLACE_OK/);
});

test('lesson view restores and records section place', () => {
  const view = read('components/LessonView.tsx');
  assert.match(view, /writeLessonPlace/);
  assert.match(view, /readLessonPlace/);
  assert.match(view, /h2\[id\^="seccion-"\]/);
  assert.match(view, /reviewSection=\{quizReviewSection\}/);
  assert.match(view, /onAskSection/);
});

test('quiz offers Repasa on a wrong answer', () => {
  const quiz = read('components/education/Quiz.tsx');
  assert.match(quiz, /reviewSection/);
  assert.match(quiz, /Repasa:/);
});

test('dashboard continue uses lessonPath and section subtitle', () => {
  const page = read('components/EducationPage.tsx');
  assert.match(page, /lessonPath\(continueTarget\.id/);
  assert.match(page, /Retomas en:/);
  assert.doesNotMatch(page, /Tu ruta de aprendizaje/);
});

test('sections expose No entendí esto', () => {
  const section = read('components/lesson/SectionRenderer.tsx');
  assert.match(section, /No entendí esto/);
  assert.match(section, /onAskSection/);
});
