// @ts-check
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { CollapseIcon } from "../CollapseIcon/CollapseIcon";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: -1;
  gap: 1rem;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  color: ${({
    // @ts-ignore
    darkMode,
  }) => (darkMode ? "#fff !important" : "#191919 !important")};
`;

const CollapseRoot = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const FilterFormTopBarLayout = ({
  title,
  className,
  renderForm,
  darkMode,
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(prev => !prev);

  const hasTitle = typeof title === "string" && title.length > 0;

  const formComponent = renderForm();

  if (isMobile && formComponent && hasTitle) {
    return (
      <Root className={className}>
        <CollapseRoot onClick={toggleOpen}>
          {hasTitle && (
            <Title
              // @ts-ignore
              darkMode={darkMode}
              key={darkMode}
            >
              {title}
            </Title>
          )}
          <div key={String(open)}>
            <CollapseIcon
              style={{
                color: darkMode ? "#fff !important" : "#191919 !important",
              }}
              open={open}
            />
          </div>
        </CollapseRoot>
        {open ? (
          formComponent
        ) : (
          <div style={{ width: "100%", height: "20px" }} />
        )}
      </Root>
    );
  }

  return (
    <Root className={className}>
      {hasTitle && (
        <Title
          // @ts-ignore
          darkMode={darkMode}
        >
          {title}
        </Title>
      )}
      {formComponent}
    </Root>
  );
};

FilterFormTopBarLayout.propTypes = {
  title: PropTypes.string,
  darkMode: PropTypes.bool,
  renderForm: PropTypes.func.isRequired,
  className: PropTypes.string,
};
