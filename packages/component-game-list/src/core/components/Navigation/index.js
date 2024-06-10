import PropTypes from "prop-types";
import React from "react";

const SportsNavigation = ({sports}) => {
  sports.sort((a, b) => a.position - b.position);
  // get first 10 sports and other sports into variable
  const firstTenSports = sports.filter((sport, index) => index < 9);
  const moreSports = sports.filter((sport, index) => index >= 9);
  const activeSports = sports.filter(sport => sport.active);
  return (
    <>
      <div className="container mt-4">
        <nav className={"nav nav-pills nav-fill mr-auto flex-column d-md-flex flex-md-row"}
             aria-label="Sports Navigation">
          {firstTenSports
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
          {
            moreSports.length > 0 && (
              <li className={"nav-item dropdown"}>
                <a className="nav-item dropdown nav-link" data-bs-toggle="dropdown" href="#" role="button"
                   aria-expanded="false">
                  <span className="fas fa-chevron-down"></span>
                  <div>More</div>
                </a>
                <ul className="dropdown-menu">
                  {moreSports.map((sport, index) => (
                    <li key={index} className="dropdown-item">
                      <a href="#">
                      <span
                        title={sport.name}
                        className={sport.icon}
                      ></span>
                        <div>{sport.name}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )
          }
        </nav>
      </div>
    </>
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
