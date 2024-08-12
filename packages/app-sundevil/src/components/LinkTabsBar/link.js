import PropTypes from "prop-types";

import { safeEncode } from "../../utils/encode";
import { iconPropType } from "../Icon_";

export const linkTabPropType = PropTypes.shape({
  mobileLabel: PropTypes.string,
  label: PropTypes.string,
  icon: iconPropType,
  href: PropTypes.string,
  active: PropTypes.bool,
  iconAlt: PropTypes.string,
});

export const linkTabToKey = link => {
  return safeEncode([
    link?.mobileLabel,
    link?.label,
    link?.icon,
    link?.href,
    link?.active,
  ]);
};
