// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=189-1578&node-type=canvas&t=kdg8cgY0xCNAmoIL-0
import { ALL_ID } from "../../../select-all-option";
import { IGameDataSource } from "./game-data-source";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

const ALL_GAME_TYPE = [ALL_ID, "home", "away"];

const ALL_ADMISSION_COST = ["free", "price_varies"];

const ALL_EVENT_TYPE = ["game", "practice", "scrimmage"];

/**
 * @type {import("../game").Game[]}
 */
const games = [
  {
    id: Math.random().toString(36).substring(2, 9),
    sportIcon: "fa fas fa-football-ball",
    sportName: "Football",
    sportId: "football",
    title: "Sun Devil Olympian Celebration",
    titleHref: "https://www.example.com",
    dateDay: "11",
    dateMonth: "Oct.",
    dateDayName: "(Fri)",
    dateTimeRange: "5:30 p.m. - 7:30 p.m.",
    dateTimeZone: "(MST)",
    dateLinks: [
      {
        label: "Tempe Campus",
        href: "https://www.example.com/",
      },
    ],
    teamLogoSrc:
      "https://s3-alpha-sig.figma.com/img/bf55/5c94/70e477a3bd6a0a2da1fd9246042629cf?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aTIRR-u8V6~JcaXFwgRppQ7r0niR7sWWaRneOrJiGhMggGaAuCEUcyjQ9qy9qLDzo6f4uAq7AjjSAMdlPW0FGZMS-fWbU~OPNHq~VVPnZXKCWHDX-~JQtFuofMFR3jf9Vvb9XlXtEkYk8zIYDMKo5S6RMGE6gIlmcFKBFuaU-D6wqtU10VuviR1MBpjlQnMHjqebZVEVaFv7itWYUF~91s5DDal7dGCs9bgdeDrNylEU~Gcip9oal4rK3Y-YumKGW3FTJFiEbiPKitFH1Pbshvt9IAdn~WPc4cwBNOA5o3bEJBX6m4UDxcVz-VXnK9BZWQu3xFsYNjVKpoQCWDyvqw__",
    teamLogoAlt: " ",
    supplementalLinks: [
      {
        label: "Supplemental Link",
        href: "https://www.example.com/1",
      },
      {
        label: "Supplemental Link",
        href: "https://www.example.com/2",
      },
      {
        label: "Supplemental Link",
        href: "https://www.example.com/3",
      },
    ],
    chips: [
      {
        label: "Featured",
        color: "gray",
      },
      {
        label: "Free",
        color: "gray",
      },
      {
        label: "Wear Maroon",
        color: "maroon",
      },
      {
        label: "Wear Gold",
        color: "gold",
      },
    ],
    buttons: [
      {
        startIcon: "fa fas fa-ticket-alt",
        color: "gray",
        label: "Event Details",
        href: "https://www.example.com",
      },
    ],
    admissionCost:
      ALL_ADMISSION_COST[Math.floor(Math.random() * ALL_ADMISSION_COST.length)],
    eventType:
      ALL_EVENT_TYPE[Math.floor(Math.random() * ALL_EVENT_TYPE.length)],
    gameType: ALL_GAME_TYPE[Math.floor(Math.random() * ALL_GAME_TYPE.length)],
  },
];

export class GameDataSourceMockV2 extends IGameDataSource {
  constructor({ timeout = 0 } = {}) {
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
window.GameDataSourceMock = GameDataSourceMockV2;
