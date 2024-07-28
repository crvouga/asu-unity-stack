import PropTypes from "prop-types";
import React from "react";

import { APP_CONFIG } from "../../../config";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { cardPropTypes } from "./card-prop";
import { CardDesktop } from "./CardDesktop";
import { CardMobile } from "./CardMobile";

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=5684-858&t=9IhK8Vy1oD4OHGJB-0
 * @type {React.FC<Props>}
 */
export const Card = props => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  if (isMobile) {
    return <CardMobile {...props} />;
  }
  return <CardDesktop {...props} />;
};

/**
 * @typedef {{
 * card: import("./card-prop").CardProp
 * reverse?: boolean
 * }} Props
 */

Card.propTypes = {
  card: cardPropTypes.isRequired,
  reverse: PropTypes.bool,
};
