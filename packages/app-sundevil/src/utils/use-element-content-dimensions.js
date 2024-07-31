import { useCallback, useEffect, useState } from "react";

export const useElementContentDimensions = (ref, enabled = true) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const measureDimensions = useCallback(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      const style = window.getComputedStyle(ref.current);
      const paddingLeft = parseFloat(style.paddingLeft);
      const paddingRight = parseFloat(style.paddingRight);
      const paddingTop = parseFloat(style.paddingTop);
      const paddingBottom = parseFloat(style.paddingBottom);

      const newWidth = width - paddingLeft - paddingRight;
      const newHeight = height - paddingTop - paddingBottom;

      setDimensions(prev => {
        if (prev.width !== newWidth || prev.height !== newHeight) {
          return { width: newWidth, height: newHeight };
        }
        return prev;
      });
    }
  }, [ref]);

  useEffect(() => {
    if (!enabled || !ref.current) return () => {};

    const resizeObserver = new ResizeObserver(measureDimensions);
    resizeObserver.observe(ref.current);

    // Initial measurement
    measureDimensions();

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, enabled, measureDimensions]);

  return dimensions;
};
