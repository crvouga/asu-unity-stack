import { matchSort } from "../../../utils/match-sort";
import { asc } from "../../../utils/sort";
import { stringToSportId } from "../../Sport/sport-id";
import { GameDataSourceSortBy, IGameDataSource } from "./game-data-source";

const cleanString = str =>
  typeof str === "string" ? str?.toLowerCase().trim() : str;

const isEqual = (keyFn, a, b) => {
  return keyFn(a) === keyFn(b);
};

const ALL_SPORT_ID = "all";

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
    const isAllSportId = isEqual(stringToSportId, ALL_SPORT_ID, input?.sportId);

    const filtered = matchSort({
      searchQuery: input?.searchQuery ?? "",
      toText: game =>
        `${game?.title ?? ""} ${game?.gameType ?? ""} ${game?.venue ?? ""} ${
          game?.sport?.name ?? ""
        }`,
      items: this.games.filter(game => {
        const matchedSportId =
          typeof input?.sportId === "string" &&
          input?.sportId?.length > 0 &&
          !isAllSportId
            ? isEqual(stringToSportId, game?.sportId, input?.sportId)
            : true;

        const matchedGameType =
          typeof input?.gameType === "string" && input?.gameType.length > 0
            ? isEqual(cleanString, game?.gameType, input?.gameType)
            : true;

        const matchedVenueId =
          typeof input?.venueId === "string" && input?.venueId.length > 0
            ? isEqual(cleanString, game?.venue, input?.venueId)
            : true;

        const matchedMaxAdmissionCost =
          typeof input?.maxAdmissionCost === "number" &&
          typeof game?.admissionCost === "number"
            ? game?.admissionCost <= input?.maxAdmissionCost
            : true;

        const matchedAdmissionCost =
          typeof input?.admissionCost === "string"
            ? isEqual(cleanString, game?.admissionCost, input?.admissionCost)
            : true;

        const matchedEventType =
          typeof input?.eventType === "string" && input?.eventType.length > 0
            ? isEqual(cleanString, game?.eventType, input?.eventType)
            : true;

        const matched =
          matchedSportId &&
          matchedGameType &&
          matchedVenueId &&
          matchedMaxAdmissionCost &&
          matchedEventType &&
          matchedAdmissionCost;

        return matched;
      }),
    });

    const sorted = filtered.sort((a, b) => {
      switch (input?.sortBy) {
        case GameDataSourceSortBy.TITLE_A_TO_Z: {
          return asc(game => game.name)(a, b);
        }

        case GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST: {
          return asc(game => new Date(game.startDate))(a, b);
        }

        default: {
          return asc(game => new Date(game.startDate))(a, b);
        }
      }
    });

    const offset = input?.offset ?? 0;
    const limit = input?.limit ?? Infinity;
    const sliced = sorted.slice(offset, offset + limit);

    return {
      limit: input?.limit ?? Infinity,
      offset: input?.offset ?? 0,
      rows: sliced,
      total: filtered.length,
    };
  }
}

// @ts-ignore
window.GameDataSourceStatic = GameDataSourceStatic;
