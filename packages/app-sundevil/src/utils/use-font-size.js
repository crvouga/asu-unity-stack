/* eslint-disable */
import { useEffect, useState } from "react";

export const useFontSize = ref => {
  const [fontSize, setFontSize] = useState(null);

  useEffect(() => {
    const updateFontSize = () => {
      if (ref.current) {
        const computedStyle = window.getComputedStyle(ref.current);
        setFontSize(computedStyle.fontSize);
      }
    };

    const mutationObserver = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "style" ||
            mutation.attributeName === "class")
        ) {
          updateFontSize();
          break;
        }
      }
    });

    if (ref.current) {
      updateFontSize(); // Initial font size update

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
        element.addEventListener("mouseenter", updateFontSize);
        element.addEventListener("mouseleave", updateFontSize);
        element = element.parentElement;
      }
    }

    // Clean up the observer and event listeners on component unmount
    return () => {
      mutationObserver.disconnect();
      if (ref.current) {
        let element = ref.current;
        while (element) {
          element.removeEventListener("mouseenter", updateFontSize);
          element.removeEventListener("mouseleave", updateFontSize);
          element = element.parentElement;
        }
      }
    };
  }, [ref]);

  return fontSize;
};
