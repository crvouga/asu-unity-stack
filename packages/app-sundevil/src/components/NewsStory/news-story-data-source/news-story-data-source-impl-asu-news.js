// @ts-check
import { stringToSportId } from "../../Sport/sport";
import { INewsStoryDataSource } from "./news-story-data-source";
import { NewsStoryDataSourceStatic } from "./news-story-data-source-impl-static";

/**
 * @type {(node: unknown) => import("../news-story").NewsStory | null}
 */
const mapNodeToNewsStory = node => {
  return {
    // @ts-ignore
    id: node?.nid,
    // @ts-ignore
    title: node?.title,
    // @ts-ignore
    newsType: node?.sport_event_type_category,
    // @ts-ignore
    href: node?.news_url,
    // @ts-ignore
    imageSrc: node?.image_url,
    // @ts-ignore
    imageAlt: node?.image_alt,
    // @ts-ignore
    sportId: stringToSportId(node?.sport_category),
    // @ts-ignore
    sportName: node?.sport_category,
  };
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

    const newsStories = json?.nodes?.map(item =>
      mapNodeToNewsStory(item?.node)
    );

    const dataSource = new NewsStoryDataSourceStatic({
      newsStories,
    });

    return dataSource.findMany(input);
  }
}
