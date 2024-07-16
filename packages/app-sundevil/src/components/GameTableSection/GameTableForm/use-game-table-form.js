import PropTypes from "prop-types";
import { useState } from "react";

import { useDebouncedValue } from "../../../utils/use-debounced-value";
import { createUseQueryState } from "../../../utils/use-query-state";
import { GameDataSourceSortBy } from "../../Game/game-data-source";

/**
 * @typedef {{
 * sportId: string;
 * gameType: string;
 * venueId: string;
 * searchQuery: string;
 * sortBy: keyof typeof GameDataSourceSortBy;
 * }} GameTableForm
 */

/**
 *
 * @param {GameTableForm} state
 * @param {Partial<GameTableForm>} action
 * @returns {GameTableForm}
 */
export const reducer = (state, action) => {
  return { ...state, ...action };
};

/** @type {(initial: Partial<GameTableForm>) => GameTableForm} */
export const init = form => {
  return {
    gameType: null,
    searchQuery: "",
    sortBy: GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST,
    sportId: null,
    venueId: null,
    ...form,
  };
};

const GAME_TABLE_FORM_DEBOUNCE_MS = 500;

const useQueryState = createUseQueryState({
  queryKey: "gameTableForm",
});

const useSearchQueryState = createUseQueryState({
  queryKey: "gameTableFormSearchQuery",
  debouncePushMs: GAME_TABLE_FORM_DEBOUNCE_MS,
});

/**
 * Custom hook to conditionally use useQueryState or useState
 * @param {boolean} enableUrlState
 * @param {any} initialState
 * @returns {[any, Function]}
 */
const useConditionalState = (
  enableUrlState,
  initialState,
  useQueryHook,
  useStateHook
) => {
  const queryState = useQueryHook(initialState);
  const localState = useStateHook(initialState);

  return enableUrlState ? queryState : localState;
};

/**
 * @param {Partial<GameTableForm> & {enableUrlState: boolean}} initial
 */
export const useGameTableForm = initial => {
  const { enableUrlState, ...initialFormState } = initial;

  const [searchQuery, setSearchQuery] = useConditionalState(
    enableUrlState,
    "",
    useSearchQueryState,
    useState
  );
  const debouncedSearchQuery = useDebouncedValue(
    searchQuery,
    GAME_TABLE_FORM_DEBOUNCE_MS
  );

  const [state, setState] = useConditionalState(
    enableUrlState,
    init(initialFormState),
    useQueryState,
    useState
  );

  /**
   * @param {Partial<GameTableForm>} value
   */
  const update = value => {
    setState(current => reducer(current, value));
  };

  return {
    ...state,
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery,
    update,
  };
};

export const gameTableFormSchema = PropTypes.shape({
  sportId: PropTypes.string,
  gameType: PropTypes.string,
  venueId: PropTypes.string,
  searchQuery: PropTypes.string,
  sortBy: PropTypes.oneOf(Object.values(GameDataSourceSortBy)),
  setSearchQuery: PropTypes.func,
  update: PropTypes.func,
});
