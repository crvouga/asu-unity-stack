// @ts-check

import { isAllId } from "../../../select-all-option";
import { cleanString } from "../../../utils/clean-string";
import { isEqual } from "../../../utils/is-equal";
import { matchSort } from "../../../utils/match-sort";
import { stringToSportId } from "../../Sport/sport-id";
import { INewsStoryDataSource } from "./news-story-data-source";

/**
 * @typedef {import("../news-story").NewsStory} NewsStory
 */

export class NewsStoryDataSourceStatic extends INewsStoryDataSource {
  constructor({ newsStories = [], shouldLog = false } = {}) {
    super();
    this.newsStories = Array.isArray(newsStories) ? newsStories : [];
    this.shouldLog = shouldLog;
  }

  log() {
    if (this.shouldLog) {
      // eslint-disable-next-line no-console, prefer-rest-params
      console.log("NewsStoryDataSourceStatic", ...arguments);
    }
  }

  /**
   * @type {import("./news-story-data-source").FindMany}
   */
  async findMany(input) {
    const limit = input.limit ?? Infinity;
    const offset = input.offset ?? 0;

    const filterLog = [];

    const filtered = matchSort({
      searchQuery: input?.searchQuery ?? "",
      toText: newsStory =>
        [
          newsStory.title,
          newsStory.newsType,
          newsStory.sportId,
          newsStory.sportName,
        ]
          .filter(Boolean)
          .join(" "),

      items: this.newsStories.filter(newsStory => {
        const matchedSportId =
          typeof input?.sportId === "string" &&
          input?.sportId?.length > 0 &&
          !isAllId(input?.newsType)
            ? isEqual(stringToSportId, newsStory.sportId, input.sportId)
            : true;

        const matchedCategory =
          typeof input?.newsType === "string" &&
          input?.newsType?.length > 0 &&
          !isAllId(input?.newsType)
            ? isEqual(cleanString, newsStory.newsType, input.newsType)
            : true;

        const matched = matchedSportId && matchedCategory;

        if (this.shouldLog) {
          filterLog.push({
            newsStory,
            input,
            matched,
            matchedSportId,
            matchedCategory,
          });
        }

        return matched;
      }),
    });

    const rows = filtered.slice(offset, offset + limit);

    const total = filtered.length;

    const output = {
      limit,
      offset,
      rows,
      total,
    };

    if (this.shouldLog) {
      this.log("findMany", {
        input,
        output,
        filterLog,
        filtered,
        filterLogHits: filterLog.filter(f => f.matched),
        filterLogMisses: filterLog.filter(f => !f.matched),
      });
    }

    return output;
  }
}

// @ts-ignore
window.NewsStoryDataSourceStatic = NewsStoryDataSourceStatic;
