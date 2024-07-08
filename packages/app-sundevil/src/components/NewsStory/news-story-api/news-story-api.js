// @ts-check

/**
 * @typedef {import("../news-story").SportWithNewsStories} SportWithNewsStories
 */
export class INewsStoryAPI {
  /**
   * @returns {Promise<SportWithNewsStories[]>}
   */
  // eslint-disable-next-line class-methods-use-this
  async findMany() {
    throw new Error("Not implemented");
  }
}
