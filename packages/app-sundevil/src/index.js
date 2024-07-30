/* eslint-disable prettier/prettier */
// @ts-check
// eslint-disable-next-line camelcase
import { HACK_patchRemoveChild } from "./hack-patch-remove-child";
import * as initComponent from "./init-component";

export * from "./init-component";

Object.keys(initComponent).forEach(key => {
  window[key] = initComponent[key];
});

// @ts-ignore
// eslint-disable-next-line camelcase
window.HACK_patchRemoveChild = HACK_patchRemoveChild;
