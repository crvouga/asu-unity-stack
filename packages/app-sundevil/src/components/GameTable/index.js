// @ts-check
import React from "react";

import { SportsTable } from "../Table";

const GameTable = ({ ...props }) => {
  return (
    <>
      {/* @ts-ignore */}
      <SportsTable {...{ ...props }} />
    </>
  );
};
GameTable.propTypes = SportsTable.propTypes;

export { GameTable };
