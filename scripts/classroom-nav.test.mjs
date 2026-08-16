/**
 * Batch 1 classroom-nav: helpers + structural anchors on shipped files.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('getFirstIncompletePrerequisite and getContinueTarget on live catalog', () => {
  const result = spawnSync('npx', ['vite-node', 'scripts/classroom-nav-runtime.mjs'], {
    cwd: root,
    encoding: 'utf8',
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /HELPERS_OK/);
});

test('lesson bar has a single back control, not dual chevrons', () => {
  const view = read('components/LessonView.tsx');
  assert.match(view, />Volver</);
  assert.doesNotMatch(view, /Lección anterior:/);
  assert.doesNotMatch(view, /Siguiente lección:/);
  assert.match(view, /getFirstIncompletePrerequisite/);
  assert.match(view, /Abrir esa lección/);
  assert.match(view, /onOpenProgress=\{\(\) => setShowProgress\(true\)\}/);
  assert.match(view, /last_lesson_id/);
});

test('last_lesson_id is not stamped in the fetch-then path', () => {
  const view = read('components/LessonView.tsx');
  const fetchBlock = view.slice(view.indexOf('fetchLessonById'), view.indexOf('Access Control Logic'));
  assert.doesNotMatch(fetchBlock, /last_lesson_id/);
});

test('search does not dump the catalog and ignores sequential locks', () => {
  const search = read('components/LessonSearch.tsx');
  assert.match(search, /if \(!query\.trim\(\)\) return \[\];/);
  assert.match(search, /isSequentiallyLocked/);
  assert.match(search, /Escribe para buscar/);
  assert.match(search, /getContinueTarget/);
});

test('logged-in logo and classroom crumbs stay in /education', () => {
  const logo = read('components/ui/Logo.tsx');
  assert.match(logo, /user \? '\/education' : '\/'/);
  const level = read('components/LevelDetail.tsx');
  assert.match(level, /navigate\('\/education'\)/);
  assert.doesNotMatch(level, /navigate\('\/'\)/);
  const dash = read('components/EducationPage.tsx');
  assert.doesNotMatch(dash, /<Link to="\/">/);
});

test('progress chip opens ProgressSheet on dashboard, level, and lesson', () => {
  for (const rel of [
    'components/EducationPage.tsx',
    'components/LevelDetail.tsx',
    'components/LessonView.tsx',
  ]) {
    const src = read(rel);
    assert.match(src, /<ProgressSheet/);
    assert.match(src, /setShowProgress\(true\)/);
  }
});
