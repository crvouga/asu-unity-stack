import { useCallback, useEffect, useState } from "react";

export const useElementPosition = ref => {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });

  const handlePosition = useCallback(() => {
    if (ref.current) {
      const { left, top, right, bottom } = ref.current.getBoundingClientRect();
      setPosition({ left, top, right, bottom });
    }
  }, [ref]);

  useEffect(() => {
    handlePosition();

    window.addEventListener("resize", handlePosition);
    window.addEventListener("scroll", handlePosition, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", handlePosition);
      window.removeEventListener("scroll", handlePosition);
    };
  }, [handlePosition]);

  return position;
};

export const useElementContentPosition = ref => {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });

  const handlePosition = useCallback(() => {
    if (ref.current) {
      const elementRect = ref.current.getBoundingClientRect();
      const parentRect = ref.current.offsetParent?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
      };

      const paddingLeft = parseInt(
        window.getComputedStyle(ref.current).paddingLeft,
        10
      );
      const paddingRight = parseInt(
        window.getComputedStyle(ref.current).paddingRight,
        10
      );

      const leftContent = elementRect.left - parentRect.left + paddingLeft;
      const rightContent = elementRect.right - parentRect.left - paddingRight;
      const topContent = elementRect.top - parentRect.top;
      const bottomContent = elementRect.bottom - parentRect.top;

      setPosition({
        left: leftContent,
        top: topContent,
        right: rightContent,
        bottom: bottomContent,
      });
    }
  }, [ref]);

  useEffect(() => {
    handlePosition();

    window.addEventListener("resize", handlePosition);
    window.addEventListener("scroll", handlePosition, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", handlePosition);
      window.removeEventListener("scroll", handlePosition);
    };
  }, [handlePosition]);

  return position;
};

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
