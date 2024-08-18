// @ts-check
import React, { Suspense } from "react";
import ReactDOM from "react-dom";

/**
 * @description
 * Removes all children from the given node that do not match any of the
 * white-listed CSS selectors.
 * @param {function} consoleLog
 * @param {Element} rootNode
 * @param {string[]} whiteListCssSelectors
 * @param {number} [maxDepth=1]
 */
const filterDOM = (
  consoleLog,
  rootNode,
  whiteListCssSelectors,
  maxDepth = 1
) => {
  consoleLog("filterDOM Start", rootNode, whiteListCssSelectors, maxDepth);
  const matchesWhitelist = element => {
    return whiteListCssSelectors.some(selector => element.matches(selector));
  };

  /**
   * @param {Node} node
   * @param {number} depth
   */
  const filterNode = (node, depth) => {
    consoleLog("filterDOM recur", node, depth, maxDepth);
    if (depth > maxDepth) {
      consoleLog("hit max depth. returning");
      return;
    }

    Array.from(node.childNodes).forEach(child => {
      if (
        child.nodeType === Node.TEXT_NODE ||
        (child.nodeType === Node.ELEMENT_NODE && !matchesWhitelist(child))
      ) {
        consoleLog("removing child", child);
        node.removeChild(child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        consoleLog("filtering within child", child, "depth", depth + 1);
        filterNode(child, depth + 1);
      }
    });
  };

  filterNode(rootNode, 1);
};
/**
 * @typedef {object} RenderInput
 * @property {string} id - Html id to be added to the rendered component.
 * @property {string} class - Html class to be added to the rendered component.
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
 * @property {boolean} [log] - Whether to log debug information.
 * @property {boolean} [enabledPreventFlashOfUnstyledContent] - Whether to
 * enable the PreventFlashOfUnstyledContent component.
 *
 * @property {object} [loadingStyle] - The style object to apply to the loading
 * @property {string} [loadingText] - The text to display while the component is loading.
 *
 */

const REACT_CHILD_TARGET_ID = "react-child-target";
const DEFAULT_WHITE_LIST = [
  ".contextual", // Drupal element we want to keep
  '[data-once="contextual-render"]', // Drupal element we want to keep
  ".js-layout-builder-content-preview-placeholder-label", // Drupal element we want to keep
];

/**
 * @type {(input: RenderInput) => void}
 */
export const RenderReact = ({
  id,
  class: class_,
  component,
  props,
  targetSelector,
  renderWithinChild = true,
  renderWithinChildReactId = REACT_CHILD_TARGET_ID,
  renderWithinChildWhiteList = DEFAULT_WHITE_LIST,
  log = false,
  // loadingStyle = {
  //   width: "100%",
  //   backgroundColor: "transparent",
  //   padding: "1rem",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // loadingText = "Loading...",
  loadingStyle = {},
  loadingText = "",
}) => {
  const consoleLog = (msg, ...args) => {
    if (log) {
      // eslint-disable-next-line no-console
      console.log(msg, ...args);
    }
  };
  const targets = document.querySelectorAll(targetSelector);

  if (!targets.length) {
    consoleLog("no target(s) not found for: ", targetSelector);
    return;
  }

  targets.forEach(target => {
    if (!target) {
      consoleLog("target not found", targetSelector);
      return;
    }

    if (typeof id === "string") {
      consoleLog("setting id on target", id);
      // eslint-disable-next-line no-param-reassign
      target.id = id;
    }

    if (typeof class_ === "string") {
      consoleLog("setting class on target", class_);
      target.classList.add(class_);
    }

    const renderComponent = targetElement => {
      ReactDOM.render(
        <Suspense
          fallback={
            <div style={loadingStyle} aria-busy="true">
              {loadingText}
            </div>
          }
        >
          {React.createElement(component, props)}
        </Suspense>,
        targetElement
      );
    };

    if (renderWithinChild) {
      consoleLog("is rendering within child");
      if (
        !renderWithinChildWhiteList.includes(`#${renderWithinChildReactId}`)
      ) {
        renderWithinChildWhiteList.push(`#${renderWithinChildReactId}`);
      }

      consoleLog("looking for child target", `#${renderWithinChildReactId}`);
      let targetChild = target.querySelector(`#${renderWithinChildReactId}`);

      if (!targetChild) {
        consoleLog("child target not found", `#${renderWithinChildReactId}`);
        const targetChildNew = document.createElement("div");
        consoleLog("created new child target", targetChildNew);
        targetChildNew.id = renderWithinChildReactId;
        consoleLog("added id to new child target", targetChildNew);
        target.appendChild(targetChildNew);
        consoleLog("appended new child target", targetChildNew);
        targetChild = targetChildNew;
      }
      consoleLog("found child target", targetChild);
      filterDOM(consoleLog, target, renderWithinChildWhiteList);
      consoleLog("filtered DOM", target, renderWithinChildWhiteList);
      renderComponent(targetChild);
      consoleLog("rendered component", component, props, targetChild);
    } else {
      consoleLog("rendering to target", target);
      renderComponent(target);
    }
  });
};

// @ts-ignore
window.RenderReact = RenderReact;
