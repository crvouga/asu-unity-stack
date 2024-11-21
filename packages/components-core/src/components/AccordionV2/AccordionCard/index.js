import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { sanitizeDangerousMarkup } from "../../../../../../shared";
import { accordionCardPropTypes } from "../../../core/models/shared-prop-types";

/**
 * @typedef {import('../../../core/types/shared-types').AccordionCardItemProps} AccordionCardItemProps
 */

const colorToHex = {
  gold: "#ffc627",
  maroon: "#8c1d40",
  gray: "#bfbfbf",
  dark: "#191919",
};

const FALLBACK_COLOR = colorToHex.gold;

const AccordionItem = styled.div`
  border-top: 1px solid #d0d0d0;
  border-bottom: 1px solid #d0d0d0;
  overflow: hidden;
  margin-top: 1.5rem !important;
  ${props =>
    `border-left: 0.5rem solid ${colorToHex[props.color] ?? FALLBACK_COLOR}`};
`;

const AccordionHeader = styled.div`
  background-color: #fff;
  &:hover {
    background-color: #e8e8e8;
  }
  cursor: pointer;
`;

const AccordionHeaderContent = styled.h4`
  margin: 0;
`;

const AccordionHeaderLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
  &:focus,
  &:active,
  &:hover {
    box-shadow: none !important;
    outline: none !important;
    border: none !important;
  }
  color: #191919;
  &:hover {
    text-decoration: none;
  }
`;

const AccordionIconRoot = styled.span`
  display: flex;
  align-items: center;

  i {
    margin-right: 1rem;
  }
`;

const Chevron = styled.i`
  transition: transform 0.3s ease;
  font-size: 20px;
  transform: ${props => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

const AccordionBody = styled.div`
  overflow: hidden;
  padding: 0 24px 24px;
  transition: max-height 0.3s ease;
  background-color: #fafafa;
  border-top: 1px solid #d0d0d0;
`;

const AccordionContent = styled.div`
  padding: 0px;
  background-color: transparent;

  p:last-child {
    margin-bottom: 0;
  }
`;

/**
 * @param {AccordionCardItemProps} props
 * @returns {JSX.Element}
 */
export const AccordionCard = ({ id, item, openCard, onClick }) => {
  const isOpen = openCard === id;

  const toggleAccordion = e => {
    e.preventDefault();
    onClick(e, id, item.content?.header);
  };

  return (
    <AccordionItem color={item.color}>
      <AccordionHeader>
        <AccordionHeaderContent>
          <AccordionHeaderLink
            href={`#card-body-${id}`}
            role="button"
            aria-expanded={isOpen}
            aria-controls={`card-body-${id}`}
            onClick={toggleAccordion}
            collapsed={!isOpen}
          >
            {item.content?.icon ? (
              <AccordionIconRoot>
                <i
                  className={`${item.content.icon[0]} fa-${item.content.icon[1]}`}
                />
                {item.content.header}
              </AccordionIconRoot>
            ) : (
              item.content?.header
            )}
            <Chevron className="fas fa-chevron-down" isOpen={isOpen} />
          </AccordionHeaderLink>
        </AccordionHeaderContent>
      </AccordionHeader>
      {item.content?.body && isOpen && (
        <AccordionBody>
          <AccordionContent
            dangerouslySetInnerHTML={sanitizeDangerousMarkup(item.content.body)}
          />
        </AccordionBody>
      )}
    </AccordionItem>
  );
};

AccordionCard.propTypes = {
  id: PropTypes.number,
  item: accordionCardPropTypes,
  openCard: PropTypes.number,
  onClick: PropTypes.func,
};
