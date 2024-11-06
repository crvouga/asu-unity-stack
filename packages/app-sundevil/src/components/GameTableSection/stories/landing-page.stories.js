// @ts-nocheck
import React from "react";

import { ALL_ID } from "../../../select-all-option";
import { GameDataSourceMockV2 } from "../../Game/game-data-source/game-data-source-impl-mock-v2";
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

export const LandingPage = Template.bind({});
LandingPage.args = {
  gameDataSource: {
    type: "mock-v2",
  },
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
      id: "general",
      active: true,
      name: "General",
      position: 0,
      icon: {
        // https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=9390-8911&node-type=frame&t=xwWuyfmZaiUECEcb-0
        svg_icon:
          "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2224%22%20viewBox%3D%220%200%2016%2023%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20%20%20%20%20%20%20%20d%3D%22M9.80831%200.8016C9.44389%200.718768%209.14458%200.752918%208.91957%200.903081C8.67212%201.06826%208.59325%201.32523%208.57661%201.39111L8.57733%201.39402L8.57058%201.41727C8.56527%201.4364%207.84054%203.90488%207.43849%205.21372L7.41027%205.30769C7.00895%206.61774%206.59413%207.97186%206.34186%208.89076L6.33317%208.92273L8.28141%209.75614C8.28141%209.75614%209.06813%207.21863%209.44606%205.9001L9.49188%205.73129C9.80565%204.63365%2010.391%202.65417%2010.563%202.07362L10.6515%201.74738C10.6529%201.74254%2010.7192%201.50979%2010.5789%201.26928C10.4484%201.04573%2010.1889%200.888549%209.80831%200.802084V0.8016Z%22%20%20%20%20%20%20%20%20fill%3D%22%23191919%22%20%2F%3E%3Cpath%20%20%20%20%20%20%20%20d%3D%22M11.1688%208.54394C10.9684%208.37173%2010.6946%208.2688%2010.4368%208.2688C10.3213%208.2688%2010.0314%208.29229%209.83652%208.50906L9.53384%208.84353C9.2249%209.18261%208.62943%209.92156%208.62943%209.92156L8.68659%209.94965C8.94175%2010.0637%208.98758%2010.0843%209.06861%2010.1725C9.15616%2010.2672%209.18751%2010.5522%209.13711%2010.7952C9.02182%2011.3554%208.76593%2012.0255%207.80122%2012.2343C7.60515%2012.2762%207.43246%2012.3024%207.2728%2012.3142L7.23349%2012.3171L7.23831%2012.3566C7.26315%2012.5499%207.36083%2012.7562%207.47612%2012.8582C7.60418%2012.9708%207.97752%2013.1723%208.15624%2013.2108C8.19724%2013.2205%208.2421%2013.2254%208.29106%2013.2254C8.58819%2013.2254%208.9596%2013.043%209.13614%2012.8103L10.6691%2010.7986C10.8702%2010.5336%2011.1259%2010.1969%2011.4751%209.73918C11.5612%209.62704%2011.6065%209.49166%2011.6065%209.34803C11.6065%209.07338%2011.4512%208.78783%2011.1693%208.54369L11.1688%208.54394Z%22%20%20%20%20%20%20%20%20fill%3D%22%23191919%22%20%2F%3E%3Cpath%20%20%20%20%20%20%20%20d%3D%22M4.84655%205.03473C4.84655%205.03473%204.30656%201.49768%204.30366%201.47854C4.30294%201.47176%204.27207%201.19275%204.02534%200.992936C3.816%200.823155%203.51839%200.758973%203.14143%200.8016C2.77218%200.843258%202.50423%200.97138%202.34433%201.18282C2.14512%201.44657%202.19191%201.74738%202.19239%201.75029C2.19239%201.75029%202.65497%204.38007%202.85322%205.46948C2.98562%206.19341%203.11417%206.90038%203.23476%207.57999L3.23838%207.60009L5.37522%208.51245L5.36653%208.44682C5.21797%207.33658%205.02937%206.16652%204.84655%205.03497V5.03473Z%22%20%20%20%20%20%20%20%20fill%3D%22%23191919%22%20%2F%3E%3Cpath%20%20%20%20%20%20%20%20d%3D%22M15.2758%207.06338C15.0322%206.90522%2014.7947%206.85049%2014.5682%206.90159C14.2588%206.97183%2014.08%207.22057%2014.047%207.26973C14.0096%207.31599%2013.2398%208.2516%2012.9164%208.66043C11.9637%209.85931%2011.566%2010.3638%2010.843%2011.3171L10.2%2012.1444C10.023%2012.375%209.81385%2012.648%209.4844%2013.0796C9.2302%2013.414%208.71698%2013.6664%208.29033%2013.6664C8.21991%2013.6664%208.14659%2013.6584%208.06628%2013.642C7.79351%2013.5833%207.36107%2013.3455%207.18405%2013.1871C6.96723%2012.9955%206.80974%2012.6516%206.79262%2012.3319L6.789%2012.268L6.72581%2012.2592C6.05172%2012.1665%205.29104%2011.7732%204.01256%2010.8569L3.94286%2010.807L3.51622%2011.5603L3.60159%2011.5918C5.59107%2012.329%206.94408%2013.9169%207.62299%2016.311C7.63626%2016.3599%207.62999%2016.4096%207.60611%2016.4517C7.58247%2016.4936%207.54244%2016.5248%207.49613%2016.5374L7.4397%2016.5522C7.35577%2016.575%207.26701%2016.5246%207.24362%2016.4401C6.27674%2013.0045%204.11%2012.2065%203.3978%2011.9444C3.1571%2011.8553%203.0411%2011.8061%203.03265%2011.6601C3.03265%2011.6412%203.03748%2011.5867%203.10404%2011.4772L3.81721%2010.2195L3.99688%2010.3519C5.45094%2011.4137%206.2396%2011.8277%206.90645%2011.8792C7.03982%2011.8897%207.18019%2011.886%207.33671%2011.8691C7.45562%2011.8526%207.56897%2011.8323%207.71054%2011.8032C8.42129%2011.6504%208.60989%2011.1853%208.70757%2010.7058C8.72879%2010.6004%208.73265%2010.513%208.71891%2010.4532L8.70998%2010.4144L2.90073%207.93529C2.75651%207.87644%202.59299%207.9319%202.50375%208.07044L0.459769%2011.9509C0.441681%2011.9848%200.285156%2012.314%200.285156%2012.5632C0.285156%2012.7921%200.43131%2013.06%200.43131%2013.06C0.905466%2013.828%202.63543%2016.2446%204.1018%2017.7075C4.22817%2017.8344%204.16064%2018.2829%203.99592%2019.3031C3.94817%2019.5983%203.89607%2019.9168%203.84759%2020.2513C3.66768%2021.4938%203.54829%2022.8806%203.51887%2023.24L9.762%2023.2424C9.78346%2022.8358%209.87125%2020.8875%209.70315%2018.9674C9.68796%2018.785%209.74946%2018.5654%209.84931%2018.4445C11.0195%2017.0536%2011.4876%2014.8028%2011.6347%2013.8997L11.641%2013.8597C11.6642%2013.7078%2011.6958%2013.4995%2011.7536%2013.3397L11.7696%2013.3077C11.7845%2013.2777%2011.7971%2013.2537%2011.8115%2013.2326L11.9705%2012.9955C12.523%2012.1696%2012.8865%2011.6266%2013.5651%2010.7782C14.2407%209.93197%2015.5324%208.19687%2015.5423%208.1833C15.5553%208.1678%2015.7497%207.94183%2015.7087%207.64417C15.6783%207.42571%2015.5329%207.2305%2015.2756%207.06362L15.2758%207.06338Z%22%20%20%20%20%20%20%20%20fill%3D%22%23191919%22%20%2F%3E%3C%2Fsvg%3E",
      },
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
      id: ALL_ID,
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
    // hide: true,
    // hideBehavior: "initially-hidden",
    // hideBehavior: "initially-visible",
    // message: "No upcoming games",
    // hideBasedOn: {
    // sportId: ALL_ID,
    // },
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
    version: "v2",
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
  // gameDataSource: {
  //   type: "custom",
  //   gameDataSource: new CustomGameDataSource(),
  // },
};
