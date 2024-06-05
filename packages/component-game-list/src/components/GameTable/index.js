// @ts-check
import React from "react";

import { SportsTable } from "../../core/components/Table";

const GameTable = ({ ...props }) => {
  return (
    <>
      <SportsTable {...{ ...props }} />
    </>
  );
};
GameTable.propTypes = SportsTable.propTypes;

export { GameTable };
