// @ts-check
import { useEffect, useState } from "react";

/**
 * @template TState
 * @typedef {{
 *   subscribe: (subscriber: (state: TState) => void) => () => void;
 *   getSnapshot: () => TState;
 *   setState: (callback: (prevState: TState) => TState) => void;
 * }} Store<TState>
 */

/**
 * @template TState
 * @param {TState} initialState
 * @returns {Store<TState>}
 */
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
    setState(callback) {
      state = callback(state);
      subscribers.forEach(subscriber => subscriber(state));
    },
  };
};

/**
 * @template TState
 * @param {Store<TState>} store
 * @returns {TState}
 */
export const useStore = store => {
  const [state, setState] = useState(store.getSnapshot());
  useEffect(() => store.subscribe(setState), [store]);
  return state;
};
