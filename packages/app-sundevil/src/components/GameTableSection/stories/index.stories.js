// @ts-nocheck
import React from "react";

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
  gameDataSource: {
    type: "asu-events",
    url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new GameDataSourceMock({ timeout: 1000 }),
  // },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
  title: "Upcoming Games",
  emptyStateMessage: "No upcoming games",
  sports: [
    {
      name: "All Sports",
      icon: "fas fa-sync-alt",
      active: true,
      position: 1,
      id: "all",
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
      size: "small",
      href: "#",
    },
    {
      color: "maroon",
      label: "Gear up for the game",
      size: "small",
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
      },
    },
  },
};

export const SingleSport = Template.bind({});
SingleSport.args = {
  gameDataSource: {
    type: "asu-events",
    url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  },
  // gameDataSource: {
  //   type: "mock",
  // },
  gameDataSourceLoader: {
    limit: 5,
    sportId: "football",
  },
  title: "Upcoming Games",
  subtitle:
    "From the fall football season to the Maroon and Gold Spring game and at Camp Tontozona,\n there are football games and events throughout the year.",
  emptyStateMessage: "No upcoming games",
  subtitleFontWeight: "bold",
  subtitleLinks: [
    {
      label: "See Past Game Scores",
      href: "#",
      fontWeight: "bold",
    },
  ],
  tabs: [
    {
      label: "All Games",
      active: true,
      id: "all",
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
  loadMore: {
    label: "Load More",
    loadingLabel: "Loading...",
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
