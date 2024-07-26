import { useLayoutEffect, useState } from "react";

import { stringToSportId } from "./sport-id";

const getCurrentUrlSportId = () => {
  return stringToSportId(window.location.href);
};
// @ts-ignore
window.getCurrentUrlSportId = getCurrentUrlSportId;

/** @type {(callback?: (urlSportId: string | null) => void) => string | null} */
export const useUrlSportId = callback => {
  const [sportId, setSportId] = useState(null);
  useLayoutEffect(() => {
    const urlSportId = getCurrentUrlSportId();
    setSportId(urlSportId);
    if (callback) {
      callback?.(urlSportId);
    }
  }, []);

  return sportId;
};
