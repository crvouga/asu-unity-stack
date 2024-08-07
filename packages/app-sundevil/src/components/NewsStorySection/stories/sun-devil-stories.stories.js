// @ts-check
import React from "react";

import { INewsStoryDataSource } from "../../NewsStory/news-story-data-source/news-story-data-source";
import { NewsStorySection } from "../index";

const imageSrc =
  "https://asuevents.asu.edu/sites/default/files/2024-07/football-2024.jpg";

// @ts-ignore
// eslint-disable-next-line no-unused-vars
const newsStories = [
  {
    id: "1",
    href: "#",
    showNewsType: false,
    showSportName: false,
    newsType: "News",
    imageSrc,
    sportName: "W. Lacrosse",
    sportIcon: "fas fa-lacrosse",
    title: "Gigi Gaspar Named Pac-12 Lacrosse Scholar Athlete of the Year",
  },
  {
    id: "2",
    href: "#",
    showNewsType: false,
    showSportName: false,
    newsType: "Video",
    imageSrc,
    sportName: "Football",
    sportIcon: "fas fa-football-ball",
    title: "Super Bowl #SunDevils4Life",
  },
  {
    id: "3",
    href: "#",
    showNewsType: false,
    showSportName: false,
    newsType: "Video",
    imageSrc,
    sportName: "M. Golf",
    sportIcon: "fas fa-golf-ball",
    title:
      "Men's Golf Gets No. 1 Seet at Rancho Santa Fe/The Farms Golf Club Regional",
  },
  {
    id: "4",
    href: "#",
    showNewsType: false,
    showSportName: false,
    newsType: "News",
    imageSrc,
    sportName: "Vollyball",
    sportIcon: "fas fa-volleyball-ball",
    title: "Rohr Pac-12 Coach of the Year, Kensinger Honored",
  },
  {
    id: "5",
    href: "#",
    showNewsType: false,
    showSportName: false,
    newsType: "Game Recap",
    title: "Lacrosse Downs Ducks, Will Face Stanford in Pac-12 Semifinals",
    sportName: "W. Lacrosse",
    imageSrc,
    sportIcon: "fas fa-lacrosse",
  },
  {
    id: "6",
    href: "#",
    showNewsType: false,
    showSportName: false,
    newsType: "News",
    title: "Kensinger, Williamson Named All-Americans",
    sportName: "Volleyball",
    sportIcon: "fas fa-volleyball-ball",
    imageSrc,
  },
];

class CustomNewsStoryDataSource extends INewsStoryDataSource {
  // eslint-disable-next-line class-methods-use-this
  async findMany(input) {
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
      limit: input.limit ?? Infinity,
      offset: input.offset ?? 0,
      rows: newsStories,
      total: newsStories.length,
    };
  }
}

/** @type {import("../index").NewsStorySectionProps} */
const props = {
  configCard: {
    titleFontSize: "1.5rem",
    titleFontWeight: "bold",
    titleMaxLines: 5,
  },
  // newsStoryDataSource: {
  //   type: "mock",
  // },
  // newsStoryDataSource: {
  //   type: "asu-news",
  //   url: "https://news.asu.edu/feed-json/sun_devil_athletics",
  //   timeout: 1500,
  // },
  // newsStoryDataSource: {
  //   type: "static",
  //   newsStories,
  // },
  newsStoryDataSource: {
    type: "custom",
    newsStoryDataSource: new CustomNewsStoryDataSource(),
  },
  emptyStateMessage: "No stories available",
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
  sectionHeader: {
    title: "Sun Devil Stories",
    sponsorBlock: {
      text: "Presented by:",
      name: "Desert Financial",
      logo: "https://www.desertfinancial.com/globalassets/images/logos/desert-financial/df-logo_fullcolor_tm-cropped.svg",
      url: "https://www.desertfinancial.com/",
    },
  },
  removeSportsWithNoStories: false,
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
      footerButtons: [
        {
          label: "View All Stories -- Football",
          href: "#",
          // class: "button",
          size: "small",
          color: "gold",
        },
      ],
      footerLinks: [
        {
          label: "View All Stories -- Football",
          href: "#",
          // class: "button",
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
  return <NewsStorySection {...args} {...props} />;
};

export const SunDevilsStoriesSection = Template.bind({
  ...props,
});
