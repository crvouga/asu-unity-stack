import {
  initGamesNavigationComponent,
  initGameTableComponent,
  initHeaderComponent,
} from "./core/init-component";

export * from "./components";

// @ts-ignore
window.initHeaderComponent = initHeaderComponent;

// @ts-ignore
window.initGameTableComponent = initGameTableComponent;

// @ts-ignore
window.initGamesNavigationComponent = initGamesNavigationComponent;

export {
  initGamesNavigationComponent,
  initGameTableComponent,
  initHeaderComponent,
};
