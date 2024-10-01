/**
 *
 * @param {unknown} string
 * @returns {boolean}
 */
export const isExternalLink = link => {
  try {
    const url = new URL(link);
    return url.hostname !== window.location.hostname;
  } catch (_e) {
    return false;
  }
};
