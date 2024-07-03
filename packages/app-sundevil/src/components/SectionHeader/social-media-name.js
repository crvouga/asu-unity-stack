import { levenshteinDistance } from "../../utils/levenshtein-distance";

/**
 * @typedef {"facebook" | "twitter" | "instagram"} SocialMediaName
 */

/** @type {SocialMediaName[]} */
const ALL_SOCIAL_MEDIA_NAMES = ["facebook", "twitter", "instagram"];

/**
 * @type {(input: string) => SocialMediaName}
 */
export const stringToSocialMediaName = name => {
  return ALL_SOCIAL_MEDIA_NAMES.reduce(
    (closest, socialMediaName) => {
      const distance = levenshteinDistance(name, socialMediaName);

      return distance < closest.distance
        ? { socialMediaName, distance }
        : closest;
    },
    {
      socialMediaName: ALL_SOCIAL_MEDIA_NAMES[0],
      distance: Infinity,
    }
  ).socialMediaName;
};
