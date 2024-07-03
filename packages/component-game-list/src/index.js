import {
  initGamesNavigationComponent,
  initGameTableComponent,
  initHeaderComponent,
  initGameListComponent,
} from "./core/init-component";

export * from "./components";

// @ts-ignore
window.initHeaderComponent = initHeaderComponent;

// @ts-ignore
window.initGameTableComponent = initGameTableComponent;

// @ts-ignore
window.initGamesNavigationComponent = initGamesNavigationComponent;

// @ts-ignore
window.initGameListComponent = initGameListComponent;

export {
  initGamesNavigationComponent,
  initGameTableComponent,
  initHeaderComponent,
  initGameListComponent,
};
