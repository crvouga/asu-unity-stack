// @ts-check
import React from "react";

import { Header } from "../../core/components/Header";
import { SportsTable } from "../../core/components/Table";
import { GameNavigation } from "../GameNavigation";

const GameList = ({ ...props }) => {
  return (
    <>
      <Header {...{ ...props }} />
      <GameNavigation {...{ ...props }} />
      <SportsTable {...{ ...props }} />
    </>
  );
};

GameList.propTypes = Header.propTypes;
GameList.propTypes = GameNavigation.propTypes;
GameList.propTypes = SportsTable.propTypes;

export { GameList };
