import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src/components/Button";
import { buttonPropTypes } from "../Button/button-prop";

// APP_CONFIG.breakpointMobile;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 50%;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1;
  width: 100%;
  background: linear-gradient(to right, #191919 50%, transparent 80%);
  padding: 48px;
  gap: 8px;
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 32px;
  color: #fff;
  max-width: 70%;
`;

const Body = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #fff;
  max-width: 70%;
  color: #d0d0d0;
  a {
    color: inherit;
  }
`;

const ButtonRoot = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 1rem;
`;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9137&t=npLkRT1OeHXVfTDe-0
 * @type {React.FC<Props>}
 */
export const ContactUsCTACard = ({
  title,
  body,
  buttons,
  imageAlt,
  imageSrc,
}) => {
  return (
    <Root>
      <BackgroundImage src={imageSrc} alt={imageAlt} />
      <Content>
        <Title>{title}</Title>
        <Body dangerouslySetInnerHTML={{ __html: body }} />
        <ButtonRoot>
          {buttons.map(button => (
            <Button key={button?.label} {...button} />
          ))}
        </ButtonRoot>
      </Content>
    </Root>
  );
};

/**
 * @typedef {{
 *  imageSrc: string;
 *  imageAlt: string;
 *  title: string;
 *  body: string;
 *  buttons: import("../Button/button-prop").ButtonProp[];
 * }} Props
 */

ContactUsCTACard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  buttons: PropTypes.arrayOf(buttonPropTypes),
};
