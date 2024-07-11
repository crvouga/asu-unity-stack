import PropTypes from "prop-types";

import { gameSchema } from "../game";
import { IGameDataSource } from "./game-data-source";
import { GameDataSourceAsuEvents } from "./game-data-source-impl-asu-events";
import { GameDataSourceMock } from "./game-data-source-impl-mock";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

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
    gameDataSource: PropTypes.instanceOf(IGameDataSource),
  }),
]);

export const buildGameDataSource = input => {
  switch (input.type) {
    case "static": {
      return new GameDataSourceStatic(input);
    }
    case "mock": {
      return new GameDataSourceMock();
    }
    case "asu-events": {
      return new GameDataSourceAsuEvents(input);
    }
    case "custom": {
      return input.gameDataSource;
    }
    default: {
      return new GameDataSourceStatic({ games: [] });
    }
  }
};
