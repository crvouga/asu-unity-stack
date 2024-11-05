import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

import { colorToFilter } from "../../utils/color/color-to-filter";
import { useColor } from "../../utils/color/use-color";
import { safeEncode } from "../../utils/encode";
import { useFontSize } from "../../utils/use-font-size";

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

export const toIconName = icon => {
  if (isFontAwesomeIconObject(icon)) {
    return icon?.icon_name ?? " ";
  }
  return " ";
};

const isValidUrl = maybeImageSrc => {
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

const isValidDataUrl = maybeImageSrc => {
  if (!maybeImageSrc || typeof maybeImageSrc !== "string") {
    return false;
  }

  return maybeImageSrc.startsWith("data:image/");
};

const isValidImageSrc = maybeImageSrc => {
  return isValidUrl(maybeImageSrc) || isValidDataUrl(maybeImageSrc);
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
export const toIconProps = icon => {
  if (typeof icon === "string") {
    return {
      type: "classString",
      style: {},
      className: icon,
    };
  }

  const imageSrc = iconToImageSrc(icon);

  if (typeof imageSrc === "string") {
    const filter = colorToFilter(icon.color);

    return {
      type: "image",
      className: "",
      style: {
        width: icon?.width ?? "1rem",
        height: icon?.height ?? "1rem",
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
      type: "fontAwesome",
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
  delete iconProps["type"];
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
  /* Important for image icons to render correctly */
  display: inline-block;
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
  const fontSize = useFontSize(ref);

  if (!isValidIcon(icon)) {
    return null;
  }

  const iconProps = mergeIconProps(
    props,
    typeof icon === "object" && icon
      ? {
          ...icon,
          color,
          width: fontSize,
          height: fontSize,
        }
      : icon
  );

  const key = safeEncode(iconProps);

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
