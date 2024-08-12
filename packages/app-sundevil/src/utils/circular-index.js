export const circularIndex = (array, index) => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  if (typeof index !== "number") {
    return null;
  }
  return array[(index + array.length) % array.length];
};
