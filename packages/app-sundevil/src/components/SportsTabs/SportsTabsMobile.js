// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { DropDown } from "../DropDown/DropDown";
import { DropDownSurface } from "../DropDown/DropDownSurface";
import { SelectBase } from "../Select/SelectBase";
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

/**
 * @type {React.FC<{
 *  sports: Sport[];
 *  onSportItemClick: (sportId: string) => () => void;
 * }>}
 * */
export const SportsTabsMobile = ({ sports, onSportItemClick }) => {
  sports.sort((a, b) => a.position - b.position);
  const activeSport = sports.find(sport => Boolean(sport.active));
  if (!activeSport) return null;

  /** @type {Record<string, unknown>} */
  const initialState = {
    opened: null,
  };
  const [state, setState] = React.useState(initialState);

  return (
    <DropDown
      open={state.opened === "dropdown"}
      onClose={() =>
        setState(currentState => ({ ...currentState, opened: null }))
      }
      renderReference={input => {
        return (
          <SelectBase
            // @ts-ignore
            ref={input.ref}
            icon={activeSport.icon}
            name={activeSport.name}
            open={input.open}
            onClick={() =>
              setState(currentState => ({
                ...currentState,
                opened: currentState.opened === "dropdown" ? null : "dropdown",
              }))
            }
          />
        );
      }}
      renderContent={input => {
        return (
          <DropDownSurface style={{ width: input.referenceWidth }}>
            {sports.map(sport => (
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
  );
};

SportsTabsMobile.propTypes = {
  // @ts-ignore
  sports: PropTypes.arrayOf(sportSchema).isRequired,
  onSportItemClick: PropTypes.func.isRequired,
};
