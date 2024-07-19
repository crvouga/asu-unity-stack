import { useEffect } from "react";

export const useStickyPositionEffect = stickyPosition => {
  useEffect(() => {
    if (
      typeof stickyPosition !== "object" ||
      typeof stickyPosition.navbarSelector !== "string" ||
      typeof stickyPosition.stickyElementSelector !== "string"
    ) {
      return () => {};
    }

    const navbar = document.querySelector(stickyPosition.navbarSelector);
    const stickyElement = document.querySelector(
      stickyPosition.stickyElementSelector
    );

    if (!navbar || !stickyElement) {
      return () => {};
    }

    const updateStickyPosition = () => {
      stickyElement.style.position = "sticky";
      stickyElement.style.top = `${navbar.offsetHeight}px`;
    };

    updateStickyPosition(); // Initial update

    // MutationObserver to watch for changes in the navbar's height
    const observer = new MutationObserver(() => {
      updateStickyPosition();
    });

    observer.observe(navbar, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [stickyPosition]);
};
