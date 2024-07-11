import { IGameDataSource } from "./game-data-source";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

export class WithFiltering extends IGameDataSource {
  constructor(gameDataSource) {
    super();
    this.gameDataSource = gameDataSource;
  }

  async findMany(input) {
    const found = await this.gameDataSource.findMany(input);
    const staticAPI = new GameDataSourceStatic({ games: found });
    const filtered = await staticAPI.findMany(input);
    return filtered;
  }
}
