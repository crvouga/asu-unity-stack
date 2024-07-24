// @ts-check
import { IGameDataSource } from "./game-data-source";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

/**
 *
 * @param {any} data
 * @returns {import("../game").Game | null}
 */
const mapNodeToGame = data => {
  if (typeof data !== "object" || data === null) {
    return null;
  }
  const startDate = new Date(data["very_start_date"]);
  const startDay = startDate?.getDate().toString();
  const startMonth = startDate?.toLocaleString("default", { month: "short" });
  const startTimeHour12 = startDate?.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const titleHref = data["alias-indexed"] ?? data.alias;

  const eventTypes = data["event_types"] ?? "";

  return {
    // @ts-ignore
    id: data?.nid,
    gameType: data.game_type,
    sportId: data.sport_tag,
    sportName: data.sport_tag,
    // @ts-ignore
    dateDay: startDay,
    // @ts-ignore
    dateMonth: startMonth,
    title: data.title,
    titleHref,
    homeTeamName: "Arizona State Sun Devils",
    homeTeamLogoSrc:
      "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
    awayTeamName: "Arizona State Sun Devils",
    awayTeamLogoSrc:
      "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
    // @ts-ignore
    time: startTimeHour12,
    venue: data.locations,
    ticketLink: data.ticketing_rsvp_url,
    ticketText: data.ticketing_rsvp_txt,
    subtitleChip: "Gameday",
    admissionCost: 0,
    eventType: eventTypes,
  };
};

export class GameDataSourceAsuEvents extends IGameDataSource {
  /**
   * @param {{url: string; timeout?: number}} input
   */
  constructor({ url, timeout }) {
    super();
    this.url = url;
    this.timeout = timeout;
  }

  /**
   * @type {import("./game-data-source").IGameDataSource['findMany']}
   */
  async findMany(input) {
    if (this.timeout) {
      await new Promise(resolve => setTimeout(resolve, this.timeout));
    }
    const fetched = await fetch(this.url);
    const json = await fetched.json();
    const games =
      json?.nodes?.flatMap(item => mapNodeToGame(item?.node) ?? []) ?? [];
    const dataSource = new GameDataSourceStatic({ games });
    const found = await dataSource.findMany(input);
    return found;
  }
}

// @ts-ignore
window.GameDataSourceAsuEvents = GameDataSourceAsuEvents;
