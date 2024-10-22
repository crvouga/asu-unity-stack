/* eslint-disable no-param-reassign */
import { useLayoutEffect } from "react";

import { throttle } from "../../utils/throttle";

/**
 *
 * @param {{
 * ref: React.MutableRefObject<HTMLDivElement | null>,
 * height: string | number,
 * scrollTarget?: HTMLElement | Window
 * }} input
 */
export const useScrollCollapse = ({ ref, height, scrollTarget = window }) => {
  useLayoutEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const scrollYPosition =
          scrollTarget instanceof Window
            ? scrollTarget.scrollY
            : scrollTarget.scrollTop;
        if (scrollYPosition === 0) {
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
