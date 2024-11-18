/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/**
 * Helper function to check if a value is an object.
 */
function isObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

/**
 * Deep merge two objects, with the left object taking precedence over the right object.
 */
export function deepMergeLeft(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return target;
  }

  const result = { ...source };

  for (const key in target) {
    if (isObject(target[key])) {
      result[key] =
        key in source ? deepMergeLeft(target[key], source[key]) : target[key];
    } else {
      result[key] = target[key];
    }
  }

  return result;
}
