// @ts-check
import React from "react";
import ReactDOM from "react-dom";

/**
 * @typedef {Object} ComponentProps
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the footer should be either hydrated or rendered.
 * @property {object} props - Properties to initialize the footer with.
 * Should only be set to true if the footer has been completely rendered server-side.
 */
export const RenderReact = (component, props, target) => {
  ReactDOM.render(React.createElement(component, props), target);
};
