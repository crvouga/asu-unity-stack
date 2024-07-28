// @ts-check
import React from "react";

import { GameDataSourceSortBy } from "../../../Game/game-data-source";
import { Select } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputSortBySelect = () => {
  const { configInputs, configLayout, gameSearchForm, inputStyle, darkMode } =
    useGameSearchFormContext();

  return (
    configLayout.includeInputSortBySelect && (
      <Select
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.sortBySelect?.label ?? ""}
        placeholder={configInputs.sortBySelect?.placeholder ?? ""}
        onChange={option => {
          gameSearchForm.update({
            sortBy:
              option.payload.sortBy === gameSearchForm.sortBy
                ? GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST
                : option.payload.sortBy,
          });
        }}
        options={[
          {
            id: "date",
            label: "Date",
            active:
              gameSearchForm.sortBy ===
              GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST,
            payload: {
              sortBy: GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST,
            },
          },
          {
            id: "event-name",
            label: "Event Name",
            active: gameSearchForm.sortBy === GameDataSourceSortBy.TITLE_A_TO_Z,
            payload: {
              sortBy: GameDataSourceSortBy.TITLE_A_TO_Z,
            },
          },
        ]}
      />
    )
  );
};
