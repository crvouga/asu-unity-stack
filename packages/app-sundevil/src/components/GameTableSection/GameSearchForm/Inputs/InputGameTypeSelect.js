// @ts-check
import React from "react";

import { Select } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputGameTypeSelect = () => {
  const { configInputs, configLayout, gameSearchForm, inputStyle, darkMode } =
    useGameSearchFormContext();

  return (
    configLayout.includeInputHomeOrAwaySelect && (
      <Select
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.homeOrAwaySelect?.label ?? ""}
        placeholder={configInputs.homeOrAwaySelect?.placeholder ?? ""}
        onChange={option =>
          gameSearchForm.update({
            gameType: option.id === gameSearchForm.gameType ? null : option.id,
          })
        }
        options={[
          {
            id: "home",
            label: "Home",
            active: gameSearchForm.gameType === "home",
          },
          {
            id: "away",
            label: "Away",
            active: gameSearchForm.gameType === "away",
          },
        ]}
      />
    )
  );
};
