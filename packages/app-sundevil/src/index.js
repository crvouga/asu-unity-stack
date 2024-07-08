/* eslint-disable prettier/prettier */
// @ts-check
import * as initComponent from "./core/init-component";

export * from "./core/init-component";

Object.keys(initComponent).forEach(key => {
  window[key] = initComponent[key];
});
