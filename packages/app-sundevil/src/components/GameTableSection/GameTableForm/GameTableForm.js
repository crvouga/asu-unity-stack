// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { GameDataSourceSortByColumnId } from "../../Game/game-data-source";
import { useGameVenuesLoader } from "../../Game/use-game-venues-loader";
import { Select } from "../../Select/Select";
import { sportSchema } from "../../SportsTabs/sports-tabs";
import { TextField } from "../../TextField/TextField";
import { inputsConfigSchema } from "../inputs-config";
import { layoutConfigSchema } from "../layout-config";

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const GameTableForm = ({
  gameTableForm,
  layoutConfig,
  inputsConfig,
  sports,
  className,
}) => {
  const {
    sportId,
    gameType,
    venueId,
    searchQuery,

    sortByColumnId,
    sortByDesc,
  } = gameTableForm;

  const { allVenues } = useGameVenuesLoader();

  const includeAny =
    layoutConfig.includeInputSearch ||
    layoutConfig.includeInputSportType ||
    layoutConfig.includeInputVenueSelect ||
    layoutConfig.includeInputHomeOrAwaySelect ||
    layoutConfig.includeSortBySelect;

  if (!includeAny) {
    return null;
  }

  return (
    <Root className={className}>
      {layoutConfig.includeInputSearch && (
        <TextField
          style={{ flex: 2 }}
          label={inputsConfig?.searchInput?.label ?? ""}
          placeholder={inputsConfig?.searchInput?.placeholder ?? ""}
          value={searchQuery}
          onChange={gameTableForm.setSearchQuery}
          renderEndIcon={({ style }) => (
            <i style={style} className="fa fas fa-solid fa-magnifying-glass" />
          )}
        />
      )}

      {layoutConfig.includeInputSportType && (
        <Select
          style={{ flex: 1 }}
          label={inputsConfig.sportTypeSelect?.label ?? ""}
          placeholder={inputsConfig.sportTypeSelect?.placeholder ?? ""}
          onChange={option =>
            gameTableForm.update({
              sportId: option.id === sportId ? "all" : option.id,
            })
          }
          options={sports.map(sport => ({
            label: sport.name,
            id: sport.id,
            active: sport.active,
          }))}
        />
      )}

      {layoutConfig.includeInputVenueSelect && (
        <Select
          style={{ flex: 1 }}
          label={inputsConfig.venueSelect?.label ?? ""}
          placeholder={inputsConfig.venueSelect?.placeholder ?? ""}
          onChange={option =>
            gameTableForm.update({
              venueId: option.id === venueId ? null : option.id,
            })
          }
          options={allVenues.map(venueOption => ({
            label: venueOption,
            id: venueOption,
            active: venueOption === venueId,
          }))}
        />
      )}

      {layoutConfig.includeInputHomeOrAwaySelect && (
        <Select
          style={{ flex: 1 }}
          label={inputsConfig.homeOrAwaySelect?.label ?? ""}
          placeholder={inputsConfig.homeOrAwaySelect?.placeholder ?? ""}
          onChange={option =>
            gameTableForm.update({
              gameType: option.id === gameType ? null : option.id,
            })
          }
          options={[
            {
              id: "home",
              label: "Home",
              active: gameType === "home",
            },
            {
              id: "away",
              label: "Away",
              active: gameType === "away",
            },
          ]}
        />
      )}

      {layoutConfig.includeSortBySelect && (
        <Select
          style={{ flex: 1 }}
          label={inputsConfig.sortBySelect?.label ?? ""}
          placeholder={inputsConfig.sortBySelect?.placeholder ?? ""}
          onChange={option => {
            gameTableForm.update({
              sortByDesc:
                option.payload.desc === sortByDesc ? true : option.payload.desc,
              sortByColumnId:
                option.payload.columnId === sortByColumnId
                  ? GameDataSourceSortByColumnId.DATE
                  : option.payload.columnId,
            });
          }}
          options={[
            {
              id: "date",
              label: "Date",
              active: sortByColumnId === GameDataSourceSortByColumnId.DATE,
              payload: {
                columnId: GameDataSourceSortByColumnId.DATE,
                desc: true,
              },
            },
            {
              id: "event-name",
              label: "Event Name",
              active: sortByColumnId === GameDataSourceSortByColumnId.NAME,
              payload: {
                columnId: GameDataSourceSortByColumnId.NAME,
                desc: true,
              },
            },
          ]}
        />
      )}
    </Root>
  );
};

GameTableForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gameTableForm: PropTypes.object,
  layoutConfig: layoutConfigSchema,
  inputsConfig: inputsConfigSchema,
  className: PropTypes.string,
  sports: PropTypes.arrayOf(sportSchema),
};
