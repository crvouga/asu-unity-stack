// @ts-check
import React from "react";

import { IconTextColumnsSection } from "./IconTextColumnsSection";

// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-8618&t=ROKzex2GfQXozCsB-0
/** @type {import("./IconTextColumnsSection").Props} */
const props = {
  sectionHeader: {
    title: "Attend select game, meets, matches for free",
    subtitle:
      "Sun Devil Athletics offers a variety of sporting events you and your family can attend for free**. ",
  },
  columns: [
    {
      id: "w-beach-volleyball",
      title: "Beach Volleyball",
      icon: "fas fa-volleyball-ball",
      position: 0,
      caption: "(Women)",
    },
    {
      id: "m-cross-country",
      title: "Cross Country",
      icon: "fas fa-running",
      position: 1,
      caption: "(Men and women)",
    },
    {
      id: "m-golf",
      title: "Golf",
      icon: "fas fa-golf-ball",
      position: 2,
      caption: "(Men and women)",
    },
    {
      id: "m-swimming",
      title: "Swimming and Diving",
      icon: "fas fa-swimmer",
      position: 3,
      caption: "(Men and women)",
    },
    {
      id: "m-tennis",
      title: "Tennis",
      icon: "fas fa-table-tennis",
      position: 4,
      caption: "(Men and women)",
    },
    {
      id: "m-track-and-field",
      title: "Track and Field",
      icon: "fas fa-running",
      position: 5,
      caption: "(Men and women)",
    },
    {
      id: "m-triathlon",
      title: "Triathlon",
      icon: "fas fa-running",
      position: 6,
      caption: "Women",
    },
    {
      id: "m-water-polo",
      title: "Water Polo",
      icon: "fas fa-water",
      position: 7,
      caption: "Women",
    },
  ],
  disclaimer:
    "**Post-season events and select tournaments may require a paid ticket.",
};

export default {
  title: "Icon Text Columns Section / Icon Text Columns Section",
  component: args => <IconTextColumnsSection {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <IconTextColumnsSection {...args} />;
};

export const NonTicketedIntroSection = Template.bind({});
NonTicketedIntroSection.args = props;
