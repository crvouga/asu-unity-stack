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
      const { clientLeft, clientWidth, scrollLeft } = elementRef.current;
      const left = clientLeft - scrollLeft;
      const right = left + clientWidth;

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

    // Initial position calculation
    handleContentXPosition();

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      resizeObserver.disconnect();
    };
  }, [elementRef, handleContentXPosition, debouncedHandleContentXPosition]);

  return contentXPosition;
};
