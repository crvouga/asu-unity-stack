// @ts-check
import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

import { Button } from "../../../../../components-core/src/components/Button";
import { deepMergeLeft } from "../../../utils/deep-merge-left";
import { useElementSetMaxDimensions } from "../../../utils/use-element-set-max-dimensions";
import { Skeleton } from "../../Skeleton";
import { SportIcon } from "../../SportIcon";
import { stringToClosestSportName } from "../../SportIcon/sport-name";
import { defaultConfigLayout } from "./config-layout";
import { gameTableRowPropTypes } from "./game-table-row";
import { Subtitles } from "./Subtitles";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 96px;
  max-height: 96px;
  overflow: hidden;
  justify-content: center;
  align-items: stretch;
  & > *:not(:last-child) {
    border-right: 1px solid #d0d0d0;
  }
  .flex-1 {
    flex: 1;
    min-width: 0;
  }
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CellDate = styled.div`
  width: 96px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1rem;
`;

const CellSportName = styled.div`
  width: 96px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1rem;
  font-size: 12px;
  font-weight: bold;
  gap: 0.2rem;
`;

const CellVersus = styled.div`
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5em;
`;

const CellVersusLogo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
`;

const CellVersusVS = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
`;

const CellTitle = styled.div`
  padding: 0 1.5rem;
  line-height: 28.8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

const Title = styled.a`
  color: #000 !important;
  text-decoration: none !important;
  font-size: 24px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  width: fit-content;
  max-width: 100%;
`;

const isCleanString = str => typeof str === "string" && str.trim().length > 0;

export const GameTableRowDesktop = forwardRef((props, ref) => {
  const {
    // @ts-ignore
    game: gameUntyped,
    // @ts-ignore
    skeleton,
    // @ts-ignore
    empty,
    // @ts-ignore
    configLayout: configLayoutPartial,
  } = props;

  /** @type {import("../../Game").Game} */
  const game = gameUntyped;
  /** @type {import("./config-layout").ConfigLayout} */
  const configLayout = deepMergeLeft(
    configLayoutPartial ?? {},
    defaultConfigLayout ?? {}
  );

  const buttonCellRef = useRef(null);
  const buttonCellMaxDimensions = useElementSetMaxDimensions({
    elementRef: buttonCellRef,
    elementSetId: "button-cell",
  });
  return (
    // @ts-ignore
    <Skeleton skeleton={skeleton} ref={ref}>
      <Root
        aria-hidden={empty}
        style={empty ? { opacity: 0, userSelect: "none" } : {}}
      >
        {configLayout.includeCellDate && (
          <Cell>
            <CellDate>
              <h5 className="m-0 lh-1">{game?.dateMonth}.</h5>
              <h2 className="m-0">{game?.dateDay}</h2>
            </CellDate>
          </Cell>
        )}

        {configLayout.includeCellSportName && (
          <Cell>
            <CellSportName>
              {isCleanString(game?.sportId) && (
                <>
                  <SportIcon
                    sportName={stringToClosestSportName(game?.sportId)}
                  />
                  <p className="m-0">{game?.sportId}</p>
                </>
              )}
            </CellSportName>
          </Cell>
        )}

        {configLayout.includeCellVersus && (
          <Cell>
            <CellVersus>
              <CellVersusLogo src={game?.homeTeamLogoSrc} />
              <CellVersusVS>vs</CellVersusVS>
              <CellVersusLogo src={game?.awayTeamLogoSrc} />
            </CellVersus>
          </Cell>
        )}

        {configLayout.includeCellTitle && (
          <Cell className="flex-1">
            <CellTitle>
              <Title href={game?.titleHref}>{game?.title}</Title>

              <Subtitles {...props} />
            </CellTitle>
          </Cell>
        )}
        {configLayout.includeCellTickets && (
          <Cell
            className="btn-ticket text-center align-middle px-2"
            ref={buttonCellRef}
            style={{ minWidth: buttonCellMaxDimensions.width }}
          >
            <Button
              label={game?.ticketText}
              color="dark"
              size="small"
              renderIcon={() => (
                <i
                  className="fa fa-fas fa-ticket"
                  style={{ paddingRight: "10px" }}
                />
              )}
              onClick={() => {
                window.open(game?.ticketLink, "_blank");
              }}
            />
          </Cell>
        )}
      </Root>
    </Skeleton>
  );
});

// @ts-ignore
GameTableRowDesktop.propTypes = gameTableRowPropTypes;
