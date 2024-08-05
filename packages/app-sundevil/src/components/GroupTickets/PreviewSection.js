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
      {Array.isArray(images) && images.length > 0 && (
        <div className="container">
          <div className="row">
            {images.map(image => (
              <div className="col-md-4">
                <img src={image.src} className="img-fluid" alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      )}

      {interestedSection && (
        <div className="container">
          <h1 style={{ fontSize: "24px", fontWeight: "700" }}>
            {interestedSection.title}
          </h1>
          <p style={{ fontSize: "16px", fontWeight: "400" }}  dangerouslySetInnerHTML={{ __html: interestedSection.description }} />
        </div>
      )}
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
  }),
};
