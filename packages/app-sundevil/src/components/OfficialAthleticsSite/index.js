// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../track-ga/track-ga-event";

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
      <a
        style={hrefStyle}
        href={href}
        onClick={() => {
          // https://www.dropbox.com/scl/fo/gmkapav1avulctkge0w9q/AFF5UCx0jwCOHPhM8ZoaKOg/About%20ASU%20Sun%20Devil%20Athletics%20%20%20ASU%20Sun%20Devil%20Athletics.pdf?rlkey=le42w6mnh6hukls733k3ej41c&e=3&dl=0
          trackGAEvent({
            event: "link",
            action: "click",
            name: "onclick",
            type: "internal link",
            region: "navbar",
            section: "topbar",
            text: "arizona state university",
            component: "text",
          });
        }}
      >
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
