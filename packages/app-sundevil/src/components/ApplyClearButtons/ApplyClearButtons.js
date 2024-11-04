import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src";
import { Icon } from "../Icon_";

const Root = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 16px;
`;

const ICON_SIZE = {
  fontSize: "14px",
};

const BUTTON_STYLE = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontSize: "14px",
  padding: "10px 16px",
};

/**
 * @type {React.FC<Props>}
 */
export const ApplyClearButtons = ({ canApply, onApply, canClear, onClear }) => {
  return (
    <Root>
      <Button
        label="Apply"
        onClick={onApply}
        color="dark"
        renderIcon={() => <Icon icon="fa fas fa-check" style={ICON_SIZE} />}
        size="medium"
        style={BUTTON_STYLE}
        disabled={!canApply}
      />
      <Button
        label="Clear"
        onClick={onClear}
        color="transparent"
        renderIcon={() => <Icon icon="fa fas fa-x" style={ICON_SIZE} />}
        size="medium"
        style={BUTTON_STYLE}
        disabled={!canClear}
      />
    </Root>
  );
};

/**
 * @typedef {{
 * onApply: () => void;
 * canApply: boolean;
 * onClear: () => void;
 * canClear: boolean;
 * }} Props
 */

ApplyClearButtons.propTypes = {
  canApply: PropTypes.bool,
  onApply: PropTypes.func,
  canClear: PropTypes.bool,
  onClear: PropTypes.func,
};
