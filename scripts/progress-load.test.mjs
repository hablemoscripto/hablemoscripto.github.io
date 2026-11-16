/**
 * A failed user_progress read must not look like an empty account.
 * Source anchors: the contexts have no unit harness.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('loadProgress does not clear history on a failed fetch', () => {
  const src = read('contexts/ProgressContext.tsx');
  assert.match(src, /status: ProgressStatus/);
  assert.match(src, /type ProgressStatus = 'loading' \| 'ready' \| 'error'/);
  assert.match(src, /reload: loadProgress/);
  const loadStart = src.indexOf('const loadProgress');
  const loadEnd = src.indexOf('useEffect(() => {', loadStart);
  const loadFn = src.slice(loadStart, loadEnd);
  assert.doesNotMatch(loadFn, /setProgress\(\[\]\)/);
  assert.match(
    loadFn,
    /setStatus\(confirmedUserIdRef\.current === requested \? 'ready' : 'error'\)/
  );
  assert.match(src, /if \(!user \|\| status !== 'ready' \|\| gamificationLoading\) return/);
});

test('localStorage wipe waits for a successful progress read', () => {
  const dash = read('components/EducationPage.tsx');
  const wipeAt = dash.indexOf("localStorage.removeItem('hablemos-progress')");
  assert.ok(wipeAt > 0);
  const effectStart = dash.lastIndexOf('useEffect(() => {', wipeAt);
  const beforeWipe = dash.slice(effectStart, wipeAt);
  assert.match(beforeWipe, /if \(progressStatus !== 'ready'\) return/);
  assert.match(dash, /if \(progressStatus !== 'ready'\) return null/);
  assert.match(dash, /No pudimos cargar tu progreso\. Tus lecciones siguen en tu cuenta\./);
  assert.match(dash, /progressStatus === 'ready' && !lastLessonId && totalCompletedLessons === 0/);
});

test('lesson view retries instead of locking when progress never loaded', () => {
  const view = read('components/LessonView.tsx');
  assert.match(view, /No pudimos cargar tu progreso/);
  assert.match(view, /Tus lecciones siguen en tu cuenta/);
  const effectStart = view.indexOf('Access Control Logic');
  const effectEnd = view.indexOf('Only remember a lesson', effectStart);
  const effect = view.slice(effectStart, effectEnd);
  assert.match(effect, /if \(loading \|\| progressStatus === 'error'\) return/);
  const errorReturn = view.indexOf("if (progressStatus === 'error')");
  const lockReturn = view.indexOf('if (isLocked)');
  assert.ok(errorReturn > 0 && lockReturn > errorReturn);
  const paywall = view.indexOf('UpgradePaywall');
  assert.ok(paywall > 0 && paywall < errorReturn);
});
