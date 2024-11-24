// @ts-nocheck
import React from "react";

import { LinkTabsBar } from "../index";

export default {
  title: "Link Tabs / Link Tabs Bar Ads",
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
);

const baseProps = {
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
  sponsorGoogleAdHead: "",
  sponsorGoogleAdBody: "",
};

export const Default = Template.bind({});
Default.args = {
  ...baseProps,
};

/**
 * https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
 * @type {{ args: ComponentType, parameters: object}}
 */
export const GoogleAd = Template.bind({});
GoogleAd.args = {
  ...baseProps,

  sponsorGoogleAdHead: `
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
  console.log('googleAdHead');
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/23203588234/LSQA', [135, 38], 'div-gpt-ad-1731610205689-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
  });
</script>
`,
  sponsorGoogleAdBody: `
<!-- /23203588234/LSQA -->
<div id='div-gpt-ad-1731610205689-0' style='min-width: 135px; min-height: 38px;'>
  <script>
    console.log('googleAdBody');
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1731610205689-0'); });
  </script>
</div>
`,
};

/**
 * https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
 * @type {{ args: ComponentType, parameters: object}}
 */
export const GoogleAdEmpty = Template.bind({});
GoogleAdEmpty.args = {
  ...baseProps,
  sponsorGoogleAdHead: `
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <script>
  console.log('googleAdHead');
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
      googletag.defineSlot('/23203588234/SLQA-blank', [135, 38], 'div-gpt-ad-1731610274809-0').addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.pubads().collapseEmptyDivs();
      googletag.enableServices();
    });
  </script>
  `,
  sponsorGoogleAdBody: `
  <!-- /23203588234/SLQA-blank -->
  <div id='div-gpt-ad-1731610274809-0' style='min-width: 135px; min-height: 38px;'>
    <script>
    console.log('googleAdBody');
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1731610274809-0'); });
    </script>
  </div>
  `,
};
