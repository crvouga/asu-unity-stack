import React from "react";

import { SeasonsTicket } from "./index";

const props = {
  ticketHolderBenefits: [
    {
      title: "Best ticket prices",
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>",
      icon: {
        svg_icon:
          "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
        svg_icon_name: "Icon",
      },
    },
    {
      title: "Same seat for all home games",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      icon: {
        svg_icon:
          "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
        svg_icon_name: "Icon",
      },
    },
    {
      title: "Priority on away game and postseason tickets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      icon: {
        svg_icon:
          "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
        svg_icon_name: "Icon",
      },
    },
    {
      title: "Personal service representative",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      icon: {
        svg_icon:
          "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
        svg_icon_name: "Icon",
      },
    },
    {
      title: "Option to purchase season parking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      icon: {
        svg_icon:
          "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
        svg_icon_name: "Icon",
      },
    },
    {
      title: "Access to exclusive season ticket holder events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      icon: {
        svg_icon:
          "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
        svg_icon_name: "Icon",
      },
    },
    {
      title: "A new era of NIL\n",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      icon: {
        svg_icon:
          "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
        svg_icon_name: "Icon",
      },
    },
    {
      title: "Suites available",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      icon: {
        svg_icon:
          "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
        svg_icon_name: "Icon",
      },
    },
  ],
  miniPlans: [
    {
      title: "Non-conference:",
      description: "Wyoming or Mississippi State",
    },
    {
      title: "October:",
      description: "Kansas or Utah",
    },
    {
      title: "November:",
      description: "UCF or BYU",
    },
  ],
  buildMiniPlanLink: {
    href: "#",
    label: "Build Your Mini Plan",
    target: "_blank",
  },
  footer: {
    title: "Important season ticket holder dates",
    data: [
      {
        title: "November 25",
        description: "Season ticket renewals available",
      },
      {
        title: "December 1",
        description: "Drawings begin for online renewals",
      },
      {
        title: "December 29",
        description:
          "Trip for two to the Big 12 Championship Game includes airfare, hotel, tickets. Winner will be selected from online renewals. Final opportunity to take advantage of the six-month payment plan.",
      },
      {
        title: "February 29",
        description: "Renewal deadline to lock in your lowest prices",
      },
      {
        title: "March 1",
        description: "Unpaid seats released",
      },
      {
        title: "Mid-May:",
        description: "2024 Football seat relocation and upgrade period",
      },
    ],
  },
  heroImage: {
    src: "https://picsum.photos/2560/282",
    alt: "Season Ticket Holder Benefits",
    width: 2560,
    height: 282,
  },
};

const Template = args => <SeasonsTicket {...args} {...props} />;

export const Default = Template.bind({
  ...props,
});

export default {
  title: "Season Tickets / Seasons Ticket",
  component: args => <SeasonsTicket {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};
