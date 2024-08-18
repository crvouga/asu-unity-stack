import PropTypes from "prop-types";
import React from "react";

/**
 * @typedef {{
 * imageSrc: string;
 * imageAlt: string;
 * href: string;
 * target?: string;
 * linkTitle?: string;
 * width?: string | number | null | undefined;
 * height?: string | number | null | undefined;
 * id?: string;
 * onClick?: () => void;
 * }} Ad
 */

export const adPropTypes = PropTypes.shape({
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  linkTitle: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
});

/**
 * @type {React.FC<{ ad: Ad, width?: number | string, height?: number | string, target?: string, onClick: () => void }>}
 */
export const Ad = ({ ad, width, height, target, onClick }) => {
  return (
    <a
      id={ad?.id}
      href={ad.href}
      title={ad.linkTitle}
      aria-label={ad.linkTitle}
      target={ad.target ?? target ?? undefined}
      style={{
        width: "fit-content",
        height: "fit-content",
        maxWidth: "100%",
      }}
      onClick={event => {
        event?.preventDefault?.();
        onClick?.({ ad });

        const targetFinal = ad.target ?? target ?? "_blank";

        window?.open?.(ad.href, targetFinal);
      }}
    >
      <img
        src={ad.imageSrc}
        alt={ad.imageAlt ?? " "}
        width={ad.width ?? width ?? "100%"}
        height={ad.height ?? height ?? "auto"}
        style={{
          maxWidth: "100%",
          width: ad.width ?? width ?? "100%",
          height: ad.height ?? height ?? "auto",
          overflow: "hidden",
          objectFit: "contain", // WARNING Don't use objectFit: "cover" since it will cut off the image
        }}
      />
    </a>
  );
};
Ad.propTypes = {
  ad: adPropTypes,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  target: PropTypes.string,
  onClick: PropTypes.func,
};
