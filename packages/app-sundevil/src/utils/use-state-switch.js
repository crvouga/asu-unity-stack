/**
 * @template {TState}
 * @param {boolean} enableLeft
 * @param {TState} initialState
 * @returns {[TState, Function]}
 */
export const useStateSwitch = (
  enableLeft,
  initialState,
  useStateLeft,
  useStateRight
) => {
  const queryState = useStateLeft(initialState);
  const localState = useStateRight(initialState);

  return enableLeft ? queryState : localState;
};
