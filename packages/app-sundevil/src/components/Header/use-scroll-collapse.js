/* eslint-disable no-param-reassign */
import { useEffect, useState } from "react";

export const useScrollCollapse = ({ ref, height }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsCollapsed(false);
      } else {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll, {
        capture: true,
        passive: true,
      });
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      // https://zeroheight.com/9f0b32a56/p/35defc-global-header
      ref.current.style.transition =
        "height 0.5s cubic-bezier(0.19, 1, 0.19, 1)";
      if (isCollapsed) {
        ref.current.style.height = "0px";
      } else {
        ref.current.style.height = height;
      }
    }
  }, [isCollapsed, ref]);
};
