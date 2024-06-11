// @ts-check
import { Button } from "@asu/components-core";
import PropTypes from "prop-types";
import React from "react";

import { Footer, UpcomingGamesWrapper } from "./index.styles";

/**
 * @typedef {import("../../types/app-types").AppType} AppType
 */

/**
 * @param {AppType & {children: object}} props
 */

const SportsTable = ({ games }) => {
  return (
    <UpcomingGamesWrapper>
      <table className="table table-bordered">
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <td className="d-flex flex-column py-3 px-2 ">
                <h5 className="m-0 lh-1">{game.date.month}.</h5>
                <h2 className="m-0">{game.date.day}</h2>
              </td>
              <td className="py-3 px-2 ">
                <span className="fas fa-rocket" />
                <br />
                <span className="m-0 fw-bold fs-6">{game.sport.name}</span>
              </td>
              <td>
                <div className="d-flex align-items-center p-1">
                  <img
                    width="80px"
                    height="80px"
                    src={game.homeTeam.logo}
                    className="team-logo"
                    alt={game.homeTeam.name}
                  />
                  <h6 className="p-1 m-0 fw-bold">vs</h6>
                  <img
                    width="80px"
                    height="80px"
                    src={game.awayTeam.logo}
                    className="team-logo"
                    alt={game.awayTeam.name}
                  />
                </div>
              </td>
              <td className="py-3 px-2 ">
                <div>
                  <h3>
                    {game.homeTeam.name} vs {game.awayTeam.name}
                  </h3>
                </div>
                <div className="d-flex gap-3">
                  <span className="text-body-tertiary">{game.time}</span>
                  <span className="text-body-tertiary">{game.venue}</span>
                </div>
              </td>
              <td className="py-4 px-3 btn-ticket text-center align-middle">
                <button type="button" className="btn btn-dark btn-sm">
                  <span className="fas fa-rocket" />
                  &nbsp;&nbsp;Get Tickets
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer style={{ gap: "8px" }}>
        <Button color="gold" label="Full schedule" size="small" />
        <Button color="maroon" label="Gear up for the game" size="small" />
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
      sport: PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export { SportsTable };
