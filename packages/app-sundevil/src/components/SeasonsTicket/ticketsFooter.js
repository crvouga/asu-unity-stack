import PropTypes from "prop-types";
import React from "react";

export const TicketsFooter = ({ data, title }) => {
  return (
    <div style={{ backgroundColor: "#E8E8E8", marginTop: "96px" }}>
      <div className="container">
        <h1 style={{ fontSize: "40px", fontWeight: "700" }}>{title}</h1>
        <div className="row w-100">
          {data.map(date => {
            return (
              <div className="col-12 col-md-4" style={{ padding: "24px" }}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "24px",
                  }}
                >
                  {date.title}
                </div>
                <span style={{ fontSize: "16px", fontWeight: "400" }}>
                  {date.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

TicketsFooter.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};
