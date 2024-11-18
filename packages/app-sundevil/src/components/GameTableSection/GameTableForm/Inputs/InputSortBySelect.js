// @ts-check
import React from "react";

import {
  GameDataSourceSortBy,
  gameDataSourceSortByToLabel,
} from "../../../Game/game-data-source";
import { Select } from "../../../Select/Select";
import { useGameTableFormContext } from "../GameTableFormContext";

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
    gameTableForm,
    inputStyle,
    darkMode,
  } = useGameTableFormContext();

  const options = DEFAULT_OPTIONS;

  const optionsWithActive = options.map(option => ({
    ...option,
    active: option.value === gameTableForm.sortBy,
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
          gameTableForm.update({
            sortBy: option.value === gameTableForm.sortBy ? null : option.value,
          });
        }}
        options={optionsWithActive}
      />
    )
  );
};
