import { useCallback, useEffect, useState } from "react";

import { querySelectorSafe } from "../../utils/query-selector-safe";

/**
 * @param {{
 *  stickyElementSelector?: string
 *  navbarPortalSelector?: string
 * }} options
 */
export const useShowPortalElement = options => {
  const [showPortalElement, setShowPortalElement] = useState(false);

  const checkOverlap = useCallback(() => {
    const navbarPortal = querySelectorSafe(
      options?.navbarPortalSelector
    )?.getBoundingClientRect();
    const stickyElement = querySelectorSafe(
      options?.stickyElementSelector
    )?.getBoundingClientRect();

    if (!navbarPortal || !stickyElement) {
      return;
    }

    const shouldShow = navbarPortal.bottom > stickyElement.top;

    if (shouldShow !== showPortalElement) {
      setShowPortalElement(shouldShow);
    }
  }, [showPortalElement, options]);

  useEffect(() => {
    checkOverlap();

    window.addEventListener("scroll", checkOverlap, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkOverlap, {
        passive: true,
      });
    };
  }, [checkOverlap]);

  return showPortalElement;
};
