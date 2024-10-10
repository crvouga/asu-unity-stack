/* eslint-disable no-param-reassign */
import { useEffect, useState } from "react";

export const useScrollCollapse = ref => {
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
      if (isCollapsed) {
        ref.current.style.height = "0px";
        ref.current.style.transition = "height 0.3s ease-out";
      } else {
        ref.current.style.height = "24px";
        ref.current.style.transition = "height 0.3s ease-out";
      }
    }
  }, [isCollapsed, ref]);
};
