import PropTypes from "prop-types";
import React from "react";

import { NavItem } from "./index.styles";

/**
 * @typedef {{
 *  id: string;
 *  name: string;
 *  icon: string;
 *  active?: boolean;
 *  position: number;
 * }} Sport
 */

export const sportPropTypes = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
  position: PropTypes.number,
});

/**
 * @type {React.FC<{
 *  sports: Sport[];
 *  onSportItemClick: (sportId: string) => () => void;
 * }>}
 * */
const SportsNavigation = ({ sports, onSportItemClick }) => {
  sports.sort((a, b) => a.position - b.position);
  // get first 10 sports and other sports into variable
  const firstTenSports = sports.filter((sport, index) => index < 9);
  const moreSports = sports.filter((sport, index) => index >= 9);
  return (
    <>
      <div className="container mt-4">
        <nav
          className="nav nav-pills nav-fill mr-auto flex-column d-md-flex flex-md-row"
          aria-label="Sports Navigation"
        >
          {firstTenSports
            .filter(sport => !sport.more)
            .map(sport => (
              <NavItem
                key={sport.id}
                onClick={onSportItemClick(sport.id)}
                active={!!sport.active}
                className={`nav-item nav-link ${sport.active ? "active" : ""}`}
                href="#"
              >
                <span title={sport.name} className={sport.icon} />
                <div>{sport.name}</div>
              </NavItem>
            ))}
          {moreSports.length > 0 && (
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
        </nav>
      </div>
    </>
  );
};

SportsNavigation.propTypes = {
  sports: PropTypes.arrayOf(sportPropTypes),
  onSportItemClick: PropTypes.func,
};

export { SportsNavigation };
