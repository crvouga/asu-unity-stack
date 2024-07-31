// @ts-check
import React from "react";

import { NonTicketedIntro } from "./NonTicketedIntro";

// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-8618&t=ROKzex2GfQXozCsB-0
/** @type {import("./NonTicketedIntro").Props} */
const props = {
  sectionHeader: {
    title: "Attend select game, meets, matches for free",
    subtitle:
      "Sun Devil Athletics offers a variety of sporting events you and your family can attend for free**. ",
  },
  sports: [
    {
      id: "w-beach-volleyball",
      name: "Beach Volleyball",
      icon: "fas fa-volleyball-ball",
      position: 0,
      gender: "women",
    },
    {
      id: "m-cross-country",
      name: "Cross Country",
      icon: "fas fa-running",
      position: 1,
      gender: "men_and_women",
    },
    {
      id: "m-golf",
      name: "Golf",
      icon: "fas fa-golf-ball",
      position: 2,
      gender: "men_and_women",
    },
    {
      id: "m-swimming",
      name: "Swimming and Diving",
      icon: "fas fa-swimmer",
      position: 3,
      gender: "men_and_women",
    },
    {
      id: "m-tennis",
      name: "Tennis",
      icon: "fas fa-table-tennis",
      position: 4,
      gender: "men_and_women",
    },
    {
      id: "m-track-and-field",
      name: "Track and Field",
      icon: "fas fa-running",
      position: 5,
      gender: "men_and_women",
    },
    {
      id: "m-triathlon",
      name: "Triathlon",
      icon: "fas fa-running",
      position: 6,
      gender: "women",
    },
    {
      id: "m-water-polo",
      name: "Water Polo",
      icon: "fas fa-water",
      position: 7,
      gender: "women",
    },
  ],
  disclaimer:
    "**Post-season events and select tournaments may require a paid ticket.",
};

export default {
  title: "Icon Text Columns Section / Non Ticketed Intro",
  component: args => <NonTicketedIntro {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <NonTicketedIntro {...args} />;
};

export const Default = Template.bind({});
Default.args = props;
