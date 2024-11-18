// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { findManyInputPropTypes } from "../../Game/game-data-source";
import { sportPropTypes } from "../../SportsTabs/sports-tabs";
import { configInputsPropTypes } from "../config-inputs";
import { configLayoutPropTypes, shouldIncludeForm } from "../config-layout";
import { GameTableFormContext } from "./GameTableFormContext";
import { InputAdmissionCost } from "./Inputs/InputAdmissionCost";
import { InputEventTypeSelect } from "./Inputs/InputEventTypeSelect";
import { InputGameTypeSelect } from "./Inputs/InputGameTypeSelect";
import { InputMaxAdmissionCost } from "./Inputs/InputMaxAdmissionCost";
import { InputSearch } from "./Inputs/InputSearch";
import { InputSortBySelect } from "./Inputs/InputSortBySelect";
import { InputSportTypeCheckboxList } from "./Inputs/InputSportTypeCheckboxList";
import { InputSportTypeSelect } from "./Inputs/InputSportTypeSelect";
import { InputVenueSelect } from "./Inputs/InputVenueSelect";
import { gameTableFormPropTypes } from "./use-game-table-form";
import { useGameTableFormInputOptions } from "./use-game-table-form-input-options";

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

/** @type {React.FC<Props>} */
export const GameTableForm = ({
  style,
  gameTableForm,
  gameDataSourceLoader,
  configLayout,
  configInputs,
  sports,
  className,
  darkMode,
  orientation,
  sectionName,
}) => {
  const gameTableFormInputOptions = useGameTableFormInputOptions({
    gameDataSourceLoader,
  });
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
    <GameTableFormContext.Provider
      value={{
        configInputs,
        configLayout,
        darkMode,
        gameTableForm,
        gameTableFormInputOptions,
        sports,
        orientation,
        inputStyle,
        isDesktop,
        isMobile,
        sectionName,
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
    </GameTableFormContext.Provider>
  );
};

/**
 * @typedef {{
 * style?: React.CSSProperties;
 * gameTableForm: import("./use-game-table-form").GameTableForm;
 * gameDataSourceLoader: import("../../Game/game-data-source/game-data-source").FindManyInput;
 * configLayout: import("../config-layout").ConfigLayout;
 * configInputs: import("../config-inputs").ConfigInputs;
 * sports: import("../../SportsTabs/sports-tabs").Sport[];
 * className?: string;
 * darkMode?: boolean;
 * orientation?: "horizontal" | "vertical";
 * sectionName: string;
 * }} Props
 */
GameTableForm.propTypes = {
  // @ts-ignore
  gameTableForm: gameTableFormPropTypes,
  // @ts-ignore
  configLayout: configLayoutPropTypes,
  // @ts-ignore
  configInputs: configInputsPropTypes,
  className: PropTypes.string,
  // @ts-ignore
  sports: PropTypes.arrayOf(sportPropTypes),
  darkMode: PropTypes.bool,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  // @ts-ignore
  gameDataSourceLoader: findManyInputPropTypes,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  // @ts-ignore
  sectionName: PropTypes.string,
};
