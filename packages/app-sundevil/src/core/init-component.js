// @ts-check
import React from "react";
import ReactDOM from "react-dom";

import {
  GameList,
  GameNavigation,
  GameTable,
  SectionHeader,
  SocialMediaSection,
  SocialMediaSectionEmbedded,
  SpecialEventsSection,
  SunDevilsHeader,
  SunDevilStories,
  SunDevilStoriesFromAPI,
} from "../components";

/**
 * @typedef {object} RenderInput
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the footer should be either hydrated
 * or rendered.
 * @property {object} props - Properties to initialize the footer with.
 * @property {object} component - The footer component to render.
 * @property {boolean} [renderWithinChild] - This is used for smoother drupal
 * integration. Since the target selector will usually be a block element and
 * drupal puts other elements inside blocks, we need to render the component
 * inside a child element of the target element so we don't wipe out the other
 * elements inserted by drupal.
 */

/**
 * @type {(input: RenderInput) => void}
 */
export const RenderReact = ({
  component,
  props,
  targetSelector,
  renderWithinChild = true,
}) => {
  const target = document.querySelector(targetSelector);

  if (!target) {
    return;
  }

  if (renderWithinChild) {
    const targetChild = document.createElement("div");
    target.appendChild(targetChild);

    // @ts-ignore
    ReactDOM.render(React.createElement(component, props), targetChild);
    return;
  }

  // @ts-ignore
  ReactDOM.render(React.createElement(component, props), target);
};

/**
 * @typedef {(input: Omit<RenderInput, 'component'>) => void} InitComponent
 */

/** @type {InitComponent} */
export const initGamesNavigationComponent = input => {
  RenderReact({
    ...input,
    component: GameNavigation,
  });
};
/** @type {InitComponent} */
export const initGameTableComponent = input => {
  RenderReact({
    ...input,
    component: GameTable,
  });
};

/** @type {InitComponent} */
export const initHeaderComponent = input => {
  RenderReact({
    ...input,
    component: SectionHeader,
  });
};

/** @type {InitComponent} */
export const initGameListComponent = input => {
  RenderReact({
    ...input,
    component: GameList,
  });
};

/** @type {InitComponent} */
export const initSunDevilsStoriesFromAPI = input => {
  RenderReact({
    ...input,
    component: SunDevilStoriesFromAPI,
  });
};

/** @type {InitComponent} */
export const initSocialMediaSection = input => {
  RenderReact({
    ...input,
    component: SocialMediaSection,
  });
};

/** @type {InitComponent} */
export const initSocialMediaSectionEmbedded = input => {
  RenderReact({
    ...input,
    component: SocialMediaSectionEmbedded,
  });
};

/** @type {InitComponent} */
export const initSunDevilsStories = input => {
  RenderReact({
    ...input,
    component: SunDevilStories,
  });
};

// for backward compatibility
export const initSunDevilsStoriesSection = initSunDevilsStories;

/** @type {InitComponent} */
export const initSunDevilsHeader = input => {
  RenderReact({
    ...input,
    component: SunDevilsHeader,
  });
};

/** @type {InitComponent} */
export const initSpecialEventsSection = input => {
  RenderReact({
    ...input,
    component: SpecialEventsSection,
  });
};
