// @ts-check
import React from "react";

import { firstNonEmpty } from "../../../../utils/first-non-empty";
import {
  includeAllOptionWhen,
  Select,
  stringsToOptions,
} from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputEventTypeSelect = () => {
  const {
    configInputs,
    configLayout,
    gameSearchForm,
    inputStyle,
    darkMode,
    gameSearchFormInputOptions,
    sectionName,
  } = useGameSearchFormContext();

  const options = firstNonEmpty(
    configInputs.eventTypeSelect?.options,
    stringsToOptions(gameSearchFormInputOptions.allEventTypes),
    []
  );

  const optionsWithActive = includeAllOptionWhen(
    configInputs.eventTypeSelect?.includeAllOption,
    options
  ).map(option => ({
    ...option,
    active: option.value === gameSearchForm.eventType,
  }));

  return (
    configLayout.includeInputEventTypeSelect &&
    Array.isArray(options) && (
      <Select
        darkMode={darkMode}
        sectionName={sectionName}
        style={inputStyle}
        label={configInputs.eventTypeSelect?.label ?? ""}
        placeholder={configInputs.eventTypeSelect?.placeholder ?? ""}
        onChange={option =>
          gameSearchForm.update({
            eventType:
              option.value === gameSearchForm.eventType ? null : option.value,
          })
        }
        options={optionsWithActive}
      />
    )
  );
};
