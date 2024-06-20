// @ts-check
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { NavItem } from "../Navigation/index.styles";
import { Logo } from "./index.styles";
import { JoinTheConversation } from "./JoinTheConversation";

/**
 * @typedef {import("../../types/app-types").AppType} AppType
 */

const Subtitle = styled.p`
  width: 100%;
  max-width: 520px;
  padding: 0;
  margin: 0;
  color: #191919;
  padding-bottom: 48px;
  padding-top: 12px;
`;

/**
 * @param {AppType & {children: object}} props
 */
const Header = forwardRef(
  // @ts-ignore
  ({ title, subtitle, tabs, presentedBy, social, onTabItemClick }, ref) => {
    return (
      <div className="container" ref={ref}>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="d-flex flex-row align-items-end justify-content-between gap-2 pt-2">
              <h2 className="m-0">{title}</h2>
              <div className="mt-auto mr-auto d-block d-sm-block d-md-none">
                <div className="d-flex flex-column flex-sm-column flex-md-row align-items-center gap-1">
                  <h5 className="m-0">Presented by:</h5>
                  <Logo src={presentedBy.logo} alt={presentedBy.name} />
                </div>
              </div>
            </div>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {tabs && tabs.length > 0 && (
              <nav className="nav nav-pills">
                {tabs.map(tab => (
                  <NavItem
                    onClick={onTabItemClick(tab.id)}
                    // @ts-ignore
                    active={!!tab.active}
                    key={tab.id}
                    className={`text-sm-center nav-link ${
                      tab.active ? "active" : ""
                    }`}
                    href="#"
                  >
                    {tab.label}
                  </NavItem>
                ))}
              </nav>
            )}
            {social && social.length > 0 && (
              <JoinTheConversation social={social} />
            )}
          </div>
          <div className="col-md-4 col-sm-0 mt-auto d-none d-sm-none d-md-block">
            <div className="d-flex flex-row align-items-center justify-content-end gap-2">
              <h5>Presented by:</h5>
              <Logo src={presentedBy.logo} alt={presentedBy.name} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Header.propTypes = {
  // @ts-ignore
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  presentedBy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ),
  social: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  onTabItemClick: PropTypes.func.isRequired,
};

export { Header };
