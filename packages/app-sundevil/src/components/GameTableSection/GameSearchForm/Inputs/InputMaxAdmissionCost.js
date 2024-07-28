// @ts-check
import React from "react";

import { Select } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputMaxAdmissionCost = () => {
  const { configInputs, configLayout, gameSearchForm, inputStyle, darkMode } =
    useGameSearchFormContext();

  return (
    configLayout.includeMaxAdmissionCostSelect &&
    Array.isArray(configInputs.maxAdmissionCostSelect?.options) &&
    configInputs.maxAdmissionCostSelect?.options.length > 0 && (
      <Select
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.maxAdmissionCostSelect?.label ?? ""}
        placeholder={configInputs.maxAdmissionCostSelect?.placeholder ?? ""}
        onChange={option =>
          gameSearchForm.update({
            maxAdmissionCost:
              option.value === gameSearchForm.maxAdmissionCost
                ? null
                : option.value,
          })
        }
        options={configInputs.maxAdmissionCostSelect?.options.map(option => ({
          active: option.value === gameSearchForm.maxAdmissionCost,
          id: option.id,
          label: option.label,
          value: option.value,
        }))}
      />
    )
  );
};
