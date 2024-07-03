// @ts-check
import React from "react";
import ReactDOM from "react-dom";

import { GameNavigation, GameTable, SectionHeader } from "../components";
import { GameList } from "../components/GameList";

/**
 * @typedef {Object} ComponentProps
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the footer should be either hydrated or rendered.
 * @property {object} props - Properties to initialize the footer with.
 * Should only be set to true if the footer has been completely rendered server-side.
 */

const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};

/**
 * @param {ComponentProps} props
 */
const initGamesNavigationComponent = ({ targetSelector, props }) => {
  RenderReact(GameNavigation, props, document.querySelector(targetSelector));
};

const initGameTableComponent = ({ targetSelector, props }) => {
  RenderReact(GameTable, props, document.querySelector(targetSelector));
};

const initHeaderComponent = ({ targetSelector, props }) => {
  RenderReact(SectionHeader, props, document.querySelector(targetSelector));
};

const initGameListComponent = ({ targetSelector, props }) => {
  RenderReact(GameList, props, document.querySelector(targetSelector));
};

export {
  initGameListComponent,
  initGameTableComponent,
  initGamesNavigationComponent,
  initHeaderComponent,
};
// 