import type React from 'react';

/** WAI-ARIA radio pattern: arrow keys move selection and focus (wrapping). */
export function moveRadioFocus(
  e: React.KeyboardEvent<HTMLButtonElement>,
  currentIdx: number,
  count: number,
  select: (idx: number) => void,
) {
  let next: number | null = null;
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    next = currentIdx === count - 1 ? 0 : currentIdx + 1;
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    next = currentIdx === 0 ? count - 1 : currentIdx - 1;
  }
  if (next === null) return;
  e.preventDefault();
  select(next);
  const group = e.currentTarget.parentElement;
  const radios = group?.querySelectorAll<HTMLButtonElement>('[role="radio"]');
  radios?.[next]?.focus();
}
