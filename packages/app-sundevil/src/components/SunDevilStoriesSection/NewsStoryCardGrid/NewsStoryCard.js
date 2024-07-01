import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Skeleton } from "../../Skeleton";
import * as NewsStory from "../news-story";

const Root = styled.a`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 273px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  line-height: 1.2; /* Adjust the line height as needed */
  overflow: hidden;
  max-height: 2.4em; /* (line-height * number of lines) */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: between;
  color: black;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background: radial-gradient(
    circle,
    transparent 0%,
    transparent 10%,
    rgba(0, 0, 0, 0.8) 100%
  );
  padding: 18px 24px;
`;

const WhiteSpaceFill = styled.div`
  flex: 1;
`;

const SportName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: bold;
  color: white;
  display: flex;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  gap: 12px;
  align-items: center;
`;

const SportNameIcon = styled.span`
  font-size: 12px;
  width: 12px;
  height: 12px;
`;

const Category = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffc627;
  margin: 0;
  padding: 0;
  letter-spacing: 3px;
`;

const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/**
 *
 * @type {React.FC<{newsStory: NewsStory.NewsStory, style: StyleSheet; skeleton?: boolean }>}
 * @link {https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=728-26483&t=nNPd77JTpPWPBY9Q-0}
 * @link {https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=2127-15038&t=q44055rSZX7SMrDl-0}
 *
 */
export const NewsStoryCard = ({ newsStory, style, skeleton }) => {
  return (
    <Skeleton skeleton={Boolean(skeleton)}>
      <Root href={newsStory.href} style={style}>
        <BackgroundImage alt=" " src={newsStory.imageSrc} />
        <Content>
          {newsStory.showSportName && (
            <SportName>
              <SportNameIcon className={newsStory.sportIconFaClassName} />
              {newsStory.sportName}
            </SportName>
          )}

          <WhiteSpaceFill />

          <ContentBottom>
            {newsStory.showCategory && (
              <Category>{newsStory.category}</Category>
            )}
            <Title>{newsStory.title}</Title>
          </ContentBottom>
        </Content>
      </Root>
    </Skeleton>
  );
};
NewsStoryCard.propTypes = {
  newsStory: NewsStory.newsStorySchema.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  skeleton: PropTypes.bool,
};
