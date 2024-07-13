// @ts-check

import { INewsStoryDataSource } from "./news-story-data-source";
import { NewsStoryDataSourceStatic } from "./news-story-data-source-impl-static";

/**
 * @typedef {import("../news-story").NewsStory} NewsStory
 */

const imageSrc =
  "https://asuevents.asu.edu/sites/default/files/2024-07/football-2024.jpg";

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
  "w-lacrosse",
  "tennis",
  "golf",
];

// /**
//  * @type {NewsStory[]}
//  */
// const newsStories = [
//   {
//     id: Math.random().toString(),
//     href: "#",
//     showCategory: false,
//     showSportName: false,
//     category: "News",
//     imageSrc,
//     sportName: "W. Lacrosse",
//     sportIconFaClassName: "fas fa-lacrosse",
//     title: "Gigi Gaspar Named Pac-12 Lacrosse Scholar Athlete of the Year",
//   },
//   {
//     id: Math.random().toString(),
//     href: "#",
//     showCategory: false,
//     showSportName: false,
//     category: "Video",
//     imageSrc,
//     sportName: "Football",
//     sportIconFaClassName: "fas fa-football-ball",
//     title: "Super Bowl #SunDevils4Life",
//   },
//   {
//     id: Math.random().toString(),
//     href: "#",
//     showCategory: false,
//     showSportName: false,
//     category: "Video",
//     imageSrc,
//     sportName: "M. Golf",
//     sportIconFaClassName: "fas fa-golf-ball",
//     title:
//       "Men's Golf Gets No. 1 Seet at Rancho Santa Fe/The Farms Golf Club Regional",
//   },
//   {
//     id: Math.random().toString(),
//     href: "#",
//     showCategory: false,
//     showSportName: false,
//     category: "News",
//     imageSrc,
//     sportName: "Vollyball",
//     sportIconFaClassName: "fas fa-volleyball-ball",
//     title: "Rohr Pac-12 Coach of the Year, Kensinger Honored",
//   },
//   {
//     id: Math.random().toString(),
//     href: "#",
//     showCategory: false,
//     showSportName: false,
//     category: "Game Recap",
//     title: "Lacrosse Downs Ducks, Will Face Stanford in Pac-12 Semifinals",
//     sportName: "W. Lacrosse",
//     imageSrc,
//     sportIconFaClassName: "fas fa-lacrosse",
//   },
//   {
//     id: Math.random().toString(),
//     href: "#",
//     showCategory: false,
//     showSportName: false,
//     category: "News",
//     title: "Kensinger, Williamson Named All-Americans",
//     sportName: "Volleyball",
//     sportIconFaClassName: "fas fa-volleyball-ball",
//     imageSrc,
//   },
// ];

const newsStories = [
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
].map(sportId => ({
  id: Math.random().toString(),
  href: "#",
  showCategory: false,
  showSportName: false,
  category: "News",
  imageSrc,
  sportId,
  sportName: "W. Lacrosse",
  sportIconFaClassName: "fas fa-lacrosse",
  title: `News Story ${sportId} ${Math.floor(Math.random() * 100)}`,
}));

export class NewsStoryDataSourceMock extends INewsStoryDataSource {
  constructor({ timeout = 3000 } = {}) {
    super();
    this.timeout = timeout;
  }

  /**
   * @type {import("./news-story-data-source").FindMany}
   */
  async findMany(input) {
    await new Promise(r => setTimeout(r, this.timeout));
    const dataSource = new NewsStoryDataSourceStatic({
      newsStories,
    });
    return dataSource.findMany(input);
  }
}
