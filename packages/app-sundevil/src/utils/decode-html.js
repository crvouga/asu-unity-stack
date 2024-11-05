/**
 *
 * @param {string} html
 * @returns {string}
 */
export const decodeHtml = html => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = html;
  return textArea.value;
};
