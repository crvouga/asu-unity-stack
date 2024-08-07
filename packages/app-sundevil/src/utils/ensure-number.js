/**
 *
 * @param {unknown} value
 * @param {number} defaultValue
 * @returns {number}
 */
export const ensureNormalNumber = (value, defaultValue) => {
  if (typeof value !== "number") {
    const parsed = parseFloat(value);
    if (Number.isNaN(parsed)) {
      return defaultValue;
    }
    return parsed;
  }

  if (Number.isNaN(value)) {
    return defaultValue;
  }

  if (value === Infinity || value === -Infinity) {
    return defaultValue;
  }

  return value;
};
