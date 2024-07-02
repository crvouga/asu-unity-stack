// @ts-check
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { NavItem } from "../Navigation/index.styles";
import { Logo } from "./index.styles";
import { JoinTheConversation, socialPropType } from "./JoinTheConversation";

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
  & > * {
    margin: 0;
    padding: 0;
  }
`;

const SponsorBlock = styled.a`
  color: #191919;
  text-decoration: none;
  width: fit-content;
`;

/**
 * @param {AppType & {children: object}} props
 */
const Header = forwardRef(
  // @ts-ignore
  ({ title, subtitle, tabs, sponsorBlock, social, onTabItemClick }, ref) => {
    return (
      <div className="container" ref={ref}>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="d-flex flex-row align-items-end justify-content-between gap-2 pt-2">
              <h2 className="m-0">{title}</h2>
              <div className="mt-auto mr-auto d-flex d-sm-flex d-md-none justify-content-end">
                <SponsorBlock
                  href={sponsorBlock?.url}
                  className="d-flex flex-column flex-sm-column flex-md-row align-items-center gap-1"
                >
                  <h5 className="m-0">{sponsorBlock?.text}</h5>
                  <Logo src={sponsorBlock?.logo} alt={sponsorBlock?.name} />
                </SponsorBlock>
              </div>
            </div>
            {subtitle && (
              <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            )}
            {tabs && tabs.length > 0 && (
              <nav className="nav nav-pills">
                {tabs.map(tab => (
                  <NavItem
                    onClick={onTabItemClick?.(tab.id)}
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
          <div className="col-md-4 col-sm-0 mt-auto d-none d-sm-none d-md-flex justify-content-end">
            <SponsorBlock
              href={sponsorBlock?.url}
              className="d-flex flex-row align-items-center justify-content-end gap-2"
            >
              <h5>{sponsorBlock?.text}</h5>
              <Logo src={sponsorBlock?.logo} alt={sponsorBlock?.name} />
            </SponsorBlock>
          </div>
        </div>
      </div>
    );
  }
);

Header.propTypes = {
  // @ts-ignore
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sponsorBlock: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  social: PropTypes.arrayOf(socialPropType),
  onTabItemClick: PropTypes.func,
};

export { Header };
