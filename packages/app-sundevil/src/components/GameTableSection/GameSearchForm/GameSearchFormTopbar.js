// @ts-check
import React from "react";

import { FilterFormTopBarLayout } from "../../FilterForm/FilterFormTopBarLayout";
import { findManyInputPropTypes } from "../../Game/game-data-source";
import { configFormPropTypes } from "./config-form";
import { GameSearchForm } from "./GameSearchForm";

export const GameSearchFormTopbar = ({
  configGameTableForm,
  gameDataSourceLoader,
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
      darkMode={darkMode}
      renderForm={() => (
        <GameSearchForm
          gameDataSourceLoader={gameDataSourceLoader}
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
  gameDataSourceLoader: findManyInputPropTypes,
  configGameTableForm: configFormPropTypes,
};
