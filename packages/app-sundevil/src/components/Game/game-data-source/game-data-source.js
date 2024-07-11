// @ts-check

/**
 * @typedef {import("../game").Game} Game
 */

/**
 * @typedef {object} FindManyInput
 * @property {string | null | undefined} [sportId]
 * @property {string | null | undefined} [gameType]
 */

export class IGameDataSource {
  /**
   * @param {FindManyInput} input
   * @returns {Promise<Game[]>}
   */
  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  async findMany(input) {
    throw new Error("Not implemented");
  }
}

// @ts-ignore
window.IGameAPI = IGameDataSource;
