// @ts-check
import React, { useContext } from "react";

import { defaultConfigInputs } from "../config-inputs";
import { defaultConfigLayout } from "../config-layout";
import { initGameSearchFormInputOptions } from "./use-game-search-form-input-options";

/**
 * @typedef {{
 * gameSearchForm: import("./use-game-search-form").GameSearchForm;
 * gameSearchFormInputOptions: import("./use-game-search-form-input-options").GameSearchFormInputOptions;
 * configLayout: import("../config-layout").ConfigLayout;
 * configInputs: import("../config-inputs").ConfigInputs;
 * sports: import("../../SportsTabs/sports-tabs").Sport[];
 * darkMode?: boolean;
 * orientation?: "horizontal" | "vertical";
 * inputStyle?: React.CSSProperties;
 * isDesktop?: boolean;
 * isMobile?: boolean;
 * sectionName: string;
 * }} GameSearchFormContextValue
 */

/** @type {GameSearchFormContextValue} */
const init = {
  configInputs: defaultConfigInputs,
  configLayout: defaultConfigLayout,
  gameSearchForm: {
    setSearchQuery: () => {},
    update: () => {},
  },
  gameSearchFormInputOptions: initGameSearchFormInputOptions,
  sports: [],
  darkMode: false,
  orientation: "horizontal",
  inputStyle: {},
  isDesktop: true,
  isMobile: false,
  sectionName: " ",
};

/**
 * @type {React.Context<GameSearchFormContextValue>}
 */
export const GameSearchFormContext = React.createContext(init);

/**
 * @returns {GameSearchFormContextValue}
 */
export const useGameSearchFormContext = () => {
  return useContext(GameSearchFormContext);
};
