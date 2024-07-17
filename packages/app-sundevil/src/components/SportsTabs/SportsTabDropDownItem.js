import PropTypes from "prop-types";

import { DropDownItem } from "../DropDown/DropDownItem";

/**
 *
 * @typedef {{
 * label: string;
 * onClick: () => void;
 * active?: boolean;
 * }} Props
 */

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

/**
 *
 * @type {React.FC<Props>}
 */
export const SportsTabDropDownItem = DropDownItem;
SportsTabDropDownItem.propTypes = propTypes;
