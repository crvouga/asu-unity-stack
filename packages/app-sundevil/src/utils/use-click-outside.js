// useClickOutside.js
import { useEffect } from "react";

export const useClickOutside = (refs, callback) => {
  useEffect(() => {
    const handleClickOutside = event => {
      const isOutside = refs.every(
        ref => ref.current && !ref.current.contains(event.target)
      );

      if (isOutside) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
};
