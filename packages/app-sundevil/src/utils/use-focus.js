import { useEffect, useState } from "react";

const ensureArray = x => (Array.isArray(x) ? x : [x]);

export const useFocus = refOrRefs => {
  const refs = ensureArray(refOrRefs);

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const handleFocusIn = () => setFocused(true);
    const handleFocusOut = event => {
      if (
        !refs.some(
          ref => ref.current && ref.current.contains(event.relatedTarget)
        )
      ) {
        setFocused(false);
      }
    };

    refs.forEach(ref => {
      const currentRef = ref.current;
      if (currentRef) {
        currentRef.addEventListener("focusin", handleFocusIn);
        currentRef.addEventListener("focusout", handleFocusOut);
      }
    });

    return () => {
      refs.forEach(ref => {
        const currentRef = ref.current;
        if (currentRef) {
          currentRef.removeEventListener("focusin", handleFocusIn);
          currentRef.removeEventListener("focusout", handleFocusOut);
        }
      });
    };
  }, [refs]);

  return focused;
};
