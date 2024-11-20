import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import { APP_CONFIG } from "../../config";
import { useTrackChildrenClicks } from "../../track-ga/track-ga-event-hooks";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { Image } from "../Image";
import { SectionHeader } from "../SectionHeader";

const imagePropTypes = PropTypes.shape({
  src: PropTypes.string,
  alt: PropTypes.string,
});

const isValidImage = image =>
  typeof image === "object" &&
  image &&
  image.src &&
  typeof image.src === "string";

export const PreviewSection = ({
  title,
  description,
  interestedSection,
  imageSmallLeft,
  imageLarge,
  imageSmallRight,
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const interestedDescriptionRef = useRef();
  useTrackChildrenClicks({
    ref: interestedDescriptionRef,
    sectionName: interestedSection?.title ?? title ?? " ",
  });
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <SectionHeader title={title} subtitle={description} />

      {isMobile ? (
        <ImageSectionMobile
          imageSmallLeft={imageSmallLeft}
          imageLarge={imageLarge}
          imageSmallRight={imageSmallRight}
        />
      ) : (
        <ImageSectionDesktop
          imageSmallLeft={imageSmallLeft}
          imageLarge={imageLarge}
          imageSmallRight={imageSmallRight}
        />
      )}

      {interestedSection && (
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "700",
              margin: 0,
              padding: 0,
            }}
          >
            {interestedSection.title}
          </p>
          <p
            ref={interestedDescriptionRef}
            style={{ fontSize: "16px", fontWeight: "400" }}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: interestedSection.description }}
          />
        </div>
      )}
    </div>
  );
};

const ImageSectionMobile = ({
  imageSmallLeft,
  imageLarge,
  imageSmallRight,
}) => {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", gap: "28px" }}
    >
      {isValidImage(imageLarge) && (
        <Image
          src={imageLarge.src}
          style={{
            width: "100%",
            objectFit: "cover",
          }}
          alt={imageLarge.alt}
        />
      )}

      <div
        style={{
          width: "100%",
          // height: `${minHeight}px`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "18px",
        }}
      >
        {/* https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-10902&node-type=frame&t=QT4JPVm3iv8RyYEP-0 */}
        {isValidImage(imageSmallLeft) && (
          <div style={{ width: "50%", height: "fit-content" }}>
            <MobileImageAspectRatio>
              <Image
                src={imageSmallLeft.src}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
                alt={imageSmallLeft.alt}
              />
            </MobileImageAspectRatio>
          </div>
        )}

        {isValidImage(imageSmallRight) && (
          <div style={{ width: "50%", height: "fit-content" }}>
            <MobileImageAspectRatio>
              <Image
                src={imageSmallRight.src}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
                alt={imageSmallRight.alt}
              />
            </MobileImageAspectRatio>
          </div>
        )}
      </div>
    </div>
  );
};

const MobileImageAspectRatio = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        paddingBottom: "125%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};
MobileImageAspectRatio.propTypes = {
  children: PropTypes.node,
};

ImageSectionMobile.propTypes = {
  imageSmallLeft: imagePropTypes,
  imageLarge: imagePropTypes,
  imageSmallRight: imagePropTypes,
};

const ImageSectionDesktop = ({
  imageSmallLeft,
  imageLarge,
  imageSmallRight,
}) => {
  const [minHeight, setMinHeight] = useState(Infinity);

  const onHeight = imageHeight => {
    setMinHeight(currentMinHeight => Math.min(currentMinHeight, imageHeight));
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{
          width: "100%",
          height: `${minHeight}px`,
          overflow: "hidden",
        }}
      >
        {isValidImage(imageSmallLeft) && (
          <Image
            src={imageSmallLeft.src}
            style={{
              width: "25%",
              height: "100%",
              objectFit: "cover",
            }}
            alt={imageSmallLeft.alt}
            onHeight={onHeight}
          />
        )}
        {isValidImage(imageLarge) && (
          <Image
            src={imageLarge.src}
            style={{
              width: "50%",
              height: "100%",
              objectFit: "cover",
            }}
            alt={imageLarge.alt}
            onHeight={onHeight}
          />
        )}

        {isValidImage(imageSmallRight) && (
          <Image
            src={imageSmallRight.src}
            style={{
              width: "25%",
              height: "100%",
              objectFit: "cover",
            }}
            alt={imageSmallRight.alt}
            onHeight={onHeight}
          />
        )}
      </div>
    </div>
  );
};

ImageSectionDesktop.propTypes = {
  imageSmallLeft: imagePropTypes,
  imageLarge: imagePropTypes,
  imageSmallRight: imagePropTypes,
};

PreviewSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSmallLeft: imagePropTypes,
  imageLarge: imagePropTypes,
  imageSmallRight: imagePropTypes,
  interestedSection: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
