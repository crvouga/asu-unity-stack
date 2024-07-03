// @ts-nocheck
import React from "react";

import { Header } from "./index";

export default {
  title: "Section Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => <Header {...args} />;
/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const Default = Template.bind({});
Default.args = {
  title: "Upcoming Games",
  subtitle:
    "From the fall football season to the Maroon and Gold Spring game and at Camp Tontozona,\n" +
    "        there are football games and events throughout the year.",
  sponsorBlock: {
    text: "Presented By",
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    url: "https://www.ford.com/",
  },
  tabs: [
    { label: "All Games", active: true },
    { label: "Home", active: false },
    { label: "Away", active: false },
  ],
  social: [
    { label: "Facebook", url: "https://www.facebook.com" },
    { label: "Twitter", url: "https://www.twitter.com" },
    { label: "Instagram", url: "https://www.instagram.com" },
  ],
  onTabItemClick: tabId => () => {
    // eslint-disable-next-line no-console
    console.log(tabId);
  },
};
