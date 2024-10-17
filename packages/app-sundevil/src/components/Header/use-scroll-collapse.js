/* eslint-disable no-param-reassign */
import { useEffect, useState } from "react";

import { throttle } from "../../utils/throttle";

export const useScrollCollapse = ({ ref, height }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCollapsed(window.scrollY !== 0);
    };

    const onScrollThrottled = throttle(onScroll, 300);

    window.addEventListener("scroll", onScrollThrottled, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScrollThrottled, {
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
