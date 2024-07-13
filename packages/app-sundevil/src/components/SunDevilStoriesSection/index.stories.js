// @ts-check
import React from "react";

import { SunDevilStoriesSection } from "./index";

/** @type {import("./index").SunDevilStoriesProps} */
const props = {
  newsStoryDataSource: {
    type: "mock",
  },
  allStoriesHref: "#",
  allStoriesLabel: "All Stories",
  sectionHeader: {
    title: "Sun Devil Stories",
    sponsorBlock: {
      text: "Presented by:",
      name: "Desert Financial",
      logo: "https://www.desertfinancial.com/globalassets/images/logos/desert-financial/df-logo_fullcolor_tm-cropped.svg",
      url: "https://www.desertfinancial.com/",
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
  title: "Sun Devil Stories / Sun Devil Stories Section",
  component: args => <SunDevilStoriesSection {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <SunDevilStoriesSection {...args} {...props} />;
};

export const Default = Template.bind({
  ...props,
});
