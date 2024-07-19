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

const Template = args => (
  <div style={{ width: "100%", maxHeight: "100%" }}>
    <div
      id="navbar"
      style={{
        width: "100%",
        height: "123px",
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    />
    <div
      style={{ width: "100%", height: "500px", backgroundColor: "#efefef" }}
    />
    <LinkTabsBar {...args} />

    <div style={{ width: "100%", height: "1000px" }} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  disableActiveFromUrl: false,
  stickyNavbarSelector: "#navbar",
  links: [
    {
      mobileLabel: "Football Home",
      icon: "fa fas fa-football",
      href: "#football",
      active: true,
    },
    {
      mobileLabel: "Baseball Home",
      href: "#baseball",
      label: "Baseball",
      active: false,
      icon: {
        icon_name: "baseball",
        style: "fa-fas",
        settings:
          "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
      },
    },
    {
      mobileLabel: "Lacrosse Home",
      href: "#lacrosse",
      icon: {
        src: "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
      },
      active: false,
    },
    {
      label: "Roster",
      href: "#football-roster",
      active: false,
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
