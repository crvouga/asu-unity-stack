// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {object} FindManyInput
 * @property {number} [limit]
 * @property {number} [offset]
 * @property {string | null | undefined} [sportId]
 * @property {string | null | undefined} [searchQuery]
 * @property {string | null | undefined} [newsType]
 */

export function isFindManyInputEqual(a, b) {
  return (
    a?.sportId === b?.sportId &&
    a?.searchQuery === b?.searchQuery &&
    a?.newsType === b?.newsType
  );
}

export const findManyInputPropTypes = PropTypes.shape({
  limit: PropTypes.number,
  offset: PropTypes.number,
  sportId: PropTypes.string,
  searchQuery: PropTypes.string,
  newsType: PropTypes.string,
});

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
