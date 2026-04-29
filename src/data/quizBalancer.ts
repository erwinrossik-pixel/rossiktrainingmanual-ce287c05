/**
 * Quiz balancer & deterministic option shuffler.
 *
 * Goals:
 *  1. Avoid the "answer is always B" anti-pattern by redistributing the
 *     `correctIndex` across all 4 positions (~25% each per bank) using a
 *     deterministic, seed-based permutation. Stable across reloads, no
 *     answer key leakage between sessions.
 *  2. Provide progressive difficulty ordering: questions are sorted by
 *     `difficultyLevel` ascending so the first questions in a round are the
 *     easiest and the rest get progressively harder.
 *
 * This module is the single transformation layer applied at the end of
 * quiz bank construction (see `quizTranslations.ts`). All consumers (Quiz,
 * FinalExam) read from `quizTranslations` and therefore inherit the fix
 * automatically.
 */

import type { TranslatedQuizQuestion } from "./quizTranslations";

/* -------------------------------------------------------------------------- */
/*  Deterministic PRNG (Mulberry32) — same family used by Final Exam.         */
/* -------------------------------------------------------------------------- */

function hashString(input: string): number {
  // FNV-1a 32-bit
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Returns all permutations of [0,1,2,3] in deterministic order. */
function permutationsOf4(): number[][] {
  const items = [0, 1, 2, 3];
  const result: number[][] = [];
  const permute = (arr: number[], m: number[] = []) => {
    if (arr.length === 0) {
      result.push(m);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      const next = arr.slice();
      next.splice(i, 1);
      permute(next, m.concat(arr[i]));
    }
  };
  permute(items);
  return result;
}

const ALL_PERMS_4 = permutationsOf4();

/* -------------------------------------------------------------------------- */
/*  Option permutation with bank-wide balancing.                              */
/* -------------------------------------------------------------------------- */

/**
 * For each question, choose a deterministic permutation of its options such
 * that the resulting `correctIndex` distribution across the bank stays as
 * balanced as possible (~25% per slot for 4 options).
 *
 * Algorithm:
 *  - For 4-option questions, generate the 24 candidate permutations in a
 *    seed-shuffled order, then pick the first whose target slot for the
 *    correct answer is currently the least loaded.
 *  - For 2/3/5+ option questions, fall back to a simple seeded shuffle.
 */
function balanceAndShuffle(
  questions: TranslatedQuizQuestion[]
): TranslatedQuizQuestion[] {
  const slotCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };

  return questions.map((q) => {
    const optionCount = (q.options.en?.length ?? q.options.ro?.length ?? 0);
    const seed = hashString(q.question.en || q.question.ro || q.question.de || "");
    const rand = mulberry32(seed);

    if (optionCount !== 4) {
      // Fallback: Fisher–Yates with the seeded RNG.
      const indices = Array.from({ length: optionCount }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      return applyPermutation(q, indices);
    }

    // 4-option path with bank balancing.
    // Shuffle the 24 candidate permutations deterministically.
    const candidates = ALL_PERMS_4.slice();
    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }

    // Find min slot count to know which target positions are "underused".
    const minLoad = Math.min(
      slotCounts[0], slotCounts[1], slotCounts[2], slotCounts[3]
    );

    // Pick first candidate that places the correct answer in an underused slot.
    let chosen = candidates[0];
    for (const perm of candidates) {
      // perm[k] = original index that ends up at new position k.
      // We want the new position of the correct answer.
      const newCorrectIdx = perm.indexOf(q.correctIndex);
      if (slotCounts[newCorrectIdx] === minLoad) {
        chosen = perm;
        break;
      }
    }

    const newCorrectIdx = chosen.indexOf(q.correctIndex);
    slotCounts[newCorrectIdx]++;

    return applyPermutation(q, chosen);
  });
}

function applyPermutation(
  q: TranslatedQuizQuestion,
  perm: number[]
): TranslatedQuizQuestion {
  const reorder = (arr: string[] | undefined): string[] => {
    if (!arr || arr.length === 0) return arr ?? [];
    return perm.map((srcIdx) => arr[srcIdx]).filter((v) => v !== undefined);
  };

  return {
    ...q,
    options: {
      ro: reorder(q.options.ro),
      de: reorder(q.options.de),
      en: reorder(q.options.en),
    },
    correctIndex: perm.indexOf(q.correctIndex),
  };
}

/* -------------------------------------------------------------------------- */
/*  Progressive difficulty ordering.                                          */
/* -------------------------------------------------------------------------- */

/**
 * Stable sort by `difficultyLevel` ascending. Questions without an explicit
 * level default to 1 so they appear with the easiest tier.
 *
 * Stable order is preserved by tagging each item with its original index
 * before sorting and using it as the tiebreaker.
 */
function sortByDifficulty(
  questions: TranslatedQuizQuestion[]
): TranslatedQuizQuestion[] {
  return questions
    .map((q, i) => ({ q, i }))
    .sort((a, b) => {
      const da = a.q.difficultyLevel ?? 1;
      const db = b.q.difficultyLevel ?? 1;
      if (da !== db) return da - db;
      return a.i - b.i;
    })
    .map(({ q }) => q);
}

/* -------------------------------------------------------------------------- */
/*  Public entry point.                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Apply progressive difficulty ordering and option-position balancing to a
 * quiz bank. Idempotent: calling twice yields the same output because the
 * permutation is seeded by question text.
 */
export function processQuizBank(
  questions: TranslatedQuizQuestion[]
): TranslatedQuizQuestion[] {
  if (!questions || questions.length === 0) return questions;
  const sorted = sortByDifficulty(questions);
  return balanceAndShuffle(sorted);
}

/**
 * Diagnostic helper: returns the % distribution of `correctIndex` across a
 * processed bank. Used in dev to verify balancing is effective.
 */
export function getAnswerDistribution(
  questions: TranslatedQuizQuestion[]
): Record<number, number> {
  const counts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
  questions.forEach((q) => {
    counts[q.correctIndex] = (counts[q.correctIndex] ?? 0) + 1;
  });
  return counts;
}
