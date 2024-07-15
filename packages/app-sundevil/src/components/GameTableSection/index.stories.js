// @ts-nocheck
import React from "react";

import { GameTableSection } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").ComponentType } ComponentType */
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

export const GetTickets = Template.bind({});
GetTickets.args = {
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new GameDataSourceMock({ timeout: 1000 }),
  // },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
  gameDataSource: {
    type: "asu-events",
    url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
    timeout: 800,
  },
  variant: "hero",
  configOverlap: "sport-tabs-with-hero",
  title: "Get Tickets",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  subtitleLinks: [
    {
      label: "See a list of free sporting events",
      href: "#",
      color: "muted",
    },
  ],
  darkMode: true,
  emptyStateMessage: "No games found",
  configLayout: {
    includeInputSearch: true,
    includeInputSportType: true,
    includeInputHomeOrAwaySelect: true,
    includeInputVenueSelect: true,
    includeInputSortBySelect: true,
    includeSportsTabs: true,
    includeLoadMore: true,
  },
  configInputs: {
    searchInput: {
      label: "Search by Event Name",
      placeholder: "Sun Devils vs. BYU, Season Tickets, Rose Bowl",
    },
    sportTypeSelect: {
      label: "Sport Type",
      placeholder: "Select one",
    },
    homeOrAwaySelect: {
      label: "Home or away",
      placeholder: "Select one",
    },
    venueSelect: {
      label: "Venue",
      placeholder: "Select one",
    },
    sortBySelect: {
      label: "Sort By:",
      placeholder: "Select one",
    },
  },
  gameTable: {
    configLayout: {
      // includeCellDate: true,
      // includeCellSportName: true,
      // includeCellVersus: true,
      // includeCellTitle: true,
      // includeCellTickets: true,
    },
    cellsConfig: {
      titleCell: {
        subtitleFontWeight: "bold",
      },
    },
  },
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
};

export const GetTicketsOverlapFirstRow = Template.bind({});
GetTicketsOverlapFirstRow.args = {
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new GameDataSourceMock({ timeout: 1000 }),
  // },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
  gameDataSource: {
    type: "asu-events",
    url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
    timeout: 800,
  },
  variant: "hero",
  configOverlap: "first-row-with-hero",
  title: "Get Tickets",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  subtitleLinks: [
    {
      label: "See a list of free sporting events",
      href: "#",
      color: "muted",
    },
  ],
  darkMode: true,
  emptyStateMessage: "No games found",
  configLayout: {
    includeInputSearch: true,
    includeInputSportType: true,
    includeInputHomeOrAwaySelect: true,
    includeInputVenueSelect: false,
    includeInputSortBySelect: false,
    includeSportsTabs: false,
    includeLoadMore: true,
  },
  configInputs: {
    searchInput: {
      label: "Search tickets",
      placeholder: "Sun Devils vs. BYU, Season Tickets, Rose Bowl",
    },
    sportTypeSelect: {
      label: "Sport",
      placeholder: "Select one",
    },
    homeOrAwaySelect: {
      label: "Home or away",
      placeholder: "Select one",
    },
    venueSelect: {
      label: "Venue",
      placeholder: "Select one",
    },
    sortBySelect: {
      label: "Sort By:",
      placeholder: "Select one",
    },
  },
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
};

export const GetTicketsOverlapWithSportTabs = Template.bind({});
GetTicketsOverlapWithSportTabs.args = {
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new GameDataSourceMock({ timeout: 1000 }),
  // },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
  gameDataSource: {
    type: "asu-events",
    url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
    timeout: 800,
  },
  variant: "hero",
  configOverlap: "sport-tabs-with-hero",
  title: "Get Tickets",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  darkMode: true,
  emptyStateMessage: "No games found",
  configLayout: {
    includeInputSearch: true,
    includeInputSportType: false,
    includeInputHomeOrAwaySelect: false,
    includeInputVenueSelect: true,
    includeInputSortBySelect: true,
    includeSportsTabs: true,
    includeLoadMore: true,
  },
  configInputs: {
    searchInput: {
      label: "Search by Event Name",
      placeholder: "Sun Devils vs. BYU, Season Tickets, Rose Bowl",
    },
    sportTypeSelect: {
      label: "Sport Type",
      placeholder: "Select one",
    },
    homeOrAwaySelect: {
      label: "Home or away",
      placeholder: "Select one",
    },
    venueSelect: {
      label: "Venue",
      placeholder: "Select one",
    },
    sortBySelect: {
      label: "Sort By:",
      placeholder: "Select one",
    },
  },
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
};

