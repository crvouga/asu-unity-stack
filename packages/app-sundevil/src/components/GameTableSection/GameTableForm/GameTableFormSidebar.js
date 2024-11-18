// @ts-check
import React from "react";
import styled from "styled-components";

import { findManyInputPropTypes } from "../../Game/game-data-source";
import { configFormPropTypes } from "./config-form";
import { GameTableForm } from "./GameTableForm";

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

export const GameTableFormSidebar = ({
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
    <Root className={className}>
      {typeof configGameTableForm?.title === "string" &&
        configGameTableForm?.title.length > 0 && (
          <Title>{configGameTableForm?.title}</Title>
        )}
      <GameTableForm
        style={{
          gap: "2.5rem",
        }}
        gameDataSourceLoader={gameDataSourceLoader}
        gameTableForm={gameTableForm}
        configInputs={configInputs}
        configLayout={configLayout}
        sports={sports}
        darkMode={darkMode}
        sectionName={sectionName}
      />
    </Root>
  );
};

GameTableFormSidebar.propTypes = {
  ...GameTableForm.propTypes,
  gameDataSourceLoader: findManyInputPropTypes,
  configGameTableForm: configFormPropTypes,
};
