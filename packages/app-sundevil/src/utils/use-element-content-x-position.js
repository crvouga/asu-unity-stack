import { useCallback, useEffect, useRef, useState } from "react";

export const useElementContentXPosition = elementRef => {
  const [contentXPosition, setContentXPosition] = useState({
    left: 0,
    right: 0,
  });

  const rafId = useRef(null);
  const lastContentXPosition = useRef(contentXPosition);

  const handleContentXPosition = useCallback(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const offsetParentRect = elementRef.current.offsetParent
        ? elementRef.current.offsetParent.getBoundingClientRect()
        : { left: 0 };
      const { scrollLeft } = elementRef.current;
      const computedStyle = window.getComputedStyle(elementRef.current);
      const paddingLeft = parseFloat(computedStyle.paddingLeft);
      const paddingRight = parseFloat(computedStyle.paddingRight);
      const contentWidth = rect.width - paddingLeft - paddingRight;

      const baseX = rect.left - offsetParentRect.left;
      const left = baseX + paddingLeft - scrollLeft;
      const right = left + contentWidth;

      if (
        left !== lastContentXPosition.current.left ||
        right !== lastContentXPosition.current.right
      ) {
        lastContentXPosition.current = { left, right };
        setContentXPosition({ left, right });
      }
    }
  }, [elementRef]);

  const debouncedHandleContentXPosition = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(handleContentXPosition);
  }, [handleContentXPosition]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(debouncedHandleContentXPosition);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    window.addEventListener("resize", debouncedHandleContentXPosition);

    // Initial position calculation
    handleContentXPosition();

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", debouncedHandleContentXPosition);
    };
  }, [elementRef, handleContentXPosition, debouncedHandleContentXPosition]);

  return contentXPosition;
};
