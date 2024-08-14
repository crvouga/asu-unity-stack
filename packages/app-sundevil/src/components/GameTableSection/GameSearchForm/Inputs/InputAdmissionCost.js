// @ts-check
import React from "react";

import { firstNonEmpty } from "../../../../utils/first-non-empty";
import {
  includeAllOptionWhen,
  Select,
  stringsToOptions,
} from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputAdmissionCost = () => {
  const {
    configInputs,
    configLayout,
    gameSearchForm,
    inputStyle,
    darkMode,
    gameSearchFormInputOptions,
  } = useGameSearchFormContext();

  const options = firstNonEmpty(
    configInputs.admissionCostSelect?.options,
    stringsToOptions(gameSearchFormInputOptions.allAdmissionCost),
    []
  );

  const optionsWithActive = includeAllOptionWhen(
    configInputs.admissionCostSelect?.includeAllOption,
    options
  ).map(option => ({
    ...option,
    active: option.value === gameSearchForm.admissionCost,
  }));

  return (
    configLayout.includeAdmissionCostSelect &&
    Array.isArray(options) && (
      <Select
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.admissionCostSelect?.label ?? ""}
        placeholder={configInputs.admissionCostSelect?.placeholder ?? ""}
        onChange={option =>
          gameSearchForm.update({
            admissionCost:
              option.value === gameSearchForm.admissionCost
                ? null
                : option.value,
          })
        }
        options={optionsWithActive}
      />
    )
  );
};
