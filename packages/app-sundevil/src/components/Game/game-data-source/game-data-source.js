// @ts-check

/**
 * @typedef {object} FindManyInput
 * @property {number} [limit]
 * @property {number} [offset]
 * @property {string | null | undefined} [sportId]
 * @property {string | null | undefined} [gameType]
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
