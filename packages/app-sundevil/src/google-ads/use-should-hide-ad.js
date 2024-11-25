// @ts-check
import { useWatchPredicate } from "../utils/use-watch-predicate";

/**
 *
 * @param {{ref: React.MutableRefObject<HTMLElement | null | undefined>}} param0
 * @returns {{style:React.CSSProperties, "aria-hidden": boolean, tabIndex: number}}
 */
export const useHideAdProps = ({ ref }) => {
  const hasImageElement = useWatchPredicate({
    // @ts-ignore
    ref,
    predicate: node => {
      const isImageElement = node.tagName.toUpperCase().includes("IMG");
      const containsImageElement = node.querySelector("img") !== null;
      return isImageElement || containsImageElement;
    },
  });

  const shouldHide = !hasImageElement;
  return {
    "style": shouldHide
      ? {
          opacity: 0,
          pointerEvents: "none",
          position: "fixed",
          top: "-10000px",
          left: "-10000px",
        }
      : {},
    "aria-hidden": shouldHide,
    "tabIndex": shouldHide ? -1 : 0,
  };
};
