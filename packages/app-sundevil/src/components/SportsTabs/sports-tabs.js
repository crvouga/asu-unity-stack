import PropTypes from "prop-types";

import { footerButtonPropTypes, footerLinkPropTypes } from "../SectionFooter";

/**
 * @typedef {{
 *  id: string;
 *  name: string;
 *  icon?: string;
 *  active?: boolean;
 *  position?: number;
 *  orientation?: "vertical" | "horizontal";
 * }} Sport
 */

export const sportPropTypes = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  active: PropTypes.bool,
  position: PropTypes.number,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
});

/**
 * @typedef {{
 *  sports: Sport[];
 *  onSportItemClick: (sportId: string) => void;
 * }} BaseProps
 */

export const basePropTypes = {
  sports: PropTypes.arrayOf(sportPropTypes),
  onSportItemClick: PropTypes.func,
};

/**
 * @type {(sportTabs: Sport[]) => Sport[]}
 */
const sortSportTabs = sportTabs => {
  try {
    const copied = Array.isArray(sportTabs) ? [...sportTabs] : [];

    copied.sort((a, b) =>
      String(a?.id ?? "").localeCompare(String(b?.id ?? ""))
    );
    copied.sort(
      (a, b) => (a?.position ?? Infinity) - (b?.position ?? Infinity)
    );

    return copied;
  } catch (error) {
    return sportTabs;
  }
};

/**
 * @param {Sport[]} sportTabs
 * @returns {Sport[]}
 */
const dedupeSportTabs = sportTabs => {
  try {
    const seen = new Set();
    return sportTabs.filter(sport => {
      if (seen.has(sport.id)) {
        return false;
      }
      seen.add(sport.id);
      return true;
    });
  } catch (error) {
    return sportTabs;
  }
};

/**
 *
 * @param {Sport[]} sportTabs
 * @returns {Sport[]}
 */
export const cleanSportTabs = sportTabs => {
  return sortSportTabs(dedupeSportTabs(sportTabs));
};

/**
 * @typedef {import('../SectionFooter/SectionFooter').FooterButton} FooterButton
 */

/**
 * @typedef {import('../SectionFooter/SectionFooter').FooterLink} FooterLink
 */

/**
 * @typedef {Sport & {
 * footerButtons?: FooterButton[];
 * footerLinks?: FooterLink[];
 * }} SportWithFooter
 *
 */

export const sportWithFooterPropTypes = PropTypes.shape({
  ...sportPropTypes,
  footerButtons: PropTypes.arrayOf(footerButtonPropTypes),
  footerLinks: PropTypes.arrayOf(footerLinkPropTypes),
});
