// @ts-check
import React from "react";

import { Header } from "../../core/components/Header";
import { SportsTable } from "../../core/components/Table";
import { SportsNavigation } from "../../core/components/Navigation";

const GameList = ({ ...props }) => {
  return (
    <>
      <Header {...{ ...props }} />
      <SportsNavigation {...{ ...props }} />
      <SportsTable {...{ ...props }} />
    </>
  );
};

GameList.propTypes = Header.propTypes;
GameList.propTypes = SportsNavigation.propTypes;
GameList.propTypes = SportsTable.propTypes;

export { GameList };
