/* eslint-disable no-console */
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
const games = [1, 2, 3, 4, 5].flatMap((id, index) => [
  {
    id,
    sportIcon: "fa fas fa-football-ball",
    sportName: "Football Football Football",
    sportId: "football",
    title: "ITA Master&amp;#039;s Championships",
    titleHref: "https://www.example.com",
    dateDay: "11",
    dateMonth: "Oct.",
    dateDayName: "(Fri)",
    dateTimeRange: "5:30 p.m. - 7:30 p.m.",
    dateTimeZone: "(MST)",
    dateLinks: [
      {
        label: "Tempe Campus Tempe Campus Tempe Campus Tempe Campus",
        href: "https://www.example.com/",
      },
    ],
    teamLogoSrc:
      "https://dev-web-sda.ws.asu.edu/sites/default/files/Screenshot%25202024-10-21%2520at%252011.10.46%25E2%2580%25AFAM.webp",
    // "https://dev-web-sda.ws.asu.edu/sites/default/files/arkansasstatelogo.webp",
    teamLogoAlt: " ",
    supplementalLinks: [
      {
        label: "History",
        href: "https://www.example.com/1",
      },
      {
        label: "History",
        href: "https://www.example.com/1",
      },
      {
        label: "History",
        href: "https://www.example.com/1",
      },
      {
        label: "History",
        href: "https://www.example.com/1",
      },
      {
        label: "History",
        href: "https://www.example.com/1",
      },
      // {
      //   label: "Supplemental Link",
      //   href: "https://www.example.com/1",
      // },
      // {
      //   label: "Supplemental Link",
      //   href: "https://www.example.com/1",
      // },
      // {
      //   label: "Supplemental Link",
      //   href: "https://www.example.com/1",
      // },
      // {
      //   label: "Supplemental Link",
      //   href: "https://www.example.com/2",
      // },
      // {
      //   label: "Supplemental Link",
      //   href: "https://www.example.com/3",
      // },
    ].slice(index % 4),
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
      {
        label: "Wear Pink",
        color: "pink",
      },
      {
        label: "Wear Black",
        color: "black",
      },
      {
        label: "Featured 1 ",
        color: "gray",
      },
      {
        label: "Free 1",
        color: "gray",
      },
      {
        label: "Featured 2",
        color: "gray",
      },
      {
        label: "Free 2",
        color: "gray",
      },
      {
        label: "Featured 3",
        color: "gray",
      },
      {
        label: "Free 3",
        color: "gray",
      },
    ],
    buttons: [
      Math.random() > 0.5
        ? {
            startIcon: "fa fas fa-ticket-alt",
            color: "dark",
            label: "Buy tickets",
            href: "https://www.example.com",
          }
        : {
            startIcon: "fa fas fa-calendar-alt",
            color: "gray",
            label: "Event details",
            href: "https://www.example.com",
          },
      {
        startIcon: "fa fas fa-calendar-alt",
        color: "gray",
        label: "Add to calendar",
        onClick: () => {
          console.log("Add to calendar");
        },
      },
    ],
    admissionCost:
      ALL_ADMISSION_COST[Math.floor(Math.random() * ALL_ADMISSION_COST.length)],
    eventType:
      ALL_EVENT_TYPE[Math.floor(Math.random() * ALL_EVENT_TYPE.length)],
    gameType: ALL_GAME_TYPE[Math.floor(Math.random() * ALL_GAME_TYPE.length)],
  },
]);

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
window.GameDataSourceMockV2 = GameDataSourceMockV2;
