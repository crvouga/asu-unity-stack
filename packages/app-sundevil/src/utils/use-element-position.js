import { useEffect, useState } from "react";

export const useElementPosition = ref => {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (ref.current) {
      const handlePosition = () => {
        const { left, top, right, bottom } =
          ref.current.getBoundingClientRect();

        setPosition({
          left,
          top,
          right,
          bottom,
        });
      };

      handlePosition();

      window.addEventListener("resize", handlePosition);
      window.addEventListener("scroll", handlePosition);

      return () => {
        window.removeEventListener("resize", handlePosition);
        window.removeEventListener("scroll", handlePosition);
      };
    }
  }, [ref]);

  return position;
};

export const useElementContentPosition = ref => {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (ref.current) {
      const handlePosition = () => {
        const elementRect = ref.current.getBoundingClientRect();
        const parentRect = ref.current.offsetParent.getBoundingClientRect();

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
      };

      handlePosition();

      window.addEventListener("resize", handlePosition);
      window.addEventListener("scroll", handlePosition);

      return () => {
        window.removeEventListener("resize", handlePosition);
        window.removeEventListener("scroll", handlePosition);
      };
    }
    return () => {};
  }, [ref]);

  return position;
};

export const useElementDimensions = ref => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (ref.current) {
      const handleDimensions = () => {
        const { width, height } = ref?.current?.getBoundingClientRect?.() ?? {
          width: 0,
          height: 0,
        };
        setDimensions({ width, height });
      };

      handleDimensions();

      window.addEventListener("resize", handleDimensions);
      window.addEventListener("scroll", handleDimensions);

      return () => {
        window.removeEventListener("resize", handleDimensions);
        window.removeEventListener("scroll", handleDimensions);
      };
    }
  }, [ref]);

  return dimensions;
};

export const useElementContentDimensions = ref => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (ref.current) {
      const handleDimensions = () => {
        const { width, height } = ref?.current?.getBoundingClientRect?.() ?? {
          width: 0,
          height: 0,
        };

        const paddingLeft = parseInt(
          window.getComputedStyle(ref.current).paddingLeft,
          10
        );
        const paddingRight = parseInt(
          window.getComputedStyle(ref.current).paddingRight,
          10
        );
        const paddingTop = parseInt(
          window.getComputedStyle(ref.current).paddingTop,
          10
        );
        const paddingBottom = parseInt(
          window.getComputedStyle(ref.current).paddingBottom,
          10
        );
        setDimensions({
          width: width - paddingLeft - paddingRight,
          height: height - paddingTop - paddingBottom,
        });
      };

      handleDimensions();

      window.addEventListener("resize", handleDimensions);
      window.addEventListener("scroll", handleDimensions);

      return () => {
        window.removeEventListener("resize", handleDimensions);
        window.removeEventListener("scroll", handleDimensions);
      };
    }
  }, [ref]);

  return dimensions;
};
