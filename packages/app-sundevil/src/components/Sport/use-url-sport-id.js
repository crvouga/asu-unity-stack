import { useLayoutEffect, useState } from "react";

import { getCurrentUrlSportId } from "./sport-id";

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
