import PropTypes from "prop-types";
import React from "react";

import { SectionHeader } from "../SectionHeader";

export const PreviewSection = ({ title, description, images }) => {
  return (
    <>
      <SectionHeader title={title} subtitle={description} />

      <div className="container">
        <h1 style={{ fontSize: "24px", fontWeight: "700" }}>Interested?</h1>
        <p style={{ fontSize: "16px", fontWeight: "400" }}>
          Browse by sport below, or contact the Group Ticket Sales Team today to
          place your deposit for the upcoming season.
        </p>
        <p style={{ fontSize: "16px", fontWeight: "400" }}>
          <a href="mailto:4807270000">480-727-0000</a> or{" "}
          <a href="mailto:grouptickets@asu.edu">grouptickets@asu.edu</a>
        </p>
      </div>
    </>
  );
};

PreviewSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};
