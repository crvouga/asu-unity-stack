// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { DropDown } from "../../../../../app-sundevil/src/components/DropDown/DropDown";
import { DropDownSurface } from "../../../../../app-sundevil/src/components/DropDown/DropDownSurface";
import { SportsTab } from "./SportsTab";
import { SportsTabDropDownItem } from "./SportsTabDropDownItem";

/**
 * @typedef {{
 *  id: string;
 *  name: string;
 *  icon: string;
 *  active?: boolean;
 *  position: number;
 * }} Sport
 */

export const sportSchema = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  position: PropTypes.number,
});

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
`;

/**
 * @type {React.FC<{
 *  sports: Sport[];
 *  onSportItemClick: (sportId: string) => () => void;
 * }>}
 * */
export const SportsTabsDesktop = ({ sports, onSportItemClick }) => {
  sports.sort((a, b) => a.position - b.position);
  const firstTenSports = sports
    .filter((_sport, index) => index < 9)
    // @ts-ignore
    .filter(sport => !sport.more);
  // @ts-ignore
  const moreSports = sports.filter((sport, index) => index >= 9);
  const isMoreSportsActive = moreSports.some(sport => Boolean(sport.active));

  /** @type {Record<string, unknown>} */
  const initialState = {
    opened: null,
  };
  const [state, setState] = React.useState(initialState);

  return (
    <Root>
      {firstTenSports.map(sport => (
        <SportsTab
          key={sport.id}
          onClick={onSportItemClick(sport.id)}
          active={Boolean(sport.active)}
        >
          <span title={sport.name} className={sport.icon} />
          <div>{sport.name}</div>
        </SportsTab>
      ))}
      {moreSports.length > 0 && (
        <DropDown
          open={state.opened === "dropdown"}
          onClose={() =>
            setState(currentState => ({ ...currentState, opened: null }))
          }
          renderReference={input => {
            return (
              <SportsTab
                // @ts-ignore
                ref={input.ref}
                onClick={() =>
                  setState(currentState => ({
                    ...currentState,
                    opened:
                      currentState.opened === "dropdown" ? null : "dropdown",
                  }))
                }
                active={isMoreSportsActive}
              >
                {input.open ? (
                  <span className="fas fa-chevron-up" />
                ) : (
                  <span className="fas fa-chevron-down" />
                )}
                <div>More</div>
              </SportsTab>
            );
          }}
          renderContent={() => {
            return (
              <DropDownSurface>
                {moreSports.map(sport => (
                  <SportsTabDropDownItem
                    label={sport.name}
                    active={Boolean(sport.active)}
                    onClick={() => {
                      setState(currentState => ({
                        ...currentState,
                        opened: null,
                      }));
                      onSportItemClick(sport.id)();
                    }}
                  />
                ))}
              </DropDownSurface>
            );
          }}
        />
      )}
    </Root>
  );
};

SportsTabsDesktop.propTypes = {
  // @ts-ignore
  sports: PropTypes.arrayOf(sportSchema).isRequired,
  onSportItemClick: PropTypes.func.isRequired,
};
