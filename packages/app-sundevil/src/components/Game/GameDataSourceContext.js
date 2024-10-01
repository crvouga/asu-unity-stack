// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { IGameDataSource } from "./game-data-source/game-data-source";

const GameDataSourceContext = React.createContext(new IGameDataSource());

export const GameDataSourceProvider = ({ children, gameDataSource }) => {
  return (
    <GameDataSourceContext.Provider value={gameDataSource}>
      {children}
    </GameDataSourceContext.Provider>
  );
};
GameDataSourceProvider.propTypes = {
  children: PropTypes.node,
  gameDataSource: PropTypes.instanceOf(IGameDataSource),
};

/**
 * @returns {IGameDataSource}
 */
export const useGameDataSource = () => {
  return React.useContext(GameDataSourceContext);
};
