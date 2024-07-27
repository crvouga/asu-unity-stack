import PropTypes from "prop-types";
import React from "react";

import { SectionHeader } from "../SectionHeader";

export const GroupTicketMiniPlans = ({
  miniPlans,
  title,
  description,
  cta,
}) => {
  return (
    <>
      <SectionHeader title={title} subtitle={description} />

      <div
        className="container d-flex flex-column"
        style={{ paddingTopn: "96px", paddingBottom: "96px" }}
      >
        <div className="d-flex flex-column flex-md-row gap-2 w-100">
          {miniPlans.map(miniPlan => {
            return (
              <div
                className="w-100"
                style={{ backgroundColor: "#E8E8E8", padding: "24px" }}
              >
                <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  <h3>{miniPlan.title}</h3>
                </div>
                <span style={{ fontSize: "16px", fontWeight: "400" }}>
                  {miniPlan.description}
                </span>
              </div>
            );
          })}
        </div>
        {cta.map(ct => {
          return (
            <a
              href={ct.href}
              style={{ alignSelf: "center", marginTop: "48px" }}
              className="btn btn-default btn-gold"
              target={ct.target}
            >
              {ct.label}
            </a>
          );
        })}
      </div>
    </>
  );
};

GroupTicketMiniPlans.propTypes = {
  miniPlans: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      target: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};
