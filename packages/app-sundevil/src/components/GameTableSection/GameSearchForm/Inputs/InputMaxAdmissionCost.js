// @ts-check
import React from "react";

import { includeAllOptionWhen, Select } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputMaxAdmissionCost = () => {
  const { configInputs, configLayout, gameSearchForm, inputStyle, darkMode } =
    useGameSearchFormContext();

  const options = includeAllOptionWhen(
    configInputs.maxAdmissionCostSelect?.options
  ).map(option => ({
    active: option.value === gameSearchForm.maxAdmissionCost,
    id: option.id,
    label: option.label,
    value: option.value,
  }));

  return (
    configLayout.includeMaxAdmissionCostSelect &&
    Array.isArray(options) && (
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
        options={options}
      />
    )
  );
};
