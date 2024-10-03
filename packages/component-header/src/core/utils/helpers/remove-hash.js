/**
 *
 * @param {unknown} url
 * @returns  {string}
 */
export const removeHash = url => {
  if (typeof url === "string") {
    return url.replace(/#.*$/, "");
  }
  return url;
};
