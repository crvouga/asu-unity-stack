import { useEffect, useLayoutEffect, useState } from "react";

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

    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
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

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", updateDimensions);
    };
  }, [ref]);

  return dimensions;
};
