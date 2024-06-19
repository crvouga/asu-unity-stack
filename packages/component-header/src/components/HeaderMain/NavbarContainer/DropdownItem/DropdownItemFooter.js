import React from "react";
import styled from "styled-components";

import { Button } from "../../../../../../components-core/src";
import { NavTreePropFooter } from "../../../../core/models/app-prop-types";

const Root = styled.div`
  display: flex;
  width: 100%;
  background-color: #191919;
  height: 75px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  min-width: 100%;
  gap: 2rem;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.15rem;
  font-weight: bold;
  /* NOTE: These styles fix a bug found in the deployed site not seen inside the storybooks in this repo */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

/**
 * @type {React.FC<{footer: import("../../../../core/models/types").NavTreePropFooter}>}
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=929-7691&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 */
export const DropdownItemFooter = ({ footer }) => {
  return (
    <Root>
      <Text>{footer.text}</Text>
      {footer.buttonText && (
        <Button
          color="gold"
          href={footer.buttonHref}
          label={footer.buttonText}
          size="small"
        />
      )}
    </Root>
  );
};

DropdownItemFooter.propTypes = {
  footer: NavTreePropFooter,
};
