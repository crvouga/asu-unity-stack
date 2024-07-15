// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { GameTableForm } from "./GameTableForm";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: -1;
  gap: 1rem;
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0;
`;

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
    <Root className={className}>
      {typeof configGameTableForm?.title === "string" &&
        configGameTableForm?.title.length > 0 && (
          <Title>{configGameTableForm?.title}</Title>
        )}
      <GameTableForm
        gameTableForm={gameTableForm}
        configInputs={configInputs}
        configLayout={configLayout}
        sports={sports}
        darkMode={darkMode}
      />
    </Root>
  );
};

GameTableFormTopbar.propTypes = {
  ...GameTableForm.propTypes,
  configGameTableForm: PropTypes.shape({
    title: PropTypes.string,
  }),
};
