import PropTypes from "prop-types";
import React from "react";

import { SectionHeader } from "../SectionHeader";

export const PreviewSection = ({
  title,
  description,
  images,
  interestedSection,
}) => {
  return (
    <>
      <SectionHeader title={title} subtitle={description} />
      <div className="container">
        <div className="row">
          {images.map(image => (
            <div className="col-md-4">
              <img src={image.src} className="img-fluid" alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h1 style={{ fontSize: "24px", fontWeight: "700" }}>
          {interestedSection.title}
        </h1>
        <p style={{ fontSize: "16px", fontWeight: "400" }}>
          {interestedSection.description}
        </p>
        <p style={{ fontSize: "16px", fontWeight: "400" }}>
          <a href={`mailto:${interestedSection.phone}`}>
            ${interestedSection.phone}
          </a>{" "}
          or{" "}
          <a href={`mailto:${interestedSection.email}`}>
            ${interestedSection.email}
          </a>
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
  interestedSection: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};
