// @ts-check
import PropTypes from "prop-types";
import React from "react";

import {
  TabsContainer,
  TabItem,
  Logo,
} from "./index.styles";

/**
 * @typedef {import("../../types/app-types").AppType} AppType
 */

/**
 * @param {AppType & {children: object}} props
 */
const Header = ({title, subtitle, tabs, presentedBy, social}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <h2>{title}</h2>
          <p
            style={{
              display: `${subtitle && subtitle !== "" ? "block" : "none"}`,
            }}
          >
            {subtitle}
          </p>
          {
            tabs && <nav className="nav nav-pills">
              {
                tabs.map((tab, index) => (
                  <a key={index} className={`text-sm-center nav-link ${tab.active ? "active" : ""}`}
                     href="#">{tab.label}</a>
                ))
              }
            </nav>
          }
          {
            social && <div className="col-md-6" id="social-media">
              <h5>Join the Conversation:</h5>
              <nav aria-label="Social Media">
                {social.map((socialItem, index) => (
                  <a className="btn btn-lg" href={socialItem.url}>
                        <span
                          title={socialItem.label}
                          className={`fab fa-${socialItem.label.toLowerCase()} fa-2x`}
                        ></span>
                  </a>
                ))}
              </nav>
            </div>
          }
        </div>
        <div className="col-md-4 mt-auto">
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
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    }),
  ),
  social: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

export {Header};
