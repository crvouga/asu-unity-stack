export const querySelectorSafe = selector => {
  try {
    return document.querySelector(selector) ?? null;
  } catch (_error) {
    return null;
  }
};
