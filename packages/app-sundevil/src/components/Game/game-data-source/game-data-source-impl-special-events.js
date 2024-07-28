import { stringToSportId } from "../../Sport/sport-id";
import { IGameDataSource } from "./game-data-source";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

const itemToGame = item => {
  return {
    id: item.id,
    gameType: item.game_type, // "home" | "away" | null
    ticketLink: item.ticketing_rsvp_url,
    ticketText: item.ticketing_rsvp_txt || "Buy Tickets",
    titleHref: item.field_cta,
    title: item.title,
    dateDay: new Date(parseInt(item.start_date, 10) * 1000)
      .getDate()
      .toString(),
    dateMonth: new Date(parseInt(item.start_date, 10) * 1000).toLocaleString(
      "default",
      { month: "short" }
    ),
    sportId: stringToSportId(item.sport_tag),
    sportName: item.sport_tag,
    startDate: new Date(parseInt(item.start_date, 10) * 1000).toISOString(),
    homeTeamName: "Sun Devils",
    homeTeamLogoSrc:
      "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
    awayTeamName: "Sun Devils",
    awayTeamLogoSrc:
      "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
    time: new Date(parseInt(item.start_date, 10) * 1000).toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    ),
    venue: item.locations,
    subtitleChip: "Gameday",
    admissionCost: item.field_cost_value,
    eventType: item.game_type,
  };
};

export class GameDataSourceSpecialEvents extends IGameDataSource {
  // eslint-disable-next-line class-methods-use-this
  constructor({ url, shouldLog }) {
    super();
    this.url = url;
    this.shouldLog = shouldLog;
  }

  async findMany(input) {
    const response = await fetch(
      this.url ??
        "https://dev-web-sda.ws.asu.edu/feeds/json/node/special_events"
    );
    const data = await response.json();
    const items = Array.isArray(data) ? data : [data];
    const games = items.map(itemToGame);
    const dataSource = new GameDataSourceStatic({
      games,
      shouldLog: this.shouldLog,
    });

    return dataSource.findMany(input);
  }
}

window.GameDataSourceSpecialEvents = GameDataSourceSpecialEvents;
