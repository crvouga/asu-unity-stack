import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { SportsTab } from "./SportsTab";

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
export const SportTabs = ({ sports, onSportItemClick }) => {
  sports.sort((a, b) => a.position - b.position);
  const firstTenSports = sports
    .filter((_sport, index) => index < 9)
    .filter(sport => !sport.more);
  const moreSports = sports.filter((sport, index) => index >= 9);
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
        <SportsTab>
          <span className="fas fa-chevron-down" />
          <div>More</div>
        </SportsTab>
      )}
      {false && moreSports.length > 0 && (
        <li className="nav-item dropdown">
          <button
            type="button"
            className="nav-item dropdown nav-link"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="fas fa-chevron-down" />
            <div>More</div>
          </button>
          <ul className="dropdown-menu">
            {moreSports.map(sport => (
              <li key={sport.id} className="dropdown-item">
                <button type="button" onClick={onSportItemClick(sport.id)}>
                  <span title={sport.name} className={sport.icon} />
                  <div>{sport.name}</div>
                </button>
              </li>
            ))}
          </ul>
        </li>
      )}
    </Root>
  );
};

SportTabs.propTypes = {
  sports: PropTypes.arrayOf(sportSchema).isRequired,
  onSportItemClick: PropTypes.func.isRequired,
};
