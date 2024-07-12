import { useEffect, useState } from "react";

const elementsRegistry = {};

/**
 * Returns the max width and height of all the elements registered with the same set id.
 */
export const useElementSetMaxDimensions = ({ elementSetId, elementRef }) => {
  const [maxDimensions, setMaxDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!elementsRegistry[elementSetId]) {
      elementsRegistry[elementSetId] = [];
    }

    const elementEntry = { ref: elementRef, width: 0, height: 0 };
    elementsRegistry[elementSetId].push(elementEntry);

    const updateDimensions = () => {
      const { width, height } = elementRef.current
        ? elementRef.current.getBoundingClientRect()
        : { width: 0, height: 0 };
      elementEntry.width = width;
      elementEntry.height = height;

      const newMaxWidth = Math.max(
        ...elementsRegistry[elementSetId].map(entry => entry.width)
      );
      const newMaxHeight = Math.max(
        ...elementsRegistry[elementSetId].map(entry => entry.height)
      );
      setMaxDimensions({ width: newMaxWidth, height: newMaxHeight });
    };

    const observer = new MutationObserver(updateDimensions);

    if (elementRef.current) {
      observer.observe(elementRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      elementsRegistry[elementSetId] = elementsRegistry[elementSetId].filter(
        entry => entry !== elementEntry
      );
      window.removeEventListener("resize", updateDimensions);
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [elementSetId, elementRef]);

  return maxDimensions;
};
