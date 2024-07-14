// @ts-check
import React from "react";

import { GameTable } from "./GameTable";

export default {
  title: "Game Table / Game Table",
  component: GameTable,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => <GameTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  games: [
    {
      date: {
        day: "12",
        month: "Mar",
      },
      sport: { name: "Sport Name", icon: "fa fa-rocket" },
      homeTeam: {
        name: "Sun Devils",
      },
      ticketLink: "https://www.example.com",
      ticketText: "Buy Tickets",
      time: "5:30pm",
      venue: "Phoenix Muni Stadium",
    },
    {
      date: {
        day: "12",
        month: "Mar",
      },
      sport: { name: "Sport Name", icon: "fa fa-rocket" },
      homeTeam: {
        name: "Sun Devils",
        logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
      },
      awayTeam: {
        name: "Wildcats",
        logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
      },
      time: "5:30pm",
      venue: "Phoenix Muni Stadium",
    },
  ],
  footerButtons: [
    {
      color: "gold",
      label: "Full schedule",
      size: "small",
    },
    {
      color: "maroon",
      label: "Gear up for the game",
      size: "small",
    },
  ],
};
