/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import { useEffect } from "react";

import { useId } from "../utils/use-id";

function appendInnerHTML(element, html) {
  if (!element) {
    return () => {};
  }
  if (typeof html !== "string") {
    return () => {};
  }
  const newContent = document.createRange().createContextualFragment(html);

  const newNodes = Array.from(newContent.childNodes);
  element.append(newContent);

  const cleanUp = () => {
    newNodes.forEach(child => {
      if (child.parentNode) {
        child.remove();
      }
    });
  };

  return cleanUp;
}

export function setInnerHTML(element, html) {
  if (!element) {
    return () => {};
  }
  if (typeof html !== "string") {
    return () => {};
  }

  element.innerHTML = "";
  return appendInnerHTML(element, html);
}

/**
 *
 * @param {{
 * googleAdBodyNode: HTMLDivElement,
 * googleAdHead: string,
 * googleAdBody: string,
 * componentId: string | number
 * }} input
 * @returns {Promise<() => void>}
 */
async function initGoogleAds({ googleAdBodyNode, googleAdHead, googleAdBody }) {
  const cleanUps = [];

  const flagId = `googleHeadFlagId:${btoa(JSON.stringify(googleAdHead))}`;
  if (!document.getElementById(flagId)) {
    cleanUps.push(appendInnerHTML(document.head, googleAdHead));
    const flag = document.createElement("div");
    flag.id = flagId;
    document.head.append(flag);
  }

  cleanUps.push(setInnerHTML(googleAdBodyNode, googleAdBody));

  const cleanUp = () => {
    cleanUps.forEach(cleanup => cleanup());
  };
  return cleanUp;
}

/**
 *
 * @param {{
 * ref: React.MutableRefObject<HTMLDivElement | undefined>,
 * googleAdHead: string,
 * googleAdBody: string,
 * componentId: string | number
 * }} input
 * @returns {void}
 */
export const useGoogleAds = ({ ref, googleAdHead, googleAdBody }) => {
  const componentId = useId();
  useEffect(() => {
    let cleanUp;
    initGoogleAds({
      componentId,
      googleAdBodyNode: ref.current,
      googleAdBody,
      googleAdHead,
    }).then(cleanUpNew => {
      cleanUp = cleanUpNew;
    });
    return () => {
      if (typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }, []);
};
