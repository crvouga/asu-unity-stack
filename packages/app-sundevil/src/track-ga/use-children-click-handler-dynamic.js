import { useEffect } from "react";

/**
 *
 * @param {React.MutableRefObject<HTMLElement | null> | null} ref
 * @param {(event: Event) => void} handleClick
 */
export const useChildrenClickHandlerDynamic = (ref, handleClick) => {
  useEffect(() => {
    const element = ref?.current;

    if (!element) {
      return () => {};
    }

    const ACTION = {
      ADD: "add",
      REMOVE: "remove",
    };

    const iframeObservers = new Map();

    const processClickHandlers = (el, action) => {
      const container = el.body || el;
      const buttonsAndLinks = container.querySelectorAll("button, a");

      buttonsAndLinks.forEach(btnOrLink => {
        if (
          btnOrLink instanceof HTMLButtonElement ||
          btnOrLink instanceof HTMLAnchorElement
        ) {
          switch (action) {
            case ACTION.ADD: {
              btnOrLink.addEventListener("click", handleClick);
              break;
            }
            case ACTION.REMOVE: {
              btnOrLink.removeEventListener("click", handleClick);
              break;
            }
            default: {
              break;
            }
          }
        }
      });
    };

    const processIframeHandlers = (el, action) => {
      const iframes = el.querySelectorAll("iframe");

      iframes.forEach(iframe => {
        try {
          const iframeDoc =
            iframe.contentDocument || iframe.contentWindow.document;
          if (!iframeDoc) return;

          processClickHandlers(iframeDoc, action);

          switch (action) {
            case ACTION.ADD: {
              if (!iframeObservers.has(iframe)) {
                const iframeObserver = new MutationObserver(() => {
                  processClickHandlers(iframeDoc, ACTION.REMOVE);
                  processClickHandlers(iframeDoc, ACTION.ADD);
                });
                iframeObserver.observe(iframeDoc, {
                  childList: true,
                  subtree: true,
                });
                iframeObservers.set(iframe, iframeObserver);
              }
              break;
            }
            case ACTION.REMOVE: {
              if (iframeObservers.has(iframe)) {
                iframeObservers.get(iframe).disconnect();
                iframeObservers.delete(iframe);
              }
              break;
            }
            default: {
              break;
            }
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn(
            "Cannot access iframe content due to cross-origin restrictions",
            error
          );
        }
      });
    };

    const handleDomChanges = el => {
      processClickHandlers(el, ACTION.REMOVE);
      processClickHandlers(el, ACTION.ADD);
      processIframeHandlers(el, ACTION.REMOVE);
      processIframeHandlers(el, ACTION.ADD);
    };

    const observer = new MutationObserver(() => {
      handleDomChanges(element);
    });

    handleDomChanges(element);

    observer.observe(element, {
      childList: true,
      subtree: true,
    });

    return () => {
      processClickHandlers(element, ACTION.REMOVE);
      processIframeHandlers(element, ACTION.REMOVE);
      observer.disconnect();

      iframeObservers.forEach(o => o.disconnect());
      iframeObservers.clear();
    };
  }, [ref, handleClick]);
};
