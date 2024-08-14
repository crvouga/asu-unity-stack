export const isEqual = (keyFn, a, b) => {
  return keyFn(a) === keyFn(b);
};
