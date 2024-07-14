/**
 * @typedef {{
 * limit?: number
 * offset?: number
 * }} FindManyInput
 */

/**
 * @typedef {import("../../../utils/pagination").PaginationResult<import('../special-event').SpecialEvent>} FindManyOutput
 */

/**
 * @typedef {(input: FindManyInput) => Promise<FindManyOutput>} FindMany
 */

export class ISpecialEventsDataSource {
  /**
   * @type {FindMany}
   */
  // eslint-disable-next-line class-methods-use-this
  async findMany(_input) {
    throw new Error("Method not implemented.");
  }
}

window.ISpecialEventsDataSource = ISpecialEventsDataSource;
