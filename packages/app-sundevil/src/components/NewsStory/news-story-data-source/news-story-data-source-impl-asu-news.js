// @ts-check
import { INewsStoryDataSource } from "./news-story-data-source";

/**
 * @type {(input: {apiUrl:string}) => import("./news-story-data-source").INewsStoryDataSource}
 */
export class NewsStoryDataSourceAsuNews extends INewsStoryDataSource {
  constructor({ apiUrl }) {
    super();
    this.apiUrl = apiUrl;
  }

  async findMany() {
    const fetched = await fetch(this.apiUrl);

    const json = await fetched.json();

    const SKIP = true;
    if (SKIP) {
      return [];
    }

    // console.log(json);

    return json;
  }
}
