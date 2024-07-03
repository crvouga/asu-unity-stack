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

const SportsTable = ({ games, footerButtons }) => {
  return (
    <UpcomingGamesWrapper>
      <table className="table table-bordered table-striped">
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <td className="py-3 px-2 ">
                <h5 className="m-0 lh-1">{game.date.month}.</h5>
                <h2 className="m-0">{game.date.day}</h2>
              </td>
              {/* <td className="py-3 px-2 "> */}
              {/*  <span className="fas fa-rocket" /> */}
              {/*  <br /> */}
              {/*  <span className="m-0 fw-bold fs-6">{game.sport.name}</span> */}
              {/* </td> */}
              {/* <td> */}
              {/*  <div className="d-flex align-items-center p-1"> */}
              {/*    <img */}
              {/*      width="80px" */}
              {/*      height="80px" */}
              {/*      src={game.homeTeam.logo} */}
              {/*      className="team-logo" */}
              {/*      alt={game.homeTeam.name} */}
              {/*    /> */}
              {/*    <h6 className="p-1 m-0 fw-bold">vs</h6> */}
              {/*    <img */}
              {/*      width="80px" */}
              {/*      height="80px" */}
              {/*      src={game.awayTeam.logo} */}
              {/*      className="team-logo" */}
              {/*      alt={game.awayTeam.name} */}
              {/*    /> */}
              {/*  </div> */}
              {/* </td> */}
              <td className="py-3 px-2 ">
                <div>
                  <h3>
                    {game.homeTeam.name}{" "}
                    {game.awayTeam ? `vs ${game.awayTeam.name}` : ""}
                  </h3>
                </div>
                <div className="d-flex gap-3">
                  <span className="text-body-tertiary">{game.time}</span>
                  <span className="text-body-tertiary">{game.venue}</span>
                </div>
              </td>
              <td className="py-4 px-3 btn-ticket text-center align-middle">
                <button
                  onClick={() => {
                    window.open(game.ticketLink, "_blank");
                  }}
                  type="button"
                  className="btn btn-dark btn-sm"
                >
                  <span className="fas fa-rocket" />
                  &nbsp;&nbsp;{game.ticketText}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer style={{ gap: "8px" }}>
        {footerButtons.map(button => (
          <Button
            color={button.color}
            label={button.label}
            size={button.size}
            onClick={() => {
              window.open(button.link, "_blank");
            }}
          />
        ))}
      </Footer>
      <Footer style={{ gap: "8px" }}>
        <span style={{ color: "#8c1d40" }}>See Past Game Scores</span>
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
      ticketLink: PropTypes.string,
      ticketText: PropTypes.string,
      sport: PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      }).isRequired,
      gameType: PropTypes.string,
    })
  ).isRequired,
  footerButtons: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { SportsTable };
