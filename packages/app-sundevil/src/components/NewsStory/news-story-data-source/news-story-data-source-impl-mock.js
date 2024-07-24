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

const ALL_NEWS_TYPES = ["Video", "News", "Game Recap"];

const newsStories = [
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
  ...ALL_SPORT_IDS,
].map(sportId => {
  const newsType =
    ALL_NEWS_TYPES[Math.floor(Math.random() * ALL_NEWS_TYPES.length)];
  return {
    id: Math.random().toString(),
    href: "#",
    showNewsType: false,
    showSportName: false,
    newsType,
    imageSrc,
    sportId,
    sportName: "W. Lacrosse",
    sportIconFaClassName: "fas fa-lacrosse",
    title: `News Story ${newsType} ${sportId} ${Math.floor(
      Math.random() * 100
    )}`,
  };
});

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
