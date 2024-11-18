import PropTypes from "prop-types";
import { useState } from "react";

import { createUseQueryState } from "../../../utils/use-query-state";
import { useStateSwitch } from "../../../utils/use-state-switch";
import { findManyInputPropTypes } from "../../Game/game-data-source";

/**
 * @typedef {import("../../Game/game-data-source/game-data-source").FindManyInput} GameTableFormState
 */

export const gameTableFormStatePropTypes = findManyInputPropTypes;

const useQueryState = createUseQueryState({
  queryKey: "gameTableForm",
});

/**
 * @param {{initialState: Partial<GameTableFormState>, enableUrlState: boolean}} input
 */
export const useGameTableForm = input => {
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
 * @typedef {GameTableFormState & {update: (state: Partial<GameTableFormState>) => void;}} GameTableForm
 */

export const gameTableFormPropTypes = PropTypes.shape({
  ...findManyInputPropTypes,
  update: PropTypes.func,
});
