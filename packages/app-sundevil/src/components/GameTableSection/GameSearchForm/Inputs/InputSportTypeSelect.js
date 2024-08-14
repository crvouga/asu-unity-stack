// @ts-check
import React from "react";

import { Icon } from "../../../Icon_";
import { includeAllOptionWhen, Select } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputSportTypeSelect = () => {
  const {
    sports,
    configInputs,
    darkMode,
    configLayout,
    gameSearchForm,
    inputStyle,
  } = useGameSearchFormContext();

  const options = includeAllOptionWhen(
    configInputs.sportTypeSelect?.includeAllOption,
    sports
  ).map(sport => ({
    label: sport.name,
    id: sport.id,
    active: sport.active,
    renderStart: ({ style: iconStyle }) => (
      <Icon icon={sport.icon} style={iconStyle} />
    ),
  }));

  return (
    configLayout.includeInputSportType && (
      <Select
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.sportTypeSelect?.label ?? ""}
        placeholder={configInputs.sportTypeSelect?.placeholder ?? ""}
        onChange={option =>
          gameSearchForm.update({
            sportId: option.id === gameSearchForm.sportId ? null : option.id,
          })
        }
        options={options}
      />
    )
  );
};
