import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

import { colorToFilter } from "../../utils/color/color-to-filter";
import { useColor } from "../../utils/color/use-color";

/** @type {(icon: unknown) => icon is {icon_name: string, style: string}} */
const isFontAwesomeIconObject = icon =>
  Boolean(
    icon &&
      typeof icon === "object" &&
      "icon_name" in icon &&
      "style" in icon &&
      typeof icon.icon_name === "string" &&
      icon.icon_name.trim().length > 0 &&
      typeof icon.style === "string" &&
      icon.style.trim().length > 0
  );

const isValidImageSrc = maybeImageSrc => {
  if (!maybeImageSrc || typeof maybeImageSrc !== "string") {
    return false;
  }

  try {
    const validExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".webp",
      ".svg",
    ];

    return validExtensions.some(ext => maybeImageSrc.endsWith(ext));
  } catch (err) {
    return false;
  }
};

const iconToImageSrc = icon => {
  try {
    const values = Object.values(icon);
    const imageSrcList = values.filter(isValidImageSrc);
    const first = imageSrcList[0];
    return first ?? null;
  } catch (e) {
    return null;
  }
};

/** @type {( icon: unknown) => Record<string, unknown>} */
const toIconProps = icon => {
  if (typeof icon === "string") {
    return {
      style: {},
      className: icon,
    };
  }

  const imageSrc = iconToImageSrc(icon);

  if (typeof imageSrc === "string") {
    const filter = colorToFilter(icon.color);

    return {
      className: "",
      style: {
        width: "1rem",
        height: "1rem",
        // backgroundSize: "cover", // <- Don't do this. It will cutoff the image
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${imageSrc})`,
        filter,
        textDecoration: "none",
        overflow: "visible",
        position: "relative",
      },
    };
  }

  if (isFontAwesomeIconObject(icon)) {
    return {
      style: {
        textDecoration: "none",
      },
      className: `fa ${icon?.style} fa-${icon?.icon_name}`,
    };
  }

  return null;
};

const isValidIcon = icon => toIconProps(icon) !== null;

export const SUN_DEVILS_ICON_CLASS_NAME = "sun-devils-icon";

/** @type {(props: Record<string, unknown>, icon: unknown) => Record<string, unknown>} */
export const mergeIconProps = (props, icon) => {
  const iconProps = toIconProps(icon);
  const propsNew = {
    ...props,
    className: [
      props?.className,
      iconProps?.className,
      SUN_DEVILS_ICON_CLASS_NAME,
    ]
      .filter(Boolean)
      .join(" "),

    style: {
      ...iconProps?.style,
      ...props?.style,
      textDecoration: "none",
    },
  };
  return propsNew;
};

const Root = styled.span`
  color: inherit !important;
  &:hover {
    color: inherit !important;
  }
  &:focus {
    color: inherit !important;
  }
`;

export const Icon = ({ icon, ...props }) => {
  const ref = useRef(null);
  const color = useColor(ref);

  if (!isValidIcon(icon)) {
    return null;
  }

  const iconProps = mergeIconProps(
    props,
    typeof icon === "object" && icon ? { ...icon, color } : icon
  );

  const key = btoa(JSON.stringify(iconProps));

  return <Root key={key} ref={ref} {...iconProps} />;
};

export const iconPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
]);

Icon.propTypes = {
  color: PropTypes.string,
  icon: iconPropType,
  title: PropTypes.string,
};
