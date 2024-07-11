import { IGameDataSource } from "./game-data-source";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

export class WithFiltering extends IGameDataSource {
  constructor(gameAPI) {
    super();
    this.gameAPI = gameAPI;
  }

  async findMany(input) {
    const found = await this.gameAPI.findMany(input);
    const staticAPI = new GameDataSourceStatic({ games: found });
    const filtered = await staticAPI.findMany(input);
    return filtered;
  }
}
