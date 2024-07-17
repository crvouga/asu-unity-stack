// @ts-check
import { useEffect, useState } from "react";

/**
 * @param {string} breakpoint // String breakpoint with "px"
 */

export const useBreakpoint = breakpoint => {
  const query = window?.matchMedia(`(max-width: ${breakpoint})`);
  const [isMatch, setIsMatch] = useState(query?.matches);

  const setMatch = e => {
    setIsMatch(e.matches);
  };

  useEffect(() => {
    query.addEventListener("change", setMatch);
    return () => query.removeEventListener("change", setMatch);
  }, []);

  return isMatch;
};
