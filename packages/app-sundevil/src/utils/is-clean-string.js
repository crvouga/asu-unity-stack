/**
 *
 * @param {unknown} str
 * @returns  {boolean}
 */
export const isCleanString = str => {
  return typeof str === "string" && str.trim() !== "";
};
