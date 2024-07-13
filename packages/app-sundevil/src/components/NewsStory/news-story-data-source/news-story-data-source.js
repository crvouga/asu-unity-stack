// @ts-check

/**
 * @typedef {object} FindManyInput
 * @property {number} [limit]
 * @property {number} [offset]
 * @property {string | null | undefined} [sportId]
 */

/**
 * @typedef {import("../../../utils/pagination").PaginationResult<import("../news-story").NewsStory>} FindManyOutput
 */

/**
 * @typedef {(input: FindManyInput) => Promise<FindManyOutput>} FindMany
 */

export class INewsStoryDataSource {
  /**
   * @type {FindMany}
   */
  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  async findMany(input) {
    throw new Error("Not implemented");
  }
}

// @ts-ignore
window.INewsStoryDataSource = INewsStoryDataSource;
