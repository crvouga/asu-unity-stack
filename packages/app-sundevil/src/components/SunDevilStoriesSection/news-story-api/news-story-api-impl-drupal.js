// @ts-check
import * as Result from "../../../utils/result";

/**
 * @type {(input: {apiUrl:string}) => import("./news-story-api").NewsStoryAPI}
 */
export const NewsStoryAPIDrupal = ({ apiUrl }) => {
  return {
    async findMany() {
      try {
        const fetched = await fetch(apiUrl);

        const json = await fetched.json();

        console.log(json);

        return Result.Ok([]);
      } catch (error) {
        return Result.Err(String(error));
      }
    },
  };
};
