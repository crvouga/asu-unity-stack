import { useEffect, useLayoutEffect, useRef, useState } from "react";

const encode = value => btoa(JSON.stringify(value));
const decode = encoded => JSON.parse(atob(encoded));

const pushQueryParam = (key, value) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set(key, value);
  window.history.pushState(
    null,
    "",
    `${window.location.pathname}?${urlParams.toString()}`
  );
};

const getQueryParam = key => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

/** @type {(input: {queryKey: string, debouncePushMs?: number}) => typeof import('react').useState} */
export const createUseQueryState = ({ queryKey, debouncePushMs }) => {
  /** @type {typeof import('react').useState} */
  const useQueryState = initial => {
    const [state, setState] = useState(initial);

    useLayoutEffect(() => {
      const value = getQueryParam(queryKey);
      if (value) {
        setState(decode(value));
      }
    }, [queryKey]);

    useEffect(() => {
      const onLocationChange = () => {
        const value = getQueryParam(queryKey);
        if (value) {
          setState(decode(value));
        }
      };

      window.addEventListener("popstate", onLocationChange);
    }, []);

    const timeoutId = useRef(null);
    const setQueryState = valueOrFunction => {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        const valueNew =
          typeof valueOrFunction === "function"
            ? valueOrFunction(state)
            : valueOrFunction;
        pushQueryParam(queryKey, encode(valueNew));
      }, debouncePushMs ?? 0);

      setState(statePrev =>
        typeof valueOrFunction === "function"
          ? valueOrFunction(statePrev)
          : valueOrFunction
      );
    };

    return [state, setQueryState];
  };

  return useQueryState;
};
