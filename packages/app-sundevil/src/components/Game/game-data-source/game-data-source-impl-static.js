import { matchSort } from "../../../utils/match-sort";
import { IGameDataSource } from "./game-data-source";

const cleanEqual = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase().trim() === b.toLowerCase().trim();
  }
  return a === b;
};

export class GameDataSourceStatic extends IGameDataSource {
  /**
   * @param {{games: import("../game").Game[]}} input
   */
  constructor({ games }) {
    super();
    this.games = games;
  }

  /**
   * @type {import("./game-data-source").IGameDataSource['findMany']}
   */
  async findMany(input) {
    const filtered = matchSort({
      searchQuery: input?.searchQuery ?? "",
      toText: game =>
        `${game?.title ?? ""} ${game?.gameType ?? ""} ${game?.venue ?? ""} ${
          game?.sport?.name ?? ""
        }`,
      items: this.games.filter(game => {
        const matchedSportId =
          typeof input?.sportId === "string" && input?.sportId?.length > 0
            ? cleanEqual(game?.sport?.id, input?.sportId)
            : true;

        const matchedGameType =
          typeof input?.gameType === "string" && input?.gameType.length > 0
            ? cleanEqual(game?.gameType, input?.gameType)
            : true;

        const matchedVenueId =
          typeof input?.venueId === "string" && input?.venueId.length > 0
            ? cleanEqual(game?.venue, input?.venueId)
            : true;

        const matched = matchedSportId && matchedGameType && matchedVenueId;

        return matched;
      }),
    });

    const offset = input?.offset ?? 0;
    const limit = input?.limit ?? Infinity;
    const sliced = filtered.slice(offset, offset + limit);

    return {
      limit: input?.limit ?? Infinity,
      offset: input?.offset ?? 0,
      rows: sliced,
      total: filtered.length,
    };
  }
}
