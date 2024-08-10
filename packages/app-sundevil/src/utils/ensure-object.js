export const ensureObject = obj => {
  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
    return obj;
  }
  return {};
};
