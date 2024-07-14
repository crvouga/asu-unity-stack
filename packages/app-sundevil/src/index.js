/* eslint-disable prettier/prettier */
// @ts-check
import * as initComponent from "./init-component";

export * from "./init-component";

Object.keys(initComponent).forEach(key => {
  window[key] = initComponent[key];
});
