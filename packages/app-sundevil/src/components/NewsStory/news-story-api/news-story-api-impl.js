// @ts-check
import { NewsStoryAPIDrupal } from "./news-story-api-impl-drupal";
import { NewsStoryAPIMock } from "./news-story-api-impl-mock";

/**
 * @type {(input: {apiUrl: string, apiImpl:string}) => import("./news-story-api").INewsStoryAPI}
 */
export const buildNewsStoryAPI = ({ apiUrl, apiImpl }) => {
  if (apiImpl === "mock") {
    return new NewsStoryAPIMock();
  }
  return new NewsStoryAPIDrupal({ apiUrl });
};
