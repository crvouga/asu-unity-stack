// @ts-check
import { useEffect, useState } from "react";

/**
 * @param {string} breakpoint // String breakpoint with "px"
 */

export const useBreakpoint = breakpoint => {
  const [query, setQuery] = useState(() =>
    window?.matchMedia(`(max-width: ${breakpoint})`)
  );

  const [isMatch, setIsMatch] = useState(query?.matches);

  useEffect(() => {
    if (!query) {
      setQuery(window?.matchMedia(`(max-width: ${breakpoint})`));
    }
  }, [breakpoint]);

  const setMatch = e => {
    setIsMatch(e.matches);
  };

  useEffect(() => {
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
