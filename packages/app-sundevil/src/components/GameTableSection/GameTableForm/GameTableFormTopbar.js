// @ts-check
import React from "react";

import { FilterFormTopBarLayout } from "../../FilterForm/FilterFormTopBarLayout";
import { findManyInputPropTypes } from "../../Game/game-data-source";
import { configFormPropTypes } from "./config-form";
import { GameTableForm } from "./GameTableForm";

export const GameTableFormTopbar = ({
  configGameTableForm,
  gameDataSourceLoader,
  gameTableForm,
  configInputs,
  configLayout,
  sports,
  darkMode,
  className,
  sectionName,
}) => {
  return (
    <FilterFormTopBarLayout
      className={className}
      title={configGameTableForm?.title}
      darkMode={darkMode}
      renderForm={() => (
        <GameTableForm
          gameDataSourceLoader={gameDataSourceLoader}
          gameTableForm={gameTableForm}
          configInputs={configInputs}
          configLayout={configLayout}
          sports={sports}
          darkMode={darkMode}
          sectionName={sectionName}
        />
      )}
    />
  );
};

GameTableFormTopbar.propTypes = {
  ...GameTableForm.propTypes,
  gameDataSourceLoader: findManyInputPropTypes,
  configGameTableForm: configFormPropTypes,
};
