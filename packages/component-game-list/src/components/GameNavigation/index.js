// @ts-check
import React from "react";

import { SportsNavigation } from "../../core/components/Navigation";

const GameNavigation = ({ ...props }) => {
  return (
    <>
      {/* @ts-ignore */}
      <SportsNavigation {...{ ...props }} />
    </>
  );
};
GameNavigation.propTypes = SportsNavigation.propTypes;

export { GameNavigation };
