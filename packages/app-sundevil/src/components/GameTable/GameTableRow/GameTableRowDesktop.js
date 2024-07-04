// @ts-check
// @ts-ignore
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../../components-core/src/components/Button";
import { gameTableRowPropTypes } from "./game-table-row";

const RowTitle = styled.h3`
  font-size: 24px;
  padding: 0;
  margin: 0;
`;

export const GameTableRowDesktop = ({ game, style }) => {
  return (
    <tr style={style}>
      <td className="p-2">
        <div className="mr-4">
          <h5 className="m-0 lh-1">{game.date.month}.</h5>
          <h2 className="m-0">{game.date.day}</h2>
        </div>
      </td>
      {false && (
        <>
          <td className="py-3 px-2">
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
      <td
        className="py-3 px-2 d-flex align-items-start flex-column gap-1"
        style={{ flex: 1 }}
      >
        {false && (
          <div>
            <h3>
              {game.homeTeam.name}{" "}
              {game.awayTeam ? `vs ${game.awayTeam.name}` : ""}
            </h3>
          </div>
        )}
        <div>
          <RowTitle>{game.title}</RowTitle>
        </div>
        <div className="d-flex gap-3">
          <span className="text-body-tertiary">{game.time}</span>
          <span className="text-body-tertiary">{game.venue}</span>
        </div>
      </td>
      <td className="btn-ticket text-center align-middle px-2">
        <Button
          label={game.ticketText}
          color="dark"
          size="small"
          renderIcon={() => (
            <i
              className="fa fa-fas fa-ticket"
              style={{ paddingRight: "10px" }}
            />
          )}
          onClick={() => {
            window.open(game.ticketLink, "_blank");
          }}
        />
      </td>
    </tr>
  );
};
GameTableRowDesktop.propTypes = gameTableRowPropTypes;
