import PropTypes from "prop-types";
import React from "react";

import { sectionHeaderPropTypes } from "../SectionHeader";
import { sportGenderToString } from "../Sport/sport-gender";
import { sportPropTypes as sportTabPropTypes } from "../SportsTabs/sports-tabs";
import { IconTextColumnsSection } from "./IconTextColumnsSection";

const wrapParens = str => `(${str})`;

/**
 *
 * DEPRECATED: Use IconTextColumnsSection instead
 *
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-8618&t=y8n7tOHFoV6bMZzz-0
 * @type {React.FC<Props>}
 */
export const NonTicketedIntro = ({ sectionHeader, sports, disclaimer }) => {
  return (
    <IconTextColumnsSection
      sectionHeader={sectionHeader}
      disclaimer={disclaimer}
      columns={sports?.map(sport => {
        const caption =
          sport.caption ??
          wrapParens(sportGenderToString(sport.gender)) ??
          null;
        return {
          id: sport.id,
          title: sport.name,
          icon: sport.icon,
          caption,
        };
      })}
    />
  );
};

/**
 * @typedef {import("../SportsTabs/sports-tabs").Sport & {gender?: string | null; caption?; string | null}} Sport
 */

const sportPropType = PropTypes.shape({
  ...sportTabPropTypes,
  gender: PropTypes.string,
  caption: PropTypes.string,
});

/**
 * @typedef {{
 * sectionHeader: import("../SectionHeader").SectionHeaderProps
 * sports: Sport[]
 * disclaimer: string
 * }} Props
 */

NonTicketedIntro.propTypes = {
  sectionHeader: sectionHeaderPropTypes,
  disclaimer: PropTypes.string,
  sports: PropTypes.arrayOf(sportPropType),
};
