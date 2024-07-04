import { IGameAPI } from "./game-api";

const cleanEqual = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase().trim() === b.toLowerCase().trim();
  }
  return a === b;
};

export class GameAPIStatic extends IGameAPI {
  /**
   * @param {{games: import("../game").Game[]}} input
   */
  constructor({ games }) {
    super();
    this.games = games;
  }

  /**
   * @type {import("./game-api").IGameAPI['findMany']}
   */
  async findMany(input) {
    const filtered = this.games.filter(game => {
      const matchedSportId =
        typeof input?.sportId === "string" && input?.sportId?.length > 0
          ? cleanEqual(game?.sport?.id, input?.sportId)
          : true;
      const matchedGameType =
        typeof input?.gameType === "string" && input?.gameType.length > 0
          ? cleanEqual(game?.gameType, input?.gameType)
          : true;

      const matched = matchedSportId && matchedGameType;
      return matched;
    });

    return filtered;
  }
}
