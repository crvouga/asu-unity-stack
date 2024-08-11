/**
 * This can cause bugs be careful
 */
export const cacheQuerySelector = querySelector => {
  const cache = new Map();
  return selector => {
    if (cache.has(selector)) {
      return cache.get(selector);
    }
    const result = querySelector(selector);
    cache.set(selector, result);
    return result;
  };
};
