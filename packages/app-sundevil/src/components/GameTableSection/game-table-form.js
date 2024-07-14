import { createUseQueryState } from "../../utils/use-query-state";
import { GameDataSourceSortByColumnId } from "../Game/game-data-source";

/**
 * @typedef {{
 * sportId: string;
 * gameType: string;
 * venueId: string;
 * searchQuery: string;
 * sortByColumnId: string;
 * sortByDesc: boolean;
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
    sortByColumnId: GameDataSourceSortByColumnId.DATE,
    sortByDesc: false,
    sportId: null,
    venueId: null,
    ...form,
  };
};

const useQueryState = createUseQueryState("gameTableForm");

/**
 * @param {Partial<GameTableForm>} initial
 */
export const useGameTableForm = initial => {
  const [state, setState] = useQueryState(init(initial));
  /**
   * @param {Partial<GameTableForm>} value
   */
  const update = value => {
    setState(current => reducer(current, value));
  };

  return {
    ...state,
    update,
  };
};
