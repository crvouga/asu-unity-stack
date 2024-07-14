/**
 * @template {T}
 * @param {(value: T) => string | number | Date} keyFn
 * @returns {(a: T, b: T) => number}
 */
export const asc = keyFn => (a, b) => {
  const aKey = keyFn(a);
  const bKey = keyFn(b);
  if (aKey < bKey) {
    return -1;
  }
  if (aKey > bKey) {
    return 1;
  }
  return 0;
};

/**
 * @template {T}
 * @param {(value: T) => string | number | Date} keyFn
 * @returns {(a: T, b: T) => number}
 */
export const desc = keyFn => (a, b) => {
  const aKey = keyFn(a);
  const bKey = keyFn(b);
  if (aKey < bKey) {
    return 1;
  }
  if (aKey > bKey) {
    return -1;
  }
  return 0;
};
