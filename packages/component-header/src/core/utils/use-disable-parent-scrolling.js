import { useEffect, useRef } from "react";

/**
 * @type {(element: HTMLElement | null, disabled: boolean) => () => void}
 */
const disableParentScrolling = element => {
  let currentElement = element;
  const cleanUps = [];
  while (currentElement) {
    const curr = currentElement;
    curr.style.overflow = "hidden";
    cleanUps.push(() => {
      curr.style.overflow = "";
    });
    currentElement = curr.parentElement;
  }
  return () => {
    cleanUps.forEach(cleanup => cleanup());
  };
};

/**
 *
 * @type {(input: {disabled: boolean, elementRef: React.MutableRefObject<HTMLElement | null | undefined>}) => void}
 */
export const useDisableParentScrolling = ({ disabled, elementRef }) => {
  const cleanUpRef = useRef(() => {});
  useEffect(() => {
    if (disabled) {
      const element = elementRef?.current ?? null;
      cleanUpRef.current = disableParentScrolling(element, disabled);
    } else {
      cleanUpRef.current();
    }
    return () => {
      cleanUpRef.current();
    };
  }, [disabled]);
};
