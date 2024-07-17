import PropTypes from "prop-types";

import { iconPropType } from "../Icon_";

export const linkTabPropType = PropTypes.shape({
  mobileLabel: PropTypes.string,
  label: PropTypes.string,
  icon: iconPropType,
  href: PropTypes.string,
  active: PropTypes.bool,
});

export const linkTabToKey = link => {
  return btoa(
    JSON.stringify([
      link?.mobileLabel,
      link?.label,
      link?.icon,
      link?.href,
      link?.active,
    ])
  );
};
