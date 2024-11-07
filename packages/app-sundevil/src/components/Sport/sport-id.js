// @ts-check
import { SportGender } from "./sport-gender";

/* eslint-disable no-shadow */
const REPLACEMENTS = {
  "mens": "m",
  "womens": "w",
  "men": "m",
  "women": "w",
  "men's": "m",
  "women's": "w",
  "mens'": "m",
  "womens'": "w",
  "woman": "w",
  "man": "m",
  "woman's": "w",
  "man's": "m",
  "male": "m",
  "female": "w",
};

export function camelToKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

const applyReplacements = (replacements, str) => {
  return Object.keys(replacements)
    .sort((a, b) => b.length - a.length)
    .reduce(
      (acc, key) => acc.replace(new RegExp(key, "gi"), replacements[key]),
      str
    );
};

const isolateWords = (wordList, str) => {
  // longest words first
  wordList.sort((a, b) => b.length - a.length);
  const regex = new RegExp(`(${wordList.join("|")})`, "i");
  const match = str.match(regex);

  if (match) {
    const isolatedWord = match[0];
    const remainingString = str.slice(isolatedWord.length);
    return [isolatedWord, remainingString];
  }

  return [str];
};

const pipe = (x, ...fns) => fns.reduce((acc, fn) => fn(acc), x);

const ensureGenderPrefix = (s, fallbackGender = SportGender.MEN) => {
  const genderWords = Object.keys(REPLACEMENTS);
  genderWords.sort((a, b) => b.length - a.length);

  if (genderWords.some(genderWord => s.startsWith(genderWord))) {
    return s;
  }

  if (s.startsWith("m-") || s.startsWith("w-")) {
    return s;
  }

  return `${fallbackGender} ${s}`;
};

export const removeDuplicateGenderPrefix = str => {
  if (str.startsWith("m-w-")) {
    return str.slice(2);
  }

  if (str.startsWith("w-m-")) {
    return str.slice(2);
  }

  if (str.startsWith("m-m-")) {
    return str.slice(2);
  }

  if (str.startsWith("w-w-")) {
    return str.slice(2);
  }

  return str;
};

const DELIMITER = "-";

const UNIMPORTANT_WORDS = ["and", "&"];
const removeUnimportantWords = str => {
  return str
    .split(DELIMITER)
    .filter(word => !UNIMPORTANT_WORDS.includes(word))
    .join(DELIMITER);
};

const clean = (s, fallbackGender = SportGender.MEN) => {
  if (typeof s !== "string" || s.length === 0) {
    return null;
  }
  return pipe(
    s,
    s => ensureGenderPrefix(s, fallbackGender),

    s => isolateWords(Object.keys(REPLACEMENTS), s).join(" "),
    // apply replacements first
    s => applyReplacements(REPLACEMENTS, s),
    // replace with hyphens
    s => s.replace(/[^a-zA-Z0-9-]/g, DELIMITER),
    // remove duplicate hyphens
    s => s.replace(/-+/g, DELIMITER),
    // remove leading and trailing hyphens
    s => s.replace(/^-|-$/g, ""),
    // convert to lowercase
    s => s.toLowerCase(),
    //
    s => removeDuplicateGenderPrefix(s),
    //
    s => removeUnimportantWords(s)
  );
};

const TOP_LEVEL_DOMAINS = [".com", ".org", ".edu", ".net"];
const includesTopLevelDomain = str => {
  return TOP_LEVEL_DOMAINS.some(tld => str.includes(tld));
};

const includesProtocol = str => {
  return str.match(/^https?:\/\//);
};

const isRelativeUrl = str => {
  return str.startsWith("/");
};

function isUrlLike(str) {
  return (
    includesTopLevelDomain(str) || includesProtocol(str) || isRelativeUrl(str)
  );
}

const ensureValidUrl = str => {
  const isMissingProtocol = !str.match(/^https?:\/\//);
  const validUrl = isMissingProtocol ? `http://${str}` : str;

  try {
    // eslint-disable-next-line no-new
    new URL(validUrl);
    return validUrl;
  } catch (error) {
    return null;
  }
};

const removeDuplicateSlashes = str => {
  return str.replace(/\/{2,}/g, "/");
};

const cleanUrlLike = (str, fallbackGender = SportGender.MEN) => {
  return pipe(
    str,
    //
    removeDuplicateSlashes,
    ensureValidUrl,
    s => {
      const url = new URL(s);
      const path = url.pathname;

      const cleaned = Array.from(url.searchParams.entries()).reduce(
        /**
         * @param {string | null} cleaned
         * @param {[string, string]} entry
         * @returns {string | null}
         */
        (cleaned, entry) => {
          if (typeof cleaned === "string" && cleaned.length > 0) {
            return cleaned;
          }

          const key = entry[0].toLowerCase();
          const value = entry[1].toLowerCase();

          if (key === "sport") {
            if (value.endsWith("view")) {
              const withoutView = value.slice(0, -4);
              return clean(withoutView, fallbackGender);
            }
            return clean(value, fallbackGender);
          }

          if (key === "view") {
            return cleaned;
          }

          if (key.endsWith("view")) {
            const withoutView = key.slice(0, -4);
            return clean(withoutView, fallbackGender);
          }

          return cleaned;
        },
        null
      );

      if (typeof cleaned === "string" && cleaned.length > 0) {
        return cleaned;
      }

      if (!s.includes("sports")) {
        return null;
      }

      const twoLastPathSegments = path.split("/").slice(-2).join("/");

      if (twoLastPathSegments.includes("sports")) {
        const sport = twoLastPathSegments.split("/").slice(-1)[0];
        return clean(sport, fallbackGender);
      }

      return clean(twoLastPathSegments, fallbackGender);
    }
  );
};

function normalizeSpecialCharacters(str) {
  const specialCharMap = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ñ: "n",
    ü: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    Ñ: "N",
    Ü: "U",
  };

  return str.replace(
    /[áéíóúñüÁÉÍÓÚÑÜ]/g,
    match => specialCharMap[match] || match
  );
}

export function stringToSportId(
  str,
  fallbackGenderInput = SportGender.MEN_AND_WOMEN
) {
  if (typeof str !== "string" || str.length === 0) {
    return null;
  }

  const fallbackGender =
    fallbackGenderInput === SportGender.MEN_AND_WOMEN
      ? ""
      : fallbackGenderInput;

  const simpleClean = normalizeSpecialCharacters(str.toLowerCase().trim());

  if (isUrlLike(simpleClean)) {
    return cleanUrlLike(simpleClean, fallbackGender);
  }
  const output = clean(simpleClean, fallbackGender);
  return output;
}

export function stringToSportIdWithoutGender(str) {
  const sportId = stringToSportId(str);
  if (!sportId) {
    return null;
  }
  if (sportId.startsWith("m-") || sportId.startsWith("w-")) {
    return sportId.slice(2);
  }
  return sportId;
}

export const getCurrentUrlSportId = () => {
  if (
    typeof window === "undefined" ||
    typeof window.location !== "object" ||
    typeof window.location.href !== "string"
  ) {
    return null;
  }
  return stringToSportId(window.location.href);
};

// @ts-ignore
window.getCurrentUrlSportId = getCurrentUrlSportId;
// @ts-ignore
window.stringToSportIdWithoutGender = stringToSportIdWithoutGender;
// @ts-ignore
window.stringToSportId = stringToSportId;
