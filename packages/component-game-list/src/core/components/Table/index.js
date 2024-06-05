// @ts-check
import { Button } from "@asu/components-core";
import PropTypes from "prop-types";
import React from "react";

import { Logo } from "../Header/index.styles";
import {GamesTable, TableHeader, TableCell, GetTicketsButton, Footer, ScheduleButton, UpcomingGamesWrapper} from "./index.styles";

/**
 * @typedef {import("../../types/app-types").AppType} AppType
 */

/**
 * @param {AppType & {children: object}} props
 */

const SportsTable = ({ games }) => {
  return (
    <UpcomingGamesWrapper>
      <GamesTable>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              <TableCell>{game.date.day}</TableCell>
              <TableCell>{game.sport}</TableCell>
              <TableCell>
                <Logo src={game.awayTeam.logo} alt={game.awayTeam.name} />
                vs
                <Logo src={game.homeTeam.logo} alt={game.homeTeam.name} />
              </TableCell>
              <TableCell>
                {game.homeTeam.name} vs {game.awayTeam.name}
              </TableCell>
              <TableCell>{game.time}</TableCell>
              <TableCell>{game.venue}</TableCell>
              <TableCell>
                <a href="#" className="btn btn-dark btn-sm" role="button">
                  <span className="fas fa-rocket"></span>&nbsp;&nbsp;Get Tickets
                </a>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </GamesTable>
      <Footer style={{gap: "8px"}}>
        <Button color="gold" label="Full schedule" size={"small"} />
        <Button color="maroon" label="Gear up for the game" size={"small"} />
      </Footer>
    </UpcomingGamesWrapper>
  );
};

SportsTable.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.shape({
        day: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired,
      }).isRequired,
      homeTeam: PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
      }).isRequired,
      awayTeam: PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
      }).isRequired,
      time: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
      tickets: PropTypes.string.isRequired,
      sport: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { SportsTable };
