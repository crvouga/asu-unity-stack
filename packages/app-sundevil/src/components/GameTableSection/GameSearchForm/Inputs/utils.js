/**
 * Returns the first non-empty array from the given arrays else an empty array.
 */
export const firstNonEmpty = (...arrays) => {
  return arrays.find(array => Array.isArray(array) && array.length > 0) ?? [];
};
