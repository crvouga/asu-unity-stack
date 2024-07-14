import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#191919")};
  background-color: ${({ darkMode }) => (darkMode ? "#191919" : "#fff")};
`;

const ContentRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 8rem;
  padding-bottom: 7rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  width: fit-content;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  width: fit-content;
  margin: 0;
  padding: 0;
  max-width: 588px;
  opacity: 0.9;
`;

const SubtitleLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SubtitleLink = styled.a`
  color: #fff;
  text-decoration: underline;
  font-size: 0.8rem;
  width: fit-content;
  opacity: 0.7;
`;

export const GameTableHero = ({
  title,
  subtitle,
  subtitleLinks,
  style,
  darkMode,
}) => {
  return (
    <Root style={style} darkMode={darkMode}>
      <ContentRoot className="container">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        {Array.isArray(subtitleLinks) && (
          <SubtitleLinks>
            {subtitleLinks.map(({ label, href }) => (
              <SubtitleLink
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {label}
              </SubtitleLink>
            ))}
          </SubtitleLinks>
        )}
      </ContentRoot>
    </Root>
  );
};

GameTableHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  darkMode: PropTypes.bool,
};
