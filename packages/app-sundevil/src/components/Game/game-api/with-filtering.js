import { IGameAPI } from "./game-api";
import { GameAPIStatic } from "./game-api-impl-static";

export class WithFiltering extends IGameAPI {
  constructor(gameAPI) {
    super();
    this.gameAPI = gameAPI;
  }

  async findMany(input) {
    const found = await this.gameAPI.findMany(input);
    const staticAPI = new GameAPIStatic({ games: found });
    const filtered = await staticAPI.findMany(input);
    return filtered;
  }
}
