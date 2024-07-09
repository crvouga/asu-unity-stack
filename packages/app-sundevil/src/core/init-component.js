// @ts-check
import React from "react";
import ReactDOM from "react-dom";

import {
  GameList,
  GameNavigation,
  GameTable,
  GameTableSection,
  NewsZoneSection,
  SectionHeader,
  SocialMediaSection,
  SocialMediaSectionEmbedded,
  SpecialEventsSection,
  SunDevilsHeader,
  SunDevilStories,
  SunDevilStoriesFromAPI,
  VideoSection,
} from "../components";

/**
 * @description
 * Removes all children from the given node that do not match any of the
 * white-listed CSS selectors.
 * @param {Element} rootNode
 * @param {string[]} whiteListCssSelectors
 * @param {number} [maxDepth=1]
 */
const filterDOM = (rootNode, whiteListCssSelectors, maxDepth = 1) => {
  console.log("filterDOM", rootNode, whiteListCssSelectors, maxDepth);
  const matchesWhitelist = element => {
    return whiteListCssSelectors.some(selector => element.matches(selector));
  };

  /**
   * @param {Node} node
   * @param {number} depth
   */
  const filterNode = (node, depth) => {
    console.log("filterNode", node, depth, maxDepth);
    if (depth > maxDepth) {
      console.log("hit max depth. returning");
      return;
    }

    Array.from(node.childNodes).forEach(child => {
      if (
        child.nodeType === Node.TEXT_NODE ||
        (child.nodeType === Node.ELEMENT_NODE && !matchesWhitelist(child))
      ) {
        console.log("removing child", child);
        node.removeChild(child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        console.log("filtering within child", child, "depth", depth + 1);
        filterNode(child, depth + 1);
      }
    });
  };

  filterNode(rootNode, 1);
};
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
 * @property {string[]} [renderWithinChildWhiteList] - An array of CSS selectors that
 * are allowed to be rendered inside the child element. This is used in
 * conjunction with renderWithinChild.
 * @property {string} [renderWithinChildReactId] - The id of the child element
 * to render the component inside. This is used in conjunction with
 * renderWithinChild.
 */

const REACT_CHILD_TARGET_ID = "react-child-target";
const DEFAULT_WHITE_LIST = [
  ".contextual", // Drupal element we want to keep
];

/**
 * @type {(input: RenderInput) => void}
 */
export const RenderReact = ({
  component,
  props,
  targetSelector,
  renderWithinChild = true,
  renderWithinChildReactId = REACT_CHILD_TARGET_ID,
  renderWithinChildWhiteList = DEFAULT_WHITE_LIST,
}) => {
  console.log(
    "RenderReact",
    component,
    props,
    targetSelector,
    renderWithinChild,
    renderWithinChildReactId,
    renderWithinChildWhiteList
  );
  const target = document.querySelector(targetSelector);

  if (!target) {
    console.log("target not found", targetSelector);
    return;
  }

  if (renderWithinChild) {
    console.log("is rendering within child");
    if (!renderWithinChildWhiteList.includes(`#${renderWithinChildReactId}`)) {
      renderWithinChildWhiteList.push(`#${renderWithinChildReactId}`);
    }

    console.log("looking for child target", `#${renderWithinChildReactId}`);
    const targetChild = target.querySelector(`#${renderWithinChildReactId}`);

    if (!targetChild) {
      console.log("child target not found", `#${renderWithinChildReactId}`);
      const targetChildNew = document.createElement("div");
      console.log("created new child target", targetChildNew);
      targetChildNew.id = renderWithinChildReactId;
      console.log("added id to new child target", targetChildNew);
      target.appendChild(targetChildNew);
      console.log("appended new child target", targetChildNew);
      filterDOM(target, renderWithinChildWhiteList);
      console.log("filtered DOM", target, renderWithinChildWhiteList);
      ReactDOM.render(React.createElement(component, props), targetChildNew);
      console.log("rendered component", component, props, targetChildNew);
      return;
    }
    console.log("found child target", targetChild);
    filterDOM(target, renderWithinChildWhiteList);
    console.log("filtered DOM", target, renderWithinChildWhiteList);
    ReactDOM.render(React.createElement(component, props), targetChild);
    console.log("rendered component", component, props, targetChild);
    return;
  }
  console.log("rendering to target", target);
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
export const initGameTableSection = input => {
  RenderReact({
    ...input,
    component: GameTableSection,
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

/** @type {InitComponent} */
export const initNewsZoneSection = input => {
  RenderReact({
    ...input,
    component: NewsZoneSection,
  });
};

export const initVideoSection = input => {
  RenderReact({
    ...input,
    component: VideoSection,
  });
};
