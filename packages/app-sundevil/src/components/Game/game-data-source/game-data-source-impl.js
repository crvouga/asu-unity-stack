// @ts-check
import PropTypes from "prop-types";

import { gamePropTypes } from "../game";
import { IGameDataSource } from "./game-data-source";
import { GameDataSourceAsuEvents } from "./game-data-source-impl-asu-events";
import { GameDataSourceMock } from "./game-data-source-impl-mock";
import { GameDataSourceMockV2 } from "./game-data-source-impl-mock-v2";
import { GameDataSourceSpecialEvents } from "./game-data-source-impl-special-events";
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
    type: PropTypes.oneOf(["mock-v2"]),
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["asu-events"]),
    url: PropTypes.string,
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["special-events"]),
    url: PropTypes.string,
    shouldLog: PropTypes.bool,
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
    case "special-events": {
      return new GameDataSourceSpecialEvents(input);
    }
    case "custom": {
      return input.gameDataSource;
    }
    case "mock-v2": {
      return new GameDataSourceMockV2(input);
    }
    default: {
      return new GameDataSourceStatic({ games: [] });
    }
  }
};

// @ts-ignore
window.buildGameDataSource = buildGameDataSource;
