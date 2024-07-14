// @ts-check

export const GameDataSourceSortByColumnId = {
  DATE: "date",
  NAME: "name",
  VENUE: "venue",
};

/**
 * @typedef {object} FindManyInput
 * @property {number} [limit]
 * @property {number} [offset]
 * @property {string | null | undefined} [sportId]
 * @property {string | null | undefined} [gameType]
 * @property {string | null | undefined} [searchQuery]
 * @property {string | null | undefined} [venueId]
 * @property {string | null | undefined} [sortByColumnId]
 * @property {boolean} [sortByDesc]
 */

export class IGameDataSource {
  /**
   * @param {FindManyInput} input
   * @typedef {import("../../../utils/pagination").PaginationResult<import("../game").Game>} PaginationResult
   * @returns {Promise<PaginationResult>}
   */
  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  async findMany(input) {
    throw new Error("Not implemented");
  }
}

// @ts-ignore
window.IGameDataSource = IGameDataSource;
