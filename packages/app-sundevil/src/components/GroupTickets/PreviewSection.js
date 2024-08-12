import PropTypes from "prop-types";
import React, { useState } from "react";

import { Image } from "../Image";
import { SectionHeader } from "../SectionHeader";

const circularIndex = (array, index) => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  if (typeof index !== "number") {
    return null;
  }
  return array[(index + array.length) % array.length];
};

export const PreviewSection = ({
  title,
  description,
  images,
  interestedSection,
  columnWidthValuesTemplate = ["25%", "50%", "25%"],
}) => {
  const [minHeight, setMinHeight] = useState(Infinity);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <SectionHeader title={title} subtitle={description} />

      {Array.isArray(images) && images.length > 0 && (
        <div className="container">
          <div
            className="row"
            style={{
              width: "100%",
              height: `${minHeight}px`,
              overflow: "hidden",
            }}
          >
            {images.map((image, index) => {
              const columnWidthValue = circularIndex(
                columnWidthValuesTemplate,
                index
              );
              return (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${image.src}${image.alt}${index}`}
                  style={{ width: columnWidthValue, height: "100%" }}
                >
                  <Image
                    src={image.src}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt={image.alt}
                    onHeight={imageHeight => {
                      setMinHeight(currentMinHeight =>
                        Math.min(currentMinHeight, imageHeight)
                      );
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {interestedSection && (
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "700",
              margin: 0,
              padding: 0,
            }}
          >
            {interestedSection.title}
          </p>
          <p
            style={{ fontSize: "16px", fontWeight: "400" }}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: interestedSection.description }}
          />
        </div>
      )}
    </div>
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
  columnWidthValuesTemplate: PropTypes.arrayOf(PropTypes.string),
  interestedSection: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
