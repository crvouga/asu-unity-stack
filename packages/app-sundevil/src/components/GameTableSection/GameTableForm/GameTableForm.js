// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { GameDataSourceSortBy } from "../../Game/game-data-source";
import { useGameVenuesLoader } from "../../Game/use-game-venues-loader";
import { Select } from "../../Select/Select";
import { sportSchema } from "../../SportsTabs/sports-tabs";
import { TextField } from "../../TextField/TextField";
import { inputsConfigSchema } from "../inputs-config";
import { layoutConfigSchema } from "../layout-config";
import { gameTableFormSchema } from "./game-table-form";

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
  darkMode,
}) => {
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
          darkMode={darkMode}
          style={{ flex: 2 }}
          label={inputsConfig?.searchInput?.label ?? ""}
          placeholder={inputsConfig?.searchInput?.placeholder ?? ""}
          value={gameTableForm.searchQuery}
          onChange={gameTableForm.setSearchQuery}
          renderEndIcon={({ style }) => (
            <i style={style} className="fa fas fa-solid fa-magnifying-glass" />
          )}
        />
      )}
      {layoutConfig.includeInputSportType && (
        <Select
          darkMode={darkMode}
          style={{ flex: 1 }}
          label={inputsConfig.sportTypeSelect?.label ?? ""}
          placeholder={inputsConfig.sportTypeSelect?.placeholder ?? ""}
          onChange={option =>
            gameTableForm.update({
              sportId: option.id === gameTableForm.sportId ? "all" : option.id,
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
          darkMode={darkMode}
          style={{ flex: 1 }}
          label={inputsConfig.venueSelect?.label ?? ""}
          placeholder={inputsConfig.venueSelect?.placeholder ?? ""}
          onChange={option =>
            gameTableForm.update({
              venueId: option.id === gameTableForm.venueId ? null : option.id,
            })
          }
          options={allVenues.map(venueOption => ({
            label: venueOption,
            id: venueOption,
            active: venueOption === gameTableForm.venueId,
          }))}
        />
      )}
      {layoutConfig.includeInputHomeOrAwaySelect && (
        <Select
          darkMode={darkMode}
          style={{ flex: 1 }}
          label={inputsConfig.homeOrAwaySelect?.label ?? ""}
          placeholder={inputsConfig.homeOrAwaySelect?.placeholder ?? ""}
          onChange={option =>
            gameTableForm.update({
              gameType: option.id === gameTableForm.gameType ? null : option.id,
            })
          }
          options={[
            {
              id: "home",
              label: "Home",
              active: gameTableForm.gameType === "home",
            },
            {
              id: "away",
              label: "Away",
              active: gameTableForm.gameType === "away",
            },
          ]}
        />
      )}

      {layoutConfig.includeInputSortBySelect && (
        <Select
          darkMode={darkMode}
          style={{ flex: 1 }}
          label={inputsConfig.sortBySelect?.label ?? ""}
          placeholder={inputsConfig.sortBySelect?.placeholder ?? ""}
          onChange={option => {
            gameTableForm.update({
              sortBy:
                option.payload.sortBy === gameTableForm.sortBy
                  ? GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST
                  : option.payload.sortBy,
            });
          }}
          options={[
            {
              id: "date",
              label: "Date",
              active:
                gameTableForm.sortBy ===
                GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST,
              payload: {
                sortBy: GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST,
              },
            },
            {
              id: "event-name",
              label: "Event Name",
              active:
                gameTableForm.sortBy === GameDataSourceSortBy.TITLE_A_TO_Z,
              payload: {
                sortBy: GameDataSourceSortBy.TITLE_A_TO_Z,
              },
            },
          ]}
        />
      )}
    </Root>
  );
};

GameTableForm.propTypes = {
  gameTableForm: gameTableFormSchema,
  layoutConfig: layoutConfigSchema,
  inputsConfig: inputsConfigSchema,
  className: PropTypes.string,
  sports: PropTypes.arrayOf(sportSchema),
  darkMode: PropTypes.bool,
};
