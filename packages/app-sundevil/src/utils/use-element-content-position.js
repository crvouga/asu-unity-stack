import { useCallback, useEffect, useRef, useState } from "react";

export const useElementContentPosition = elementRef => {
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
      const elementRect = elementRef.current.getBoundingClientRect();
      const parentRect =
        elementRef.current.offsetParent?.getBoundingClientRect() ?? {
          left: 0,
          top: 0,
        };

      const style = window.getComputedStyle(elementRef.current);
      const paddingLeft = parseFloat(style.paddingLeft);
      const paddingRight = parseFloat(style.paddingRight);

      const leftContent = elementRect.left - parentRect.left + paddingLeft;
      const rightContent = elementRect.right - parentRect.left - paddingRight;
      const topContent = elementRect.top - parentRect.top;
      const bottomContent = elementRect.bottom - parentRect.top;

      const newPosition = {
        left: leftContent,
        top: topContent,
        right: rightContent,
        bottom: bottomContent,
      };

      // Only update if position has changed
      if (
        newPosition.left !== lastPosition.current.left ||
        newPosition.top !== lastPosition.current.top ||
        newPosition.right !== lastPosition.current.right ||
        newPosition.bottom !== lastPosition.current.bottom
      ) {
        lastPosition.current = newPosition;
        setPosition(newPosition);
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
      if (elementRef.current.offsetParent) {
        resizeObserver.observe(elementRef.current.offsetParent);
      }
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
