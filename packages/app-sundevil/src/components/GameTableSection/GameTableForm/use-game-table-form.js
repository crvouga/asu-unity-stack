import PropTypes from "prop-types";

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
 * @param {Partial<GameTableForm>} initial
 */
export const useGameTableForm = initial => {
  const [searchQuery, setSearchQuery] = useSearchQueryState("");
  const debouncedSearchQuery = useDebouncedValue(
    searchQuery,
    GAME_TABLE_FORM_DEBOUNCE_MS
  );
  const [state, setState] = useQueryState(init(initial));
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
