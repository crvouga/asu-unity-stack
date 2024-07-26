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
};

const applyReplacements = (replacements, str) => {
  return Object.keys(replacements)
    .sort((a, b) => b.length - a.length)
    .reduce(
      (acc, key) => acc.replace(new RegExp(key, "gi"), replacements[key]),
      str
    );
};

const pipe = (x, ...fns) => fns.reduce((acc, fn) => fn(acc), x);

const clean = s => {
  if (typeof s !== "string" || s.length === 0) {
    return null;
  }
  return pipe(
    s,
    // apply replacements first
    s => applyReplacements(REPLACEMENTS, s),
    // replace with hyphens
    s => s.replace(/[^a-zA-Z0-9-]/g, "-"),
    // remove duplicate hyphens
    s => s.replace(/-+/g, "-"),
    // remove leading and trailing hyphens
    s => s.replace(/^-|-$/g, ""),
    // convert to lowercase
    s => s.toLowerCase()
  );
};

const TOP_LEVEL_DOMAINS = [".com", ".org", ".edu", ".net"];
const includesTopLevelDomain = str => {
  return TOP_LEVEL_DOMAINS.some(tld => str.includes(tld));
};

const includesProtocol = str => {
  return str.match(/^https?:\/\//);
};

function isUrlLike(str) {
  return includesTopLevelDomain(str) || includesProtocol(str);
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

const cleanUrlLike = str => {
  return pipe(
    str,
    //
    removeDuplicateSlashes,
    ensureValidUrl,
    s => {
      const url = new URL(s);
      const path = url.pathname;

      const cleaned = Array.from(url.searchParams.entries()).reduce(
        (cleaned, entry) => {
          if (typeof cleaned === "string" && cleaned.length > 0) {
            return cleaned;
          }

          const key = entry[0].toLowerCase();
          const value = entry[1].toLowerCase();

          if (key === "sport") {
            if (value.endsWith("view")) {
              const withoutView = value.slice(0, -4);
              return clean(withoutView);
            }
            return clean(value);
          }

          if (key === "view") {
            return cleaned;
          }

          if (key.endsWith("view")) {
            const withoutView = key.slice(0, -4);
            return clean(withoutView);
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
        return clean(sport);
      }

      return clean(twoLastPathSegments);
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
export function stringToSportId(str) {
  if (typeof str !== "string" || str.length === 0) {
    return null;
  }
  const simpleClean = normalizeSpecialCharacters(str.toLowerCase().trim());
  // .replace(/[\u0300-\u036f]/g, "");
  if (isUrlLike(simpleClean)) {
    return cleanUrlLike(simpleClean);
  }
  const output = clean(simpleClean);
  return output;
}

// @ts-ignore
window.stringToSportId = stringToSportId;
