import PropTypes from "prop-types";

import { footerButtonPropTypes, footerLinkPropTypes } from "../SectionFooter";

/**
 * @typedef {{
 *  id: string;
 *  name: string;
 *  icon: string;
 *  active?: boolean;
 *  position: number;
 *  orientation: "vertical" | "horizontal";
 * }} Sport
 */

export const sportPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  active: PropTypes.bool,
  position: PropTypes.number,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
});

/**
 * @typedef {{
 *  sports: Sport[];
 *  onSportItemClick: (sportId: string) => () => void;
 * }} BaseProps
 */

export const basePropTypes = {
  sports: PropTypes.arrayOf(sportPropTypes),
  onSportItemClick: PropTypes.func,
};

export const sportWithFooterPropTypes = PropTypes.shape({
  ...sportPropTypes,
  footerButtons: PropTypes.arrayOf(footerButtonPropTypes),
  footerLinks: PropTypes.arrayOf(footerLinkPropTypes),
});
