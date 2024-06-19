// @ts-check
import React from "react";

import { Header } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").ComponentType } ComponentType */
export default {
  title: "Header",
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
  presentedBy: {
    name: "Presented By",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
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
};
