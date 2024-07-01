// @ts-check
import { NewsStoryAPIDrupal } from "./news-story-api-impl-drupal";
import { NewsStoryAPIMock } from "./news-story-api-impl-mock";

/**
 * @type {(input: {apiUrl: string, apiImpl:string}) => import("./news-story-api").NewsStoryAPI}
 */
export const NewsStoryAPI = ({ apiUrl, apiImpl }) => {
  if (apiImpl === "mock") {
    return NewsStoryAPIMock();
  }
  return NewsStoryAPIDrupal({ apiUrl });
};
