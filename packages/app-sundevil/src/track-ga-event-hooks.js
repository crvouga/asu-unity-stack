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

/**
 *
 * @param {input:{ref: React.MutableRefObject<HTMLElement | null> | null; sectionName: string}} input
 */
export const useTrackChildrenClicks = ({ ref, sectionName }) => {
  useChildrenClickHandler(ref, event => {
    const isButtonVal =
      isButton(event?.target) || isButton(event?.currentTarget);

    const href = event.target.getAttribute("href") ?? " ";
    const textContent = event.target.textContent ?? " ";

    trackGAEvent({
      event: "link",
      action: "click",
      name: "onclick",
      type: isExternalLink(href) ? "external link" : "internal link",
      region: "main content",
      section: sectionName,
      text: textContent,
      component: isButtonVal ? "button" : "link",
    });
  });
};
