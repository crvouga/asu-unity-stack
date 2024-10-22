// @ts-nocheck
import React from "react";

import { ALL_ID } from "../../../select-all-option";
import {
  GameDataSourceMock,
  IGameDataSource,
} from "../../Game/game-data-source";
import { GameTableSection } from "../index";

export default {
  title: "Game Table / Game Table Section",
  component: GameTableSection,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => (
  <>
    <GameTableSection {...args} />
    <div style={{ width: "100%", height: "1000px" }} />
  </>
);

export const AllSports = Template.bind({});
AllSports.args = {
  // gameDataSource: {
  //   type: "asu-events",
  //   url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  // },
  gameDataSource: {
    type: "mock",
    // url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new GameDataSourceMock({ timeout: 1000 }),
  // },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
  title: "Upcoming Games All Sports",
  emptyStateMessage: "No upcoming games for all sports",
  sports: [
    {
      name: "All Sports",
      icon: "fas fa-sync-alt",
      active: true,
      position: 1,
      id: ALL_ID,
    },
    {
      name: "Football",
      icon: "fas fa-football-ball",
      position: 2,
      id: "football",
      footerButtons: [
        {
          color: "gold",
          label: "Full schedule - Football",
          // size: "small",
          href: "#",
        },
        {
          color: "maroon",
          label: "Gear up for the game - Football",
          // size: "small",
          href: "#",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores - Football",
          href: "#",
        },
      ],
    },
    {
      name: "M. Basketball",
      icon: "fas fa-basketball-ball",
      position: 3,
      id: "basketball",
    },
    {
      name: "Hockey",
      icon: "fas fa-hockey-puck",
      position: 4,
      id: "hockey",
    },
    {
      name: "Baseball",
      icon: "fas fa-baseball-ball",
      position: 5,
      id: "baseball",
    },
    {
      name: "W. Basketball",
      icon: "fas fa-basketball-ball",
      id: "w-basketball",
    },
    {
      name: "Softball",
      icon: "fas fa-futbol",
      id: "softball",
    },
    {
      name: "Soccer",
      icon: "fas fa-baseball-ball",
      id: "soccer",
    },
    {
      name: "Swimming",
      icon: "fas fa-swimmer",
      id: "swimming",
    },
    {
      name: "Golf",
      icon: "fas fa-golf-ball",
      id: "golf",
    },
  ],
  sponsorBlock: {
    text: "Presented By",
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    url: "https://www.ford.com/",
  },
  footerButtons: [
    {
      color: "gold",
      label: "Full schedule",
      // size: "small",
      href: "#",
    },
    {
      color: "maroon",
      label: "Gear up for the game",
      // size: "small",
      href: "#",
    },
  ],
  footerLinks: [
    {
      label: "See past game scores",
      href: "#",
    },
  ],
  gameTable: {
    configLayout: {
      includeSportNameCell: true,
      includeVersusCell: true,
    },
    configCells: {
      cellTitle: {
        // subtitleFontWeight: "bold",
        includeSubtitleChip: true,
      },
      cellTicketButton: {
        label: "Get Tickets Override",
        autoTicketIcon: true,
      },
    },
  },
};

class CustomGameDataSource extends IGameDataSource {
  constructor() {
    super();
    this.dataSource = new GameDataSourceMock({
      timeout: 1000,
    });
  }

  async findMany(input) {
    const found = await this.dataSource.findMany(input);

    const rowsNew = found.rows.map(row => {
      return {
        ...row,
        ticketText: Math.random() > 0.9 ? "Get tickets" : "More info",
      };
    });

    return {
      ...found,
      rows: rowsNew,
    };
  }
}

export const SingleSport = Template.bind({});
SingleSport.args = {
  // gameDataSource: {
  //   type: "asu-events",
  //   url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  // },
  // gameDataSource: {
  //   type: "mock",
  // },
  configNoData: {
    hide: true,
    hideBehavior: "initially-hidden",
    hideBasedOn: {
      // sportId: "w-swimming",
    },
    message: "No upcoming games",
  },
  configAddToCalender: {
    enabled: true,
    label: "My Add to Calendar",
    onClick: payload => {
      // eslint-disable-next-line no-console
      console.log("Add to calendar", payload);
    },
  },
  gameDataSourceLoader: {
    limit: 5,
    sportId: "football",
  },
  gameDataSource: {
    type: "custom",
    gameDataSource: new CustomGameDataSource(),
  },
  gameTable: {
    configLayout: {
      includeSportNameCell: true,
      includeVersusCell: true,
    },
    configCells: {
      cellTitle: {
        // subtitleFontWeight: "bold",
        includeSubtitleChip: true,
      },
      cellTicketButton: {
        label: "Get Tickets Override",
        autoTicketIcon: false,
      },
    },
  },
  sectionHeader: {
    title: "Upcoming Games",
    subtitle:
      "From the fall football season to the Maroon and Gold Spring game and at Camp Tontozona,\n there are football games and events throughout the year.",
    // subtitleFontWeight: "bold",
    subtitleLinks: [
      {
        label: "See Past Game Scores",
        href: "#",
        // fontWeight: "bold",
      },
    ],
    subtitleButtons: [
      // {
      //   label: "My Button",
      //   size: "xsmall",
      //   color: "gray",
      //   onClick: () => {
      //     alert("Button clicked");
      //   },
      // },
    ],
    tabs: [
      {
        label: "All Games",
        active: true,
        id: ALL_ID,
      },
      {
        label: "Home",
        active: false,
        id: "home",
      },
      {
        label: "Away",
        active: false,
        id: "away",
      },
    ],
    sponsorBlock: {
      text: "Presented By",
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
      url: "https://www.ford.com/",
    },
  },
  loadMore: {
    label: "Load More",
    placeholder: "Loading...",
  },

  // footerButtons: [
  //   {
  //     color: "gold",
  //     label: "Full schedule",
  //     size: "small",
  //   },
  //   {
  //     color: "maroon",
  //     label: "Gear up for the game",
  //     size: "small",
  //   },
  // ],
};
