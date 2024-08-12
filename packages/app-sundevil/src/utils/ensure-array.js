export const ensureArray = maybeArray => {
  if (Array.isArray(maybeArray)) {
    return maybeArray;
  }
  return [];
};
