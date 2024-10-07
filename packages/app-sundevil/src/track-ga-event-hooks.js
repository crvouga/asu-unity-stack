import { useEffect } from "react";

import { trackGAEvent } from "./track-ga-event";
import { isExternalLink } from "./utils/is-external-link";

/**
 *
 * @param {React.MutableRefObject<HTMLElement | null> | null} ref
 * @param {(event: Event) => void} handleClick
 */
const useChildrenClickHandler = (ref, handleClick) => {
  useEffect(() => {
    const element = ref?.current;

    if (!element) {
      return () => {};
    }

    const addClickHandlers = el => {
      const buttonsAndLinks = el.querySelectorAll("button, a");

      buttonsAndLinks.forEach(btnOrLink => {
        btnOrLink.addEventListener("click", handleClick);
      });
    };

    addClickHandlers(element);

    return () => {
      const buttonsAndLinks = element.querySelectorAll("button, a");
      buttonsAndLinks.forEach(btnOrLink => {
        if (
          btnOrLink instanceof HTMLButtonElement ||
          btnOrLink instanceof HTMLAnchorElement
        ) {
          btnOrLink.removeEventListener("click", handleClick);
        }
      });
    };
  }, [ref?.current, handleClick]);
};

/**
 *
 * @param {HTMLElement} element
 * @returns {boolean}
 */
const isButton = element =>
  element &&
  (element instanceof HTMLButtonElement ||
    element?.getAttribute("role") === "button" ||
    element?.getAttribute("type") === "button" ||
    element?.getAttribute("class")?.includes?.("btm"));

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

  console.log("href", href);

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
 * @param {input:{ref: React.MutableRefObject<HTMLElement | null> | null; componentName?: string | null; sectionName: string}} input
 */
export const useTrackChildrenClicks = ({
  ref,
  sectionName,
  componentName = null,
}) => {
  useChildrenClickHandler(ref, event => {
    const href = event.target.getAttribute("href") ?? " ";
    const textContent = event.target.textContent ?? " ";

    trackGAEvent({
      event: "link",
      action: "click",
      name: "onclick",
      type: toTypeName({ href }),
      region: "main content",
      section: sectionName,
      text: textContent,
      component: toComponentName({
        componentName,
        event,
      }),
    });
  });
};
