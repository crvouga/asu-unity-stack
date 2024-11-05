// @ts-check
import React from "react";

import { TextField } from "../../../TextField/TextField";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputSearch = () => {
  const {
    configInputs,
    sectionName,
    darkMode,
    configLayout,
    gameSearchForm,
    inputStyle,
  } = useGameSearchFormContext();

  return (
    configLayout.includeInputSearch && (
      <TextField
        darkMode={darkMode}
        sectionName={sectionName}
        style={{ ...inputStyle, flex: 2 }}
        label={configInputs?.searchInput?.label ?? ""}
        placeholder={configInputs?.searchInput?.placeholder ?? ""}
        value={gameSearchForm.searchQuery}
        debounce={500}
        onChange={searchQueryNew =>
          gameSearchForm.update({ searchQuery: searchQueryNew })
        }
        uncontrolled
        renderEndIcon={({ style: iconStyle }) => (
          <i
            style={iconStyle}
            className="fa fas fa-solid fa-magnifying-glass"
          />
        )}
      />
    )
  );
};
