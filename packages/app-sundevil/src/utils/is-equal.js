export const isEqual = (keyFn, a, b) => {
  try {
    return keyFn(a) === keyFn(b);
  } catch (e) {
    return a === b;
  }
};
