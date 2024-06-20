import PropTypes from "prop-types";
import React from "react";

import {
  SportsNavigation,
  sportSchema,
} from "../../../../component-game-list/src/core/components/Navigation";

/**
 * @typedef {import("../../../../component-game-list/src/core/components/Navigation").Sport} Sport
 */

/**
 * @typedef {{
 *  sports: Sport[];
 * }} SunDevilStoriesSectionProps
 */

/**
 * @type {React.FC<SunDevilStoriesSectionProps>}
 */
export const SunDevilStoriesSection = ({ sports }) => {
  return (
    <div>
      <SportsNavigation onSportItemClick={() => () => {}} sports={sports} />
    </div>
  );
};

SunDevilStoriesSection.propTypes = {
  sports: PropTypes.arrayOf(sportSchema),
};
