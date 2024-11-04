import { useEffect, useState } from "react";

export const Store = initialState => {
  const subscribers = new Set();
  let state = initialState;
  return {
    subscribe(subscriber) {
      subscribers.add(subscriber);
      return () => {
        subscribers.delete(subscriber);
      };
    },
    getSnapshot() {
      return state;
    },
    setState(newState) {
      state = newState;
      subscribers.forEach(subscriber => subscriber(state));
    },
  };
};

export const useStore = store => {
  const [state, setState] = useState(store.getSnapshot());
  useEffect(() => store.subscribe(setState), [store]);
  return state;
};
