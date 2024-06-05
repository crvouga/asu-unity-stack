// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {'baseball' | 'basketball' | 'cross-country'| 'football'| 'golf'| 'ice-hockey'| 'swimming-and-diving'| 'tennis'| 'track-and-field'| 'wrestling'| 'beach-volleyball'| 'gymnastics'| 'lacrosse'| 'soccer'| 'softball'| 'triathlon'| 'volleyball'| 'water-polo'} SportName
 */

/**
 * @type {SportName[]}
 * @readonly
 */
export const SPORT_NAME = [
  "baseball",
  "basketball",
  "cross-country",
  "football",
  "golf",
  "ice-hockey",
  "swimming-and-diving",
  "tennis",
  "track-and-field",
  "wrestling",
  "beach-volleyball",
  "gymnastics",
  "lacrosse",
  "soccer",
  "softball",
  "triathlon",
  "volleyball",
  "water-polo",
];

export const sportNameSchema = PropTypes.oneOf(SPORT_NAME);

/**
 * Calculate the Levenshtein distance between two strings
 * @type {(a: string, b: string) => number}
 */
const levenshteinDistance = (a, b) => {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (j === 0 ? i : j))
  );

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + 1
        );
      }
    }
  }

  return matrix[a.length][b.length];
};

/** @type {(str: string) => string} */
const normalize = str => str.toLowerCase().replace(/[^a-z]/g, "");

/**
 * @type {(maybeSportName: string) => SportName}
 */
export const stringToClosestSportName = maybeSportName => {
  const normalizedInput = normalize(maybeSportName);

  let closestMatch = SPORT_NAME[0];
  let closestDistance = Infinity;

  for (const sport of SPORT_NAME) {
    const normalizedSport = normalize(sport);
    const distance = levenshteinDistance(normalizedInput, normalizedSport);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestMatch = sport;
    }
  }

  return closestMatch;
};

const checks = [
  stringToClosestSportName("Baseball") === "baseball",
  stringToClosestSportName("M. Basketball") === "basketball",
  stringToClosestSportName("M. Cross Country") === "cross-country",
  stringToClosestSportName("Football") === "football",
  stringToClosestSportName("M. Golf") === "golf",
  stringToClosestSportName("Ice Hockey") === "ice-hockey",
  stringToClosestSportName("M. Swimming and Diving") === "swimming-and-diving",
  stringToClosestSportName("M. Tennis") === "tennis",
  stringToClosestSportName("M. Track and Field") === "track-and-field",
  stringToClosestSportName("Wrestling") === "wrestling",
];
for (const check of checks) {
  if (!check) {
    throw new Error("stringToClosestSportName is not working as expected");
  }
}
