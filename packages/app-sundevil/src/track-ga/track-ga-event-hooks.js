// @ts-check
import { isExternalLink } from "../utils/is-external-link";
import { trackGAEvent } from "./track-ga-event";
import { useChildrenClickHandler } from "./use-children-click-handler";
import { useChildrenClickHandlerDynamic } from "./use-children-click-handler-dynamic";

/**
 *
 * @param {HTMLElement} element
 * @returns {boolean}
 */
const isButton = element =>
  Boolean(
    element &&
      (element instanceof HTMLButtonElement ||
        element?.getAttribute("role") === "button" ||
        element?.getAttribute("type") === "button" ||
        element?.getAttribute("class")?.includes?.("btm"))
  );

const isCleanString = str => typeof str === "string" && str.trim().length > 0;

const isHrefTel = href =>
  typeof href === "string" && href.toLowerCase().startsWith("tel:");

const isHrefMailTo = href =>
  typeof href === "string" && href.toLowerCase().startsWith("mailto:");

const toComponentName = ({ componentName, event }) => {
  if (isCleanString(componentName)) {
    return componentName;
  }

  const isButtonVal = isButton(event?.target) || isButton(event?.currentTarget);

  if (isButtonVal) {
    return "button";
  }

  const href = event.target.getAttribute("href") ?? " ";

  if (isHrefTel(href)) {
    return "phone";
  }

  if (isHrefMailTo(href)) {
    return "email";
  }

  return "link";
};

const toTypeName = ({ href }) => {
  if (isExternalLink(href)) {
    return "external link";
  }

  return "internal link";
};

/**
 *
 * @param {unknown} value
 * @returns  {string}
 */
const ensureString = value => (typeof value === "string" ? value : "");

/**
 *
 * @param {{
 * type: string | null
 * sectionName: string
 * componentName: string | null
 * event: Event
 * }} input
 */
const trackClickEvent = ({ type, sectionName, componentName, event }) => {
  const href = ensureString(
    event.target &&
      "getAttribute" in event.target &&
      typeof event.target?.getAttribute === "function"
      ? event.target?.getAttribute("href") ?? " "
      : " "
  );

  const textContent = ensureString(
    event.target && "textContent" in event.target
      ? event.target?.textContent ?? " "
      : " "
  );

  trackGAEvent({
    event: "link",
    action: "click",
    name: "onclick",
    type: type ?? toTypeName({ href }),
    region: "main content",
    section: sectionName,
    text: textContent,
    component: toComponentName({
      componentName,
      event,
    }),
  });
};

/**
 *
 * @param {{
 * ref: React.MutableRefObject<HTMLElement | null> | null;
 * sectionName: string
 * componentName?: string | null;
 * type?: string | null
 * }} input
 */
export const useTrackChildrenClicks = ({
  ref,
  type,
  sectionName,
  componentName = null,
}) => {
  useChildrenClickHandler(ref, event => {
    trackClickEvent({ componentName, event, sectionName, type: type ?? null });
  });
};

/**
 *
 * @param {{
 * ref: React.MutableRefObject<HTMLElement | null> | null;
 * sectionName: string
 * componentName?: string | null;
 * type?: string | null
 * }} input
 */
export const useTrackChildrenClicksDynamic = ({
  ref,
  type,
  sectionName,
  componentName = null,
}) => {
  useChildrenClickHandlerDynamic(ref, event => {
    trackClickEvent({ componentName, event, sectionName, type: type ?? null });
  });
};
