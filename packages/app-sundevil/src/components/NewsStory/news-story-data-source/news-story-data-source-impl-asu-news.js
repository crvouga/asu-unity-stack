// @ts-check
import { stringToSportId } from "../../Sport/sport";
import { INewsStoryDataSource } from "./news-story-data-source";
import { NewsStoryDataSourceStatic } from "./news-story-data-source-impl-static";

/**
 * @type {(node: unknown) => import("../news-story").NewsStory | null}
 */
const mapItemToNewsStory = node => {
  const id =
    // @ts-ignore
    node?.id ?? node?.nid;

  const title =
    // @ts-ignore
    node?.title;

  const newsType =
    // @ts-ignore
    node?.field_news_type;

  const href =
    // @ts-ignore
    node?.ticketing_rsvp_url;

  const imageSrc =
    // @ts-ignore
    node?.image_url?.src;

  const imageAlt =
    // @ts-ignore
    node?.image_url?.alt;

  const sportName =
    // @ts-ignore
    node?.field_sport_category;

  const sportId = stringToSportId(sportName) ?? "";

  return {
    id,
    title,
    newsType,
    href,
    imageSrc,
    imageAlt,
    sportId,
    sportName,
    showNewsType: false,
    showSportName: false,
    sportIconFaClassName: null,
    youtubeVideoUrl: null,
  };
};

const jsonToItems = json => {
  if (Array.isArray(json)) {
    return json;
  }

  const nodes = json?.nodes;

  if (Array.isArray(nodes)) {
    return nodes;
  }

  const items = json?.items;

  if (Array.isArray(items)) {
    return items;
  }

  return [];
};

const jsonItemToItem = jsonItem => {
  if ("node" in jsonItem) {
    return jsonItem.node;
  }

  return jsonItem;
};

export class NewsStoryDataSourceAsuNews extends INewsStoryDataSource {
  constructor({ url, timeout }) {
    super();
    this.url = url;
    this.timeout = timeout;
  }

  /**
   * @type {import("./news-story-data-source").FindMany}
   */
  async findMany(input) {
    if (typeof this.timeout === "number") {
      await new Promise(resolve => setTimeout(resolve, this.timeout));
    }
    const fetched = await fetch(this.url);

    const json = await fetched.json();

    const items = jsonToItems(json);

    const newsStories = items?.flatMap(
      item => mapItemToNewsStory(jsonItemToItem(item)) ?? []
    );

    const dataSource = new NewsStoryDataSourceStatic({
      newsStories,
    });

    return dataSource.findMany(input);
  }
}
