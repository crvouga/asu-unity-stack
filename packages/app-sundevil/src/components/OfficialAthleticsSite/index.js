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

const OfficialAthleticsSite = ({
  href,
  hrefStyle,
  hrefText = "Arizona State University",
  text = "The official athletics site of",
}) => {
  return (
    <Root>
      {text}{" "}
      <a style={hrefStyle} href={href}>
        {hrefText}
      </a>
    </Root>
  );
};

/**
 * @typedef {object} OfficialAthleticsSiteProps
 * @property {string} href
 * @property {string} text
 * @property {string} hrefText
 * @property {Record<string, unknown>} hrefStyle
 *
 */

OfficialAthleticsSite.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  hrefText: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  hrefStyle: PropTypes.object,
};
export { OfficialAthleticsSite };
