// @ts-check
import React from "react";

import { Select } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputEventTypeSelect = () => {
  const { configInputs, configLayout, gameSearchForm, inputStyle, darkMode } =
    useGameSearchFormContext();

  return (
    configLayout.includeInputEventTypeSelect &&
    Array.isArray(configInputs.eventTypeSelect?.options) &&
    configInputs.eventTypeSelect?.options.length > 0 && (
      <Select
        darkMode={darkMode}
        style={inputStyle}
        label={configInputs.eventTypeSelect?.label ?? ""}
        placeholder={configInputs.eventTypeSelect?.placeholder ?? ""}
        onChange={option =>
          gameSearchForm.update({
            eventType:
              option.value === gameSearchForm.eventType ? null : option.value,
          })
        }
        options={configInputs.eventTypeSelect?.options.map(option => ({
          active: option.value === gameSearchForm.eventType,
          id: option.id,
          label: option.label,
          value: option.value,
        }))}
      />
    )
  );
};
