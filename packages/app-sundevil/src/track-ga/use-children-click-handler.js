import { useEffect } from "react";

/**
 *
 * @param {React.MutableRefObject<HTMLElement | null> | null} ref
 * @param {(event: Event) => void} handleClick
 */
export const useChildrenClickHandler = (ref, handleClick) => {
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
