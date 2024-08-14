import { ALL_ID } from "../../../select-all-option";
import { IGameDataSource } from "./game-data-source";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

const ALL_SPORT_IDS = [
  ALL_ID,
  "football",
  "basketball",
  "hockey",
  "baseball",
  "w-basketball",
  "softball",
  "soccer",
  "swimming",
  "golf",
];

const ALL_GAME_TYPE = [ALL_ID, "home", "away"];

const ALL_ADMISSION_COST = ["free", "price_varies"];

const ALL_EVENT_TYPE = ["game", "practice", "scrimmage"];

/**
 * @type {import("../game").Game[]}
 */
const games = [];

[...ALL_SPORT_IDS, ...ALL_SPORT_IDS, ...ALL_SPORT_IDS].forEach(sportId => {
  const gameType =
    ALL_GAME_TYPE[Math.floor(Math.random() * ALL_GAME_TYPE.length)];
  games.push({
    id: Math.random().toString(36).substring(2, 9),
    gameType,
    ticketLink: "https://www.example.com",
    ticketText: "Buy Tickets",
    title: `Sun Devils vs Wildcats ${sportId}`,
    titleHref: "https://www.example.com",
    dateDay: "25",
    dateMonth: "Nov",
    sportId,
    startDate: new Date().toISOString(),
    sportName: "Sport Name",
    homeTeamName: "Arizona State Sun Devils",
    homeTeamLogoSrc:
      "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
    awayTeamName: "Arizona State Sun Devils",
    awayTeamLogoSrc:
      "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
    time: "5:30pm",
    venue: "Phoenix Muni Stadium",
    subtitleChip: "Gameday",
    admissionCost:
      ALL_ADMISSION_COST[Math.floor(Math.random() * ALL_ADMISSION_COST.length)],
    eventType:
      ALL_EVENT_TYPE[Math.floor(Math.random() * ALL_EVENT_TYPE.length)],
  });
});

export class GameDataSourceMock extends IGameDataSource {
  constructor({ timeout = 3000 } = {}) {
    super();
    this.timeout = timeout;
    this.gameDataSource = new GameDataSourceStatic({ games });
  }

  /**
   * @type {import("./game-data-source").IGameDataSource['findMany']}
   */
  async findMany(input) {
    await new Promise(resolve => setTimeout(resolve, this.timeout));
    const found = await this.gameDataSource.findMany(input);
    return found;
  }
}

// @ts-ignore
window.GameDataSourceMock = GameDataSourceMock;
