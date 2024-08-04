import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src";
import { AspectRatio16by9 } from "../AspectRatio/AspectRatio16by9";
import { buttonPropTypes } from "../Button/button-prop";
import { Icon } from "../Icon_";
import { Skeleton } from "../Skeleton";

const CardRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 12px 0 48px 0;
  flex-shrink: 0;
`;

const CardTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 700;
`;

const CardBody = styled.div`
  width: 100%;
`;

const CardBodyText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #191919;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  & > * {
    margin: 0;
    padding: 0;
  }
`;

const CardButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding-top: 6px;
`;

const isCleanArray = array => Array.isArray(array) && array.length > 0;

// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-10693&t=C3qkTw4K6TZjJmgN-0
export const SingleCard = ({ card }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const cardRef = useRef();

  return (
    <CardRoot
      ref={cardRef}
      style={{
        width: "100%",
      }}
    >
      <AspectRatio16by9>
        <Skeleton skeleton={!isImageLoaded}>
          <CardImage
            src={card.imageSrc}
            alt={card.imageAlt}
            onLoad={() => setIsImageLoaded(true)}
          />
        </Skeleton>
      </AspectRatio16by9>
      <CardContent>
        <CardTitle>{card.title}</CardTitle>
        <CardBody>
          <CardBodyText dangerouslySetInnerHTML={{ __html: card.body }} />
        </CardBody>

        {isCleanArray(card?.buttonRows) &&
          card.buttonRows.map(
            buttonRow =>
              isCleanArray(buttonRow) && (
                <CardButtons
                  key={buttonRow?.map(button => button.label ?? "")?.join("")}
                >
                  {buttonRow.map(button => (
                    <Button
                      key={button.label}
                      color={button.color}
                      ariaLabel={button.label}
                      href={button.href}
                      label={button.label}
                      size="small"
                      renderEndIcon={() =>
                        button?.endIcon ? (
                          <Icon
                            style={{ marginLeft: "0.5rem" }}
                            icon={button.endIcon}
                          />
                        ) : null
                      }
                      {...button}
                    />
                  ))}
                </CardButtons>
              )
          )}

        {isCleanArray(card?.buttons) && (
          <CardButtons>
            {card.buttons.map(button => (
              <Button
                key={button.label}
                color={button.color}
                ariaLabel={button.label}
                href={button.href}
                label={button.label}
                size="small"
                renderEndIcon={() =>
                  button?.endIcon ? (
                    <Icon
                      style={{ marginLeft: "0.5rem" }}
                      icon={button.endIcon}
                    />
                  ) : null
                }
                {...button}
              />
            ))}
          </CardButtons>
        )}
      </CardContent>
    </CardRoot>
  );
};

export const cardPropTypes = PropTypes.shape({
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitles: PropTypes.arrayOf(PropTypes.string),
  body: PropTypes.string,
  buttons: PropTypes.arrayOf(buttonPropTypes),
  buttonRows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        color: PropTypes.string,
        href: PropTypes.string,
        size: PropTypes.string,
        endIcon: PropTypes.string,
      })
    )
  ),
});

SingleCard.propTypes = {
  card: cardPropTypes,
};
