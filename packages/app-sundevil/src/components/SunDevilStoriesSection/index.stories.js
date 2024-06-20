// @ts-check
import React from "react";

import { SunDevilStoriesSection } from "./index";

/**
 * @typedef {import("./index").Sport} Sport
 */

/**
 * @typedef {import("./index").SunDevilStoriesSectionProps} Props
 */

/** @type {Props} */
const props = {
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
    { name: "Hockey", icon: "fas fa-hockey-puck", position: 4, id: "hockey" },
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
  ],
};

export default {
  title: "Sun Devil Stories / Sun Devil Stories Section",
  component: args => <SunDevilStoriesSection {...args} {...props} />,
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
