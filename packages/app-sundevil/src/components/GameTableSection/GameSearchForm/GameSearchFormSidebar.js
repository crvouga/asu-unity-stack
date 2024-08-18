// @ts-check
import React from "react";
import styled from "styled-components";

import { findManyInputPropTypes } from "../../Game/game-data-source";
import { configFormPropTypes } from "./config-form";
import { GameSearchForm } from "./GameSearchForm";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: -1;
  gap: 1.5rem;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0;
`;

export const GameSearchFormSidebar = ({
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
    <Root className={className}>
      {typeof configGameTableForm?.title === "string" &&
        configGameTableForm?.title.length > 0 && (
          <Title>{configGameTableForm?.title}</Title>
        )}
      <GameSearchForm
        style={{
          gap: "2.5rem",
        }}
        gameDataSourceLoader={gameDataSourceLoader}
        gameSearchForm={gameSearchForm}
        configInputs={configInputs}
        configLayout={configLayout}
        sports={sports}
        darkMode={darkMode}
      />
    </Root>
  );
};

GameSearchFormSidebar.propTypes = {
  ...GameSearchForm.propTypes,
  gameDataSourceLoader: findManyInputPropTypes,
  configGameTableForm: configFormPropTypes,
};
