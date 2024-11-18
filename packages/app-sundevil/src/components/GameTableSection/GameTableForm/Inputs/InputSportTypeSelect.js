// @ts-check
import React from "react";

import { isAllId } from "../../../../select-all-option";
import { isEqual } from "../../../../utils/is-equal";
import { Icon } from "../../../Icon_";
import { includeAllOptionWhen, Select } from "../../../Select/Select";
import { stringToSportId } from "../../../Sport/sport-id";
import { useGameTableFormContext } from "../GameTableFormContext";

export const InputSportTypeSelect = () => {
  const {
    sports,
    configInputs,
    darkMode,
    configLayout,
    gameTableForm,
    inputStyle,
    gameTableFormInputOptions,
    sectionName,
  } = useGameTableFormContext();

  const filteredSports = sports.filter(sport => {
    if (isAllId(sport?.id)) {
      return true;
    }

    if (configInputs.sportTypeSelect?.filterOptionsAvailableInDataSource) {
      return gameTableFormInputOptions?.allSportId?.some(sportId =>
        isEqual(stringToSportId, sportId, sport?.id)
      );
    }

    return true;
  });

  const options = includeAllOptionWhen(
    configInputs.sportTypeSelect?.includeAllOption,
    filteredSports
  ).map(sport => ({
    label: sport?.name,
    id: sport?.id,
    active: sport?.active,
    renderStart: ({ style: iconStyle }) => (
      <Icon icon={sport.icon} style={iconStyle} />
    ),
  }));

  return (
    configLayout.includeInputSportType && (
      <Select
        sectionName={sectionName}
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.sportTypeSelect?.label ?? ""}
        placeholder={configInputs.sportTypeSelect?.placeholder ?? ""}
        onChange={option =>
          gameTableForm.update({
            sportId: option.id === gameTableForm.sportId ? null : option.id,
          })
        }
        options={options}
      />
    )
  );
};
