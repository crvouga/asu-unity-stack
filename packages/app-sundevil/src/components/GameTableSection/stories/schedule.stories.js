// @ts-nocheck
import React from "react";

import { GameTableSection } from "../index";

export default {
  title: "Game Table / Schedule",
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

export const Schedule = Template.bind({});
Schedule.args = {
  // https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4801-45080&t=OOxUjvuOdT8YyVSn-0
  gameDataSource: {
    type: "mock",
    timeout: 200,
  },
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
  // gameDataSource: {
  //   type: "asu-events",
  //   url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  //   timeout: 800,
  // },
  // variant: "hero",
  variant: "default",
  // configOverlap: "sport-tabs-with-hero",
  title: "Upcoming Games",
  // subtitle:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  subtitleLinks: [
    // {
    //   label: "See a list of free sporting events",
    //   href: "#",
    //   color: "muted",
    // },
  ],
  // darkMode: true,
  darkMode: false,
  emptyStateMessage: "No games found",
  gameDataSourceLoader: {
    limit: 20,
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
    includeInputEventTypeSelect: false,
    includeMaxAdmissionCostSelect: false,
  },
  configGameTableForm: {
    title: "Filter your results",
  },
  configInputs: {
    searchInput: {
      label: "Search tickets",
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
      includeCellSportName: false,
      includeCellVersus: false,
      includeCellTitle: true,
      includeCellTickets: true,
    },
    configCells: {
      cellTitle: {
        // subtitleFontWeight: "bold",
        includeSubtitleChip: true,
      },
      cellTicketButton: {
        label: "Get Tickets",
        autoTicketIcon: true,
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
