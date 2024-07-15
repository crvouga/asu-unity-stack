// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

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
  sidebar,
  gameTableForm,
  configInputs,
  configLayout,
  sports,
  darkMode,
}) => {
  return (
    <Root>
      <Title>{sidebar.title}</Title>
      <GameTableForm
        // orientation="vertical"
        style={{
          gap: "2.5rem",
        }}
        gameTableForm={gameTableForm}
        configInputs={configInputs}
        configLayout={configLayout}
        sports={sports}
        darkMode={darkMode}
      />
    </Root>
  );
};

GameTableFormSidebar.propTypes = {
  ...GameTableForm.propTypes,
  sidebar: PropTypes.shape({
    title: PropTypes.string,
  }),
};
