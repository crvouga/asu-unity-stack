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

    // Ideally we would use this logic but it causes an infinite loop. Commenting out for now.
    // if (showPortalElement) {
    //   const shouldShow = navbarPortal.bottom > stickyElement.bottom;
    //   if (shouldShow !== showPortalElement) {
    //     setShowPortalElementThrottled(shouldShow);
    //   }
    //   return;
    // }

    const shouldShow = navbarPortal.bottom > stickyElement.top;

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
