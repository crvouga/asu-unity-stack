// @ts-check
// @ts-ignore
import { Button } from "@asu/components-core";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { gameSchema } from "../Game/game";
import { Skeleton } from "../Skeleton";
import { Footer, UpcomingGamesWrapper } from "./index.styles";

const GameTableRow = ({ game }) => {
  return (
    <tr key={game.id}>
      <td className="py-3 px-2 ">
        <h5 className="m-0 lh-1">{game.date.month}.</h5>
        <h2 className="m-0">{game.date.day}</h2>
      </td>
      {false && (
        <>
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
        </>
      )}
      <td className="py-3 px-2 ">
        {false && (
          <div>
            <h3>
              {game.homeTeam.name}{" "}
              {game.awayTeam ? `vs ${game.awayTeam.name}` : ""}
            </h3>
          </div>
        )}
        <div>
          <h3>{game.title}</h3>
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
  );
};

GameTableRow.propTypes = {
  game: gameSchema.isRequired,
};

const SKELETON_GAME = {
  title: "Game Title",
  date: {
    day: "25",
    month: "Nov",
  },
  sport: {
    name: "Sport Name",
    icon: "fa fa-rocket",
  },
  homeTeam: {
    name: "Sun Devils",
    logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
  },
  awayTeam: {
    name: "Wildcats",
    logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
  },
  time: "5:30pm",
  venue: "Phoenix Muni Stadium",
};

const EmptyStateMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-bold: 700;
  height: 400px;
  margin: 0;
  padding: 0;
`;

// @ts-ignore
const GameTable = ({
  skeleton,
  games,
  footerButtons,
  emptyStateMessage,
  maxRowCount = 5,
  footerLinks,
}) => {
  // const skeleton = true;
  const gamesSliced = games.slice(0, maxRowCount);
  const gamesFinal = skeleton
    ? Array.from({ length: maxRowCount }).map(() => SKELETON_GAME)
    : gamesSliced;
  const showEmptyState =
    typeof emptyStateMessage === "string" &&
    !skeleton &&
    gamesFinal.length === 0;

  return (
    <UpcomingGamesWrapper>
      <table className="table table-bordered table-striped">
        <tbody>
          {gamesFinal.map(game =>
            skeleton ? (
              <Skeleton key={game.id} skeleton>
                <GameTableRow game={game} />
              </Skeleton>
            ) : (
              <GameTableRow key={game.id} game={game} />
            )
          )}
        </tbody>
      </table>
      {showEmptyState && (
        <EmptyStateMessage>
          <p>{emptyStateMessage}</p>
        </EmptyStateMessage>
      )}
      {footerButtons.length > 0 && (
        <Footer style={{ gap: "8px" }}>
          {footerButtons.map(button => (
            <Button
              key={button.label}
              color={button.color}
              label={button.label}
              size={button.size}
              onClick={() => {
                window.open(button.link, "_blank");
              }}
            />
          ))}
        </Footer>
      )}
      {footerLinks.length > 0 && (
        <Footer style={{ gap: "8px" }}>
          {footerLinks.map(link => (
            <a key={link.label} href={link.href} style={{ color: "#8c1d40" }}>
              {link.label}
            </a>
          ))}
        </Footer>
      )}
    </UpcomingGamesWrapper>
  );
};

export const gameTableFooterButtonSchema = PropTypes.shape({
  color: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
});

export const gameTableFooterLinkSchema = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
});

GameTable.propTypes = {
  games: PropTypes.arrayOf(gameSchema.isRequired).isRequired,
  skeleton: PropTypes.bool,
  maxRowCount: PropTypes.number,
  footerButtons: PropTypes.arrayOf(gameTableFooterButtonSchema).isRequired,
  footerLinks: PropTypes.arrayOf(gameTableFooterLinkSchema),
  emptyStateMessage: PropTypes.string,
};

export { GameTable };
