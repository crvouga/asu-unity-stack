import { useEffect, useRef } from "react";

export const useQuerySelector = selector => {
  const elementRef = useRef(null);

  useEffect(() => {
    const updateElement = () => {
      if (!selector || typeof selector !== "string") {
        elementRef.current = null;
        return;
      }

      try {
        const foundElement = document.querySelector(selector);
        elementRef.current = foundElement;
      } catch (error) {
        elementRef.current = null;
      }
    };

    updateElement(); // Run initially

    // Optionally add more event listeners if you want to react to DOM changes
    window.addEventListener("resize", updateElement);
    window.addEventListener("scroll", updateElement);

    return () => {
      window.removeEventListener("resize", updateElement);
      window.removeEventListener("scroll", updateElement);
    };
  }, [selector]);

  return elementRef;
};
