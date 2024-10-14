/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { iconPropType } from "../Icon_";

const linkPropTypes = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
});

// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=9390-8911&node-type=frame&t=kdg8cgY0xCNAmoIL-0
export const gamePropTypes = PropTypes.shape({
  id: PropTypes.string,
  sportIcon: iconPropType,
  sportName: PropTypes.string,
  sportId: PropTypes.string,
  title: PropTypes.string,
  titleHref: PropTypes.string,
  dateDay: PropTypes.string,
  dateMonth: PropTypes.string,
  dateDayName: PropTypes.string,
  dateTimeRange: PropTypes.string,
  dateTimeZone: PropTypes.string,
  dateLinks: PropTypes.arrayOf(linkPropTypes),
  teamLogoSrc: PropTypes.string,
  teamLogoAlt: PropTypes.string,
  chips: PropTypes.arrayOf(linkPropTypes),
  supplementalLinks: PropTypes.arrayOf(linkPropTypes),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      startIcon: iconPropType,
      color: PropTypes.string,
      label: PropTypes.string,
      href: PropTypes.string,
      className: PropTypes.string,
      style: PropTypes.object,
    })
  ),
  admissionCost: PropTypes.string,
  eventType: PropTypes.string,
  gameType: PropTypes.string,
  //
  // DEPRECATED PROPERTIES
  //
  venue: PropTypes.string,
  homeTeamName: PropTypes.string,
  homeTeamLogoSrc: PropTypes.string,
  homeTeamLogoAlt: PropTypes.string,
  awayTeamName: PropTypes.string,
  awayTeamLogoSrc: PropTypes.string,
  awayTeamLogoAlt: PropTypes.string,
  time: PropTypes.string,
  buttonIcon: iconPropType,
  ticketLink: PropTypes.string,
  ticketText: PropTypes.string,
  subtitleChip: PropTypes.string,
  subtitles: PropTypes.arrayOf(PropTypes.string),
  subtitleStyle: PropTypes.object,
  startDate: PropTypes.string,
});

/**
 * @param {Game} game
 * @returns {boolean}
 */
export const isGameNonTicketed = game => {
  if (typeof game?.admissionCost === "string") {
    return Boolean(game?.admissionCost?.includes("free"));
  }
  return false;
};

/**
 * @param {Game} game
 * @returns {boolean}
 */
export const isGameTicketed = game => {
  return !isGameNonTicketed(game);
};

/**
 * @typedef {object} Link
 * @property {string} label
 * @property {string} href
 * @property {string} [className]
 * @property {import("react").CSSProperties} [style]
 * @property {string} [color]
 */

/**
 * @typedef {object} Game
 * @property {string} id
 * @property {import("../Icon_").IconType} sportIcon
 * @property {string} sportName
 * @property {string} sportId
 * @property {string} title
 * @property {string} titleHref
 * @property {string} dateDay
 * @property {string} dateMonth
 * @property {string} dateDayName
 * @property {string} dateTimeRange
 * @property {string} dateTimeZone
 * @property {{ label: string, href: string, className?: string, style?: import("react").CSSProperties }[]} dateLinks
 * @property {string} teamLogoSrc
 * @property {string} teamLogoAlt
 * @property {{ label: string, href: string, className?: string, style?: import("react").CSSProperties }[]} chips
 * @property {{ label: string, href: string, className?: string, style?: import("react").CSSProperties }[]} supplementalLinks
 * @property {{ startIcon: import("../Icon_").IconType, color?: string, label: string, href: string, className?: string, style?: import("react").CSSProperties }[]} buttons
 * @property {string} admissionCost
 * @property {string} eventType
 * @property {string} gameType
 *
 * DEPRECATED PROPERTIES
 * @property {string} [venue]
 * @property {string} [homeTeamName]
 * @property {string} [homeTeamLogoSrc]
 * @property {string} [homeTeamLogoAlt]
 * @property {string} [awayTeamName]
 * @property {string} [awayTeamLogoSrc]
 * @property {string} [awayTeamLogoAlt]
 * @property {string} [time]
 * @property {import("../Icon_").IconType} [buttonIcon]
 * @property {string} [ticketLink]
 * @property {string} [ticketText]
 * @property {string} [subtitleChip]
 * @property {string[]} [subtitles]
 * @property {import("react").CSSProperties} [subtitleStyle]
 * @property {string} [startDate]
 */
