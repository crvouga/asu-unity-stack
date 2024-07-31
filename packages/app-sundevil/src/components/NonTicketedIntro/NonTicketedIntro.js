import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { SectionHeader, sectionHeaderPropTypes } from "../SectionHeader";
import { sportPropTypes as sportTabPropTypes } from "../SportsTabs/sports-tabs";
import { SportColumn } from "./SportColumn";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SportColumns = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Disclaimer = styled.p`
  font-size: 12px;
  margin: 0;
  color: #747474;
`;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-8618&t=y8n7tOHFoV6bMZzz-0
 * @type {React.FC<Props>}
 */
export const NonTicketedIntro = ({ sectionHeader, sports, disclaimer }) => {
  return (
    <Root>
      <SectionHeader {...sectionHeader} />
      <SportColumns className="container">
        {sports.map(sport => (
          <SportColumn key={sport?.id ?? sport?.name} sport={sport} />
        ))}
      </SportColumns>
      <div className="container">
        <Disclaimer>{disclaimer}</Disclaimer>
      </div>
    </Root>
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
