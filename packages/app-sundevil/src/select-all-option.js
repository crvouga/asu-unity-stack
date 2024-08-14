// @ts-check
import { cleanString } from "./utils/clean-string";
import { isEqual } from "./utils/is-equal";

/**
 * This is a very special ID for select inputs that represents all items
 */
export const ALL_ID = "all";
export const isAllId = id => isEqual(cleanString, ALL_ID, id);
export const ALL_LABEL = "All";

// @ts-ignore
window.isAllId = isAllId;
// @ts-ignore
window.ALL_ID = ALL_ID;
// @ts-ignore
window.ALL_LABEL = ALL_LABEL;
