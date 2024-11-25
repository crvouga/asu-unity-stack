import React from "react";
import styled from "styled-components";

import { Button } from "../../../../../../components-core/src";
import { NavTreePropFooter } from "../../../../core/models/app-prop-types";

const Root = styled.div`
  display: flex;
  width: 100%;
  background-color: #191919;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  min-width: 100%;
`;

const Text = styled.p`
  margin: 0;
  padding: 0 0;
  font-size: 1.15rem;
  font-weight: bold;
  /* NOTE: These styles fix a bug found in the deployed site not seen inside the storybooks in this repo */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const ImageOnlyRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem 24px;
`;

const ButtonWithTextRoot = styled.div`
  height: 75px;
  width: 100%;
  padding: 0 24px;
  font-weight: bold;
  min-width: 100%;
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * @type {React.FC<{footer: import("../../../../core/models/types").NavTreePropFooter}>}
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=929-7691&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 */
export const DropdownItemFooter = ({ footer }) => {
  const footerType = footer.type ?? "button-with-text";
  switch (footerType) {
    case "render": {
      return footer.render?.();
    }
    case "image-only": {
      return (
        <Root
          as={typeof footer.href === "string" ? "a" : "div"}
          href={footer.href}
        >
          <ImageOnlyRoot>
            <img
              width={footer.imageWidth}
              height={footer.imageHeight ?? null}
              style={{
                maxWidth: "100%",
                objectFit: "contain",
                height: "auto",
              }}
              src={footer.imageSrc}
              alt={footer.imageAlt}
            />
          </ImageOnlyRoot>
        </Root>
      );
    }
    case "button-with-text":
    default: {
      return (
        <Root
          as={typeof footer.href === "string" ? "a" : "div"}
          href={footer.href}
        >
          <ButtonWithTextRoot>
            <Text>{footer.text}</Text>
            {footer.buttonText && (
              <Button
                color="gold"
                href={footer.buttonHref}
                label={footer.buttonText}
                size="small"
              />
            )}
          </ButtonWithTextRoot>
        </Root>
      );
    }
  }
};

DropdownItemFooter.propTypes = {
  footer: NavTreePropFooter,
};
