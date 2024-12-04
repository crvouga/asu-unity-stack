// @ts-nocheck
import React from "react";

import { LinkTabsBar } from "../index";

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
  <div
    style={{
      width: "100vw",
      maxHeight: "100dvh",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      id="navbar"
      style={{
        width: "100%",
        height: "80px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
        }}
      />
      <div id="navbar-portal" />
    </div>

    <div
      style={{
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
      }}
    >
      <div
        style={{ width: "100%", height: "500px", backgroundColor: "#efefef" }}
      />

      <div id="link-tabs">
        <LinkTabsBar {...args} />
      </div>

      <div style={{ width: "100%", height: "3000px" }}>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "transparent",
          }}
        />

        <div style={{ width: "100%", height: "24px" }} id="football-roster">
          football-roster
        </div>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "tomato",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          Roster
        </div>

        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "transparent",
          }}
        />

        <div style={{ width: "100%", height: "24px" }} id="football-news">
          football-news
        </div>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "tomato",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          News
        </div>

        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "transparent",
          }}
        />

        <div style={{ width: "100%", height: "24px" }} id="football-coaches">
          football-coaches
        </div>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "tomato",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          Coaches
        </div>
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  disableActiveFromUrl: false,
  highlightOffset: -48,
  maxLinkCountBreakpoints: {
    mobile: 2,
    tablet: 4,
    smallDesktop: 6,
    desktop: 8,
  },
  stickyPosition: {
    navbarPortalSelector: "#navbar-portal",
    stickyElementSelector: "#link-tabs",
  },
  iconTooltip: "Tooltip Football",
  links: [
    {
      mobileLabel: "Football Home",
      icon: "fa fas fa-football",
      href: "#football",
      active: true,
      iconTooltip: "Tooltip Football",
    },
    {
      iconTooltip: "Tooltip Baseball",
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
  sponsorLogoAlt: "sponsor logo alt",
};

export const DebugProps = Template.bind({});
DebugProps.args = {
  title: "Baseball anchor menu",
  disableActiveFromUrl: false,
  stickyPosition: {
    navbarPortalSelector: "#navbar-portal",
    stickyElementSelector: "#link-tabs",
  },
  maxLinkCountBreakpoints: {
    mobile: 1,
    tablet: 3,
    smallDesktop: 5,
    desktop: 7,
  },
  links: [
    {
      mobileLabel: "Ice Hockey Home",
      href: "/sports/mens/baseball",
      // label: "Baseball",
      active: true,
      icon: {
        icon_name: "",
        src: "/sites/default/files/2024-07/ice-hockey_2.svg",
        style: "",
      },
    },
    {
      mobileLabel: "Roster",
      href: "https://thesundevils.com/sports/baseball/roster",
      label: "Roster",
      active: false,
      icon: {
        icon_name: "",
        style: "",
        src: "",
      },
    },
    {
      mobileLabel: "News",
      href: "/about/news?baseball",
      label: "News",
      active: false,
      icon: {
        icon_name: "",
        style: "",
        src: "/sites/default/files/2024-07/basketball_2.svg",
      },
    },
    {
      mobileLabel:
        "Coaches Coaches Coaches Coaches Coaches Coaches Coaches Coaches",
      href: "http://example.com",
      label: "Coaches Coaches Coaches Coaches Coaches Coaches Coaches Coaches",
      active: false,
      icon: {
        icon_name: "",
        style: "",
        src: "",
      },
    },
    {
      mobileLabel: "Stats",
      href: "https://thesundevils.com/sports/baseball/stats/",
      label: "Stats",
      active: false,
      icon: {
        icon_name: "",
        style: "",
        src: "",
      },
    },
    {
      mobileLabel: "NIL",
      href: "http://example.com",
      label: "NIL",
      active: false,
      icon: {
        icon_name: "",
        style: "",
        src: "",
      },
    },
    {
      mobileLabel: "Gameday Info",
      href: "http://example.com",
      label: "Gameday Info",
      active: false,
      icon: {
        icon_name: "",
        style: "",
        src: "",
      },
    },
    {
      mobileLabel: "Camps",
      href: "http://example.com",
      label: "Camps",
      active: false,
      icon: {
        icon_name: "",
        style: "",
        src: "",
      },
    },
    {
      mobileLabel: "Lorem Ipsum Dolor Sit",
      href: "http://example.com",
      label:
        "Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit",
      active: false,
      icon: {
        icon_name: "",
        style: "",
        src: "",
      },
    },
    {
      mobileLabel: "Lorem Ipsum Dolor Sit",
      href: "http://example.com",
      label: "Lorem Ipsum Dolor Sit",
      active: false,
      icon: {
        icon_name: "",
        style: "",
        src: "/sites/default/files/2024-07/basketball_1.svg",
      },
    },
  ],
  sponsorHref: "#",
  sponsorLogoSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbwJU0mLkyyoKkok_jMppnBtEbsWNYJja3A&s",
  sponsorLogoAlt: "sponsor logo alt",
};

export const SportTickets = Template.bind({});
SportTickets.args = {
  disableActiveFromUrl: false,
  stickyPosition: {
    navbarPortalSelector: "#navbar-portal",
    stickyElementSelector: "#link-tabs",
  },
  maxLinkCountBreakpoints: {
    mobile: 2,
    tablet: 4,
    smallDesktop: 6,
    desktop: 8,
  },
  alignment: "center",
  title: "On this page:",
  links: [
    {
      label: "Single Game Single Game Single Game",
      href: "#",
    },
    {
      label: "Season",
      href: "#",
    },
    {
      label: "Mini plans",
      href: "#",
    },
    {
      label: "Group",
      href: "#",
    },
    {
      label: "Premium",
      href: "#",
    },
  ],

  sponsorHref: null,
  sponsorLogoSrc: " ",
  sponsorLogoAlt: "sponsor logo alt",
};

export const YourGameDayGuide = Template.bind({});
YourGameDayGuide.args = {
  disableActiveFromUrl: false,
  stickyPosition: {
    stickyElementSelector: "#link-tabs",
    navbarPortalSelector: "#navbar-portal",
  },
  maxLinkCountBreakpoints: {
    mobile: 1,
    tablet: 3,
    smallDesktop: 3,
    desktop: 5,
  },
  alignment: "center",
  title: " ",
  links: [
    {
      label: "Stadium Policies",
      href: "#",
    },
    {
      label: "Game Day Spirit Game Day Spirit Game Day Spirit",
      href: "#",
    },
    {
      label: "Getting Here",
      href: "#",
    },
    {
      label: "Stadium Services",
      href: "#",
    },
    {
      label: "Clubs and Tailgating",
      href: "#",
    },
    {
      label: "Emergency and Safety Info",
      href: "#",
    },
  ],
  sponsorHref: " ",
  sponsorLogoSrc: " ",
  sponsorLogoAlt: "sponsor logo alt",
};
