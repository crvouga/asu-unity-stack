// @ts-check
import React from "react";

import { firstNonEmpty } from "../../../../utils/first-non-empty";
import {
  includeAllOptionWhen,
  Select,
  stringsToOptions,
} from "../../../Select/Select";
import { useGameTableFormContext } from "../GameTableFormContext";

export const InputAdmissionCost = () => {
  const {
    configInputs,
    configLayout,
    gameTableForm,
    inputStyle,
    darkMode,
    gameTableFormInputOptions,
    sectionName,
  } = useGameTableFormContext();

  const options = firstNonEmpty(
    configInputs.admissionCostSelect?.options,
    stringsToOptions(gameTableFormInputOptions.allAdmissionCost),
    []
  );

  const optionsWithActive = includeAllOptionWhen(
    configInputs.admissionCostSelect?.includeAllOption,
    options
  ).map(option => ({
    ...option,
    active: option.value === gameTableForm.admissionCost,
  }));

  return (
    configLayout.includeAdmissionCostSelect &&
    Array.isArray(options) && (
      <Select
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.admissionCostSelect?.label ?? ""}
        placeholder={configInputs.admissionCostSelect?.placeholder ?? ""}
        sectionName={sectionName}
        onChange={option => {
          gameTableForm.update({
            admissionCost:
              option.value === gameTableForm.admissionCost
                ? null
                : option.value,
          });
        }}
        options={optionsWithActive}
      />
    )
  );
};
