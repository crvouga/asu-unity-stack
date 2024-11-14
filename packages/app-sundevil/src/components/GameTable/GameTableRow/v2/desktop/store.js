import { Store } from "../../../../../utils/store";

/**
 * @typedef {{
 *  hasTeamLogoByGameId: Record<string, boolean>;
 * }} State
 */

/**
 * @type {State}
 */
const initialState = {
  hasTeamLogoByGameId: {},
};

/**
 * @type {(state: State) => boolean}
 */
export const doesAnyRowHaveTeamLogo = state => {
  return Object.values(state.hasTeamLogoByGameId).some(Boolean);
};

/**
 * @type {(state: State, gameId: string) => boolean}
 */
export const doesRowHaveTeamLogo = (state, gameId) => {
  return Boolean(state?.hasTeamLogoByGameId?.[gameId] ?? false);
};

export const gameTableRowStore = Store(initialState);
