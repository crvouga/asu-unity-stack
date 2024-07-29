const toSentenceCase = str => {
  if (typeof str !== "string") {
    return "";
  }

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const replaceAllNonAlphaNumeric = str => {
  if (typeof str !== "string") {
    return "";
  }

  return str.replace(/[^a-zA-Z0-9]/g, " ");
};

const deduplicateWhitespace = str => {
  if (typeof str !== "string") {
    return "";
  }

  return str.replace(/\s+/g, " ");
};

export const idToLabel = id => {
  if (typeof id !== "string") {
    return "";
  }
  return toSentenceCase(deduplicateWhitespace(replaceAllNonAlphaNumeric(id)));
};
