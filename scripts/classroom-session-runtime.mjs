import assert from 'node:assert/strict';
import { currentSectionIndex, lessonPath, readingLineFromInsets } from '../utils/lessonPlace.ts';

assert.equal(lessonPath(4), '/education/lesson/4');
assert.equal(
  lessonPath(4, { lessonId: 4, sectionId: 'seccion-2', sectionTitle: 'Inflación' }),
  '/education/lesson/4#seccion-2'
);
assert.equal(
  lessonPath(4, { lessonId: 9, sectionId: 'seccion-1', sectionTitle: 'Otro' }),
  '/education/lesson/4'
);
assert.equal(currentSectionIndex([], 64), -1);
assert.equal(currentSectionIndex([200, 500, 900], 64), -1);
assert.equal(currentSectionIndex([40, 500, 900], 64), 0);
assert.equal(currentSectionIndex([-400, -100, 500], 64), 1);
assert.equal(currentSectionIndex([-800, -400, -50], 64), 2);
assert.equal(currentSectionIndex([900, 40, 500], 64), 1);
assert.equal(readingLineFromInsets([64, 2], 800), 64);
assert.equal(readingLineFromInsets([400], 120), 88);
assert.equal(readingLineFromInsets([], 800), 0);
assert.equal(readingLineFromInsets([-10], 800), 0);
console.log('PLACE_OK');
