import { IGameDataSource } from "./game-data-source";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

const ALL_SPORT_IDS = [
  "all",
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

const ALL_GAME_TYPE = ["all", "home", "away"];

/**
 * @type {import("../game").Game[]}
 */
const games = [];

ALL_SPORT_IDS.forEach(sportId => {
  const gameType =
    ALL_GAME_TYPE[Math.floor(Math.random() * ALL_GAME_TYPE.length)];
  games.push({
    id: Math.random().toString(36).substring(2, 9),
    gameType,
    ticketLink: "https://www.example.com",
    ticketText: "Buy Tickets",
    title: `Sun Devils vs Wildcats ${sportId}`,
    date: {
      day: "25",
      month: "Nov",
    },
    sport: {
      id: sportId,
      name: "Sport Name",
      icon: "fa fa-rocket",
    },
    homeTeam: {
      name: "Sun Devils",
      logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
    },
    awayTeam: {
      name: "Wildcats",
      logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
    },
    time: "5:30pm",
    venue: "Phoenix Muni Stadium",
  });
});

export class GameDataSourceMock extends IGameDataSource {
  constructor({ timeout = 3000 } = {}) {
    super();
    this.timeout = timeout;
    this.gameAPI = new GameDataSourceStatic({ games });
  }

  /**
   * @type {import("./game-data-source").IGameDataSource['findMany']}
   */
  async findMany(input) {
    await new Promise(resolve => setTimeout(resolve, this.timeout));
    const found = await this.gameAPI.findMany(input);
    return found;
  }
}
