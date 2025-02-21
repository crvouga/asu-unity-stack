import React from "react";

import { GroupTicketsFooter } from "../SeasonsTicket/GroupTicketsFooter";

const props = {
    title: "Group ticket FAQs",
    data: [
      {
        "title": "What is a group?",
        "description": "<p>A group is 15 or more. Who can be in a group? You tell us! <span>Examples of groups: Sports teams (adult and youth), Nonprofits, scouts, church groups, families, reunions, birthday parties, company outings, client entertainment and so much more!</span></p>"
      },
      {
        "title": "How do I order group tickets?",
        "description": "<p>Group tickets are not offered online. Group tickets can be purchased in bulk or through a promo code or FEVO page created by one of our ticket representatives. Contact our Ticket Sales and Service team by calling or texting <a href=\"tel:4807270000\">480-727-0000</a> or emailing <a href=\"mailto:grouptickets@asu.edu\">grouptickets@asu.edu</a>.</p>"
      },
      {
        "title": "What is FEVO?",
        "description": "<p>FEVO is a partner of Sun Devil Athletics, revolutionizing the fan ticket purchasing experience and a tool that group leaders will love! FEVO is an advanced e-commerce technology that allows friends to gather, plan and purchase together. Fully integrated with Ticketmaster, verified tickets come straight from Sun Devil Athletics and into your account after purchase. FEVO makes it easier to buy tickets online with friends. A customized landing page for your group will be created by a ticket sale..."
      }
    ],
    cta: [],
    link: {
      "href": null,
      "label": null
    },
    bottomButtons: [
      {
        "href": null,
        "label": null,
        "class": "sundevil-section-faqs-link",
        "style": {
          "color": "#747474"
        }
      }
    ]
};
const Template = args => <GroupTicketsFooter {...args} {...props} />;

export const Default = Template.bind({
  ...props,
});

export default {
  title: "Grouped Tickets Footer",
  component: args => <GroupTicketsFooter {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};
