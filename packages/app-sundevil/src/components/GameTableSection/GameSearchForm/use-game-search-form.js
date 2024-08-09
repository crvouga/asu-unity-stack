import PropTypes from "prop-types";
import { useState } from "react";

import { useDebouncedValue } from "../../../utils/use-debounced-value";
import { createUseQueryState } from "../../../utils/use-query-state";
import { useStateSwitch } from "../../../utils/use-state-switch";
import { findManyInputPropTypes } from "../../Game/game-data-source";

/**
 * @typedef {import("../../Game/game-data-source/game-data-source").FindManyInput} GameSearchFormState
 */

export const gameSearchFormStatePropTypes = findManyInputPropTypes;

const SEARCH_QUERY_DEBOUNCE_MS = 500;

const useQueryState = createUseQueryState({
  queryKey: "gameTableForm",
});

const useSearchQueryState = createUseQueryState({
  queryKey: "gameTableFormSearchQuery",
  debouncePushMs: SEARCH_QUERY_DEBOUNCE_MS,
});

/**
 * @param {{initialState: Partial<GameSearchFormState>, enableUrlState: boolean}} input
 */
export const useGameSearchForm = input => {
  const { enableUrlState, initialState } = input;

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
   * @param {Partial<GameTableForm>} value
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
 * @typedef {GameSearchFormState & {update: (state: Partial<GameSearchFormState>) => void; setSearchQuery: (searchQueryNew: string) => void}} GameSearchForm
 */
export const gameSearchFormPropTypes = PropTypes.shape({
  ...findManyInputPropTypes,
  setSearchQuery: PropTypes.func,
  update: PropTypes.func,
});
