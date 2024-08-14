// @ts-check
import React from "react";

import { ALL_ID } from "../../../select-all-option";
import { NewsStorySection } from "../index";

/** @type {import("../index").NewsStorySectionProps} */
const props = {
  newsStoryDataSource: {
    type: "mock",
  },

  // newsStoryDataSource: {
  //   type: "asu-news",
  //   url: "https://news.asu.edu/feed-json/sun_devil_athletics",
  //   timeout: 1500,
  // },
  // newsStoryDataSource: {
  //   type: "static",
  //   newsStories,
  // },
  newsStoryDataSourceLoader: {
    limit: 12,
  },
  emptyStateMessage: "No news stories found",
  // allStoriesHref: "#",
  // allStoriesLabel: "All Stories",
  sectionHeader: {
    title: "All Sun Devil Stories",
    subtitleLinks: [],
    // sponsorBlock: {
    //   text: "Presented by:",
    //   name: "Desert Financial",
    //   logo: "https://www.desertfinancial.com/globalassets/images/logos/desert-financial/df-logo_fullcolor_tm-cropped.svg",
    //   url: "https://www.desertfinancial.com/",
    // },
  },
  footerButtons: [
    {
      label: "View All Stories",
      href: "#",
      // class: "button",
      color: "maroon",
      size: "small",
    },
  ],
  footerLinks: [
    {
      label: "View All Stories",
      href: "#",
      class: "button",
    },
  ],
  mobileVariant: "column", // "carousel" | "column"
  removeSportsWithNoStories: false,
  configForm: {
    title: "Filter your results",
    initialState: {
      newsType: "Video",
      sportId: "m-football",
    },
  },

  configLayout: {
    includeSportsTabs: false,
    includeInputSearch: true,
    includeInputNewsType: true,
    includeInputSportType: true,
    includeLoadMore: true,
  },

  configInputs: {
    search: {
      label: "Search stories",
      placeholder: "Search stories",
    },
    newsType: {
      label: "News type",
      placeholder: "Select one",
      options: [
        {
          label: "Video",
          id: "video",
          value: "video",
          active: true,
        },
        {
          label: "Hello",
          id: "hello",
          value: "hello",
        },
      ],
    },
    sportType: {
      label: "Sports",
      placeholder: "Select one",
    },
  },
  loadMore: {
    label: "Load More",
    loadingLabel: "Loading...",
  },
  sports: [
    {
      name: "All Sports",
      icon: "fas fa-sync-alt",
      position: 1,
      id: ALL_ID,
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
      position: 6,
    },
    {
      name: "Softball",
      icon: "fas fa-futbol",
      id: "softball",
      position: 7,
    },
    {
      name: "Soccer",
      icon: "fas fa-baseball-ball",
      id: "soccer",
      position: 8,
    },
    {
      name: "Swimming",
      icon: "fas fa-swimmer",
      id: "swimming",
      position: 9,
    },
    {
      name: "Golf",
      icon: "fas fa-golf-ball",
      id: "golf",
      position: 10,
    },
    {
      name: "Tennis",
      icon: "fas fa-table-tennis",
      id: "tennis",
      position: 11,
    },
    {
      name: "W. Lacrosse",
      icon: "fas fa-lacrosse",
      id: "w-lacrosse",
      position: 12,
    },
  ],
};

export default {
  title: "News Story / News Story Section",
  component: args => <NewsStorySection {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return (
    <>
      <NewsStorySection {...args} {...props} />
      <div style={{ width: "100%", height: "1000px" }} />
    </>
  );
};

export const AllSunDevilsStoriesSection = Template.bind({
  ...props,
});
