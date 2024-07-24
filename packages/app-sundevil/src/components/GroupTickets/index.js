import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import {SectionHeader} from "../SectionHeader";
import {SingleCard} from "./singleCard";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const GroupTickets = ({
                               faqs,
                               sportsGroupCard,
                               textImageBlock,
                             }) => {
  return (
    <Root>
      <SectionHeader
        title="Bring the whole crew"
        subtitle="Group ticket packages are the perfect way to create a personalized and memorable Sun Devil game experience. Starting at just 15 tickets, groups can take advantage of ticket discounts, early access to games, tailgates, premium areas, exclusive tours, fundraising opportunities, and so much more."
      />

      <div className="container">
        <h1 style={{fontSize: "24px", fontWeight: "700"}}>Interested?</h1>
        <p style={{fontSize: "16px", fontWeight: "400"}}>
          Browse by sport below, or contact the Group Ticket Sales Team today to
          place your deposit for the upcoming season.
        </p>
        <p style={{fontSize: "16px", fontWeight: "400"}}>
          <a href="mailto:4807270000">480-727-0000</a> or{" "}
          <a href="mailto:grouptickets@asu.edu">grouptickets@asu.edu</a>
        </p>
      </div>

      <div className="container">
        <h1 style={{fontSize: "40px", fontWeight: "700"}}>
          Group tickets by sport
        </h1>
        <div className="row w-100">
          {
            sportsGroupCard.map(card => {
              return (<div className="col-12 col-md-4">
                <SingleCard
                  card={card}
                />
              </div>)
            })
          }
        </div>
      </div>

      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 pe-8 bg-white">
            <div className="container max-w-4xl mx-auto">
              <h1 style={{fontSize: "40px", fontWeight: 700}}>
                Enhance your experience
              </h1>
              <p style={{fontSize: "16px", fontWeight: "400"}}>
                Group tickets can be enhanced with unique experiences such as:
              </p>
              <hr className="my-4"/>
              <div className="row mt-4">
                {
                  textImageBlock.experienceList.map(experience => {
                    return (<div className="col-md-4 col-sm-6 d-flex flex-column align-items-start mb-4">
                      <i className={`fas fa-${experience.icon} text-primary`}/>
                      <p style={{fontWeight: "700", fontSize: "16px"}}>
                        {experience.text}
                      </p>
                    </div>)
                  })
                }
              </div>
              <hr className="my-4"/>
              <h2 style={{fontWeight: "700", fontSize: "24px"}}>
                Ready to get started?
              </h2>
              <p style={{fontSize: "16px", fontWeight: "400"}}>
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
                href={textImageBlock.interestFormLink.href}
                target={textImageBlock.interestFormLink.target}
                className="btn btn-primary btn-sm mt-4"
              >
                Interest form
              </a>
            </div>
          </div>
          <img
            height={555}
            width={486}
            src={textImageBlock.imageSrc}
            alt={textImageBlock.imageAlt}
          />
        </div>
      </div>

      <div style={{backgroundColor: "#E8E8E8"}}>
        <div className="container">
          <h1 style={{fontSize: "40px", fontWeight: "700"}}>
            Group ticket FAQs
          </h1>
          <div className="row w-100">
            {faqs.map(faq => {
              return (
                <div className="col-12 col-md-4" style={{padding: "24px"}}>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      marginBottom: "24px",
                    }}
                  >
                    {faq.title}
                  </div>
                  <span style={{fontSize: "16px", fontWeight: "400"}}>
                    {faq.description}
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

GroupTickets.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  textImageBlock: PropTypes.shape({
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    interestFormLink: PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
      target: PropTypes.string,
    }),
    experienceList: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
  sportsGroupCard: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      imageSrc: PropTypes.string,
      imageAlt: PropTypes.string,
      body: PropTypes.string,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          color: PropTypes.string,
          href: PropTypes.string,
        })
      ),
    })
  ),
};
