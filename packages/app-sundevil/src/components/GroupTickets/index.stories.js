import React from "react";

import { GroupTickets } from "./index";

const props = {
  faqs: [
    {
      title: "What is a group?",
      description:
        "A group is 15 or more. Who can be in a group? You tell us!\n" +
        "Examples of groups: Sports Teams (adult and youth), Non-Profits, Scouts, Church Groups, Families, Reunions, Birthday Parties, Company Outings, Client Entertainment, and so much more!",
    },
    {
      title: "How do I order group tickets?",
      description:
        "Group tickets are not offered online. Group tickets can be purchased in bulk or through a promo code or FEVO page created by one of our ticket representatives. Contact our Ticket Sales and Service team by calling 480-727-0000 or emailing grouptickets@asu.edu.",
    },
    {
      title: "What is FEVO?",
      description:
        "FEVO is a partner of Sun Devil Athletics, revolutionizing the fan ticket purchasing experience and a tool that group leaders will love! FEVO is an advanced e-commerce technology that allows friends to gather, plan and purchase together. Fully integrated with Ticketmaster, verified tickets come straight from Sun Devil Athletics and into your account after purchase. FEVO makes it easier to buy tickets online with friends. A customized landing page for your group will be created by a Ticket Sales and Service member. Start the process or request a demo page by calling our Ticket Sales and Service Team.",
    },
  ],
  textImageBlock: {
    imageSrc: "https://picsum.photos/486/555",
    imageAlt: "Group Tickets",
    interestFormLink: {
      href: "/",
      text: "Interested in group tickets?",
      target: "_blank",
    },
    experienceList: [
      {
        icon: "camera",
        text: "Group photo with Sparky",
      },
      {
        icon: "camera",
        text: "High-five fan tunnel",
      },
      {
        icon: "camera",
        text: "Standing with the team during the National Anthem",
      },
      {
        icon: "camera",
        text: "Video board recognition",
      },
      {
        icon: "rocket",
        text: "Stadium tours",
      },
      {
        icon: "camera",
        text: "Halftime performances",
      },
    ],
  },
  sportsGroupCard: [
    {
      title: "Football",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      imageSrc: "https://picsum.photos/300/300",
      imageAlt: "Football",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      buttons: [
        {
          label: "Learn more",
          color: "primary",
          href: "/",
        },
      ],
    },
    {
      title: "Football",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      imageSrc: "https://picsum.photos/300/300",
      imageAlt: "Football",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      buttons: [
        {
          label: "Learn more",
          color: "primary",
          href: "/",
        },
      ],
    },
    {
      title: "Football",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      imageSrc: "https://picsum.photos/300/300",
      imageAlt: "Football",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      buttons: [
        {
          label: "Learn more",
          color: "primary",
          href: "/",
        },
      ],
    },
    {
      title: "Football",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      imageSrc: "https://picsum.photos/300/300",
      imageAlt: "Football",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      buttons: [
        {
          label: "Learn more",
          color: "primary",
          href: "/",
        },
      ],
    },
    {
      title: "Football",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      imageSrc: "https://picsum.photos/300/300",
      imageAlt: "Football",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      buttons: [
        {
          label: "Learn more",
          color: "primary",
          href: "/",
        },
      ],
    },
    {
      title: "Football",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      imageSrc: "https://picsum.photos/300/300",
      imageAlt: "Football",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      buttons: [
        {
          label: "Learn more",
          color: "primary",
          href: "/",
        },
      ],
    },
    {
      title: "Football",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      imageSrc: "https://picsum.photos/300/300",
      imageAlt: "Football",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      buttons: [
        {
          label: "Learn more",
          color: "primary",
          href: "/",
        },
      ],
    },
  ],
};

const Template = args => <GroupTickets {...args} {...props} />;

export const Default = Template.bind({
  ...props,
});

export default {
  title: "Group Ticket",
  component: args => <GroupTickets {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};
