/* eslint-disable no-param-reassign */
import { useLayoutEffect } from "react";

import { throttle } from "../../utils/throttle";

export const useScrollCollapse = ({ ref, height }) => {
  useLayoutEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        if (window.scrollY === 0) {
          ref.current.style.height = height;
        } else {
          ref.current.style.height = "0px";
        }
      }
    };

    onScroll();

    if (ref.current) {
      // https://zeroheight.com/9f0b32a56/p/35defc-global-header
      ref.current.style.transition =
        "height 0.5s cubic-bezier(0.19, 1, 0.19, 1)";
    }

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
};
