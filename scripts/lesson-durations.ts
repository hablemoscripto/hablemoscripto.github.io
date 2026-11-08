/* eslint-disable @typescript-eslint/no-explicit-any */
// Recomputes lesson durations from content. Run: npm run content:durations [-- --write]
import { readFileSync, writeFileSync } from 'node:fs';
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from '../data/levels';
import { LESSONS_DATA } from '../data/courseData';
import { PAID_LESSONS } from '../data/paidContent';
import {
  computeLessonMinutes,
  formatLevelDuration,
  lessonQuestions,
  lessonWords,
  statedMinutes,
} from './lesson-metrics';

const write = process.argv.includes('--write');
const ALL: Record<number, any> = { ...LESSONS_DATA, ...PAID_LESSONS };
const files: Record<string, string> = {
  'data/levels.ts': readFileSync('data/levels.ts', 'utf8'),
  'data/courseData.ts': readFileSync('data/courseData.ts', 'utf8'),
  'data/paidContent.ts': readFileSync('data/paidContent.ts', 'utf8'),
};

function setLessonDuration(file: string, id: number, minutes: number) {
  const src = files[file];
  const start = src.indexOf(`\n  ${id}: {`);
  if (start < 0) throw new Error(`lesson ${id} not found in ${file}`);
  const re = /duration: '(\d+) (min|minutos)'/;
  const tail = src.slice(start);
  const m = tail.match(re);
  if (!m || m.index === undefined) throw new Error(`duration not found for lesson ${id} in ${file}`);
  const at = start + m.index;
  files[file] = src.slice(0, at) + `duration: '${minutes} ${m[2]}'` + src.slice(at + m[0].length);
}

function setCatalogDuration(id: number, minutes: number) {
  const re = new RegExp(`(\\{ id: ${id}, title: [^\\n]*?duration: ')\\d+ min(')`);
  if (!re.test(files['data/levels.ts'])) throw new Error(`catalog entry ${id} not found`);
  files['data/levels.ts'] = files['data/levels.ts'].replace(re, `$1${minutes} min$2`);
}

function setLevelDuration(exportName: string, value: string) {
  const src = files['data/levels.ts'];
  const start = src.indexOf(`export const ${exportName}`);
  const re = /(stats: \{\s*lessons: \d+,\s*duration: ')[^']*(')/;
  const tail = src.slice(start);
  const m = tail.match(re);
  if (!m || m.index === undefined) throw new Error(`stats not found for ${exportName}`);
  const at = start + m.index;
  files['data/levels.ts'] = src.slice(0, at) + m[1] + value + m[2] + src.slice(at + m[0].length);
}

const levels: [string, typeof BEGINNER_LEVEL][] = [
  ['BEGINNER_LEVEL', BEGINNER_LEVEL],
  ['INTERMEDIATE_LEVEL', INTERMEDIATE_LEVEL],
  ['ADVANCED_LEVEL', ADVANCED_LEVEL],
];

for (const [exportName, level] of levels) {
  let total = 0;
  console.log(`\n${level.title}`);
  console.log('  id  palabras  preguntas  dice  estimado  título');
  for (const lesson of level.modules.flatMap((m) => m.lessons)) {
    const data = ALL[lesson.id];
    if (!data) throw new Error(`no content for lesson ${lesson.id}`);
    const minutes = computeLessonMinutes(data);
    total += minutes;
    console.log(
      `  ${String(lesson.id).padStart(2)}  ${String(lessonWords(data)).padStart(8)}  ${String(lessonQuestions(data)).padStart(9)}  ${String(statedMinutes(lesson.duration)).padStart(4)}  ${String(minutes).padStart(8)}  ${lesson.title}`
    );
    if (write) {
      setLessonDuration(LESSONS_DATA[lesson.id] ? 'data/courseData.ts' : 'data/paidContent.ts', lesson.id, minutes);
      setCatalogDuration(lesson.id, minutes);
    }
  }
  const label = formatLevelDuration(total);
  console.log(`  Total: ${total} min (${label}), antes ${level.stats.duration}`);
  if (write) setLevelDuration(exportName, label);
}

if (write) {
  for (const [file, src] of Object.entries(files)) writeFileSync(file, src);
  console.log('\nDuraciones actualizadas. Actualiza también la FAQ de la landing.');
}
