/**
 * Exercises shipped courseUtils helpers on the live catalog.
 * Prints HELPERS_OK on success; non-zero exit on failure.
 */
import assert from 'node:assert/strict';
import {
  getAllLessonsOrdered,
  getContinueTarget,
  getFirstIncompletePrerequisite,
  isSequentiallyLocked,
} from '../utils/courseUtils.ts';

const ordered = getAllLessonsOrdered();
assert.ok(ordered.length >= 5, 'catalog should have at least 5 lessons');

const first = ordered[0];
const second = ordered[1];
const fifth = ordered[4];

const noneDone = () => false;
const onlyFirst = (id) => id === first.id;

assert.equal(getFirstIncompletePrerequisite(first.id, noneDone), null);
assert.equal(isSequentiallyLocked(first.id, noneDone), false);

const blocker = getFirstIncompletePrerequisite(fifth.id, onlyFirst);
assert.ok(blocker);
assert.equal(blocker.id, second.id);

assert.equal(isSequentiallyLocked(fifth.id, onlyFirst), true);
assert.equal(isSequentiallyLocked(second.id, onlyFirst), false);
assert.equal(isSequentiallyLocked(first.id, onlyFirst), false);

const canRead = (id) => !isSequentiallyLocked(id, onlyFirst);
const fromLockedLast = getContinueTarget(fifth.id, onlyFirst, canRead);
assert.ok(fromLockedLast);
assert.equal(fromLockedLast.id, second.id);
assert.equal(fromLockedLast.resuming, false);

const resumeSecond = getContinueTarget(second.id, onlyFirst, canRead);
assert.ok(resumeSecond);
assert.equal(resumeSecond.id, second.id);
assert.equal(resumeSecond.resuming, true);

const paidBlocked = getContinueTarget(fifth.id, onlyFirst, () => false);
assert.equal(paidBlocked, null);

console.log('HELPERS_OK');
