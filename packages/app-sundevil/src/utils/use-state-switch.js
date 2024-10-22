/**
 * @template {TState}
 * @param {boolean} enableLeft
 * @param {TState} initialState
 * @returns {[TState, (value: TState) => void]}
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
