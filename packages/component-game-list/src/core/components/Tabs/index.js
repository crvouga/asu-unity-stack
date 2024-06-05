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

const SportsNavigation = ({ sports }) => {
  sports.sort((a, b) => a.position - b.position);
  return (
    <NavContainer>
      <SportsList>
        {sports
          .filter(sport => !sport.more)
          .map((sport, index) => (
            <SportItem key={index} className={sport.active ? "active" : ""}>
              {sport.icon}
              <span>{sport.name}</span>
            </SportItem>
          ))}
        <MoreDropdown>
          More
          <MoreMenu>
            {sports
              .filter(sport => sport.more)
              .map((sport, index) => (
                <MoreMenuItem key={index}>
                  <span>{sport.name}</span>
                </MoreMenuItem>
              ))}
          </MoreMenu>
        </MoreDropdown>
      </SportsList>
    </NavContainer>
  );
};

SportsNavigation.propTypes = {
  sports: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      active: PropTypes.bool,
      position: PropTypes.number,
      more: PropTypes.bool,
    })
  ).isRequired,
};

export { SportsNavigation };
