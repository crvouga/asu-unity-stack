// @ts-check
import { useLayoutEffect, useState } from "react";

/**
 * @param {string} breakpoint // String breakpoint with "px"
 */

export const useBreakpoint = breakpoint => {
  const [query, setQuery] = useState(() =>
    window?.matchMedia(`(max-width: ${breakpoint})`)
  );

  const [isMatch, setIsMatch] = useState(query?.matches);

  useLayoutEffect(() => {
    if (!query) {
      setQuery(window?.matchMedia(`(max-width: ${breakpoint})`));
    }
  }, [breakpoint]);

  const setMatch = e => {
    setIsMatch(e.matches);
  };

  useLayoutEffect(() => {
    if (!query) {
      return () => {};
    }
    query.addEventListener("change", setMatch);
    return () => {
      query.removeEventListener("change", setMatch);
    };
  }, [query]);

  return isMatch;
};
