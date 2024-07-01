// @ts-check
import { NewsStoryAPIMock } from "./news-story-api-impl-mock";

/**
 * @type {() => import("./news-story-api").NewsStoryAPI}
 */
export const NewsStoryAPI = () => {
  return NewsStoryAPIMock();
};
