/* eslint-disable  */
import { useEffect, useState } from "react";

export const useColor = ref => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    const updateColor = () => {
      if (ref.current) {
        const computedStyle = window.getComputedStyle(ref.current);
        setColor(computedStyle.color);
      }
    };

    const mutationObserver = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "style" ||
            mutation.attributeName === "class")
        ) {
          updateColor();
          break;
        }
      }
    });

    if (ref.current) {
      updateColor(); // Initial color update

      // Observe the ref element and its ancestors
      let element = ref.current;
      while (element) {
        mutationObserver.observe(element, {
          attributes: true,
          attributeFilter: ["style", "class"],
        });
        element = element.parentElement;
      }

      // Add event listeners to all ancestor elements
      element = ref.current;
      while (element) {
        element.addEventListener("mouseenter", updateColor);
        element.addEventListener("mouseleave", updateColor);
        element = element.parentElement;
      }
    }

    // Clean up the observer and event listeners on component unmount
    return () => {
      mutationObserver.disconnect();
      if (ref.current) {
        let element = ref.current;
        while (element) {
          element.removeEventListener("mouseenter", updateColor);
          element.removeEventListener("mouseleave", updateColor);
          element = element.parentElement;
        }
      }
    };
  }, [ref]);

  return color;
};
