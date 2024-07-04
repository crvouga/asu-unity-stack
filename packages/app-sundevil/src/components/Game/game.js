import PropTypes from "prop-types";

export const gameSchema = PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.shape({
    day: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
  }).isRequired,
  homeTeam: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  awayTeam: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  ticketLink: PropTypes.string,
  ticketText: PropTypes.string,
  sport: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  gameType: PropTypes.string,
  sportId: PropTypes.string,
});

/**
 * @typedef {object} Game
 * @property {string} sportId
 * @property {string} title
 * @property {object} date
 * @property {string} date.day
 * @property {string} date.month
 * @property {object} homeTeam
 * @property {string} homeTeam.name
 * @property {string} homeTeam.logo
 * @property {object} awayTeam
 * @property {string} awayTeam.name
 * @property {string} awayTeam.logo
 * @property {string} time
 * @property {string} venue
 * @property {string} ticketLink
 * @property {string} ticketText
 * @property {object} sport
 * @property {string} sport.name
 * @property {string} sport.icon
 * @property {string} gameType
 */
