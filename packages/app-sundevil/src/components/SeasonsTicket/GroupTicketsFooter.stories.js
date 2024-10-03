import React from "react";

import { GroupTicketsFooter } from "./GroupTicketsFooter";

const props = {
  title: "Current season ticket holders",
  subtitle: "Season ticket renewals for the 2024 season are now available.",
  gridTitle: "Important season ticket holder dates for Football",
  data: [
    {
      title: "Nov. 25",
      description:
        '<p>Season ticket <a href="https://am.ticketmaster.com/sundevils?_ga=2.36480224.1386440229.1722195733-537714168.1721056201&amp;_gl=1*g9eppc*_gcl_au*MjQ0MjA2NTYzLjE3MjEwNjAwNDQ.*_ga*NTM3NzE0MTY4LjE3MjEwNTYyMDE.*_ga_TEHJR60KD9*MTcyMjYxOTAzMC40Ni4xLjE3MjI2MTkxMjguMC4wLjIwMjkzNDM3Njc">renewals</a> available. <a href="https://thesundevils.com/sports/2017/11/16/football-season-ticket-renewals.aspx">Learn more</a>.&nbsp;</p>',
    },
    {
      title: "Dec. 1",
      description: "<p>Drawings begin for online renewals</p>",
    },
    {
      title: "Dec. 29",
      description:
        "<p>Trip for two to the Big 12 Championship Game includes airfare, hotel, tickets. Winner will be selected from online renewals. Final opportunity to take advantage of the six-month payment plan</p>",
    },
    {
      title: "Feb. 29",
      description: "<p>Renewal deadline to lock in your lowest prices</p>",
    },
    {
      title: "March 1",
      description: "<p>Unpaid seats released</p>",
    },
    {
      title: "Mid-May",
      description: "<p>2024 football seat relocation and upgrade period</p>",
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
