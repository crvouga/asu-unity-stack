import PropTypes from "prop-types";

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

export const sportSchema = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOf([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
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
  sports: PropTypes.arrayOf(sportSchema),
  onSportItemClick: PropTypes.func,
};
