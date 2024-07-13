// @ts-check

import { INewsStoryDataSource } from "./news-story-data-source";

const cleanEqual = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase().trim() === b.toLowerCase().trim();
  }
  return a === b;
};

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
    const filtered = this.newsStories.filter(newsStory =>
      typeof input?.sportId === "string" && input?.sportId?.length > 0
        ? cleanEqual(newsStory.sportId, input.sportId)
        : true
    );
    const rows = filtered.slice(offset, offset + limit);
    const total = filtered.length;
    return {
      limit,
      offset,
      rows,
      total,
    };
  }
}
