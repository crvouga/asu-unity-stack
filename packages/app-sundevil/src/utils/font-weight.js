/**
 *
 * @typedef {"bold" | "normal"} FontWeight
 */

/**
 * @param {unknown} str
 * @returns {FontWeight}
 */
export const stringToFontWeight = str => {
  const cleaned = typeof str === "string" ? str.trim().toLowerCase() : "";

  if (cleaned.includes("bold")) {
    return "bold";
  }

  return "normal";
};
