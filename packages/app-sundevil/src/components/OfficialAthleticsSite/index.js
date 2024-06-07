// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Root = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: bold;
`;

export const OfficialAthleticsSite = ({ href }) => {
  return (
    <Root>
      The official athletics site of <a href={href}>Arizona State University</a>
    </Root>
  );
};
OfficialAthleticsSite.propTypes = {
  href: PropTypes.string,
};
