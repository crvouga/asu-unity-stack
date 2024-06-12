// @ts-check
import PropTypes from "prop-types";

import { levenshteinDistance } from "../../utils/levenshtein-distance";

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

/** @type {(str: string) => string} */
const normalize = str => str.toLowerCase().replace(/[^a-z]/g, "");

/**
 * @type {(maybeSportName: string) => SportName}
 */
export const stringToClosestSportName = maybeSportName => {
  const normalizedInput = normalize(maybeSportName);

  return SPORT_NAME.reduce(
    (closest, sport) => {
      const normalizedSport = normalize(sport);
      const distance = levenshteinDistance(normalizedInput, normalizedSport);

      return distance < closest.distance ? { sport, distance } : closest;
    },
    { sport: SPORT_NAME[0], distance: Infinity }
  ).sport;
};

// const checks = [
//   stringToClosestSportName("Baseball") === "baseball",
//   stringToClosestSportName("M. Basketball") === "basketball",
//   stringToClosestSportName("M. Cross Country") === "cross-country",
//   stringToClosestSportName("Football") === "football",
//   stringToClosestSportName("M. Golf") === "golf",
//   stringToClosestSportName("Ice Hockey") === "ice-hockey",
//   stringToClosestSportName("M. Swimming and Diving") === "swimming-and-diving",
//   stringToClosestSportName("M. Tennis") === "tennis",
//   stringToClosestSportName("M. Track and Field") === "track-and-field",
//   stringToClosestSportName("Wrestling") === "wrestling",
// ];
// for (const check of checks) {
//   if (!check) {
//     throw new Error("stringToClosestSportName is not working as expected");
//   }
// }
