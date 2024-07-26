import PropTypes from "prop-types";
import React from "react";

import { Icon } from "../Icon_";

export const GroupTicketBenefit = ({ ticketHolderBenefits, title }) => {
  return (
    <div className="container">
      <h1 style={{ fontSize: "40px", fontWeight: "700" }}>{title}</h1>
      <div className="row mt-6">
        {ticketHolderBenefits.map(benefit => {
          return (
            <div className="col-12 col-md-3">
              <div className="d-flex flex-column align-items-center text-center">
                <Icon icon={benefit.icon} />
                <h4 className="text-center">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

GroupTicketBenefit.propTypes = {
  ticketHolderBenefits: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};
