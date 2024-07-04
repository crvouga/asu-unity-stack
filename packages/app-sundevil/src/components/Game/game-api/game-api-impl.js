import PropTypes from "prop-types";

import { gameSchema } from "../game";
import { IGameAPI } from "./game-api";
import { GameAPIAsuEvents } from "./game-api-impl-asu-events";
import { GameAPIMock } from "./game-api-impl-mock";
import { GameAPIStatic } from "./game-api-impl-static";

export const gameDataSourceSchema = PropTypes.oneOf([
  PropTypes.shape({
    type: PropTypes.exact("static"),
    games: PropTypes.arrayOf(gameSchema),
  }),
  PropTypes.shape({
    type: PropTypes.exact("mock"),
  }),
  PropTypes.shape({
    type: PropTypes.exact("asu-events"),
  }),
  PropTypes.shape({
    type: PropTypes.exact("custom"),
    gameAPI: PropTypes.instanceOf(IGameAPI),
  }),
]);

export const buildGameDataSource = input => {
  switch (input.type) {
    case "static": {
      return new GameAPIStatic(input);
    }
    case "mock": {
      return new GameAPIMock();
    }
    case "asu-events": {
      return new GameAPIAsuEvents(input);
    }
    case "custom": {
      return input.gameAPI;
    }
    default: {
      return new GameAPIStatic({ games: [] });
    }
  }
};
