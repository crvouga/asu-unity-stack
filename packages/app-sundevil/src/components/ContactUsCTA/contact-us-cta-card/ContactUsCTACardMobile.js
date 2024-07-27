import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../../components-core/src/components/Button";
import { buttonPropTypes } from "../../Button/button-prop";

const IMAGE_HEIGHT = 329;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #191919 66%, transparent 80%);
  padding: 3rem;
  gap: 16px;
  padding-top: ${IMAGE_HEIGHT * 0.8}px;
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
`;

const Body = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #d0d0d0;
  a {
    color: inherit;
  }
`;

const ButtonRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 1rem;
  width: 100%;
`;

export const ContactUsCTACardMobile = ({
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
            <Button key={button?.label} {...button} width="100%" />
          ))}
        </ButtonRoot>
      </Content>
    </Root>
  );
};

ContactUsCTACardMobile.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  buttons: PropTypes.arrayOf(buttonPropTypes),
};
