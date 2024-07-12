import { IGameDataSource } from "./game-data-source";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

const parseDate = dateString => {
  const parts = dateString.split("-");
  // eslint-disable-next-line no-restricted-syntax
  for (const part of parts) {
    const trimmed = part.trim();
    const date = new Date(trimmed);
    if (!Number.isNaN(date.getTime())) {
      return date;
    }
  }
  return null;
};

/**
 *
 * @param {any} data
 * @returns {import("../game").Game | null}
 */
const mapNodeToGame = data => {
  if (typeof data !== "object" || data === null) {
    return null;
  }
  const startDate = parseDate(data.very_start_date);
  const startDay = startDate?.getDate().toString();
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startTimeHour12 = startDate?.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const titleHref = data["alias-indexed"] ?? data.alias;

  return {
    id: data?.nid,
    gameType: data.game_type,
    sportId: data.sport_tag,
    date: {
      day: startDay,
      month: startMonth,
    },
    title: data.title,
    titleHref,
    homeTeam: {
      name: "Arizona State Sun Devils",
      logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
    },
    awayTeam: {
      name: data.sport_tag,
      logo: data.image_url,
    },
    time: startTimeHour12,
    venue: data.locations,
    ticketLink: data.ticketing_rsvp_url,
    ticketText: data.ticketing_rsvp_txt,
    sport: {
      name: data.event_topics,
      icon: "fas fa-football-ball",
      id: data.sport_tag,
    },
  };
};

export class GameDataSourceAsuEvents extends IGameDataSource {
  /**
   * @param {{url: string}} input
   */
  constructor({ url }) {
    super();
    this.url = url;
  }

  /**
   * @type {import("./game-data-source").IGameDataSource['findMany']}
   */
  async findMany(input) {
    const fetched = await fetch(this.url);
    const json = await fetched.json();
    const games = json?.nodes?.map(item => mapNodeToGame(item?.node));
    const staticAPI = new GameDataSourceStatic({ games });
    const found = await staticAPI.findMany(input);
    return found;
  }
}
