/**
 * @template T
 * @param {number} count
 * @param {T} x
 * @returns  {T[]}
 */
export const repeat = (count, x) => {
  return Array.from({ length: count }).map(() => x);
};
