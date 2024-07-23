import PropTypes from "prop-types";

export const gameSchema = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  titleHref: PropTypes.string,
  dateDay: PropTypes.string,
  dateMonth: PropTypes.string,
  homeTeamName: PropTypes.string.isRequired,
  homeTeamLogoSrc: PropTypes.string.isRequired,
  awayTeamName: PropTypes.string.isRequired,
  awayTeamLogoSrc: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  ticketLink: PropTypes.string,
  ticketText: PropTypes.string,
  gameType: PropTypes.string, // "home" | "away"
  sportId: PropTypes.string,
  subtitleChip: PropTypes.string,
  admissionCost: PropTypes.number,
  eventType: PropTypes.string,
});

/**
 * @typedef {object} Game
 * @property {string} sportId
 * @property {string} title
 * @property {string} titleHref
 * @property {string} dateDay
 * @property {string} dateMonth
 * @property {string} homeTeamName
 * @property {string} homeTeamLogoSrc
 * @property {string} awayTeamName
 * @property {string} awayTeamLogoSrc
 * @property {string} time
 * @property {string} venue
 * @property {string} ticketLink
 * @property {string} ticketText
 * @property {string} gameType
 * @property {string} subtitleChip
 * @property {number} admissionCost
 * @property {string} eventType
 */
