/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */

import React, { forwardRef, useEffect, useRef } from "react";

/**
 *
 * @param {{
 * ref: React.MutableRefObject<HTMLDivElement | undefined>,
 * sponsorBlock: import("../props").SponsorBlock
 * }} input
 */
const useGoogleAds = ({ ref, sponsorBlock }) => {
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

    if (ref.current) {
      ref.current.innerHTML = sponsorBlock.googleAdBody;
    }
  };

  useEffect(() => {
    run();
  }, []);
};

/**
 * @type {React.FC<import("../props").SectionHeaderProps >}
 */
export const VariantGoogleAd = forwardRef((props, propsRef) => {
  const { sponsorBlock } = props;
  /** @type {React.MutableRefObject<HTMLDivElement | undefined>} */
  const rootRef = useRef();
  const ref = propsRef ?? rootRef;

  useGoogleAds({ ref, sponsorBlock });

  return <div ref={ref} />;
});
