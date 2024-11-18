// @ts-check
import React from "react";

import { isEqual } from "../../../../utils/is-equal";
import { CheckboxList } from "../../../CheckboxList/CheckboxList";
import { Icon } from "../../../Icon_";
import { includeAllOptionWhen } from "../../../Select/Select";
import { stringToSportId } from "../../../Sport/sport-id";
import { useGameTableFormContext } from "../GameTableFormContext";

export const InputSportTypeCheckboxList = () => {
  const {
    sports,
    configInputs,
    configLayout,
    gameTableFormInputOptions,
    gameTableForm,
    inputStyle,
    isDesktop,
  } = useGameTableFormContext();

  const filteredSports = sports.filter(sport => {
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
    label: sport.name,
    id: sport.id,
    active: sport.active,
    renderStart: ({ style: iconStyle }) => (
      <Icon icon={sport.icon} style={iconStyle} />
    ),
  }));

  return (
    configLayout.includeSportTypeCheckboxList &&
    isDesktop && (
      <CheckboxList
        style={inputStyle}
        label={configInputs.sportTypeCheckboxList?.label ?? ""}
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
