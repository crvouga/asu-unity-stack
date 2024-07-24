// @ts-check
import PropTypes from "prop-types";

import { gamePropTypes } from "../game";
import { IGameDataSource } from "./game-data-source";
import { GameDataSourceAsuEvents } from "./game-data-source-impl-asu-events";
import { GameDataSourceMock } from "./game-data-source-impl-mock";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

export const gameDataSourcePropTypes = PropTypes.oneOfType([
  PropTypes.shape({
    type: PropTypes.oneOf(["static"]),
    games: PropTypes.arrayOf(gamePropTypes),
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["mock"]),
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["asu-events"]),
    url: PropTypes.string,
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["custom"]),
    gameDataSource: PropTypes.instanceOf(IGameDataSource),
  }),
]);

export const buildGameDataSource = input => {
  switch (input?.type) {
    case "static": {
      return new GameDataSourceStatic(input);
    }
    case "mock": {
      return new GameDataSourceMock(input);
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

// @ts-ignore
window.buildGameDataSource = buildGameDataSource;
