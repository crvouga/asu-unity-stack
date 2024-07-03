// @ts-check

import { GameNavigation, GameTable, SectionHeader } from "../components";
import { GameList } from "../components/GameList";
import { RenderReact } from "./react-render";

export const initGamesNavigationComponent = ({ targetSelector, props }) => {
  RenderReact(GameNavigation, props, document.querySelector(targetSelector));
};

export const initGameTableComponent = ({ targetSelector, props }) => {
  RenderReact(GameTable, props, document.querySelector(targetSelector));
};

export const initHeaderComponent = ({ targetSelector, props }) => {
  RenderReact(SectionHeader, props, document.querySelector(targetSelector));
};

export const initGameListComponent = ({ targetSelector, props }) => {
  RenderReact(GameList, props, document.querySelector(targetSelector));
};
