// @ts-check
import React from "react";

import { isAllId } from "../../../../select-all-option";
import { isEqual } from "../../../../utils/is-equal";
import { Icon } from "../../../Icon_";
import { includeAllOptionWhen, Select } from "../../../Select/Select";
import { stringToSportId } from "../../../Sport/sport-id";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputSportTypeSelect = () => {
  const {
    sports,
    configInputs,
    darkMode,
    configLayout,
    gameSearchForm,
    inputStyle,
    gameSearchFormInputOptions,
  } = useGameSearchFormContext();

  const filteredSports = sports.filter(sport => {
    if (isAllId(sport?.id)) {
      return true;
    }

    if (configInputs.sportTypeSelect?.filterOptionsAvailableInDataSource) {
      return gameSearchFormInputOptions?.allSportId?.some(sportId =>
        isEqual(stringToSportId, sportId, sport?.id)
      );
    }

    return true;
  });

  const options = includeAllOptionWhen(
    configInputs.sportTypeSelect?.includeAllOption,
    filteredSports
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
