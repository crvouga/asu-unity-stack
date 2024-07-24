// @ts-check
import { useState } from "react";

import { useDebouncedValue } from "./use-debounced-value";
import { createUseQueryState } from "./use-query-state";
import { useStateSwitch } from "./use-state-switch";

/**
 * @template TState
 * @typedef {object} SearchState<TState> - The search state.
 * @property {string} searchQuery - The search query.
 * @property {string} debouncedSearchQuery - The debounced search query.
 * @property {Function} setSearchQuery - The function to set the search query.
 * @property {Function} update - The function to update the state.
 */

/**
 *  @template TState
 */

const SEARCH_QUERY_DEBOUNCE_MS = 500;

/**
 * @param {{queryKey: string, init: (partial: Partial<TState>) => TState }} input
 */
export const createUseSearchState = ({ queryKey, init }) => {
  const useQueryState = createUseQueryState({
    queryKey,
  });

  const useSearchQueryState = createUseQueryState({
    queryKey: `${queryKey}SearchQuery`,
    debouncePushMs: SEARCH_QUERY_DEBOUNCE_MS,
  });

  /**
   * @param {Partial<TState> & {enableUrlState: boolean}} initial
   * @returns {TState & SearchState<TState>}
   */
  return initial => {
    const { enableUrlState, ...initialFormState } = initial;

    const [searchQuery, setSearchQuery] = useStateSwitch(
      enableUrlState,
      "",
      useSearchQueryState,
      useState
    );
    const debouncedSearchQuery = useDebouncedValue(
      searchQuery,
      SEARCH_QUERY_DEBOUNCE_MS
    );

    const [state, setState] = useStateSwitch(
      enableUrlState,
      // @ts-ignore
      init(initialFormState),
      useQueryState,
      useState
    );

    /**
     * @param {Partial<TState>} value
     */
    const update = value => {
      setState(current => ({
        ...current,
        ...value,
      }));
    };

    return {
      ...state,
      searchQuery,
      debouncedSearchQuery,
      setSearchQuery,
      update,
    };
  };
};
