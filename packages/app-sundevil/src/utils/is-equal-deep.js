export function isEqualDeep(a, b) {
  if (a === b) {
    return true;
  }
  if (
    a == null ||
    b == null ||
    typeof a !== "object" ||
    typeof b !== "object"
  ) {
    return false;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) {
    return false;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keysA) {
    if (!keysB.includes(key) || !isEqualDeep(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
