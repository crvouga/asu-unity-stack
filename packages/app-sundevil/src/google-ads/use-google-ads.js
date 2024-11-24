/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import { useEffect } from "react";

/**
 *
 * @param {{
 * ref: React.MutableRefObject<HTMLDivElement | undefined>,
 * googleAdHead: string,
 * googleAdBody: string
 * }} input
 * @returns {void}
 */
export const useGoogleAds = ({ ref, googleAdHead, googleAdBody }) => {
  const run = async () => {
    const htmlString = googleAdHead;

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = htmlString;

    const scripts = tempContainer.querySelectorAll("script");

    for (const script of scripts) {
      const newScript = document.createElement("script");
      let loadPromise = Promise.resolve();
      if (script.src) {
        newScript.src = script.src;
        newScript.async = script.async;
        loadPromise = new Promise(resolve => {
          newScript.onload = resolve;
        });
      } else {
        newScript.textContent = script.textContent;
      }

      document.head.appendChild(newScript);

      await loadPromise;
    }

    if (ref.current) {
      ref.current.innerHTML = googleAdBody;
    }
  };

  useEffect(() => {
    run();
  }, []);
};
