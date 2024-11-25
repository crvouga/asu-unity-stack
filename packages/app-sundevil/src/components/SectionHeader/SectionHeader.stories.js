// https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
/* eslint-disable no-console */
// @ts-nocheck
import React from "react";

import { SectionHeader } from "./index";

import { GOOGLE_ADS_TEST_PROPS } from "../../google-ads/test-props";

export default {
  title: "Section Header / Section Header",
  component: SectionHeader,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

/**
 * @type {import("./props")}
 */
const baseProps = {
  title: "Upcoming Games",
  subtitle:
    "From the fall football season to the Maroon and Gold Spring game and at Camp Tontozona,\n" +
    "        there are football games and events throughout the year.",
  subtitleFontWeight: "bold",
  subtitleLinks: [
    {
      label: "See Past Game Scores",
      href: "#",
      fontWeight: "bold",
    },
  ],
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
  onTabItemClick: tabId => {
    console.log(tabId);
  },
};

const Template = args => <SectionHeader {...args} />;
/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const Default = Template.bind({});
Default.args = {
  ...baseProps,
};

/**
 * https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
 * @type {{ args: ComponentType, parameters: object}}
 */
export const GoogleAd = Template.bind({});
GoogleAd.args = {
  ...baseProps,
  sponsorBlock: {
    text: "Presented By: ",
    googleAdHead: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdHead,
    googleAdBody: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdBody,
  },
};

/**
 * https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
 * @type {{ args: ComponentType, parameters: object}}
 */
export const GoogleAdEmpty = Template.bind({});
GoogleAdEmpty.args = {
  ...baseProps,
  sponsorBlock: {
    text: "Presented By: ",
    googleAdHead: GOOGLE_ADS_TEST_PROPS.empty.googleAdHead,
    googleAdBody: GOOGLE_ADS_TEST_PROPS.empty.googleAdBody,
  },
};
