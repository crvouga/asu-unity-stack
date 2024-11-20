import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../track-ga/track-ga-event";
import { Alignment, alignmentPropTypes } from "../alignment";
import { linkTabPropType, linkTabToKey } from "../link";
import { LinkTab } from "../LinkTab";
import { LinkTabMoreDropDown } from "./LinkTabMoreDropDown";

export const Root = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  ${({ alignment }) => {
    switch (alignment) {
      case Alignment.center: {
        return `
          justify-content: center;
        `;
      }
      case Alignment.start: {
        return `
          justify-content: flex-start;
        `;
      }
      case Alignment.end: {
        return `
          justify-content: flex-end;
        `;
      }
      default: {
        return `
          justify-content: flex-start;
        `;
      }
    }
  }}
`;

const LinkTabsTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 24px;
  color: #191919;
  white-space: nowrap;
`;

const isCleanString = str => typeof str === "string" && str.trim().length > 0;

export const LinkTabs = ({
  title,
  links,
  maxLinkCount,
  moreTabLabel,
  alignment,
  iconTooltip,
}) => {
  const visibleLinks = links.slice(0, maxLinkCount);
  const collapsedLinks = links.slice(maxLinkCount);
  return (
    <Root alignment={alignment}>
      {typeof title === "string" && title.trim().length > 0 && (
        <LinkTabsTitle>{title}</LinkTabsTitle>
      )}
      {visibleLinks.map(link => (
        <LinkTab
          key={linkTabToKey(link)}
          as="a"
          active={link.active}
          href={link.href}
          icon={link.icon}
          iconAlt={link.iconAlt || link.label || link.mobileLabel || " "}
          label={link.label}
          iconTooltip={link.iconTooltip || iconTooltip}
          onClick={() => {
            const isIconTab = Boolean(link.icon) && !isCleanString(link.label);
            if (isIconTab) {
              trackGAEvent({
                event: "link",
                action: "click",
                name: "onclick",
                type: "internal link",
                region: "main content",
                section: "sticky navbar",
                text: link.iconTooltip || iconTooltip,
                component: "icon",
              });
              return;
            }
            trackGAEvent({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: "sticky navbar",
              text: link.label || " ",
              component: "text",
            });
          }}
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
  alignment: alignmentPropTypes,
  title: PropTypes.string,
  iconTooltip: PropTypes.string,
};
