// @ts-check
import { useEffect, useRef, useState } from "react";

/**
 *
 * @param {number} numElements
 * @returns {{
 *  elementRefs: React.MutableRefObject<HTMLElement[]>,
 *  maxWidth: number
 * }}
 */
export const useMaxWidth = numElements => {
  const [maxWidth, setMaxWidth] = useState(0);
  /**
   * @type {React.MutableRefObject<HTMLElement[]>}
   */
  const elementRefs = useRef([]);

  useEffect(() => {
    if (elementRefs.current.length) {
      const widths = elementRefs.current.map(ref => ref.offsetWidth);
      setMaxWidth(Math.max(...widths));
    }
  }, [numElements]);

  return {
    elementRefs,
    maxWidth,
  };
};

export default useMaxWidth;
