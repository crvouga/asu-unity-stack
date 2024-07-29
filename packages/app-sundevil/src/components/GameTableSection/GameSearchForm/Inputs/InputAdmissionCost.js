// @ts-check
import React from "react";

import { Select, stringsToOptions } from "../../../Select/Select";
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

  const options =
    configInputs.admissionCostSelect?.options ??
    stringsToOptions(gameSearchFormInputOptions.allAdmissionCost) ??
    [];

  const optionsWithActive = options.map(option => ({
    ...option,
    active: option.value === gameSearchForm.admissionCost,
  }));

  return (
    configLayout.includeAdmissionCostSelect &&
    Array.isArray(options) &&
    options.length > 0 && (
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
