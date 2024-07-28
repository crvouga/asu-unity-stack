// @ts-check
import React from "react";
import ReactDOM from "react-dom";

import { CookieConsent } from "../../component-cookie-consent/src/CookieConsent";
import {
  GameTable,
  GameTableSection,
  LinkTabsBar,
  NewsStorySection,
  NewsZoneSection,
  SectionHeader,
  SocialMediaSection,
  SocialMediaSectionEmbedded,
  SpecialEventsSection,
  SunDevilsHeader,
  VideoSection,
} from "./components";
import { CardSection } from "./components/CardSection";
import { ContactUsCTA } from "./components/ContactUsCTA";
import { GroupTickets } from "./components/GroupTickets";
import { EnhanceExperence } from "./components/GroupTickets/enhanceExperence";
import { GroupTicketsBySport } from "./components/GroupTickets/GroupTicketsBySport";
import { PreviewSection } from "./components/GroupTickets/PreviewSection";
import { SeasonsTicket } from "./components/SeasonsTicket";
import { GroupTicketBenefit } from "./components/SeasonsTicket/GroupTicketBenifit";
import { GroupTicketMiniPlans } from "./components/SeasonsTicket/GroupTicketMiniPlans";
import { TicketsFooter } from "./components/SeasonsTicket/ticketsFooter";

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
}) => {
  const consoleLog = (msg, ...args) => {
    if (log) {
      // eslint-disable-next-line no-console
      console.log(msg, ...args);
    }
  };
  const target = document.querySelector(targetSelector);

  if (!target) {
    consoleLog("target not found", targetSelector);
    return;
  }

  if (typeof id === "string") {
    consoleLog("setting id on target", id);
    target.id = id;
  }

  if (typeof class_ === "string") {
    consoleLog("setting class on target", class_);
    target.classList.add(class_);
  }

  if (renderWithinChild) {
    consoleLog("is rendering within child");
    if (!renderWithinChildWhiteList.includes(`#${renderWithinChildReactId}`)) {
      renderWithinChildWhiteList.push(`#${renderWithinChildReactId}`);
    }

    consoleLog("looking for child target", `#${renderWithinChildReactId}`);
    const targetChild = target.querySelector(`#${renderWithinChildReactId}`);

    if (!targetChild) {
      consoleLog("child target not found", `#${renderWithinChildReactId}`);
      const targetChildNew = document.createElement("div");
      consoleLog("created new child target", targetChildNew);
      targetChildNew.id = renderWithinChildReactId;
      consoleLog("added id to new child target", targetChildNew);
      target.appendChild(targetChildNew);
      consoleLog("appended new child target", targetChildNew);
      filterDOM(consoleLog, target, renderWithinChildWhiteList);
      consoleLog("filtered DOM", target, renderWithinChildWhiteList);
      ReactDOM.render(React.createElement(component, props), targetChildNew);
      consoleLog("rendered component", component, props, targetChildNew);
      return;
    }
    consoleLog("found child target", targetChild);
    filterDOM(consoleLog, target, renderWithinChildWhiteList);
    consoleLog("filtered DOM", target, renderWithinChildWhiteList);
    ReactDOM.render(React.createElement(component, props), targetChild);
    consoleLog("rendered component", component, props, targetChild);
    return;
  }
  consoleLog("rendering to target", target);
  // @ts-ignore
  ReactDOM.render(React.createElement(component, props), target);
};

/**
 * @typedef {(input: Omit<RenderInput, 'component'>) => void} InitComponent
 */

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
export const initGameTableSection = input => {
  RenderReact({
    ...input,
    component: GameTableSection,
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
export const initNewsStorySection = input => {
  RenderReact({
    ...input,
    component: NewsStorySection,
  });
};

// for backward compatibility
export const initSunDevilsStoriesSection = initNewsStorySection;

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

export const initCookieConsent = input => {
  RenderReact({
    ...input,
    component: CookieConsent,
  });
};

export const initLinkTabsBar = input => {
  RenderReact({
    ...input,
    component: LinkTabsBar,
  });
};

export const initSeasonsTicket = input => {
  RenderReact({
    ...input,
    component: SeasonsTicket,
  });
};

export const initGroupsTicket = input => {
  RenderReact({
    ...input,
    component: GroupTickets,
  });
};

export const initTicketsFooter = input => {
  RenderReact({
    ...input,
    component: TicketsFooter,
  });
};

export const initGroupTicketBenefitSection = input => {
  RenderReact({
    ...input,
    component: GroupTicketBenefit,
  });
};

export const initEnhanceExperienceSection = input => {
  RenderReact({
    ...input,
    component: EnhanceExperence,
  });
};

export const initGroupTicketsBySport = input => {
  RenderReact({
    ...input,
    component: GroupTicketsBySport,
  });
};

export const initPreviewSection = input => {
  RenderReact({
    ...input,
    component: PreviewSection,
  });
};

export const initGroupTicketMiniPlans = input => {
  RenderReact({
    ...input,
    component: GroupTicketMiniPlans,
  });
};

export const initContactUsCTA = input => {
  RenderReact({
    ...input,
    component: ContactUsCTA,
  });
};

export const initCardSection = input => {
  RenderReact({
    ...input,
    component: CardSection,
  });
};
