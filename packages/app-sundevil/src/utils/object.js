/**
 * @template T
 * @param {T} obj
 * @param {string | number} key
 * @returns {T}
 */
export const removeKey = (obj, key) => {
  if (typeof obj !== "object") {
    return obj;
  }
  if (obj[key] === undefined) {
    return obj;
  }
  // eslint-disable-next-line no-unused-vars
  const { [key]: _, ...rest } = obj;
  return rest;
};
