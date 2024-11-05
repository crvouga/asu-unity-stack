import PropTypes from "prop-types";
import { useState } from "react";

import { createUseQueryState } from "../../../utils/use-query-state";
import { useStateSwitch } from "../../../utils/use-state-switch";
import { findManyInputPropTypes } from "../../Game/game-data-source";

/**
 * @typedef {import("../../Game/game-data-source/game-data-source").FindManyInput} GameSearchFormState
 */

export const gameSearchFormStatePropTypes = findManyInputPropTypes;

const useQueryState = createUseQueryState({
  queryKey: "gameTableForm",
});

/**
 * @param {{initialState: Partial<GameSearchFormState>, enableUrlState: boolean}} input
 */
export const useGameSearchForm = input => {
  const { enableUrlState, initialState } = input;

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
