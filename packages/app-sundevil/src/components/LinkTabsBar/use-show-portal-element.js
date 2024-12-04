import { useCallback, useEffect, useState } from "react";

import { querySelectorSafe } from "../../utils/query-selector-safe";
import { throttle } from "../../utils/throttle";

/**
 * @param {{
 *  stickyElementSelector?: string
 *  navbarPortalSelector?: string
 *  scrollTarget?: HTMLElement
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
    console.log("useEffect");
    const scrollTarget = options?.scrollTarget || window;

    checkOverlap();

    const checkOverlapThrottled = throttle(checkOverlap, 250);
    scrollTarget.addEventListener("scroll", checkOverlapThrottled, {
      passive: true,
    });

    return () => {
      scrollTarget.removeEventListener("scroll", checkOverlapThrottled, {
        passive: true,
      });
    };
  }, [checkOverlap]);

  return showPortalElement;
};
