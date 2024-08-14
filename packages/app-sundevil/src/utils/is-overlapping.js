/**
 *
 * @param {HTMLElement} a
 * @param {HTMLElement} b
 * @returns {boolean}
 */
export const isOverlapping = (a, b) => {
  if (!a || !b) {
    return false;
  }

  const aRect = a?.getBoundingClientRect?.();
  const bRect = b?.getBoundingClientRect?.();

  if (!aRect || !bRect) {
    return false;
  }

  const isNotOverlapping =
    aRect.right < bRect.left ||
    aRect.left > bRect.right ||
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom;

  const isOverlappingVal = !isNotOverlapping;

  return isOverlappingVal;
};
