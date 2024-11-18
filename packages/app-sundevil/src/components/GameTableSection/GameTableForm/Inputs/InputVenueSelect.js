// @ts-check
import React from "react";

import { firstNonEmpty } from "../../../../utils/first-non-empty";
import {
  includeAllOptionWhen,
  Select,
  stringsToOptions,
} from "../../../Select/Select";
import { useGameTableFormContext } from "../GameTableFormContext";

export const InputVenueSelect = () => {
  const {
    configInputs,
    darkMode,
    configLayout,
    gameTableForm,
    gameTableFormInputOptions,
    inputStyle,
    sectionName,
  } = useGameTableFormContext();

  const options = firstNonEmpty(
    configInputs.venueSelect?.options,
    stringsToOptions(gameTableFormInputOptions.allVenues).map(option => ({
      ...option,
      // Rare case where the id is the proper label
      label: option.id.toString(),
    })),
    []
  );

  const optionsWithActive = includeAllOptionWhen(
    configInputs.venueSelect?.includeAllOption,
    options
  ).map(option => ({
    ...option,
    active: option.value === gameTableForm.venueId,
  }));

  return (
    configLayout.includeInputVenueSelect &&
    Array.isArray(options) && (
      <Select
        darkMode={darkMode}
        sectionName={sectionName}
        style={inputStyle}
        label={configInputs.venueSelect?.label ?? ""}
        placeholder={configInputs.venueSelect?.placeholder ?? ""}
        onChange={option =>
          gameTableForm.update({
            venueId: option.id === gameTableForm.venueId ? null : option.id,
          })
        }
        options={optionsWithActive}
      />
    )
  );
};
