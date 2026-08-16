import assert from 'node:assert/strict';
import { lessonPath } from '../utils/lessonPlace.ts';

assert.equal(lessonPath(4), '/education/lesson/4');
assert.equal(
  lessonPath(4, { lessonId: 4, sectionId: 'seccion-2', sectionTitle: 'Inflación' }),
  '/education/lesson/4#seccion-2'
);
assert.equal(
  lessonPath(4, { lessonId: 9, sectionId: 'seccion-1', sectionTitle: 'Otro' }),
  '/education/lesson/4'
);
console.log('PLACE_OK');
