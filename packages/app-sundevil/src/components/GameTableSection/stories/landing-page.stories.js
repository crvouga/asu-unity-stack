// @ts-nocheck
import React from "react";

import {
  GameDataSourceMock,
  IGameDataSource,
} from "../../Game/game-data-source";
import { GameTableSection } from "../index";

export default {
  title: "Game Table / Landing Page",
  component: GameTableSection,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => (
  <>
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "black",
        zIndex: -1,
      }}
    />
    <GameTableSection {...args} />
    <div style={{ width: "100%", height: "1000px" }} />
  </>
);

class CustomGameDataSource extends IGameDataSource {
  constructor() {
    super();
    this.dataSource = new GameDataSourceMock({
      timeout: 1000,
    });
  }

  async findMany(input) {
    const found = await this.dataSource.findMany(input);

    if (Math.random() > 0.5) {
      return {
        ...input,
        rows: [],
        total: 0,
      };
    }

    const rowsNew = found.rows.map(row => {
      return {
        ...row,
        ticketText: Math.random() > 0.9 ? "Get tickets" : "More info",
      };
    });

    return {
      ...found,
      rows: rowsNew,
    };
  }
}

export const LandingPage = Template.bind({});
LandingPage.args = {
  title: "Upcoming games",
  subtitle: null,
  is_sport_type: "0",
  gameDataSourceLoader: null,
  sponsorBlock: [
    {
      logo: "https://dev-web-sda.ws.asu.edu//sites/default/files/2024-07/Group%20%282%29.png",
      text: "Presented by:",
      url: "https://ford.com",
      name: "Ford",
    },
  ],
  sports: [
    {
      id: "all",
      active: true,
      name: "All",
      icon: {
        icon_name: "rotate",
        style: "fa-fas",
        settings:
          'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      },
      position: 1,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    {
      id: "football",
      active: false,
      name: "Football",
      icon: {
        icon_name: "football",
        style: "fa-fas",
        settings:
          'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      },
      position: 2,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    {
      id: "m-basketball",
      active: false,
      name: "M. Basketball",
      icon: {
        svg_icon:
          "https://dev-web-sda.ws.asu.edu//sites/default/files/2024-07/basketball_7.svg",
        svg_icon_name: "basketball_7.svg",
      },
      position: 3,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    {
      id: "m-ice-hockey",
      active: false,
      name: "M. Ice Hockey",
      icon: {
        svg_icon:
          "https://dev-web-sda.ws.asu.edu//sites/default/files/2024-07/ice-hockey_1.svg",
        svg_icon_name: "ice-hockey_1.svg",
      },
      position: 4,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    {
      id: "baseball",
      active: false,
      name: "Baseball",
      icon: {
        icon_name: "baseball-bat-ball",
        style: "fa-fas",
        settings:
          'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      },
      position: 5,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    {
      id: "w-basketball",
      active: false,
      name: "W. Basketball",
      icon: {
        svg_icon:
          "https://dev-web-sda.ws.asu.edu//sites/default/files/2024-07/basketball_8.svg",
        svg_icon_name: "basketball_8.svg",
      },
      position: 6,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    {
      id: "softball",
      active: false,
      name: "Softball",
      icon: {
        icon_name: "baseball",
        style: "fa-fas",
        settings:
          'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      },
      position: 7,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    {
      id: "w-soccer",
      active: false,
      name: "W. Soccer",
      icon: {
        svg_icon:
          "https://dev-web-sda.ws.asu.edu//sites/default/files/2024-07/soccer_1.svg",
        svg_icon_name: "soccer_1.svg",
      },
      position: 8,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    {
      id: "m-golf",
      active: false,
      name: "M. Golf",
      icon: {
        svg_icon:
          "https://dev-web-sda.ws.asu.edu//sites/default/files/2024-07/golf_2.svg",
        svg_icon_name: "golf_2.svg",
      },
      position: 9,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    {
      id: "m-swimming-&-diving",
      active: false,
      name: "M. Swimming & Diving",
      icon: {
        svg_icon:
          "https://dev-web-sda.ws.asu.edu//sites/default/files/2024-07/swimming-and-diving_0.svg",
        svg_icon_name: "swimming-and-diving_0.svg",
      },
      position: 10,
      footerButtons: [
        {
          href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
          label: "Full schedule",
          class: "btn-default btn-gold btn",
          target: "_self",
        },
        {
          href: "https://dev-web-sda.ws.asu.edu/shop",
          label: "Gear up for the game",
          class: "btn-default btn-maroon btn",
          target: "_self",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores",
          href: "https://dev-web-sda.ws.asu.edu/sports/stats",
        },
      ],
    },
    // {
    //   id: null,
    //   active: false,
    //   name: null,
    //   icon: null,
    //   position: 10,
    //   footerButtons: [
    //     {
    //       href: "https://dev-web-sda.ws.asu.edu/sports/schedule",
    //       label: "Full schedule",
    //       class: "btn-default btn-gold btn",
    //       target: "_self",
    //     },
    //     {
    //       href: "https://dev-web-sda.ws.asu.edu/shop",
    //       label: "Gear up for the game",
    //       class: "btn-default btn-maroon btn",
    //       target: "_self",
    //     },
    //   ],
    //   footerLinks: [
    //     {
    //       label: "See past game scores",
    //       href: "https://dev-web-sda.ws.asu.edu/sports/stats",
    //     },
    //   ],
    // },
  ],
  configNoData: {
    hide: true,
    hideBehavior: "initially-hidden",
    // hideBehavior: "initially-visible",
    message: "No upcoming games",
    hideBasedOn: {
      sportId: "all",
    },
  },
  configLayout: {
    includeSportsTabs: true,
    includeLoadMore: true,
  },
  configInputs: null,
  configOverlap: "sport-tabs-with-hero",
  darkMode: true,
  shouldLog: true,
  gameTable: {
    configCells: {
      cellTicketButton: {
        // label: "Get tickets override",
        autoTicketIcon: true,
      },
      cellTitle: {
        includeSubtitleChip: true,
      },
    },
  },
  gameDataSource: {
    type: "custom",
    gameDataSource: new CustomGameDataSource(),
  },
};
