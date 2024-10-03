// @ts-check
import React from "react";

import { firstNonEmpty } from "../../../../utils/first-non-empty";
import {
  includeAllOptionWhen,
  Select,
  stringsToOptions,
} from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputVenueSelect = () => {
  const {
    configInputs,
    darkMode,
    configLayout,
    gameSearchForm,
    gameSearchFormInputOptions,
    inputStyle,
    sectionName,
  } = useGameSearchFormContext();

  const options = firstNonEmpty(
    configInputs.venueSelect?.options,
    stringsToOptions(gameSearchFormInputOptions.allVenues).map(option => ({
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
    active: option.value === gameSearchForm.venueId,
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
          gameSearchForm.update({
            venueId: option.id === gameSearchForm.venueId ? null : option.id,
          })
        }
        options={optionsWithActive}
      />
    )
  );
};
