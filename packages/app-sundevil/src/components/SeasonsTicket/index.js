import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import {SectionHeader} from "../SectionHeader";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const SeasonsTicket = ({
                                ticketHolderBenefits,
                                miniPlans,
                                buildMiniPlanLink,
                                importantDates,
                                heroImage,
                              }) => {
  return (
    <Root>
      <div className="container">
        <h1 style={{fontSize: "40px", fontWeight: "700"}}>
          Join the season ticket holder family and enjoy exclusive benefits
        </h1>
        <div className="row mt-6">
          {ticketHolderBenefits.map(benefit => {
            return (
              <div className="col-12 col-md-3">
                <div className="d-flex flex-column align-items-center text-center">
                  <i className={`fa fa-${benefit.icon} text-4xl text-black`}/>
                  <h4 className="text-center">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="uds-hero-md has-btn-row mt-6">
        <div className="hero-overlay"/>
        <img
          className="hero"
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          loading="lazy"
          decoding="async"
          fetchPriority="high"
        />
        <h1>
        <span style={{paddingLeft: "48px", fontSize: "32px", fontWeight: "700"}} className="text-white">
            Interested? Have questions? We’re here to help.
        </span>
        </h1>
        <div style={{paddingLeft: "48px"}} className="content">
          <p className="text-white" style={{fontSize:"18px", fontWeight:"400"}}>
            If you have questions regarding Season Tickets or Mini Plans, or are
            interested in joining the Season Ticket Holder family, please call
            <a className="text-white" href="tel:480-727-0000"> 480-727-0000</a> or email{" "}
            <a className="text-white" href="mailto:seasontickets@asu.edu">seasontickets@asu.edu</a> to
            speak to a Sun Devil Ticket sales representative.
          </p>
        </div>
        <div style={{paddingLeft: "48px"}} className="btn-row">
          <a
            href="mailto:seasontickets@asu.edu"
            className="btn btn-default btn-gold"
          >
            Email Us
          </a>
        </div>
      </div>

      <SectionHeader
        title="Mini plans"
        subtitle="Mini plans are now available for the 2024 Sun Devil Football season. Choose one of each option within the categories below to create your plan."
      />

      <div className="container d-flex flex-column">
        <div className="d-flex flex-column flex-md-row gap-2 w-100">
          {miniPlans.map(miniPlan => {
            return (
              <div
                className="w-100"
                style={{backgroundColor: "#E8E8E8", padding: "24px"}}
              >
                <div style={{fontSize: "20px", fontWeight: "700"}}>
                  <h3>{miniPlan.title}</h3>
                </div>
                <span style={{fontSize: "16px", fontWeight: "400"}}>
                  {miniPlan.description}
                </span>
              </div>
            );
          })}
        </div>
        <a
          href={buildMiniPlanLink.href}
          style={{alignSelf: "center", marginTop: "48px"}}
          className="btn btn-default btn-gold"
          target={buildMiniPlanLink.target}
        >
          Build your mini plan
        </a>
      </div>

      <div style={{backgroundColor: "#E8E8E8", marginTop: "96px"}}>
        <div className="container">
          <h1 style={{fontSize: "40px", fontWeight: "700"}}>
            Important season ticket holder dates
          </h1>
          <div className="row w-100">
            {importantDates.map(date => {
              return (
                <div className="col-12 col-md-4" style={{padding: "24px"}}>
                  <div style={{fontSize: "20px", fontWeight: "700"}}>
                    {date.title}
                  </div>
                  <span style={{fontSize: "16px", fontWeight: "400"}}>
                    {date.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Root>
  );
};

SeasonsTicket.propTypes = {
  ticketHolderBenefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
  heroImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  miniPlans: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  buildMiniPlanLink: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
    target: PropTypes.string,
  }),
  importantDates: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
