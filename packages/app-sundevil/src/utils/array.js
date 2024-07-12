/**
 * Updates an element at a specified index in an array if the index exists.
 * If the index is out of bounds, it returns the original array.
 *
 * @param {Array} arr - The original array.
 * @param {number} index - The index of the element to update.
 * @param {*} newValue - The new value to set at the specified index.
 * @returns {Array} - The updated array or the original array if the index is out of bounds.
 */
export const updateAtIndex = (arr, index, newValue) => {
  if (index < 0 || index >= arr.length) {
    return arr; // Index is out of bounds, return the original array
  }
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};
