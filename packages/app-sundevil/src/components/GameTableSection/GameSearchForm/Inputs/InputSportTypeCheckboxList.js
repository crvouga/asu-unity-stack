// @ts-check
import React from "react";

import { CheckboxList } from "../../../CheckboxList/CheckboxList";
import { Icon } from "../../../Icon_";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputSportTypeCheckboxList = () => {
  const {
    sports,
    configInputs,
    configLayout,
    gameSearchForm,
    inputStyle,
    isDesktop,
  } = useGameSearchFormContext();

  return (
    configLayout.includeSportTypeCheckboxList &&
    isDesktop && (
      <CheckboxList
        style={inputStyle}
        label={configInputs.sportTypeCheckboxList?.label ?? ""}
        onChange={option =>
          gameSearchForm.update({
            sportId: option.id === gameSearchForm.sportId ? null : option.id,
          })
        }
        options={sports.map(sport => ({
          label: sport.name,
          id: sport.id,
          active: sport.active,
          renderStart: ({ style: iconStyle }) => (
            <Icon icon={sport.icon} style={iconStyle} />
          ),
        }))}
      />
    )
  );
};
