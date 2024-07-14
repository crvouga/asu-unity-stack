/**
 * @example
 * stringToSportId("_Football_") // "football"
 * stringToSportId("  M. Basketball ") // "m-basketball"
 * stringToSportId("W.    Basketball  ") // "w-basketball"
 * stringToSportId("  Lacrosse") // "lacrosse"
 * stringToSportId("W. Lacrosse") // "w-lacrosse"
 * stringToSport("") // null
 */
export const stringToSportId = string => {
  if (typeof string !== "string") {
    return null;
  }

  return string
    .replace(/\s+/g, " ")
    .replace(/[^a-zA-Z\s]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
};
