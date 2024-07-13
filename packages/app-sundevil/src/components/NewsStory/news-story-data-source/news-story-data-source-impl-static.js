// @ts-check

import { INewsStoryDataSource } from "./news-story-data-source";

/**
 * @typedef {import("../news-story").NewsStory} NewsStory
 */

export class NewsStoryDataSourceStatic extends INewsStoryDataSource {
  constructor({ newsStories }) {
    super();
    this.newsStories = newsStories ?? [];
  }

  /**
   * @type {import("./news-story-data-source").FindMany}
   */
  async findMany(input) {
    const limit = input.limit ?? Infinity;
    const offset = input.offset ?? 0;
    const rows = this.newsStories.slice(offset, offset + limit);
    const total = this.newsStories.length;
    return {
      limit,
      offset,
      rows,
      total,
    };
  }
}
