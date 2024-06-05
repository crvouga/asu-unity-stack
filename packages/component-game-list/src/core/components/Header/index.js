// @ts-check
import PropTypes from "prop-types";
import React from "react";

import {
  Container,
  Heading,
  Description,
  TabsContainer,
  TabItem,
  PresentedByContainer,
  Logo,
} from "./index.styles";

/**
 * @typedef {import("../../types/app-types").AppType} AppType
 */

/**
 * @param {AppType & {children: object}} props
 */
const Header = ({title, subtitle, tabs, presentedBy}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h2>{title}</h2>
          <p
            style={{
              display: `${subtitle && subtitle !== "" ? "block" : "none"}`,
            }}
          >
            {subtitle}
          </p>
          <TabsContainer>
            {tabs.map((tab, index) => (
              <TabItem key={index} active={tab.active}>
                {tab.label}
              </TabItem>
            ))}
          </TabsContainer>
        </div>
        <div className="col-4 mt-auto mb-2 my-auto">
          <div className="d-flex flex-row align-items-center gap-2">
            <h5>Presented by:</h5>
            <Logo src={presentedBy.logo} alt={presentedBy.name}/>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.number,
  subtitle: PropTypes.string,
  presentedBy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export {Header};
