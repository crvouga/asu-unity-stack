import PropTypes from "prop-types";
import React from "react";

import { Icon } from "../Icon_";

export const EnhanceExperience = ({
  title,
  description,
  experienceList,
  cta,
  image,
}) => {
  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 pe-8 bg-white">
          <div className="container max-w-4xl mx-auto">
            <h1 style={{ fontSize: "40px", fontWeight: 700 }}>{title}</h1>
            <p style={{ fontSize: "16px", fontWeight: "400" }}>{description}</p>
            <hr className="my-4" />
            <div className="row mt-4">
              {experienceList.map(experience => {
                return (
                  <div className="col-md-4 col-sm-6 d-flex flex-column align-items-start mb-4">
                    <Icon icon={experience.icon} />
                    <p style={{ fontWeight: "700", fontSize: "16px" }}>
                      {experience.text}
                    </p>
                  </div>
                );
              })}
            </div>
            <hr className="my-4" />
            <h2 style={{ fontWeight: "700", fontSize: "24px" }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize: "16px", fontWeight: "400" }}>
              Fill out the interest form below to begin planning the Sun Devil
              Athletics event you wish to attend.
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#6c757d",
              }}
            >
              *experiences varies per sport, are based on availability and
              adherence to NCAA compliance rules*
            </p>
            <a
              href={cta.href}
              target={cta.target}
              className="btn btn-primary btn-sm mt-4"
            >
              {cta.text}
            </a>
          </div>
        </div>
        <img
          height={555}
          width={486}
          src={image.imageSrc ?? " "}
          alt={image.imageAlt}
        />
      </div>
    </div>
  );
};

EnhanceExperience.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  experienceList: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  cta: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
    target: PropTypes.string,
  }),
  image: PropTypes.shape({
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
  }),
};
