// @ts-check
import React from "react";

import { Header } from "../../core/components/Header";
import { SportsNavigation } from "../../core/components/Navigation";
import { SportsTable } from "../../core/components/Table";

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
