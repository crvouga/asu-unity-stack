// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { FilterFormTopBarLayout } from "../../FilterForm/FilterFormTopBarLayout";
import { GameTableForm } from "./GameSearchForm";

export const GameSearchFormTopbar = ({
  configGameTableForm,
  gameSearchForm,
  configInputs,
  configLayout,
  sports,
  darkMode,
  className,
}) => {
  return (
    <FilterFormTopBarLayout
      className={className}
      title={configGameTableForm?.title}
      renderForm={() => (
        <GameTableForm
          gameSearchForm={gameSearchForm}
          configInputs={configInputs}
          configLayout={configLayout}
          sports={sports}
          darkMode={darkMode}
        />
      )}
    />
  );
};

GameSearchFormTopbar.propTypes = {
  ...GameTableForm.propTypes,
  configGameTableForm: PropTypes.shape({
    title: PropTypes.string,
  }),
};
