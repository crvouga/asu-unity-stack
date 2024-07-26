import PropTypes from "prop-types";
import React from "react";

import { SectionHeader } from "../SectionHeader";
import { SingleCard } from "./singleCard";

export const GroupTicketsBySport = ({ sportsGroupCard, title }) => {
  return (
    <>
      <SectionHeader title={title} />
      <div className="container">
        <div className="row w-100">
          {sportsGroupCard.map(card => {
            return (
              <div className="col-12 col-md-4">
                <SingleCard card={card} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

GroupTicketsBySport.propTypes = {
  sportsGroupCard: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      imageSrc: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};
