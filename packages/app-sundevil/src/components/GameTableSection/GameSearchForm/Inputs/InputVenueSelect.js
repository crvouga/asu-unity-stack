// @ts-check
import React from "react";

import { Select, stringsToOptions } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";
import { firstNonEmpty } from "./utils";

export const InputVenueSelect = () => {
  const {
    configInputs,
    darkMode,
    configLayout,
    gameSearchForm,
    gameSearchFormInputOptions,
    inputStyle,
  } = useGameSearchFormContext();

  const options = firstNonEmpty(
    configInputs.venueSelect?.options,
    stringsToOptions(gameSearchFormInputOptions.allVenues),
    []
  );

  const optionsWithActive = options.map(option => ({
    ...option,
    active: option.value === gameSearchForm.venueId,
  }));

  return (
    configLayout.includeInputVenueSelect &&
    Array.isArray(options) && (
      <Select
        darkMode={darkMode}
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
