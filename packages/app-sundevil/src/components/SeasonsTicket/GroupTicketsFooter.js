import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useTrackChildrenClicks } from "../../track-ga-event-hooks";
import { BottomButtons } from "../Button/BottomButtons";
import { buttonPropTypes } from "../Button/button-prop";

const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const GridRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const GridTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;
`;

const GridItem = styled.div`
  flex: 1 1 calc(33.33% - 24px); /* 3 columns on desktop */
  box-sizing: border-box;

  @media (max-width: ${APP_CONFIG.breakpointTablet}) {
    flex: 1 1 calc(50% - 24px); /* 2 columns on tablet */
  }

  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    flex: 1 1 100%; /* 1 column on mobile */
  }
`;

const HeadingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const BottomButtonsRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
`;

const Root = styled.div`
  background-color: #e8e8e8;
  padding: 96px 0;

  .muted-link {
    color: #747474 !important;
  }
`;

const isCleanString = str => typeof str === "string" && str.trim().length > 0;

// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=7930-8501&t=9pl8zwGhZXvOIoUR-0
export const GroupTicketsFooter = ({
  data,
  title,
  titleAs = "h2",
  subtitle,
  subtitleAs = "p",
  gridTitle,
  gridTitleAs = "h3",
  bottomButtons,
}) => {
  const hasTitle = isCleanString(title);
  const hasSubtitle = isCleanString(subtitle);
  const hasGridTitle = isCleanString(gridTitle);
  const hasBottomButtons =
    Array.isArray(bottomButtons) && bottomButtons.length > 0;
  const hasHeading = hasTitle || hasSubtitle;
  const sectionName = title;
  return (
    <Root
      style={{
        backgroundColor: "#E8E8E8",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <Content className="container">
        {hasHeading && (
          <HeadingSection>
            {hasTitle && <Title as={titleAs}>{title}</Title>}

            {hasSubtitle && <Subtitle as={subtitleAs}>{subtitle}</Subtitle>}
          </HeadingSection>
        )}

        <GridRoot>
          {hasGridTitle && <GridTitle as={gridTitleAs}>{gridTitle}</GridTitle>}
          <Grid>
            {data?.map?.(datum => (
              <GridItem key={datum.id}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    paddingBottom: "12px",
                  }}
                >
                  {datum.title}
                </div>
                <GridItemDescription
                  sectionName={sectionName}
                  description={datum.description}
                />
              </GridItem>
            ))}
          </Grid>
        </GridRoot>

        {hasBottomButtons && (
          <BottomButtonsRoot>
            <BottomButtons sectionName={sectionName} buttons={bottomButtons} />
          </BottomButtonsRoot>
        )}
      </Content>
    </Root>
  );
};

const GridItemDescription = ({ description, sectionName }) => {
  const ref = useRef(null);
  useTrackChildrenClicks({
    ref,
    sectionName,
  });
  return (
    <span
      ref={ref}
      style={{ fontSize: "16px", fontWeight: "400" }}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};
GridItemDescription.propTypes = {
  description: PropTypes.string,
  sectionName: PropTypes.string,
};

GroupTicketsFooter.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  titleAs: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleAs: PropTypes.string,
  gridTitle: PropTypes.string,
  gridTitleAs: PropTypes.string,
  bottomButtons: PropTypes.arrayOf(buttonPropTypes),
};
