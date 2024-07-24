// @ts-check
import PropTypes from "prop-types";

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
 * @property {keyof typeof GameDataSourceSortBy} [sortBy]
 */

export const findManyInputPropTypes = PropTypes.shape({
  limit: PropTypes.number,
  offset: PropTypes.number,
  sportId: PropTypes.string,
  gameType: PropTypes.string,
  searchQuery: PropTypes.string,
  venueId: PropTypes.string,
  eventType: PropTypes.string,
  maxAdmissionCost: PropTypes.number,
  sortBy: PropTypes.oneOf(Object.values(GameDataSourceSortBy)),
});

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
