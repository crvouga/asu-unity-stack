// @ts-check
import { useEffect, useState } from "react";

import { updateAtIndex } from "./array";
import { removeKey } from "./object";
import * as Result from "./result";

/**
 * @template TRow
 * @typedef {{
 * pages: Result.RemoteResult<string, import("./pagination").PaginationResult<TRow>>[]
 * }} QueryState
 */

/**
 * @template TRow
 * @type {() => QueryState<TRow>}
 */
const initQueryState = () => {
  return {
    pages: [Result.NotAsked],
  };
};

/**
 * @template TRow
 * @typedef {{
 * [queryKey: string]: QueryState<TRow>
 * }} State
 */

/**
 * @template TRow
 * @type {() => State<TRow>}
 */
const initState = () => {
  return {};
};

/**
 * @template TRow
 * @template TFilters
 * @param {{
 * query?: TFilters
 * limit?: number
 * offset?: number
 * toQueryKey: (query?: TFilters) => string
 * loadPage: (input: { query?: TFilters, offset: number, limit: number }) => Promise<import("./pagination").PaginationResult<TRow>>
 * }} input
 */
export const usePaginatedLoader = input => {
  const [state, setState] = useState(initState);
  const currentQueryKey = input.toQueryKey(removeKey(input.query, "offset"));
  const currentQueryState = state[currentQueryKey] || initQueryState();

  const currentPageIndex = (currentQueryState?.pages.length ?? 0) - 1;
  const limit = input.limit ?? 5;
  const offset = currentPageIndex * limit;
  const currentPageState =
    currentQueryState?.pages[currentPageIndex] ?? Result.NotAsked;

  const rows = currentQueryState?.pages.flatMap(pageResult =>
    pageResult.t === "ok" ? pageResult.value.rows : []
  );

  const isLoading =
    currentPageState.t === "loading" || currentPageState.t === "not-asked";
  const isLoadingInitial = isLoading && currentPageIndex === 0;
  const hasNextPage =
    currentPageState.t === "ok" && currentPageState.value.total > rows.length;
  const showLoadNextPage = (hasNextPage || isLoading) && !isLoadingInitial;

  const loadPage = async () => {
    if (currentPageState.t === "loading" || currentPageState.t === "ok") {
      return;
    }

    const result = await Result.attempt(() =>
      input.loadPage({ query: input.query, offset, limit })
    );
    setState(statePrev => ({
      ...statePrev,
      [currentQueryKey]: {
        ...(statePrev[currentQueryKey] ?? initQueryState()),
        pages: updateAtIndex(
          statePrev[currentQueryKey]?.pages ?? initQueryState().pages,
          currentPageIndex,
          result
        ),
      },
    }));
  };

  useEffect(() => {
    loadPage();
  }, [currentQueryKey, currentPageIndex]);

  const loadNextPage = async () => {
    setState(statePrev => ({
      ...statePrev,
      [currentQueryKey]: {
        ...statePrev[currentQueryKey],
        pages: [...statePrev[currentQueryKey].pages, Result.NotAsked],
      },
    }));
  };

  return {
    loadNextPage,
    showLoadNextPage,
    isLoading,
    isLoadingInitial,
    rows,
  };
};
