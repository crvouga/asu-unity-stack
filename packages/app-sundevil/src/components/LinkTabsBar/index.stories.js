// @ts-nocheck
import React from "react";

import { LinkTabsBar } from "./index";

export default {
  title: "Link Tabs / Link Tabs Bar",
  component: LinkTabsBar,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => <LinkTabsBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      mobileLabel: "Football Home",
      icon: "fa fas fa-football",
      href: "#football",
      active: true,
    },
    {
      label: "Roster",
      href: "#football-roster",
    },
    {
      label: "News",
      href: "#football-news",
    },
    {
      label: "Coaches",
      href: "#football-coaches",
    },
    {
      label: "Stats",
      href: "#football-stats",
    },
    {
      label: "NIL",
      href: "#football-nil",
    },
    {
      label: "Gameday Info",
      href: "#football-gameday-info",
    },
    {
      label: "Camps",
      href: "#football-camps",
    },
    {
      label: "Lorem Ipsum Dolor Sit",
      href: "#football-lorem-ipsum-dolor-sit",
    },
    {
      label: "Lorem Ipsum Dolor Sit",
      href: "#football-lorem-ipsum-dolor-sit-2",
    },
    {
      label: "Lorem Ipsum Dolor Sit",
      href: "#football-lorem-ipsum-dolor-sit-3",
    },
  ],
  sponsorHref: "#",
  sponsorLogoSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbwJU0mLkyyoKkok_jMppnBtEbsWNYJja3A&s",
  sponsorLogoAlt: " ",
};
