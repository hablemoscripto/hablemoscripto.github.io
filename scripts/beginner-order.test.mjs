/**
 * Free path: scams and stablecoins come before the first purchase.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const levels = readFileSync(join(root, 'data/levels.ts'), 'utf8');
const course = readFileSync(join(root, 'data/courseData.ts'), 'utf8');

const beginner = levels.slice(
  levels.indexOf('export const BEGINNER_LEVEL'),
  levels.indexOf('export const INTERMEDIATE_LEVEL'),
);
const ids = [...beginner.matchAll(/\{ id: (\d+), title:/g)].map((m) => Number(m[1]));

test('beginner path teaches scams and stablecoins before the first buy', () => {
  assert.deepEqual(ids, [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 38, 41, 35, 36, 37, 39, 42, 43, 47, 44,
  ]);
});

test('displayed lesson numbers match that path', () => {
  const expected = {
    38: '11 de 20',
    41: '12 de 20',
    35: '13 de 20',
    36: '14 de 20',
    37: '15 de 20',
    39: '16 de 20',
    42: '17 de 20',
    43: '18 de 20',
    47: '19 de 20',
    44: '20 de 20',
  };
  for (const [id, number] of Object.entries(expected)) {
    const block = course.slice(course.indexOf(`\n  ${id}: {`), course.indexOf(`\n  ${id}: {`) + 400);
    assert.match(block, new RegExp(`number: '${number}'`));
  }
});
