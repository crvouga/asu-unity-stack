import {
  faBaseballBall,
  faBasketballBall,
  faBiking,
  faDumbbell,
  faFistRaised,
  faFootball,
  faFutbol,
  faGolfBall,
  faHockeyPuck,
  faRunning,
  faSwimmer,
  faTableTennis,
  faVolleyballBall,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { sportNamePropTypes } from "./sport-name";

const sportIconPropTypes = {
  sportName: sportNamePropTypes.isRequired,
};

/**
 * @typedef {import('prop-types').InferProps<typeof sportIconPropTypes>} SportIconProps
 */

const iconMap = {
  "baseball": faBaseballBall,
  "basketball": faBasketballBall,
  "cross-country": faRunning,
  "football": faFootball,
  "golf": faGolfBall,
  "ice-hockey": faHockeyPuck,
  "swimming-and-diving": faSwimmer,
  "tennis": faTableTennis,
  "track-and-field": faRunning,
  "wrestling": faFistRaised,
  "beach-volleyball": faVolleyballBall,
  "gymnastics": faDumbbell,
  "lacrosse": faFootball, // Replace with appropriate icon
  "soccer": faFutbol,
  "softball": faBaseballBall, // Replace with appropriate icon
  "triathlon": faBiking,
  "volleyball": faVolleyballBall,
  "water-polo": faWater, // Replace with appropriate icon
};

/**
 * @type {React.FC<SportIconProps>}
 */
export const SportIcon = ({ sportName }) => {
  const icon = iconMap[sportName] || faFootball;
  return <FontAwesomeIcon color="currentColor" icon={icon} />;
};

SportIcon.propTypes = sportIconPropTypes;
