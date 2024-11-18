/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/**
 * @template T
 * @param {T} input
 * @returns {Partial<T>}
 */
export function ensureSerializable(input) {
  if (Array.isArray(input)) {
    // Replace undefined in arrays with null
    return input.map(value =>
      value === undefined ? null : ensureSerializable(value)
    );
  }

  if (input !== null && typeof input === "object") {
    const result = {};
    for (const [key, value] of Object.entries(input)) {
      if (value === undefined) {
        // Skip undefined values in objects
        continue;
      }
      const processedValue = ensureSerializable(value);
      try {
        JSON.stringify({ [key]: processedValue });
        result[key] = processedValue;
      } catch {
        // Skip unserializable values
      }
    }
    return result;
  }

  // Primitives and serializable values
  if (
    input === null ||
    typeof input === "string" ||
    typeof input === "number" ||
    typeof input === "boolean"
  ) {
    return input;
  }

  // Skip unserializable values
  return undefined;
}
