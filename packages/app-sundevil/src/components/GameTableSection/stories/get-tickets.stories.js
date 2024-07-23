// @ts-nocheck
import React from "react";

import { GameTableSection } from "../index";

export default {
  title: "Game Table / Get Tickets",
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
  //   type: "mock",
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
    includeSportTypeCheckboxList: false,
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
    sportTypeCheckboxList: {
      label: "Sport Type",
    },
  },
  gameTable: {
    configLayout: {
      includeCellDate: true,
      includeCellSportName: true,
      includeCellVersus: true,
      includeCellTitle: true,
      includeCellTickets: true,
    },
    configCells: {
      cellTitle: {
        // subtitleFontWeight: "bold",
        includeSubtitleChip: true,
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

export const GetTicketsUpcomingGames = Template.bind({});
GetTicketsUpcomingGames.args = {
  // gameDataSource: {
  //   type: "mock",
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
  // variant: "hero",
  // configOverlap: "sport-tabs-with-hero",
  title: "Upcoming Games",
  // subtitle:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  subtitleLinks: [
    {
      label: "See a list of free sporting events",
      href: "#",
      color: "muted",
    },
  ],
  darkMode: false,
  emptyStateMessage: "No games found",
  configGameTableForm: {
    title: "Filter your results",
  },
  configLayout: {
    includeInputSearch: true,
    includeInputSportType: true,
    includeInputHomeOrAwaySelect: true,
    includeInputVenueSelect: false,
    includeInputSortBySelect: false,
    includeSportsTabs: false,
    includeLoadMore: true,
    includeSportTypeCheckboxList: false,
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
    sportTypeCheckboxList: {
      label: "Sport Type",
    },
  },

  gameTable: {
    configLayout: {
      includeCellDate: true,
      includeCellSportName: true,
      includeCellVersus: true,
      includeCellTitle: true,
      includeCellTickets: true,
    },
    configCells: {
      cellTitle: {
        // subtitleFontWeight: "bold",
        includeSubtitleChip: true,
      },
    },
  },
  sports: [
    {
      name: "All Sports",
      icon: "fas fa-sync-alt",
      position: 1,
      id: "all",
    },
    {
      name: "Football",
      icon: "fas fa-football-ball",
      position: 2,
      id: "football",
      active: true,
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
    configCells: {
      cellTitle: {
        // subtitleFontWeight: "bold",
        includeSubtitleChip: true,
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

export const GetTicketsLightSidebar = Template.bind({});
GetTicketsLightSidebar.args = {
  gameDataSource: {
    type: "mock",
  },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new GameDataSourceMock({ timeout: 1000 }),
  // },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
  // gameDataSource: {
  //   type: "asu-events",
  //   url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  //   timeout: 800,
  // },
  gameDataSourceLoader: {
    limit: 10,
  },
  variant: "hero",
  configOverlap: "sport-tabs-with-hero",
  title: "Get Tickets",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  darkMode: false,
  emptyStateMessage: "No games found",
  configGameTableForm: {
    title: "Filter your results",
  },
  gameTable: {
    configLayout: {
      includeCellDate: true,
      includeCellSportName: true,
      includeCellVersus: false,
      includeCellTitle: true,
      includeCellTickets: true,
    },
    configCells: {
      cellTitle: {
        // subtitleFontWeight: "bold",
        includeSubtitleChip: true,
      },
    },
  },
  configLayout: {
    variant: "sidebar",
    includeInputSearch: true,
    includeInputSportType: true,
    includeInputHomeOrAwaySelect: false,
    includeInputVenueSelect: true,
    includeInputSortBySelect: true,
    includeSportsTabs: false,
    includeLoadMore: true,
    includeSportTypeCheckboxList: true,
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
    sportTypeCheckboxList: {
      label: "Sport Type",
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
    configCells: {
      cellTitle: {
        // subtitleFontWeight: "bold",
        includeSubtitleChip: true,
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
