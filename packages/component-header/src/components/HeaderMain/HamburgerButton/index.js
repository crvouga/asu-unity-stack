// @ts-check
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

import { useAppContext } from "../../../core/context/app-context";

export const HamburgerButton = ({ open, onClick }) => {
  const { mobile } = useAppContext();

  const openIcon =
    typeof mobile?.hamburger?.openFaClassName === "string" ? (
      <i
        className={mobile.hamburger.openFaClassName}
        // @ts-ignore
        alt=" "
      />
    ) : (
      <FontAwesomeIcon
        icon={faBars}
        // @ts-ignore
        alt=" "
      />
    );

  const closeIcon =
    typeof mobile?.hamburger?.closeFaClassName === "string" ? (
      <i
        className={mobile.hamburger.closeFaClassName}
        // @ts-ignore
        alt=" "
      />
    ) : (
      <FontAwesomeIcon
        icon={faTimes}
        // @ts-ignore
        alt=" "
      />
    );

  const icon = open ? closeIcon : openIcon;

  return (
    <button
      className={`navbar-toggler${open ? "" : " collapsed"}`}
      type="button"
      onClick={onClick}
      aria-label="Toggle navigation"
    >
      {icon}
    </button>
  );
};

HamburgerButton.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
