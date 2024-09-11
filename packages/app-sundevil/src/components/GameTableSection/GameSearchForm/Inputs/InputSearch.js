// @ts-check
import React from "react";

import { TextField } from "../../../TextField/TextField";
import { useGameSearchFormContext } from "../GameSearchFormContext";

export const InputSearch = () => {
  const { configInputs, darkMode, configLayout, gameSearchForm, inputStyle } =
    useGameSearchFormContext();
  return (
    configLayout.includeInputSearch && (
      <TextField
        darkMode={darkMode}
        style={{ ...inputStyle, flex: 2 }}
        label={configInputs?.searchInput?.label ?? ""}
        placeholder={configInputs?.searchInput?.placeholder ?? ""}
        value={gameSearchForm.searchQuery}
        onChange={gameSearchForm.setSearchQuery}
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
