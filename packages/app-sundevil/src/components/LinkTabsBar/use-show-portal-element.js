import { useCallback, useEffect, useState } from "react";

import { cacheQuerySelector } from "../../utils/query-selector-cached";
import { querySelectorSafe } from "../../utils/query-selector-safe";

const querySelectorSafeAndCached = cacheQuerySelector(querySelectorSafe);

/**
 * @param {{
 *  stickyElementSelector?: string
 *  navbarPortalSelector?: string
 * }} options
 */
export const useShowPortalElement = options => {
  const [showPortalElement, setShowPortalElement] = useState(false);

  const checkOverlap = useCallback(() => {
    const navbarPortal = querySelectorSafeAndCached(
      options?.navbarPortalSelector
    )?.getBoundingClientRect();
    const stickyElement = querySelectorSafeAndCached(
      options?.stickyElementSelector
    )?.getBoundingClientRect();

    if (!navbarPortal || !stickyElement) {
      return;
    }

    const shouldShow = showPortalElement
      ? navbarPortal.bottom >= stickyElement.bottom
      : navbarPortal.bottom >= stickyElement.top;

    if (shouldShow !== showPortalElement) {
      setShowPortalElement(shouldShow);
    }
  }, [showPortalElement, options]);

  useEffect(() => {
    checkOverlap();

    window.addEventListener("scroll", checkOverlap, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkOverlap);
    };
  }, [checkOverlap]);

  return showPortalElement;
};
