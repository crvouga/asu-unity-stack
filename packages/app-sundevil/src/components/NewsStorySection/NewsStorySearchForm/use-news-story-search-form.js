// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4801-44287&node-type=canvas&t=Rka52ZSBxzrMg7eA-0
// @ts-check
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { createUseQueryState } from "../../../utils/use-query-state";
import { useStateSwitch } from "../../../utils/use-state-switch";
import {
  findManyInputPropTypes,
  isFindManyInputEqual,
} from "../../NewsStory/news-story-data-source/news-story-data-source";

/**
 * @typedef {import("../../NewsStory/news-story-data-source/news-story-data-source").FindManyInput} NewsStorySearchFormState
 */

export const newsStoryFormStatePropTypes = findManyInputPropTypes;

const useQueryState = createUseQueryState({
  queryKey: "newsStorySearchForm",
});

/**
 * @typedef {{
 * mode: "draft" | "instant";
 * enableUrlState: boolean;
 * }} Config
 */

/**
 * @param {{initialState: Partial<NewsStorySearchFormState>; config: Config}} input
 */
export const useNewsStorySearchForm = ({ initialState, config }) => {
  //
  //
  //
  // State
  //
  //
  //

  const [stateApplied, setStateApplied] = useStateSwitch(
    config.enableUrlState,
    initialState,
    useQueryState,
    useState
  );

  const [stateDraft, setStateDraft] = useState({ ...stateApplied });

  const state = config.mode === "draft" ? stateDraft : stateApplied;

  useEffect(() => {
    setStateDraft(stateApplied);
  }, [stateApplied]);

  /**
   * @param {Partial<NewsStorySearchFormState>} value
   */
  const update = value => {
    switch (config.mode) {
      case "draft": {
        setStateDraft(current => ({ ...current, ...value }));
        break;
      }
      case "instant":
      default: {
        setStateApplied(current => ({ ...current, ...value }));
        break;
      }
    }
  };

  //
  //
  //
  // Apply/Clear
  //
  //
  //

  const apply = () => {
    setStateApplied(stateDraft);
  };

  const canApply = !isFindManyInputEqual(stateDraft, stateApplied);

  const clear = () => {
    setStateApplied(initialState);
  };

  const canClear =
    !isFindManyInputEqual(stateDraft, initialState) ||
    !isFindManyInputEqual(stateApplied, initialState);

  return {
    state,
    stateApplied,
    stateDraft,
    update,
    //
    canApply,
    apply,
    canClear,
    clear,
    //
    config,
    mode: config.mode,
  };
};

/**
 * @typedef {ReturnType<typeof useNewsStorySearchForm>} NewsStorySearchForm
 */

export const newsStorySearchFormPropTypes = PropTypes.shape({
  stateDraft: findManyInputPropTypes,
  stateApplied: findManyInputPropTypes,
  state: findManyInputPropTypes,
  setSearchQuery: PropTypes.func,
  searchQuery: PropTypes.string,
  debouncedSearchQuery: PropTypes.string,
  update: PropTypes.func,
  canApply: PropTypes.bool,
  apply: PropTypes.func,
  canClear: PropTypes.bool,
  cancel: PropTypes.func,
  mode: PropTypes.oneOf(["draft", "instant"]),
});
