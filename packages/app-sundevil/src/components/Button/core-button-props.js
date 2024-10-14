/**
 * @typedef {"gold" | "maroon" | "gray" | "dark"} Color
 * @type {(string: unknown) => Color | undefined}
 */
export const stringToColor = string => {
  if (typeof string !== "string") {
    return undefined;
  }

  const cleaned = string.toLowerCase().replace(/[^a-z]/g, "");

  if (cleaned.includes("gold")) {
    return "gold";
  }

  if (cleaned.includes("maroon")) {
    return "maroon";
  }

  if (cleaned.includes("gray")) {
    return "gray";
  }

  if (cleaned.includes("dark")) {
    return "dark";
  }

  return undefined;
};

/**
 * @typedef {"_blank" | "_self" | "_top" | "_parent" | undefined} Target
 * @type {(string: unknown) => Target | undefined}
 */
export const stringToTarget = string => {
  if (typeof string !== "string") {
    return undefined;
  }

  const cleaned = string.toLowerCase().replace(/[^a-z]/g, "");

  if (cleaned.includes("blank")) {
    return "_blank";
  }

  if (cleaned.includes("self")) {
    return "_self";
  }

  if (cleaned.includes("top")) {
    return "_top";
  }

  if (cleaned.includes("parent")) {
    return "_parent";
  }

  return undefined;
};

/**
 * @typedef {"small" | "default" | "xsmall" | undefined}  Size
 * @type {(string: unknown) => Size | undefined}
 */
export const stringToSize = string => {
  if (typeof string !== "string") {
    return undefined;
  }

  const cleaned = string.toLowerCase().replace(/[^a-z]/g, "");

  if (cleaned.includes("small")) {
    return "small";
  }

  if (cleaned.includes("xsmall")) {
    return "xsmall";
  }

  return undefined;
};
