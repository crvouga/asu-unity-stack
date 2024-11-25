import { useEffect, useState } from "react";

/**
 * Hook to watch for changes on a ref's current node and run a predicate function.
 * @param {Object} options - The options object.
 * @param {React.MutableRefObject<HTMLDivElement | undefined>} options.ref - The ref to watch.
 * @param {(node: HTMLDivElement) => boolean} options.predicate - The predicate function to evaluate.
 * @returns {boolean} - The result of the predicate function.
 */
export function useWatchPredicate({ ref, predicate }) {
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (!ref?.current) return () => {};

    const observer = new MutationObserver(() => {
      const currentNode = ref.current;
      if (currentNode) {
        setResult(predicate(currentNode));
      }
    });

    const currentNode = ref.current;
    if (currentNode) {
      setResult(predicate(currentNode)); // Initial evaluation
      observer.observe(currentNode, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, predicate]);

  return result;
}
