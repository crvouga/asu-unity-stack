import React from "react";

import { GroupTicketsFooter } from "./GroupTicketsFooter";

const props = {
  title: "Current season ticket holders",
  subtitle: "Season ticket renewals for the 2024 season are now available.",
  gridTitle: "Important season ticket holder dates for Football",
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
  bottomButtons: [
    {
      label: "Renew",
      icon: "fa fas fa-ticket-alt",
      size: "large",
      color: "gold",
    },
    {
      label: "Learn more",
      href: "#",
      class: "muted-link",
    },
  ],
};
const Template = args => <GroupTicketsFooter {...args} {...props} />;

export const Default = Template.bind({
  ...props,
});

export default {
  title: "Season Tickets / Grouped Tickets Footer",
  component: args => <GroupTicketsFooter {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};
