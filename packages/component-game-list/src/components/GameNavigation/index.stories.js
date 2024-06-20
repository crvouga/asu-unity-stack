// @ts-check
import React from "react";

import {GameNavigation} from "./index";

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
    {
      id: "1",
      name: "All Sports",
      icon: "fas fa-sync-alt",
      active: true,
      position: 1,
    },
    { id: "1", name: "Football", icon: "fas fa-football-ball", position: 2 },
    {
      id: "1",
      name: "M. Basketball",
      icon: "fas fa-basketball-ball",
      position: 3,
    },
    { id: "1", name: "Hockey", icon: "fas fa-hockey-puck", position: 4},
    { id: "1", name: "Baseball", icon: "fas fa-baseball-ball", position: 5},
    { id: "1", name: "W. Basketball", icon: "fas fa-basketball-ball"},
    { id: "1", name: "Softball", icon: "fas fa-futbol"},
    { id: "1", name: "Soccer", icon: "fas fa-baseball-ball"},
    { id: "1", name: "Swimming", icon: "fas fa-swimmer"},
    { id: "1", name: "Golf", icon: "fas fa-golf-ball"},
    { id: "1", name: "Golf 1", icon: "fas fa-golf-ball"},
    { id: "1", name: "Golf 2", icon: "fas fa-golf-ball"},
    { id: "1", name: "Golf 3", icon: "fas fa-golf-ball"},
    { id: "1", name: "Golf 4", icon: "fas fa-golf-ball"},
  ],
  onSportItemClick: sportId => () => {
    // eslint-disable-next-line no-console
    console.log(sportId);
  },
};
