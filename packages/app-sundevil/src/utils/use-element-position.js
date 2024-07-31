import { useCallback, useEffect, useRef, useState } from "react";

export const useElementPosition = elementRef => {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });

  const rafId = useRef(null);
  const lastPosition = useRef(position);

  const handlePosition = useCallback(() => {
    if (elementRef.current) {
      const { left, top, right, bottom } =
        elementRef.current.getBoundingClientRect();

      if (
        left !== lastPosition.current.left ||
        top !== lastPosition.current.top ||
        right !== lastPosition.current.right ||
        bottom !== lastPosition.current.bottom
      ) {
        lastPosition.current = { left, top, right, bottom };
        setPosition({ left, top, right, bottom });
      }
    }
  }, [elementRef]);

  const debouncedHandlePosition = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(handlePosition);
  }, [handlePosition]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(debouncedHandlePosition);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    window.addEventListener("scroll", debouncedHandlePosition, {
      passive: true,
    });

    // Initial position calculation
    handlePosition();

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("scroll", debouncedHandlePosition);
    };
  }, [elementRef, handlePosition, debouncedHandlePosition]);

  return position;
};
