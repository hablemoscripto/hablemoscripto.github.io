// Deterministic per-question option shuffle.
//
// In the source content the correct answer is heavily biased toward position B
// (~73% of all multiple-choice questions), so a learner could clear most lesson
// gates by always picking B without learning anything. Shuffling the options by
// a stable seed (lesson id + question id) distributes the correct position
// roughly uniformly, while staying CONSISTENT across renders, retries, and the
// daily review — the order never jumps around for a given question.

function hashSeed(seed: string): number {
  // FNV-1a
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a: number): () => number {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Returns a deterministically shuffled copy of `options` with `correctIndex`
 * remapped to its new position. No-ops on degenerate input.
 */
export function shuffleQuizOptions(
  options: string[],
  correctIndex: number,
  seed: string
): { options: string[]; correctIndex: number } {
  if (options.length < 2 || correctIndex < 0 || correctIndex >= options.length) {
    return { options, correctIndex };
  }
  const rand = mulberry32(hashSeed(seed));
  const order = options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return {
    options: order.map((i) => options[i]),
    correctIndex: order.indexOf(correctIndex),
  };
}
