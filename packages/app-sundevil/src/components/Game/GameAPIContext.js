// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { IGameAPI } from "./game-api/game-api";

const GameAPIContext = React.createContext(new IGameAPI());

export const GameAPIProvider = ({ children, gameAPI }) => {
  return (
    <GameAPIContext.Provider value={gameAPI}>
      {children}
    </GameAPIContext.Provider>
  );
};
GameAPIProvider.propTypes = {
  children: PropTypes.node.isRequired,
  gameAPI: PropTypes.instanceOf(IGameAPI).isRequired,
};

/**
 * @returns {IGameAPI}
 */
export const useGameAPI = () => {
  return React.useContext(GameAPIContext);
};
