/* eslint-disable no-console */
// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=189-1578&node-type=canvas&t=kdg8cgY0xCNAmoIL-0
import { ALL_ID } from "../../../select-all-option";
import { IGameDataSource } from "./game-data-source";
import { GameDataSourceStatic } from "./game-data-source-impl-static";

const ALL_GAME_TYPE = [ALL_ID, "home", "away"];

const ALL_ADMISSION_COST = ["free", "price_varies"];

const ALL_EVENT_TYPE = ["game", "practice", "scrimmage"];

/**
 * @type {import("../game").Game[]}
 */
const games = [1, 2, 3, 4, 5].flatMap(id => [
  {
    isAGame: true,
    item: {
      id: "102480",
      title: "Sun Devil Volleyball: Arizona State vs Kansas State University",
      created: "1724065929",
      locations: "Desert Financial Arena",
      field_cost_value: "Ticket prices vary",
      body_summary:
        '<p>For more information, visit <a href="https://big12sports.com/calendar.aspx"><span>https://big12sports.com/calendar.aspx</span></a></p><div class="sidearm-schedule-game-opponent flex flex-align-center x-large-5 medium-8 x-small-12 full columns"><div class="sidearm-schedule-game-opponent-details flex-item-1"><div class="sidearm-schedule-game-opponent-text"><strong>Salute to Service game</strong></div></div></div><p>TV Broadcast: ESPN+</p>',
      ticketing_rsvp_url:
        "https://am.ticketmaster.com/sundevils/buy/ism/MjRWQjEx",
      ticketing_rsvp_txt: "Buy tickets",
      image_url:
        "https://dev-web-sda.ws.asu.edu/sites/default/files/VB%2520Maroon%2520and%2520Gold%2520%25282%2529.webp",
      image_alt: "Image from ASU News",
      image_caption: "Image from ASU News",
      start_date: "1731117600",
      end_date: "1731124800",
      time_description: null,
      game_type: "home",
      event_map_url:
        "https://maps.app.goo.gl/4q4ZfmxP4uiyD4Cc8?CAMEFROM=CFC_SUNDEVILS_WEB_SUNDEVILS_GENERAL&amp;brand=sundevils",
      event_map_title: null,
      venue_address: "600 E Veterans Way Tempe AZ 85281",
      event_map: "<div>480-965-3482</div><div>sundeviltickets@asu.edu</div>",
      event_subtitle: "Arizona State vs Kansas State University",
      sport_tag: "Volleyball",
      season: null,
      tv_network: "ESPN+",
      history:
        "https://thesundevils.com/sports/womens-volleyball/opponent-history/kansas-state-university/264",
      history_text: "History",
      related_stories:
        "https://www.espn.com/espnplus/catalog/c977ce8a-abd5-3522-ad36-b7b496ab5f84/ncaa-women-s-volleyball#bucketId=1",
      related_stories_text: "Watch",
      game_notes: null,
      opponent_logo:
        "https://dev-web-sda.ws.asu.edu/sites/default/files/Kansas-State-Wildcats-logopng_3.webp",
      related_videos: null,
      game_theme: "Salute to Service",
      athletic_conference: "Big 12",
      wear_color: null,
      radio_station: null,
      field_cta:
        "/event/sun-devil-volleyball-arizona-state-vs-kansas-state-university",
      field_event_type: "Sports,Game",
      node_url:
        "/event/sun-devil-volleyball-arizona-state-vs-kansas-state-university",
      field_event_topics: "Sports|Family friendly|Open to the public",
      game_time_tba: "No",
      sda_all_day: "No",
      sportIcon: {
        svg_icon:
          "https://dev-web-sda.ws.asu.edu//sites/default/files/2024-08/volleyball.svg",
        svg_icon_name: "volleyball.svg",
      },
      subtitles: ["November 08, 2024", "Ticket prices vary"],
    },
    isHome: true,
    isTicketed: true,
    id: "102480",
    sportIcon: {
      svg_icon:
        "https://dev-web-sda.ws.asu.edu//sites/default/files/2024-08/volleyball.svg",
      svg_icon_name: "volleyball.svg",
    },
    sportName: "Volleyball",
    sportId: "volleyball",
    title: "vs Kansas State University",
    titleHref:
      "/event/sun-devil-volleyball-arizona-state-vs-kansas-state-university",
    dateDay: "8",
    dateMonth: "Nov.",
    dateDayName: "(Fri)",
    dateTimeRange: "7:00 p.m.",
    dateTimeZone: "(MST)",
    admissionCost: "ticket_prices_vary",
    eventType: "sports",
    gameType: "home",
    dateLinks: [
      {
        label: "Desert Financial Arena",
        href: "https://maps.app.goo.gl/4q4ZfmxP4uiyD4Cc8?CAMEFROM=CFC_SUNDEVILS_WEB_SUNDEVILS_GENERAL&amp;brand=sundevils",
        target: "_blank",
      },
    ],
    teamLogoSrc:
      "https://dev-web-sda.ws.asu.edu/sites/default/files/Kansas-State-Wildcats-logopng_3.webp",
    teamLogoAlt: " ",
    supplementalLinks: [
      {
        label: "Watch",
        href: "https://www.espn.com/espnplus/catalog/c977ce8a-abd5-3522-ad36-b7b496ab5f84/ncaa-women-s-volleyball#bucketId=1",
      },
      {
        label: "History",
        href: "https://thesundevils.com/sports/womens-volleyball/opponent-history/kansas-state-university/264",
      },
    ],
    chips: [
      {
        label: "Big 12",
        color: "gray",
      },
      {
        label: "TV: ESPN+",
        color: "gray",
      },
      {
        label: "Sports",
        color: "gray",
      },
      {
        label: "Family friendly",
        color: "gray",
      },
      {
        label: "Open to the public",
        color: "gray",
      },
      {
        label: "Salute to Service",
        color: "gray",
      },
    ],
    buttons: [
      {
        startIcon: "fa fa-fas fa-ticket",
        color: "dark",
        label: "Buy tickets",
        href: "https://am.ticketmaster.com/sundevils/buy/ism/MjRWQjEx",
        style: {
          color: "#FAFAFA",
          backgroundColor: "#191919",
        },
      },
      {
        startIcon: "fa fa-fas fa-circle-info",
        color: "gray",
        label: "Event details",
        href: "/event/sun-devil-volleyball-arizona-state-vs-kansas-state-university",
        style: {
          color: "#FAFAFA",
          backgroundColor: "#747474",
        },
      },
    ],
    venue: null,
    homeTeamName: null,
    homeTeamLogoSrc: null,
    homeTeamLogoAlt: null,
    awayTeamName: null,
    awayTeamLogoSrc: null,
    awayTeamLogoAlt: null,
    time: null,
    buttonIcon: "fa fa-fas fa-ticket",
    ticketLink: "https://am.ticketmaster.com/sundevils/buy/ism/MjRWQjEx",
    ticketText: "Buy tickets",
    subtitleChip: null,
    subtitles: ["7:00 p.m.", "Desert Financial Arena"],
    subtitleStyle: {},
    startDate: "2024-11-09T02:00:00.000Z",
  },
  {
    id,
    sportIcon: "fa fas fa-football-ball",
    sportName: "Football Football Football",
    sportId: "football",
    title: "ITA Master&amp;#039;s Championships",
    titleHref: "https://www.example.com",
    dateDay: "11",
    dateMonth: "Oct.",
    dateDayName: "(Fri)",
    dateTimeRange: "5:30 p.m. - 7:30 p.m.",
    dateTimeZone: "(MST)",
    dateLinks: [
      {
        label: "Tempe Campus Tempe Campus Tempe Campus Tempe Campus",
        href: "https://www.example.com/",
      },
    ],
    teamLogoSrc:
      "https://dev-web-sda.ws.asu.edu/sites/default/files/Screenshot%25202024-10-21%2520at%252011.10.46%25E2%2580%25AFAM.webp",
    // "https://dev-web-sda.ws.asu.edu/sites/default/files/arkansasstatelogo.webp",
    teamLogoAlt: " ",
    supplementalLinks: [
      {
        label: "Supplemental Link",
        href: "https://www.example.com/1",
      },
      {
        label: "Supplemental Link Supp le mental Link",
        href: "https://www.example.com/2",
      },
      {
        label: "Supplemental Link",
        href: "https://www.example.com/3",
      },
    ],
    chips: [
      {
        label: "Featured",
        color: "gray",
      },
      {
        label: "Free",
        color: "gray",
      },
      {
        label: "Wear Maroon",
        color: "maroon",
      },
      {
        label: "Wear Gold",
        color: "gold",
      },
      {
        label: "Wear Pink",
        color: "pink",
      },
      {
        label: "Wear Black",
        color: "black",
      },
      {
        label: "Featured 1 ",
        color: "gray",
      },
      {
        label: "Free 1",
        color: "gray",
      },
      {
        label: "Featured 2",
        color: "gray",
      },
      {
        label: "Free 2",
        color: "gray",
      },
    ],
    buttons: [
      Math.random() > 0.5
        ? {
            startIcon: "fa fas fa-ticket-alt",
            color: "dark",
            label: "Buy tickets",
            href: "https://www.example.com",
          }
        : {
            startIcon: "fa fas fa-calendar-alt",
            color: "gray",
            label: "Event details",
            href: "https://www.example.com",
          },
      {
        startIcon: "fa fas fa-calendar-alt",
        color: "gray",
        label: "Add to calendar",
        onClick: () => {
          console.log("Add to calendar");
        },
      },
    ],
    admissionCost:
      ALL_ADMISSION_COST[Math.floor(Math.random() * ALL_ADMISSION_COST.length)],
    eventType:
      ALL_EVENT_TYPE[Math.floor(Math.random() * ALL_EVENT_TYPE.length)],
    gameType: ALL_GAME_TYPE[Math.floor(Math.random() * ALL_GAME_TYPE.length)],
  },
]);

export class GameDataSourceMockV2 extends IGameDataSource {
  constructor({ timeout = 0 } = {}) {
    super();
    this.timeout = timeout;
    this.gameDataSource = new GameDataSourceStatic({ games });
  }

  /**
   * @type {import("./game-data-source").IGameDataSource['findMany']}
   */
  async findMany(input) {
    await new Promise(resolve => setTimeout(resolve, this.timeout));
    const found = await this.gameDataSource.findMany(input);
    return found;
  }
}

// @ts-ignore
window.GameDataSourceMockV2 = GameDataSourceMockV2;
