/**
 * Exercises shipped courseUtils helpers on the live catalog.
 * Prints HELPERS_OK on success; non-zero exit on failure.
 */
import assert from 'node:assert/strict';
import {
  getAllLessonsOrdered,
  getBeginnerLessonIds,
  getContinueTarget,
  getCoreLessonIdsForLevel,
  getFirstIncompletePrerequisite,
  getSequentialPredecessor,
  getSequentialSuccessor,
  isLevelComplete,
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

const beginnerIds = getBeginnerLessonIds();
const lastBeginner = beginnerIds[beginnerIds.length - 1];
const beginnerDone = (id) => beginnerIds.includes(id);

assert.equal(isSequentiallyLocked(17, beginnerDone), false);
assert.equal(getFirstIncompletePrerequisite(17, beginnerDone), null);
assert.notEqual(getSequentialPredecessor(17), 13);

const afterBeginner = getContinueTarget(lastBeginner, beginnerDone, () => true);
assert.ok(afterBeginner);
assert.equal(afterBeginner.id, 17);
assert.equal(afterBeginner.resuming, false);

assert.equal(isSequentiallyLocked(14, beginnerDone), true);
assert.equal(isSequentiallyLocked(20, beginnerDone), false);
assert.equal(getSequentialPredecessor(13), lastBeginner);
assert.equal(getSequentialPredecessor(20), lastBeginner);
assert.equal(getSequentialSuccessor(16), null);

const intermediateCore = getCoreLessonIdsForLevel('intermediate');
assert.equal(intermediateCore[intermediateCore.length - 1], 24);
assert.equal(getSequentialSuccessor(24), 34);
assert.equal(getSequentialPredecessor(25), 24);

const through34 = (id) => beginnerDone(id) || intermediateCore.includes(id) || id === 34;
assert.equal(isSequentiallyLocked(28, through34), false);
assert.equal(
  isSequentiallyLocked(25, (id) => beginnerDone(id) || intermediateCore.includes(id)),
  false
);
assert.equal(
  isLevelComplete('intermediate', (id) => beginnerDone(id) || intermediateCore.includes(id)),
  true
);
assert.equal(isLevelComplete('advanced', through34), false);

console.log('HELPERS_OK');
