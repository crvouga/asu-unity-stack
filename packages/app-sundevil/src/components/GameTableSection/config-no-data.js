// @ts-check
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { ALL_ID } from "../../select-all-option";
import * as Result from "../../utils/result";
import { findManyInputPropTypes } from "../Game/game-data-source";
import { useGameDataSource } from "../Game/GameDataSourceContext";

/**
 * @typedef {{
 * hide: boolean;
 * hideBehavior?: "initially-hidden" | "initially-visible" | null;
 * hideBasedOn?: import("../Game/game-data-source").FindManyInput | null;
 * message?: string | null;
 * }} ConfigNoData
 */

export const configNoDataPropTypes = PropTypes.shape({
  hide: PropTypes.bool,
  hideBehavior: PropTypes.oneOf(["initially-hidden", "initially-visible"]),
  hideBasedOn: findManyInputPropTypes,
  message: PropTypes.string,
});

/**
 * @type {ConfigNoData}
 */
export const defaultConfigNoData = {
  hide: false,
  hideBehavior: "initially-hidden",
  message: null,
  hideBasedOn: {
    sportId: ALL_ID,
  },
};

/**
 * @returns {Result.RemoteResult<string, {total: number}>}
 */
const initState = () => {
  return Result.NotAsked;
};

/**
 * @type {(input: {configNoData: ConfigNoData, shouldLog: boolean }) => {shouldHide: boolean}}
 */
export const useNoDataState = ({ configNoData, shouldLog }) => {
  const gameDataSource = useGameDataSource();
  const [state, setState] = useState(initState);

  const load = async () => {
    setState(Result.Loading);

    const found = await Result.attempt(() =>
      gameDataSource.findMany({ ...configNoData.hideBasedOn })
    );

    setState(found);
  };

  useEffect(() => {
    load();
  }, []);

  const rowCount = state.t === "ok" ? state.value.total : 0;

  const shouldHideInitiallyHidden =
    configNoData?.hide &&
    configNoData?.hideBehavior === "initially-hidden" &&
    rowCount === 0;

  const isLoadingInitial = state.t === "loading";

  const shouldHideInitiallyVisible =
    configNoData?.hide &&
    configNoData?.hideBehavior === "initially-visible" &&
    !isLoadingInitial &&
    rowCount === 0;

  const shouldHide = shouldHideInitiallyHidden || shouldHideInitiallyVisible;

  if (shouldLog) {
    // eslint-disable-next-line no-console
    console.log({
      message: "no data log",
      configNoData,
      shouldHideInitiallyHidden,
      shouldHideInitiallyVisible,
      shouldHide,
      state,
    });
  }

  return {
    shouldHide,
  };
};
