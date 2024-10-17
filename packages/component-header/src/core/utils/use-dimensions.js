import { useEffect, useLayoutEffect, useState } from "react";

import { throttleFn } from "../../../../../shared";

export const useDimensionsBody = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions, {
      passive: true,
    });
    return () => {
      window.removeEventListener("resize", updateDimensions, {
        passive: true,
      });
    };
  }, []);

  return dimensions;
};

export const useDimensions = ref => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const { width, height } = ref?.current?.getBoundingClientRect?.() ?? {
        width: 0,
        height: 0,
      };
      setDimensions({ width, height });
    };

    updateDimensions();

    const updateDimensionsThrottled = throttleFn(updateDimensions, 250);

    window.addEventListener("resize", updateDimensionsThrottled, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", updateDimensionsThrottled, {
        passive: true,
      });
    };
  }, [ref]);

  return dimensions;
};
