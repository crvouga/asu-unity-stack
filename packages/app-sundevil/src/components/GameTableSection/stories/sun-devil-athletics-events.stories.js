// @ts-nocheck
import React from "react";

import { GameTableSection } from "../index";

export default {
  title: "Game Table / SunDevilAthleticsEvents",
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

export const SunDevilAthleticsEvents = Template.bind({});
SunDevilAthleticsEvents.args = {
  // https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4801-4633&t=LF0II0k8pEHIoz43-0
  // gameDataSource: {
  //   type: "mock",
  //   timeout: 200,
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
    includeInputSportType: false,
    includeInputHomeOrAwaySelect: false,
    includeInputVenueSelect: false,
    includeInputSortBySelect: false,
    includeSportsTabs: false,
    includeLoadMore: true,
    includeSportTypeCheckboxList: false,
    includeInputEventTypeSelect: true,
    includeMaxAdmissionCostSelect: true,
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
    eventTypeSelect: {
      label: "Event Type",
      placeholder: "Select one",
      options: [
        {
          label: "Game",
          id: "game",
          value: "game",
        },
        {
          label: "Practice",
          id: "practice",
          value: "practice",
        },
        {
          label: "Scrimmage",
          id: "scrimmage",
          value: "scrimmage",
        },
      ],
    },
    maxAdmissionCostSelect: {
      label: "Cost of admission",
      placeholder: "Select one",
      options: [
        {
          label: "Free",
          id: "free",
          value: 0,
        },
        {
          label: "$10",
          id: "10",
          value: 10,
        },
        {
          label: "$20",
          id: "20",
          value: 20,
        },
        {
          label: "$30",
          id: "30",
          value: 30,
        },
        {
          label: "$40",
          id: "40",
          value: 40,
        },
        {
          label: "$50",
          id: "50",
          value: 50,
        },
      ],
    },
  },
  gameTable: {
    mobileRowVariant: "divided", // or "bordered",
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
