// @ts-check
import React from "react";

import { Select, stringsToOptions } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

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
    gameSearchForm,
    inputStyle,
    darkMode,
    gameSearchFormInputOptions,
  } = useGameSearchFormContext();

  const options =
    configInputs.homeOrAwaySelect?.options ??
    stringsToOptions(gameSearchFormInputOptions.allGameTypes) ??
    DEFAULT_OPTIONS ??
    [];

  const optionsWithActive = options.map(option => ({
    ...option,
    active: option.value === gameSearchForm.gameType,
  }));

  return (
    configLayout.includeInputHomeOrAwaySelect &&
    Array.isArray(options) &&
    options.length > 0 && (
      <Select
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.homeOrAwaySelect?.label ?? ""}
        placeholder={configInputs.homeOrAwaySelect?.placeholder ?? ""}
        onChange={option =>
          gameSearchForm.update({
            gameType:
              option.value === gameSearchForm.gameType ? null : option.value,
          })
        }
        options={optionsWithActive}
      />
    )
  );
};
