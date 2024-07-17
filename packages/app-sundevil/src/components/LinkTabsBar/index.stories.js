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
      href: "#",
      active: true,
    },
    {
      label: "Roster",
      href: "#",
    },
    {
      label: "News",
      href: "#",
    },
    {
      label: "Coaches",
      href: "#",
    },
    {
      label: "Stats",
      href: "#",
    },
    {
      label: "NIL",
      href: "#",
    },
    {
      label: "Gameday Info",
      href: "#",
    },
    {
      label: "Camps",
      href: "#",
    },
    {
      label: "Lorem Ipsum Dolor Sit",
      href: "#",
    },
    {
      label: "Lorem Ipsum Dolor Sit",
      href: "#",
    },
    {
      label: "Lorem Ipsum Dolor Sit",
      href: "#",
    },
  ],
  sponsorHref: "#",
  sponsorLogoSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbwJU0mLkyyoKkok_jMppnBtEbsWNYJja3A&s",
  sponsorLogoAlt: " ",
};
