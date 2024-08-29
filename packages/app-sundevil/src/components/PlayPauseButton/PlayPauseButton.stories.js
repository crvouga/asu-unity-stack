// @ts-check
import React from "react";

import { PlayPauseButton } from "./PlayPauseButton";

// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=7890-4032&node-type=FRAME&t=aBiTXKwLfCyj1RZk-0
/** @type {import("./PlayPauseButton").Props} */
const props = {
  isPlaying: true,
};

export default {
  title: "Play Pause Button / Play Pause Button",
  component: args => <PlayPauseButton {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <PlayPauseButton {...args} />;
};

export const Default = Template.bind({});
Default.args = props;
