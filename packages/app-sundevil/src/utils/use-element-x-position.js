import { useCallback, useEffect, useRef, useState } from "react";

export const useElementXPosition = elementRef => {
  const [xPosition, setXPosition] = useState({
    left: 0,
    right: 0,
  });

  const rafId = useRef(null);
  const lastXPosition = useRef(xPosition);

  const handleXPosition = useCallback(() => {
    if (elementRef.current) {
      const { left, right } = elementRef.current.getBoundingClientRect();

      if (
        left !== lastXPosition.current.left ||
        right !== lastXPosition.current.right
      ) {
        lastXPosition.current = { left, right };
        setXPosition({ left, right });
      }
    }
  }, [elementRef]);

  const debouncedHandleXPosition = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(handleXPosition);
  }, [handleXPosition]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(debouncedHandleXPosition);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    // Initial position calculation
    handleXPosition();

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      resizeObserver.disconnect();
    };
  }, [elementRef, handleXPosition, debouncedHandleXPosition]);

  return xPosition;
};
