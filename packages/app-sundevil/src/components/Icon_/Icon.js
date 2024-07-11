import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

/** @type {(icon: unknown) => icon is {icon_name: string, style: string}} */
const isFontAwesomeIconObject = icon =>
  Boolean(
    icon && typeof icon === "object" && "icon_name" in icon && "style" in icon
  );

const isValidImageSrc = maybeImageSrc => {
  if (!maybeImageSrc || typeof maybeImageSrc !== "string") {
    return false;
  }

  try {
    const url = new URL(maybeImageSrc);
    const validExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".webp",
      ".svg",
    ];

    return validExtensions.some(ext => url.pathname.endsWith(ext));
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
    return {
      className: "",
      style: {
        width: "1rem",
        height: "1rem",
        display: "inline-block",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${imageSrc})`,
      },
    };
  }

  if (isFontAwesomeIconObject(icon)) {
    return {
      style: {},
      className: `fa ${icon?.style} fa-${icon?.icon_name}`,
    };
  }

  return null;
};

const isValidIcon = icon => toIconProps(icon) !== null;

/** @type {(props: Record<string, unknown>, icon: unknown) => Record<string, unknown>} */
export const mergeIconProps = (props, icon) => {
  const iconProps = toIconProps(icon);
  const propsNew = {
    ...props,
    className: `${props?.className ?? ""} ${iconProps?.className ?? ""}`,
    style: {
      ...iconProps?.style,
      ...props?.style,
    },
  };
  return propsNew;
};

const StyledIcon = styled.i`
  color: inherit !important;
  text-decoration: !important;
  &:hover {
    color: !important;
    text-decoration: !important;
  }
`;

export const Icon = ({ icon, ...props }) => {
  if (!isValidIcon(icon)) {
    return null;
  }

  const iconProps = mergeIconProps(props, icon);

  return <StyledIcon {...iconProps} />;
};

export const iconPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
]);

Icon.propTypes = {
  icon: iconPropType,
  title: PropTypes.string,
};
