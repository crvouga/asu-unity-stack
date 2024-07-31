// @ts-check
import React from "react";

import { IconTextColumnsSection } from "./IconTextColumnsSection";

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
// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-8618&t=ROKzex2GfQXozCsB-0
/** @type {import("./IconTextColumnsSection").Props} */
const nonTicketedProps = {
  sectionHeader: {
    title: "Attend select game, meets, matches for free",
    subtitle:
      "Sun Devil Athletics offers a variety of sporting events you and your family can attend for free**. ",
  },
  columnFit: "shrink",
  columnContentAlignment: "center",
  mobileColumnCount: 2,
  columnIconStyle: {},
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
NonTicketedIntroSection.args = nonTicketedProps;

export const Sponsorships = Template.bind({});
// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=6146-20844&t=5jzmtNjxVBMDy16s-0
/** @type {import("./IconTextColumnsSection").Props} */
const sponsorshipProps = {
  sectionHeader: {
    title: "Expand your reach with Sun Devil Nation",
    subtitle: `ASU Sun Devil Corporate Sponsorships are just the beginning of your relationship with the greater ASU family.
As one of the biggest and most recognizable brands in the Phoenix metropolitan area, our customized sponsorships can be designed around your brand’s marketing, community relations or promotional goals.
With options to target, engage with and activate faculty/staff, students and fans on or off campus, we can create a program that is mutually beneficial to both parties.
`,
  },
  columnFit: "grow",
  columnContentAlignment: "start",
  columnsTitle: "The power of the ASU Sun Devils includes:",
  mobileColumnCount: 1,
  columnIconStyle: {
    fontSize: "24px",
    marginBottom: "8px",
  },
  columns: [
    {
      id: "maps",
      icon: "fas fa-map-marked-alt",
      title: null,
      caption: null,
      position: 0,
      body: `Incredible venues, such as Mountain America stadium (football), Desert Financial Center (basketball) and Mullet Arena (multiple sports)`,
    },
    {
      id: "people-group",
      icon: "fas fa-users",
      title: null,
      caption: null,
      position: 1,
      body: "Over 2 million fans watching or engaging on TV, in person or over the radio",
    },
    {
      id: "event",
      icon: "fas fa-calendar-alt",
      title: null,
      caption: null,
      position: 2,
      body: "1 million event attendees",
    },
    {
      id: "sun",
      title: null,
      caption: null,
      icon: "fas fa-sun",
      position: 3,
      body: "Over 300,000 ASU Sun Devil Alumni in the Phoenix-metro area",
    },
    {
      id: "star",
      title: null,
      caption: null,
      icon: "fas fa-star",
      position: 4,
      body: "Over 1.5 social media followers (and growing)",
    },
  ],
  footerButtons: [
    {
      label: "Contact Us",
      href: "#",
      color: "gold",
    },
  ],
};
Sponsorships.args = sponsorshipProps;
