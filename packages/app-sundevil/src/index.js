/* eslint-disable prettier/prettier */
// @ts-check
// eslint-disable-next-line camelcase
import * as initComponent from "./init-component";
import * as patchRemoveChild from "./patch-remove-child";

export * from "./init-component";

Object.keys(initComponent).forEach(key => {
  window[key] = initComponent[key];
});

Object.keys(patchRemoveChild).forEach(key => {
  window[key] = patchRemoveChild[key];
});
