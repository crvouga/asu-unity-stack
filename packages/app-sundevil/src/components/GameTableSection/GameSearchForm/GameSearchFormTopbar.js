// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { FilterFormTopBarLayout } from "../../FilterForm/FilterFormTopBarLayout";
import { GameSearchForm } from "./GameSearchForm";

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
        <GameSearchForm
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
  ...GameSearchForm.propTypes,
  configGameTableForm: PropTypes.shape({
    title: PropTypes.string,
  }),
};
