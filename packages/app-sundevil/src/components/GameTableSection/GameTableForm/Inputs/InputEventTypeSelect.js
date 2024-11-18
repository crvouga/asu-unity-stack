// @ts-check
import React from "react";

import { firstNonEmpty } from "../../../../utils/first-non-empty";
import {
  includeAllOptionWhen,
  Select,
  stringsToOptions,
} from "../../../Select/Select";
import { useGameTableFormContext } from "../GameTableFormContext";

export const InputEventTypeSelect = () => {
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
    configInputs.eventTypeSelect?.options,
    stringsToOptions(gameTableFormInputOptions.allEventTypes),
    []
  );

  const optionsWithActive = includeAllOptionWhen(
    configInputs.eventTypeSelect?.includeAllOption,
    options
  ).map(option => ({
    ...option,
    active: option.value === gameTableForm.eventType,
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
          gameTableForm.update({
            eventType:
              option.value === gameTableForm.eventType ? null : option.value,
          })
        }
        options={optionsWithActive}
      />
    )
  );
};
