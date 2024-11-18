// @ts-check
import React from "react";

import { TextField } from "../../../TextField/TextField";
import { useGameTableFormContext } from "../GameTableFormContext";

export const InputSearch = () => {
  const {
    configInputs,
    sectionName,
    darkMode,
    configLayout,
    gameTableForm,
    inputStyle,
  } = useGameTableFormContext();

  return (
    configLayout.includeInputSearch && (
      <TextField
        darkMode={darkMode}
        sectionName={sectionName}
        style={{ ...inputStyle, flex: 2 }}
        label={configInputs?.searchInput?.label ?? ""}
        placeholder={configInputs?.searchInput?.placeholder ?? ""}
        value={gameTableForm.searchQuery}
        debounce={500}
        onChange={searchQueryNew =>
          gameTableForm.update({ searchQuery: searchQueryNew })
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
