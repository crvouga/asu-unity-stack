import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { GroupTicketsFooter } from "../SeasonsTicket/GroupTicketsFooter";
import { CardGrid } from "./CardGrid";
import { EnhanceExperience } from "./EnhanceExperience";
import { PreviewSection } from "./PreviewSection";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const GroupTickets = ({ faqs, sportsGroupCard, textImageBlock }) => {
  return (
    <Root>
      <PreviewSection
        title="Bring the whole crew"
        description="Group ticket packages are the perfect way to create a personalized and memorable Sun Devil game experience. Starting at just 15 tickets, groups can take advantage of ticket discounts, early access to games, tailgates, premium areas, exclusive tours, fundraising opportunities, and so much more."
        interestedSection={null}
      />

      <CardGrid
        sportsGroupCard={sportsGroupCard}
        title="Group tickets by sport"
      />

      <EnhanceExperience
        title="Enhance your experience"
        description="Group tickets can be enhanced with unique experiences such as:"
        experienceList={textImageBlock.experienceList}
        cta={textImageBlock.interestFormLink}
        image={textImageBlock}
      />
      <GroupTicketsFooter title="Group ticket FAQs" data={faqs} />
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
