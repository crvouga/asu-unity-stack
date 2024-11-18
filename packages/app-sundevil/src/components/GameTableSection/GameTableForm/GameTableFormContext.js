// @ts-check
import React, { useContext } from "react";

import { defaultConfigInputs } from "../config-inputs";
import { defaultConfigLayout } from "../config-layout";
import { initGameTableFormInputOptions } from "./use-game-table-form-input-options";

/**
 * @typedef {{
 * gameTableForm: import("./use-game-table-form").GameTableForm;
 * gameTableFormInputOptions: import("./use-game-table-form-input-options").GameTableFormInputOptions;
 * configLayout: import("../config-layout").ConfigLayout;
 * configInputs: import("../config-inputs").ConfigInputs;
 * sports: import("../../SportsTabs/sports-tabs").Sport[];
 * darkMode?: boolean;
 * orientation?: "horizontal" | "vertical";
 * inputStyle?: React.CSSProperties;
 * isDesktop?: boolean;
 * isMobile?: boolean;
 * sectionName: string;
 * }} GameTableFormContextValue
 */

/** @type {GameTableFormContextValue} */
const init = {
  configInputs: defaultConfigInputs,
  configLayout: defaultConfigLayout,
  gameTableForm: {
    update: () => {},
  },
  gameTableFormInputOptions: initGameTableFormInputOptions,
  sports: [],
  darkMode: false,
  orientation: "horizontal",
  inputStyle: {},
  isDesktop: true,
  isMobile: false,
  sectionName: " ",
};

/**
 * @type {React.Context<GameTableFormContextValue>}
 */
export const GameTableFormContext = React.createContext(init);

/**
 * @returns {GameTableFormContextValue}
 */
export const useGameTableFormContext = () => {
  return useContext(GameTableFormContext);
};
