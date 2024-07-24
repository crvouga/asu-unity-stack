// @ts-check
import PropTypes from "prop-types";
import { useState } from "react";

import { useDebouncedValue } from "../../../utils/use-debounced-value";
import { createUseQueryState } from "../../../utils/use-query-state";
import { useStateSwitch } from "../../../utils/use-state-switch";
import { findManyInputPropTypes } from "../../NewsStory/news-story-data-source/news-story-data-source";

/**
 * @typedef {import("../../NewsStory/news-story-data-source/news-story-data-source").FindManyInput} NewsStorySearchFormState
 */

const SEARCH_QUERY_DEBOUNCE_MS = 500;

const useQueryState = createUseQueryState({
  queryKey: "newsStorySearchForm",
});

const useSearchQueryState = createUseQueryState({
  queryKey: "newsStorySearchFormSearchQuery",
  debouncePushMs: SEARCH_QUERY_DEBOUNCE_MS,
});

/**
 * @param {Partial<NewsStorySearchFormState> & {enableUrlState: boolean}} initial
 */
export const useNewsStorySearchFormState = initial => {
  const { enableUrlState, ...initialState } = initial;

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
    initialState,
    useQueryState,
    useState
  );

  /**
   * @param {Partial<NewsStorySearchFormState>} value
   */
  const update = value => {
    setState(current => ({ ...current, ...value }));
  };

  return {
    ...state,
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery,
    update,
  };
};

/**
 * @typedef {NewsStorySearchFormState & {update: (state: Partial<NewsStorySearchFormState>) => void; setSearchQuery: (searchQueryNew: string) => void}} NewsStorySearchForm
 */

export const newsStorySearchFormPropTypes = PropTypes.shape({
  ...findManyInputPropTypes,
  setSearchQuery: PropTypes.func,
  update: PropTypes.func,
});
