// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Button } from "../../../../components-core/src";
import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useMaxWidth } from "../../utils/use-max-width";
import { Icon, iconPropType } from "../Icon_";
import { SportIcon } from "../SportIcon";
import { stringToClosestSportName } from "../SportIcon/sport-name";
import { TicketmasterLogo } from "./TicketmasterLogo";

const buttonPropTypes = PropTypes.shape({
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  faClassName: PropTypes.string.isRequired,
});

/**
 * @typedef {Object} ButtonProp
 * @property {string} label
 * @property {string} href
 * @property {string} color
 * @property {string} faClassName
 */

const sportLinkItemPropTypes = PropTypes.shape({
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
/**
 * @typedef {Object} SportLinkItem
 * @property {string} label
 * @property {string} url
 */

const sportPropTypes = PropTypes.shape({
  sportName: PropTypes.string.isRequired,
  sportLinks: PropTypes.arrayOf(sportLinkItemPropTypes.isRequired).isRequired,
  icon: iconPropType,
  href: PropTypes.string,
});
/**
 * @typedef {Object} Sport
 * @property {string} href
 * @property {string} sportName
 * @property {SportLinkItem[]} sportLinks
 * @property {string | object} [icon]
 */

const SportLinkItemLink = styled.a`
  color: var(--text-color-muted);
  text-decoration: underline !important;
  font-size: var(--font-size-small);
  &:hover {
    color: var(--text-color-brand);
  }
`;

const SportLinkItemRoot = styled.div`
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

/**
 * @param {{sportLinkItem: SportLinkItem}} props
 */
const SportLinkItem = ({ sportLinkItem }) => {
  return (
    <SportLinkItemRoot key={sportLinkItem.label}>
      <SportLinkItemLink href={sportLinkItem.url}>
        {sportLinkItem.label}
      </SportLinkItemLink>
    </SportLinkItemRoot>
  );
};
SportLinkItem.propTypes = {
  sportLinkItem: sportLinkItemPropTypes.isRequired,
};

const SportItemLinksRoot = styled.div`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: flex-start;
  gap: 0px 16px;
  flex-wrap: wrap;
  height: fit-content;
  max-height: fit-content;
`;

/**
 * @param {{sport: Sport}} props
 */
const SportItemLinks = ({ sport }) => {
  return (
    <SportItemLinksRoot>
      {sport.sportLinks.map(sportLinkItem => (
        <SportLinkItem
          key={sportLinkItem.label}
          sportLinkItem={sportLinkItem}
        />
      ))}
    </SportItemLinksRoot>
  );
};
SportItemLinks.propTypes = {
  sport: sportPropTypes.isRequired,
};

const SportGridListItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 2px;
  ${({
    // @ts-ignore
    borderBottom,
  }) =>
    borderBottom
      ? `
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 8px;
      `
      : ""}
`;

const SportLinksRoot = styled.span`
  display: flex;
  flex-direction: row;
  padding-left: 28px;
`;

const SportNameLink = styled.a`
  margin: 0;
  display: flex;
  align-items: start;
  justify-content: center;
  cursor: pointer;
  color: var(--text-color-primary);
  overflow: hidden;
  whitespace: nowrap;
  &:hover {
    color: var(--text-color-brand);
  }
`;

const SportIconWrapper = styled.span`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 28px;
  height: 100%;
  padding-top: 4px;
  color: inherit !important;
`;

const StyledIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  color: inherit;
`;

/**
 * @param {{sport: Sport; borderBottom?: boolean}} props
 */
const SportGridListItem = ({ sport, borderBottom }) => {
  const sportName = stringToClosestSportName(sport.sportName);
  return (
    <SportGridListItemRoot
      // @ts-ignore
      borderBottom={borderBottom}
    >
      <SportNameLink href={sport.href}>
        <SportIconWrapper>
          {sport.icon ? (
            <StyledIcon icon={sport.icon} />
          ) : (
            <SportIcon sportName={sportName} />
          )}
        </SportIconWrapper>
        {sport.sportName}
      </SportNameLink>
      <SportLinksRoot>
        <SportItemLinks sport={sport} />
      </SportLinksRoot>
    </SportGridListItemRoot>
  );
};
SportGridListItem.propTypes = {
  sport: sportPropTypes.isRequired,
  borderBottom: PropTypes.bool,
};

const FooterRoot = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px 32px;
  border-top: 1px solid var(--divider-color);
  width: 100%;
`;

/** @type {(color: unknown) => "gold" | "maroon" | "dark" | "gray"} */
const toButtonColor = color => {
  const cleaned = (typeof color === "string" ? color : "").toLowerCase().trim();
  if (cleaned.includes("gold")) return "gold";
  if (cleaned.includes("maroon")) return "maroon";
  if (cleaned.includes("dark")) return "dark";
  if (cleaned.includes("gray")) return "gray";
  return "gold";
};

/**
 *
 * @type {React.FC<{ buttons: ButtonProp[] }>}
 */
const Footer = ({ buttons }) => {
  return (
    <>
      {false && buttons.length > 0 && (
        <FooterRoot>
          {buttons.map(button => (
            <Button
              href={button.href}
              color={toButtonColor(button.color)}
              label={button.label}
              size="small"
              renderIcon={() => (
                <i
                  className={button.faClassName}
                  style={{ paddingRight: "8px" }}
                />
              )}
            />
          ))}
        </FooterRoot>
      )}
      {false && (
        <FooterTicketMaster>
          <TicketmasterLogo />
        </FooterTicketMaster>
      )}
    </>
  );
};
Footer.propTypes = {
  buttons: PropTypes.arrayOf(buttonPropTypes.isRequired).isRequired,
};

const FooterTicketMaster = styled.div`
  display: flex;
  width: 100%;
  background-color: #191919;
  height: 64px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  min-width: 100%;
`;

const SportGridList = styled.div`
  color: var(--text-color-primary);
  font-size: var(--font-size-normal);
  padding: 32px 0px 20px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  text-align: start;
  gap: 16px;
  max-width: 100%;
  overflow: hidden;

  /* Column Dividers */
  & > * + * {
    position: relative;
    padding-left: 12px;
  }

  & > * + *::before {
    content: "";
    position: absolute;
    top: 3%;
    bottom: 3%;
    /* So it's in middle of the gap for this component */
    left: -12px;
    width: 1px;
    background-color: var(--divider-color);
  }
`;

const SportGridListColumn = styled.div`
  color: var(--text-color-primary);
  font-size: var(--font-size-normal);
  gap: 16px;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  flex: 1;
  min-width: fit-content;
  @media (max-width: 1000px) {
    flex: 1 1 100%;
    width: 100%;
  }
`;

const Vars = createGlobalStyle`
  :root {
    --text-color-primary: #191919;
    --text-color-muted: #747474;
    --text-color-brand: #8C1D40;

    --divider-color: #ccc;

    --font-size-normal: 1rem;
    --font-size-small: 0.875rem;
  }
`;

const Root = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const propTypesPropTypes = {
  sports: PropTypes.arrayOf(sportPropTypes.isRequired).isRequired,
  buttons: PropTypes.arrayOf(buttonPropTypes.isRequired),
};

/**
 * @typedef {Object} Props
 * @property {Sport[]} sports
 * @property {ButtonProp[]} buttons
 */

const COLUMN_HEIGHT = 5;

/**
 * @template T
 * @param {T[]} array
 * @param {number} chunkSize
 * @returns {T[][]}
 */
const chunk = (array, chunkSize) => {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
    array.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
};

/** @type {(column: Sport[]) => string} */
const toColumnKey = column => column.map(sport => sport.sportName).join("");

/**
 * @param {Props} props
 * @returns {React.ReactElement}
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-105787&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-105743&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-108410&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-108411&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 */
const HeaderContentSportLinks = ({ sports, buttons }) => {
  const columns = chunk(sports, COLUMN_HEIGHT);
  const { elementsRef, maxWidth } = useMaxWidth(columns.length);
  const isTablet = useBreakpoint(APP_CONFIG.breakpointTablet);
  return (
    <Root>
      <Vars />
      <SportGridList>
        {columns.map((column, columnIndex) => (
          <SportGridListColumn
            key={toColumnKey(column)}
            ref={el => {
              if (el) elementsRef.current[columnIndex] = el;
            }}
            style={{
              minWidth: maxWidth ? `${maxWidth + 24}px` : undefined,
            }}
          >
            {column.map((sport, rowIndex) => (
              <SportGridListItem
                key={sport.sportName}
                sport={sport}
                borderBottom={
                  isTablet &&
                  !(
                    rowIndex === column.length - 1 &&
                    columnIndex === columns.length - 1
                  )
                }
              />
            ))}
          </SportGridListColumn>
        ))}
      </SportGridList>
      {false && <Footer buttons={buttons} />}
    </Root>
  );
};
HeaderContentSportLinks.propTypes = propTypesPropTypes;

export { HeaderContentSportLinks };
