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
    loadPage: async ({ offset, limit, query }) => {
      const found = await gameDataSource.findMany({
        ...query,
        offset,
        limit,
      });

      return found;
    },
  });
};
