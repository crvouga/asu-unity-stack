// @ts-check
import React from "react";

import { includeAllOptionWhen, Select } from "../../../Select/Select";
import { useGameTableFormContext } from "../GameTableFormContext";

export const InputMaxAdmissionCost = () => {
  const {
    configInputs,
    configLayout,
    sectionName,
    gameTableForm,
    inputStyle,
    darkMode,
  } = useGameTableFormContext();

  const options = includeAllOptionWhen(
    configInputs.maxAdmissionCostSelect?.options
  ).map(option => ({
    active: option.value === gameTableForm.maxAdmissionCost,
    id: option.id,
    label: option.label,
    value: option.value,
  }));

  return (
    configLayout.includeMaxAdmissionCostSelect &&
    Array.isArray(options) && (
      <Select
        sectionName={sectionName}
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.maxAdmissionCostSelect?.label ?? ""}
        placeholder={configInputs.maxAdmissionCostSelect?.placeholder ?? ""}
        onChange={option =>
          gameTableForm.update({
            maxAdmissionCost:
              option.value === gameTableForm.maxAdmissionCost
                ? null
                : option.value,
          })
        }
        options={options}
      />
    )
  );
};
