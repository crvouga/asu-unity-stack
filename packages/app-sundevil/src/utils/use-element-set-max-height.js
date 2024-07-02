import { useEffect, useState } from "react";

const elementsRegistry = {};

/**
 * Returns the max height of the all of the elements registered with the same set id.
 */
export const useElementSetMaxHeight = ({ elementSetId, elementRef }) => {
  const [maxHeight, setMaxHeight] = useState(null);

  useEffect(() => {
    if (!elementsRegistry[elementSetId]) {
      elementsRegistry[elementSetId] = [];
    }

    const elementEntry = { ref: elementRef, height: 0 };
    elementsRegistry[elementSetId].push(elementEntry);

    const updateHeights = () => {
      elementEntry.height = elementRef.current
        ? elementRef.current.getBoundingClientRect().height
        : 0;
      const newMaxHeight = Math.max(
        ...elementsRegistry[elementSetId].map(entry => entry.height)
      );
      setMaxHeight(newMaxHeight);
    };

    updateHeights();

    window.addEventListener("resize", updateHeights);

    return () => {
      elementsRegistry[elementSetId] = elementsRegistry[elementSetId].filter(
        entry => entry !== elementEntry
      );
      window.removeEventListener("resize", updateHeights);
    };
  }, [elementSetId, elementRef]);

  return maxHeight;
};
