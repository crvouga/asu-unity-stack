// @ts-check
import PropTypes from "prop-types";
import React, { forwardRef } from "react";

import { NavItem } from "../Navigation/index.styles";
import { Logo } from "./index.styles";

/**
 * @typedef {import("../../types/app-types").AppType} AppType
 */

/**
 * @param {AppType & {children: object}} props
 */
const Header = forwardRef(
  ({ title, subtitle, tabs, presentedBy, social, onTabItemClick }, ref) => {
    return (
      <div className="container" ref={ref}>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="d-flex flex-row align-items-center justify-content-between gap-2">
              <h2>{title}</h2>
              <div className="mt-auto mr-auto d-block d-sm-block d-md-none">
                <div className="d-flex flex-column flex-sm-column flex-md-row align-items-center gap-0">
                  <h5>Presented by:</h5>
                  <Logo src={presentedBy.logo} alt={presentedBy.name} />
                </div>
              </div>
            </div>
            <p
              style={{
                display: `${subtitle && subtitle !== "" ? "block" : "none"}`,
              }}
            >
              {subtitle}
            </p>
            {tabs && tabs.length > 0 && (
              <nav className="nav nav-pills">
                {tabs.map(tab => (
                  <NavItem
                    onClick={onTabItemClick(tab.id)}
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
              <div className="col-md-6" id="social-media">
                <h5>Join the Conversation:</h5>
                <nav aria-label="Social Media">
                  {social.map(socialItem => (
                    <a
                      key={socialItem.label}
                      className="btn btn-lg"
                      href={socialItem.url}
                    >
                      <span
                        title={socialItem.label}
                        className={`fab fa-${socialItem.label.toLowerCase()} fa-2x`}
                      />
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-0 mt-auto d-none d-sm-none d-md-block">
            <div className="d-flex flex-row align-items-center gap-2">
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
