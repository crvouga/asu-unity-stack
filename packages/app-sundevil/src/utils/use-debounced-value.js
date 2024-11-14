import { useEffect, useState } from "react";

export const useDebouncedValue = (value, delay = 300) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setState(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return state;
};
