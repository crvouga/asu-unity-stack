export const cleanString = str =>
  typeof str === "string" ? str?.toLowerCase().trim() : str;
