/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */

import React, { useEffect, useRef } from "react";

/**
 * @type {React.FC<import("../props").SectionHeaderProps >}
 */
export const VariantGoogleAd = props => {
  const { sponsorBlock } = props;
  /** @type {React.MutableRefObject<HTMLDivElement | undefined>} */
  const rootRef = useRef();

  const run = async () => {
    const htmlString = sponsorBlock.googleAdHead;

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

    if (rootRef.current) {
      rootRef.current.innerHTML = sponsorBlock.googleAdBody;
    }
  };

  useEffect(() => {
    run();
  }, []);

  return <div ref={rootRef} />;
};
