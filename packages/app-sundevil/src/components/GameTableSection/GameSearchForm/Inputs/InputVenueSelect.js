// @ts-check
import React from "react";

import { Select } from "../../../Select/Select";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputVenueSelect = () => {
  const {
    configInputs,
    darkMode,
    configLayout,
    gameSearchForm,
    gameSearchFormInputOptions,
    inputStyle,
  } = useGameSearchFormContext();

  return (
    configLayout.includeInputVenueSelect && (
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
        options={gameSearchFormInputOptions.allVenues.map(venueOption => ({
          label: venueOption,
          id: venueOption,
          active: venueOption === gameSearchForm.venueId,
        }))}
      />
    )
  );
};
