/**
 * A free account's tutor retrieval must not see paid lesson prose.
 * Source anchors: the SQL function and the Edge Function have no unit harness.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('search_lessons_rag filters by level before the result limit', () => {
  const sql = read('supabase/migrations/2026-11-16_rag_level_filter.sql');
  assert.match(sql, /level_name text default null/);
  const filterAt = sql.indexOf('and (level_name is null or ld.level = level_name)');
  const limitAt = sql.indexOf('limit 8');
  assert.ok(filterAt > 0 && limitAt > filterAt);
  assert.match(sql, /revoke all on function public\.search_lessons_rag\(text\[\], text\) from anon/);
  assert.match(sql, /revoke all on function public\.search_lessons_rag\(text\[\], text\) from authenticated/);
  assert.match(sql, /grant execute on function public\.search_lessons_rag\(text\[\], text\) to service_role/);
});

test('grok-chat passes the level into retrieval and content fetch', () => {
  const src = read('supabase/functions/grok-chat/index.ts');
  assert.match(src, /const FREE_RAG_LEVEL = 'Principiante'/);
  assert.match(src, /level_name: levelName/);
  assert.match(src, /getKeywordCandidates\(ragClient, message, levelName\)/);
  assert.match(src, /fetchLessonContent\(ragClient, candidates, selectedIds, levelName\)/);
  assert.match(src, /\.eq\('level', levelName\)/);
  assert.match(src, /\.in\('id', allowedIds\)/);
});

test('a profile read error does not open the full corpus', () => {
  const src = read('supabase/functions/grok-chat/index.ts');
  const fnStart = src.indexOf('async function ragLevelForUser');
  const fnEnd = src.indexOf('async function getKeywordCandidates');
  const fn = src.slice(fnStart, fnEnd);
  assert.ok(fnStart > 0 && fnEnd > fnStart);
  const errorAt = fn.indexOf('if (error)');
  const premiumAt = fn.indexOf('const isPremium');
  assert.ok(errorAt > 0 && premiumAt > errorAt);
  const errorBranch = fn.slice(errorAt, premiumAt);
  assert.match(errorBranch, /return FREE_RAG_LEVEL/);
  assert.doesNotMatch(errorBranch, /return null/);
  assert.match(fn, /return isPremium \? null : FREE_RAG_LEVEL/);
});
