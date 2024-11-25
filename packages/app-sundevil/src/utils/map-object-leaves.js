/**
 * Recursively maps over all leaves (non-object, non-array values) in an object or array.
 * For arrays, the callback receives the index as part of the path.
 * Returns a new object or array with transformed values.
 *
 * @template T - The type of the input object or array.
 * @template R - The type of the transformed output object or array.
 *
 * @param {T} obj - The input object or array to traverse.
 * @param {(leafPath: Array<string | number>, leafValue: any) => R} callback - A function applied to each leaf.
 *        - `leafPath` is an array of keys/indices leading to the leaf.
 *        - `leafValue` is the value of the leaf.
 * @returns {R} - The transformed object or array with the same structure as the input.
 *
 * @example
 * const input = {
 *   a: 1,
 *   b: [2, { c: 3, d: [4, 5] }],
 *   e: { f: 6 },
 * };
 *
 * const result = mapObjectLeaves(input, (path, value) => {
 *   console.log(`Path: ${path.join(".")}, Value: ${value}`);
 *   return value * 2;
 * });
 *
 * // Result:
 * // {
 * //   a: 2,
 * //   b: [4, { c: 6, d: [8, 10] }],
 * //   e: { f: 12 },
 * // }
 */
export function mapObjectLeaves(obj, callback) {
  function recursiveMap(current, path = []) {
    if (Array.isArray(current)) {
      return current.map((value, index) =>
        recursiveMap(value, [...path, index])
      );
    }

    if (current !== null && typeof current === "object") {
      return Object.fromEntries(
        Object.entries(current).map(([key, value]) => [
          key,
          recursiveMap(value, [...path, key]),
        ])
      );
    }

    return callback(path, current);
  }

  return recursiveMap(obj);
}
