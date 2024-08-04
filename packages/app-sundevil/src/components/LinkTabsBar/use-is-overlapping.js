import { useEffect, useState, useCallback } from "react";

/**
 * @param {{
 *  navbarSelector: string,
 *  stickyElementSelector: string
 * }} options
 */
export const useIsOverlapped = options => {
  const [isOverlapping, setIsOverlapping] = useState(false);

  const checkOverlap = useCallback(() => {
    if (
      typeof options !== "object" ||
      typeof options.navbarSelector !== "string" ||
      typeof options.stickyElementSelector !== "string"
    ) {
      return;
    }

    const element1 = document.querySelector(options.navbarSelector);
    const element2 = document.querySelector(options.stickyElementSelector);

    if (!element1 || !element2) {
      return;
    }

    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    const isNowOverlapping = rect1.bottom > rect2.top;

    if (isNowOverlapping !== isOverlapping) {
      setIsOverlapping(isNowOverlapping);
    }
  }, [options, isOverlapping]);

  useEffect(() => {
    checkOverlap();

    window.addEventListener("scroll", checkOverlap);

    return () => {
      window.removeEventListener("scroll", checkOverlap);
    };
  }, [checkOverlap]);

  return isOverlapping;
};
