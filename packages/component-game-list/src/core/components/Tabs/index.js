import PropTypes from "prop-types";
import React from "react";

import {
  NavContainer,
  SportsList,
  SportItem,
  MoreDropdown,
  MoreMenu,
  MoreMenuItem,
  PresentedBy,
} from "./index.styles";

const SportsNavigation = ({sports}) => {
  sports.sort((a, b) => a.position - b.position);
  return (
    <div className="container mt-4">
      <nav className="nav nav-pills nav-fill mr-auto flex-column d-md-flex flex-md-row" aria-label="Sports Navigation">
        {sports
          .filter(sport => !sport.more)
          .map((sport, index) => (
            <a className={`nav-item nav-link ${sport.active ? "active" : ""}`} href="#">
                        <span
                          title={sport.name}
                          className={sport.icon}
                        ></span>
              <div>{sport.name}</div>
            </a>
          ))}
      </nav>
    </div>
  );
};

SportsNavigation.propTypes = {
  sports: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      active: PropTypes.bool,
      position: PropTypes.number
    })
  ).isRequired,
};

export {SportsNavigation};
