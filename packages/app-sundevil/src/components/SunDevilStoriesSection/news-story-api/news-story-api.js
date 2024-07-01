/**
 * @typedef {import("../news-story").NewsStory} NewsStory
 */

/**
 * @typedef {{
 *  findMany: () => Promise<Result<string, NewsStory[]>
 * }} NewsStoryAPI
 */

export const INewsStoryAPI = {};
export default {};
