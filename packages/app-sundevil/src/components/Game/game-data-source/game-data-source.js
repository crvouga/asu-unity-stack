// @ts-check

export const GameDataSourceSortBy = {
  DATE_NEWEST_TO_OLDEST: "DATE_NEWEST_TO_OLDEST",
  TITLE_A_TO_Z: "TITLE_A_TO_Z",
};

// @ts-ignore
window.GameDataSourceSortBy = GameDataSourceSortBy;

/**
 * @typedef {object} FindManyInput
 * @property {number} [limit]
 * @property {number} [offset]
 * @property {string | null | undefined} [sportId]
 * @property {string | null | undefined} [gameType]
 * @property {string | null | undefined} [searchQuery]
 * @property {string | null | undefined} [venueId]
 * @property {string | null | undefined} [eventType]
 * @property {number | null | undefined} [maxAdmissionCost]
 * @property {keyof GameDataSourceSortBy} [sortBy]
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
