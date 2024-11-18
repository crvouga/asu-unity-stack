// @ts-check
import React from "react";

import { firstNonEmpty } from "../../../../utils/first-non-empty";
import {
  includeAllOptionWhen,
  Select,
  stringsToOptions,
} from "../../../Select/Select";
import { useGameTableFormContext } from "../GameTableFormContext";

const DEFAULT_OPTIONS = [
  {
    id: "home",
    label: "Home",
    value: "home",
  },
  {
    id: "away",
    label: "Away",
    value: "away",
  },
];

export const InputGameTypeSelect = () => {
  const {
    configInputs,
    configLayout,
    gameTableForm,
    inputStyle,
    darkMode,
    gameTableFormInputOptions,
    sectionName,
  } = useGameTableFormContext();

  const options = firstNonEmpty(
    configInputs.homeOrAwaySelect?.options,
    stringsToOptions(gameTableFormInputOptions.allGameTypes),
    DEFAULT_OPTIONS,
    []
  );

  const optionsWithActive = includeAllOptionWhen(
    configInputs.homeOrAwaySelect?.includeAllOption,
    options
  ).map(option => ({
    ...option,
    active: option.value === gameTableForm.gameType,
  }));

  return (
    configLayout.includeInputHomeOrAwaySelect &&
    Array.isArray(options) && (
      <Select
        darkMode={darkMode}
        sectionName={sectionName}
        style={inputStyle}
        label={configInputs.homeOrAwaySelect?.label ?? ""}
        placeholder={configInputs.homeOrAwaySelect?.placeholder ?? ""}
        onChange={option =>
          gameTableForm.update({
            gameType:
              option.value === gameTableForm.gameType ? null : option.value,
          })
        }
        options={optionsWithActive}
      />
    )
  );
};
