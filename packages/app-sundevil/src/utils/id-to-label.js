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

const isAcronym = str => {
  return str === str.toUpperCase();
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
  const cleanedUp = deduplicateWhitespace(replaceAllNonAlphaNumeric(id));
  const words = cleanedUp
    .split(" ")
    .map((word, index) => {
      if (isAcronym(word)) {
        return word;
      }

      if (index === 0) {
        return toSentenceCase(word);
      }

      return word.toLowerCase();
    })
    .join(" ");
  return words;
};
