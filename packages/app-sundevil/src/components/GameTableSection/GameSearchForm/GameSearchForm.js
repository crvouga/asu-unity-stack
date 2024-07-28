// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { sportPropTypes } from "../../SportsTabs/sports-tabs";
import { configInputsPropTypes } from "../config-inputs";
import { configLayoutPropTypes, shouldIncludeForm } from "../config-layout";
import { GameSearchFormContext } from "./GameSearchFormContext";
import { InputAdmissionCost } from "./Inputs/InputAdmissionCost";
import { InputEventTypeSelect } from "./Inputs/InputEventTypeSelect";
import { InputGameTypeSelect } from "./Inputs/InputGameTypeSelect";
import { InputMaxAdmissionCost } from "./Inputs/InputMaxAdmissionCost";
import { InputSearch } from "./Inputs/InputSearch";
import { InputSortBySelect } from "./Inputs/InputSortBySelect";
import { InputSportTypeCheckboxList } from "./Inputs/InputSportTypeCheckboxList";
import { InputSportTypeSelect } from "./Inputs/InputSportTypeSelect";
import { InputVenueSelect } from "./Inputs/InputVenueSelect";
import { gameSearchFormPropTypes } from "./use-game-search-form";
import { useGameSearchFormInputOptions } from "./use-game-search-form-input-options";

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

/** @type {React.FC<Props>} */
export const GameSearchForm = ({
  style,
  gameSearchForm,
  configLayout,
  configInputs,
  sports,
  className,
  darkMode,
  orientation,
}) => {
  const gameSearchFormInputOptions = useGameSearchFormInputOptions();
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  const inputStyle = {
    flex: 1,
    width: isMobile ? "100%" : "auto",
    minWidth: isMobile ? "100%" : "auto",
  };

  if (!shouldIncludeForm(configLayout)) {
    return null;
  }

  return (
    <GameSearchFormContext.Provider
      value={{
        configInputs,
        configLayout,
        darkMode,
        gameSearchForm,
        gameSearchFormInputOptions,
        sports,
        orientation,
        inputStyle,
        isDesktop,
        isMobile,
      }}
    >
      <Root
        style={style}
        className={className}
        // @ts-ignore
        orientation={orientation}
      >
        <InputSearch />

        <InputSportTypeSelect />

        <InputSportTypeCheckboxList />

        <InputVenueSelect />

        <InputGameTypeSelect />

        <InputEventTypeSelect />

        <InputMaxAdmissionCost />

        <InputAdmissionCost />

        <InputSortBySelect />
      </Root>
    </GameSearchFormContext.Provider>
  );
};

/**
 * @typedef {{
 * style?: React.CSSProperties;
 * gameSearchForm: import("./use-game-search-form").GameSearchForm;
 * configLayout: import("../config-layout").ConfigLayout;
 * configInputs: import("../config-inputs").ConfigInputs;
 * sports: import("../../SportsTabs/sports-tabs").Sport[];
 * className?: string;
 * darkMode?: boolean;
 * orientation?: "horizontal" | "vertical";
 * }} Props
 */
GameSearchForm.propTypes = {
  // @ts-ignore
  gameSearchForm: gameSearchFormPropTypes,
  // @ts-ignore
  configLayout: configLayoutPropTypes,
  // @ts-ignore
  configInputs: configInputsPropTypes,
  className: PropTypes.string,
  // @ts-ignore
  sports: PropTypes.arrayOf(sportPropTypes),
  darkMode: PropTypes.bool,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
