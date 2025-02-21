import React from "react";

import { GroupTicketsFooter } from "./GroupTicketsFooter";

const Template = args => <GroupTicketsFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
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

export const GroupTicketsFAQ = Template.bind({});
GroupTicketsFAQ.args = {
  uuid: "e193d8ae-9ed2-475f-9b73-6b527cc16973",
  title: "Group ticket FAQs",
  data: [
    {
      title: "What is a group?",
      description:
        "<p>A group is 15 or more. Who can be in a group? You tell us! <span>Examples of groups: Sports teams (adult and youth), Nonprofits, scouts, church groups, families, reunions, birthday parties, company outings, client entertainment and so much more!</span></p>",
    },
    {
      title: "How do I order group tickets?",
      description:
        '<p>Group tickets are not offered online. Group tickets can be purchased in bulk or through a promo code or FEVO page created by one of our ticket representatives. Contact our Ticket Sales and Service team by calling or texting <a href="tel:4807270000">480-727-0000</a> or emailing <a href="mailto:grouptickets@asu.edu">grouptickets@asu.edu</a>.</p>',
    },
    {
      title: "What is FEVO?",
      description:
        "<p>FEVO is a partner of Sun Devil Athletics, revolutionizing the fan ticket purchasing experience and a tool that group leaders will love! FEVO is an advanced e-commerce technology that allows friends to gather, plan and purchase together. Fully integrated with Ticketmaster, verified tickets come straight from Sun Devil Athletics and into your account after purchase. FEVO makes it easier to buy tickets online with friends. A customized landing page for your group will be created by a ticket sale...</p>",
    },
  ],
  cta: [],
  link: {
    href: null,
    label: null,
  },
  bottomButtons: [
    {
      href: null,
      label: null,
      class: "sundevil-section-faqs-link",
      style: {
        color: "#747474",
      },
    },
  ],
};

export default {
  title: "Season Tickets / Grouped Tickets Footer",
  component: GroupTicketsFooter,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};
