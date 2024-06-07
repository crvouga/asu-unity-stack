// @ts-check
import React from "react";

import { GameNavigation } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").ComponentType } ComponentType */
export default {
  title: "Game Navigation",
  component: GameNavigation,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => <GameNavigation {...args} />;
/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const Default = Template.bind({});
Default.args = {
  sports: [
    {name: "All Sports", icon: "fas fa-sync-alt", active: true, position: 1},
    {name: "Football", icon: "fas fa-football-ball", position: 2},
    {name: "M. Basketball", icon: "fas fa-basketball-ball", position: 3},
    {name: "Hockey", icon: "fas fa-hockey-puck", position: 4},
    {name: "Baseball", icon: "fas fa-baseball-ball", position: 5},
    {name: "W. Basketball", icon: "fas fa-basketball-ball"},
    {name: "Softball", icon: "fas fa-futbol"},
    {name: "Soccer", icon: "fas fa-baseball-ball"},
    {name: "Swimming", icon: "fas fa-swimmer"},
    {name: "Golf", icon: "fas fa-golf-ball"},
    {name: "Golf 1", icon: "fas fa-golf-ball"},
    {name: "Golf 2", icon: "fas fa-golf-ball"},
    {name: "Golf 3", icon: "fas fa-golf-ball"},
    {name: "Golf 4", icon: "fas fa-golf-ball"},
  ]
};
