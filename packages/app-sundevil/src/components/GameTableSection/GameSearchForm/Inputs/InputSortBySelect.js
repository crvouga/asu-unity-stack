// @ts-check
import React from "react";

import {
  GameDataSourceSortBy,
  gameDataSourceSortByToLabel,
} from "../../../Game/game-data-source";
import { Select } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const DEFAULT_OPTIONS = Object.values(GameDataSourceSortBy).map(
  sortBy => ({
    id: sortBy,
    label: gameDataSourceSortByToLabel(sortBy),
    value: sortBy,
  })
);

export const InputSortBySelect = () => {
  const {
    configInputs,
    configLayout,
    sectionName,
    gameSearchForm,
    inputStyle,
    darkMode,
  } = useGameSearchFormContext();

  const options = DEFAULT_OPTIONS;

  const optionsWithActive = options.map(option => ({
    ...option,
    active: option.value === gameSearchForm.sortBy,
  }));

  return (
    configLayout.includeInputSortBySelect &&
    Array.isArray(options) && (
      <Select
        sectionName={sectionName}
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.sortBySelect?.label ?? ""}
        placeholder={configInputs.sortBySelect?.placeholder ?? ""}
        onChange={option => {
          gameSearchForm.update({
            sortBy:
              option.value === gameSearchForm.sortBy ? null : option.value,
          });
        }}
        options={optionsWithActive}
      />
    )
  );
};
