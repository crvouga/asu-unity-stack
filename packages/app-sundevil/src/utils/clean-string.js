export const cleanString = str => {
  if (str === null || str === undefined) {
    return str;
  }
  if (typeof str === "string") {
    return str?.toLowerCase?.().trim?.();
  }
  if (typeof str === "number") {
    return str?.toString?.().toLowerCase?.().trim?.();
  }
  return str;
};
