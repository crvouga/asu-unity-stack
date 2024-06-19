// @ts-check
import { useEffect, useRef, useState } from "react";

/**
 *
 * @param {number} numElements
 * @returns {{
 *  elementsRef: React.MutableRefObject<HTMLElement[]>,
 *  maxWidth: number
 * }}
 */
export const useMaxWidth = numElements => {
  const [maxWidth, setMaxWidth] = useState(0);
  /**
   * @type {React.MutableRefObject<HTMLElement[]>}
   */
  const elementsRef = useRef([]);

  useEffect(() => {
    if (elementsRef.current.length) {
      const widths = elementsRef.current.map(ref => ref.offsetWidth);
      setMaxWidth(Math.max(...widths));
    }
  }, [numElements]);

  return {
    elementsRef,
    maxWidth,
  };
};
