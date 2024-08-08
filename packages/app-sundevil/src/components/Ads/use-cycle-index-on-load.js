// @ts-check
import { useEffect, useState } from "react";

/**
 * Cycles the current index within the bounds of length.
 * @param {number} currentIndex - The current index.
 * @param {number} length - The maximum index (exclusive).
 * @returns {number} The cycled index.
 */
const cycleIndex = (currentIndex, length) => {
  return currentIndex % length;
};

/**
 *
 * @param {number} index
 * @param {number} length
 * @returns {number}
 */
const clampIndex = (index, length) => {
  return Math.min(Math.max(0, index), length);
};

/**
 * Advances to the next index, cycling if necessary.
 * @param {number} currentIndex - The current index.
 * @param {number} length - The maximum index (exclusive).
 * @returns {number} The next index.
 */
const toNextIndex = (currentIndex, length) => {
  return clampIndex(cycleIndex(currentIndex + 1, length), length);
};

/**
 * A custom hook that cycles through indices on every page load.
 * @param {{ length: number, storageKey: string, storage: Storage, }} input - The input parameters.
 * @returns {number} The current index in the cycle.
 */
export const useCycleIndexOnLoad = ({ length, storageKey, storage }) => {
  const [currentIndex] = useState(() => {
    const storedIndex = storage.getItem(storageKey);
    if (!storedIndex) {
      return 0;
    }
    const parsedIndex = Number(storedIndex);
    if (Number.isNaN(parsedIndex)) {
      return 0;
    }
    const clamped = clampIndex(parsedIndex, length);
    return clamped;
  });

  useEffect(() => {
    const onLoad = () => {
      const nextIndex = toNextIndex(currentIndex, length);
      storage.setItem(storageKey, nextIndex.toString());
    };

    // Check if document is already loaded
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      onLoad();
    } else {
      window.addEventListener("DOMContentLoaded", onLoad);
    }

    return () => {
      window.removeEventListener("DOMContentLoaded", onLoad);
    };
  }, [currentIndex, length, storageKey, storage]);

  return currentIndex;
};
