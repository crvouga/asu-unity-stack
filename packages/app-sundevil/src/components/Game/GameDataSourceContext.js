// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { IGameDataSource } from "./game-data-source/game-data-source";

const GameDataSourceContext = React.createContext(new IGameDataSource());

export const GameDataSourceProvider = ({ children, gameAPI }) => {
  return (
    <GameDataSourceContext.Provider value={gameAPI}>
      {children}
    </GameDataSourceContext.Provider>
  );
};
GameDataSourceProvider.propTypes = {
  children: PropTypes.node.isRequired,
  gameAPI: PropTypes.instanceOf(IGameDataSource).isRequired,
};

/**
 * @returns {IGameDataSource}
 */
export const useGameDataSource = () => {
  return React.useContext(GameDataSourceContext);
};
