// @ts-check
import * as Result from "../../../utils/result";

/**
 * @type {() => import("./news-story-api").NewsStoryAPI}
 */
export const NewsStoryAPIMock = () => {
  return {
    async findMany() {
      return Result.Ok([]);
    },
  };
};
