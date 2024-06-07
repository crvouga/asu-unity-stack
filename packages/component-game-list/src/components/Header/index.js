// @ts-check
import React from "react";

import { Header as HeaderComponent } from "../../core/components/Header";

const Header = ({ ...props }) => {
  return (
    <>
      <HeaderComponent {...{ ...props }} />
    </>
  );
};
Header.propTypes = HeaderComponent.propTypes;

export { Header };
