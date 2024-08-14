import { cleanString } from "./utils/clean-string";
import { isEqual } from "./utils/is-equal";

/**
 * This is a special ID for select inputs that represents all items
 */
export const ALL_ID = "all";
export const isAllId = id => isEqual(cleanString, ALL_ID, id);
