import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { GroupTicketBenefit } from "./GroupTicketBenifit";
import { GroupTicketMiniPlans } from "./GroupTicketMiniPlans";
import { TicketsFooter } from "./ticketsFooter";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const SeasonsTicket = ({
  ticketHolderBenefits,
  miniPlans,
  buildMiniPlanLink,
  footer,
  heroImage,
}) => {
  return (
    <Root>
      <GroupTicketBenefit
        ticketHolderBenefits={ticketHolderBenefits}
        title="Season Ticket Holder Benefits"
      />

      <div className="uds-hero-md has-btn-row mt-6">
        <div className="hero-overlay" />
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
          <span
            style={{ paddingLeft: "48px", fontSize: "32px", fontWeight: "700" }}
            className="text-white"
          >
            Interested? Have questions? We’re here to help.
          </span>
        </h1>
        <div style={{ paddingLeft: "48px" }} className="content">
          <p
            className="text-white"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            If you have questions regarding Season Tickets or Mini Plans, or are
            interested in joining the Season Ticket Holder family, please call
            <a className="text-white" href="tel:480-727-0000">
              {" "}
              480-727-0000
            </a>{" "}
            or email{" "}
            <a className="text-white" href="mailto:seasontickets@asu.edu">
              seasontickets@asu.edu
            </a>{" "}
            to speak to a Sun Devil Ticket sales representative.
          </p>
        </div>
        <div style={{ paddingLeft: "48px" }} className="btn-row">
          <a
            href="mailto:seasontickets@asu.edu"
            className="btn btn-default btn-gold"
          >
            Email Us
          </a>
        </div>
      </div>

      <GroupTicketMiniPlans
        title="Mini plans"
        description="Choose from one of our mini plans"
        miniPlans={miniPlans}
        cta={buildMiniPlanLink}
      />

      <TicketsFooter title={footer.title} data={footer.data} />
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
  footer: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
};
