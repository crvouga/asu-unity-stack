// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Root = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  a:link {
  }
  a:active,
  a:hover {
    text-decoration: underline;
  }
`;

const OfficialAthleticsSite = ({ href, hrefStyle }) => {
  return (
    <Root>
      The official athletics site of{" "}
      <a style={hrefStyle} href={href}>
        Arizona State University
      </a>
    </Root>
  );
};
OfficialAthleticsSite.propTypes = {
  href: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  hrefStyle: PropTypes.object,
};
export { OfficialAthleticsSite };
