import { useEffect, useState, useCallback } from "react";

const safeQuerySelector = selector => {
  try {
    return document.querySelector(selector) ?? null;
  } catch (error) {
    return null;
  }
};

/**
 * @param {{
 *  navbarSelector?: string,
 *  stickyElementSelector?: string
 *  navbarPortalSelector?: string
 * }} options
 */
export const useShowPortalElement = options => {
  const [showPortalElement, setShowPortalElement] = useState(false);

  const checkOverlap = useCallback(() => {
    const navbar = safeQuerySelector(
      options.navbarSelector
    )?.getBoundingClientRect();
    const stickyElement = safeQuerySelector(
      options.stickyElementSelector
    )?.getBoundingClientRect();

    setShowPortalElement(navbar.bottom > stickyElement.top);
  }, [showPortalElement]);

  useEffect(() => {
    checkOverlap();

    window.addEventListener("scroll", checkOverlap);

    return () => {
      window.removeEventListener("scroll", checkOverlap);
    };
  }, [checkOverlap]);

  return showPortalElement;
};