export const GetTicketsLight = Template.bind({});
GetTicketsLight.args = {
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new GameDataSourceMock({ timeout: 1000 }),
  // },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
  gameDataSource: {
    type: "asu-events",
    url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
    timeout: 800,
  },
  variant: "hero",
  configOverlap: "sport-tabs-with-hero",
  title: "Get Tickets",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  darkMode: false,
  emptyStateMessage: "No games found",
  gameTable: {
    configLayout: {
      includeCellDate: true,
      includeCellSportName: true,
      includeCellVersus: true,
      includeCellTitle: true,
      includeCellTickets: true,
    },
    cellsConfig: {
      titleCell: {
        subtitleFontWeight: "normal",
      },
    },
  },
  configLayout: {
    includeInputSearch: true,
    includeInputSportType: true,
    includeInputHomeOrAwaySelect: false,
    includeInputVenueSelect: true,
    includeInputSortBySelect: true,
    includeSportsTabs: false,
    includeLoadMore: true,
  },
  configInputs: {
    searchInput: {
      label: "Search by Event Name",
      placeholder: "Sun Devils vs. BYU, Season Tickets, Rose Bowl",
    },
    sportTypeSelect: {
      label: "Sport Type",
      placeholder: "Select one",
    },
    homeOrAwaySelect: {
      label: "Home or away",
      placeholder: "Select one",
    },
    venueSelect: {
      label: "Venue",
      placeholder: "Select one",
    },
    sortBySelect: {
      label: "Sort By:",
      placeholder: "Select one",
    },
  },
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
};

export const GetTicketsSportTabsOnly = Template.bind({});
GetTicketsSportTabsOnly.args = {
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new GameDataSourceMock({ timeout: 1000 }),
  // },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
  gameDataSource: {
    type: "asu-events",
    url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
    timeout: 800,
  },
  variant: "hero",
  configOverlap: "sport-tabs-with-hero",
  title: "Get Tickets",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // subtitleLinks: [
  //   {
  //     label: "See a list of free sporting events",
  //     href: "#",
  //     color: "muted",
  //   },
  // ],
  darkMode: true,
  emptyStateMessage: "No games found",
  configLayout: {
    includeInputSearch: false,
    includeInputSportType: false,
    includeInputHomeOrAwaySelect: false,
    includeInputVenueSelect: false,
    includeInputSortBySelect: false,
    includeSportsTabs: true,
    includeLoadMore: true,
  },
  configInputs: {
    searchInput: {
      label: "Search by Event Name",
      placeholder: "Sun Devils vs. BYU, Season Tickets, Rose Bowl",
    },
    sportTypeSelect: {
      label: "Sport Type",
      placeholder: "Select one",
    },
    homeOrAwaySelect: {
      label: "Home or away",
      placeholder: "Select one",
    },
    venueSelect: {
      label: "Venue",
      placeholder: "Select one",
    },
    sortBySelect: {
      label: "Sort By:",
      placeholder: "Select one",
    },
  },
  gameTable: {
    configLayout: {
      includeSportNameCell: true,
      includeVersusCell: true,
    },
    cellsConfig: {
      titleCell: {
        subtitleFontWeight: "bold",
      },
    },
  },
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
};

/**
 * @type {{ args: ComponentType, parameters: object}}
 */
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
          size: "small",
          href: "#",
        },
        {
          color: "maroon",
          label: "Gear up for the game - Football",
          size: "small",
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
    },
    {
      color: "maroon",
      label: "Gear up for the game",
      size: "small",
    },
  ],
  footerLinks: [
    {
      label: "See past game scores",
      href: "#",
    },
  ],
};

/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const SingleSport = Template.bind({});
SingleSport.args = {
  // gameDataSource: {
  //   type: "asu-events",
  //   url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  // },
  gameDataSource: {
    type: "mock",
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
