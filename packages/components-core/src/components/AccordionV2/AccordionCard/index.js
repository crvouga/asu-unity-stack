import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from "react";
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
  border-right: 1px solid #d0d0d0;
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
  transition: max-height 0.3s ease;
  max-height: ${props => (props.isOpen ? `${props.contentHeight}px` : "0")};
  background-color: #fafafa;
`;

const AccordionContent = styled.div`
  border-top: 1px solid #d0d0d0;
  padding: 24px;
  padding-top: 0;
  white-space: normal; /* Ensure text wraps correctly */
  word-wrap: break-word; /* Handle long words gracefully */
`;

function debounce(func, wait) {
  let timeout;
  return function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * @param {AccordionCardItemProps} props
 * @returns {JSX.Element}
 */
export const AccordionCard = ({ id, item, openCard, onClick }) => {
  const isOpen = openCard === id;

  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    updateHeight();

    const debouncedUpdate = debounce(updateHeight, 100);
    window.addEventListener("resize", debouncedUpdate);
    window.addEventListener("orientationchange", debouncedUpdate);

    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      window.removeEventListener("orientationchange", debouncedUpdate);
    };
  }, [item.content?.body]);

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
      {item.content?.body && (
        <AccordionBody isOpen={isOpen} contentHeight={contentHeight}>
          <AccordionContent
            ref={contentRef}
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
