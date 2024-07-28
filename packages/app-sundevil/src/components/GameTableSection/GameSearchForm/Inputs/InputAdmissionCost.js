// @ts-check
import React from "react";

import { Select } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputAdmissionCost = () => {
  const { configInputs, configLayout, gameSearchForm, inputStyle, darkMode } =
    useGameSearchFormContext();

  return (
    configLayout.includeAdmissionCostSelect &&
    Array.isArray(configInputs.admissionCostSelect?.options) &&
    configInputs.admissionCostSelect?.options.length > 0 && (
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
        options={configInputs.admissionCostSelect?.options.map(option => ({
          active: option.value === gameSearchForm.admissionCost,
          id: option.id,
          label: option.label,
          value: option.value,
        }))}
      />
    )
  );
};
