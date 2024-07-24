// @ts-check

import { usePaginatedLoader } from "../../utils/use-paginated-loader";
import { useGameDataSource } from "./GameDataSourceContext";

/**
 * @param {import("./game-data-source/game-data-source").FindManyInput} input
 */
export const useGameDataSourceLoader = input => {
  const gameDataSource = useGameDataSource();
  return usePaginatedLoader({
    query: input,
    limit: input.limit,
    toQueryKey: query => btoa(JSON.stringify(query ?? {})),
    loadPage: ({ offset, limit, query }) => {
      return gameDataSource.findMany({
        ...query,
        offset,
        limit,
      });
    },
  });
};
