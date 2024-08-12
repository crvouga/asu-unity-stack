import React from "react";

import { GroupTicketBenefit } from "./GroupTicketBenefit";

const props = {
  title: "Join the season-ticket holder family and enjoy exclusive benefits",
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
};

const Template = args => <GroupTicketBenefit {...args} {...props} />;

export const Default = Template.bind({
  ...props,
});

export default {
  title: "Season Tickets / Group Ticket Benefit",
  component: args => <GroupTicketBenefit {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};
