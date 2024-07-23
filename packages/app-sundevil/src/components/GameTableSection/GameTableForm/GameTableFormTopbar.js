// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { FilterFormTopBarLayout } from "../../FilterForm/FilterFormTopBarLayout";
import { GameTableForm } from "./GameTableForm";

export const GameTableFormTopbar = ({
  configGameTableForm,
  gameTableForm,
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
          gameTableForm={gameTableForm}
          configInputs={configInputs}
          configLayout={configLayout}
          sports={sports}
          darkMode={darkMode}
        />
      )}
    />
  );
};

GameTableFormTopbar.propTypes = {
  ...GameTableForm.propTypes,
  configGameTableForm: PropTypes.shape({
    title: PropTypes.string,
  }),
};
