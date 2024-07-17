import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { linkTabPropType, linkTabToKey } from "../link";
import { LinkTab } from "./LinkTab";
import { LinkTabMoreDropDown } from "./LinkTabMoreDropDown";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const LinkTabs = ({ links, maxLinkCount, moreTabLabel }) => {
  const visibleLinks = links.slice(0, maxLinkCount);
  const collapsedLinks = links.slice(maxLinkCount);
  return (
    <Root>
      {visibleLinks.map(link => (
        <LinkTab
          key={linkTabToKey(link)}
          as="a"
          active={link.active}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
      {Array.isArray(collapsedLinks) && collapsedLinks.length > 0 && (
        <LinkTabMoreDropDown
          moreTabLabel={moreTabLabel}
          links={collapsedLinks}
        />
      )}
    </Root>
  );
};
LinkTabs.propTypes = {
  links: PropTypes.arrayOf(linkTabPropType),
  maxLinkCount: PropTypes.number,
  moreTabLabel: PropTypes.string,
};
