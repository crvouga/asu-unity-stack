// @ts-check
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { idGenerator, trackGAEvent } from "../../../../../../../shared";
import { useAppContext } from "../../../../core/context/app-context";
import { useIsMobile } from "../../../../core/hooks/isMobile";
import {
  ButtonPropTypes,
  NavTreeItemsConfig,
  NavTreePropFooter,
} from "../../../../core/models/app-prop-types";
import { Button } from "../../../Button";
import { DropdownItemFooter } from "./DropdownItemFooter";
import { DropdownWrapper } from "./index.styles";

/**
 * @typedef { import("../../../../core/models/types").Button } Button
 * @typedef {{
 *  dropdownName: string
 *  items: [object][]
 *  renderContent?: Function
 *  buttons: Button[]
 *  classes?: string,
 *  listId?: string
 *  style?: object
 *  mobile?: import("../../../../core/models/types").NavTreeItemsConfig
 *  footers?: import("../../../../core/models/types").NavTreePropFooter[]
 *  onClickedLink?: Function
 * }} DropdownItemProps
 */

const ButtonsRoot = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;

/**
 * @type {React.ForwardRefExoticComponent<DropdownItemProps>}
 */
const DropdownItem = forwardRef(
  (
    {
      dropdownName,
      items,
      renderContent,
      buttons,
      classes,
      listId,
      style,
      mobile,
      footers,
      onClickedLink,
    },
    ref
  ) => {
    const { breakpoint } = useAppContext();
    const isMobile = useIsMobile(breakpoint);
    const isMega = items?.length > 2;
    const dropdownRef = useRef(null);
    const [alignedRight, setAlignedRight] = useState(false);
    const MULTIPLE_SUBMENUS = items?.length > 1;

    const mobileHideFooter = Boolean(mobile?.hideFooter ?? false);
    const mobileShowFooter = !mobileHideFooter;
    const showFooter = isMobile ? mobileShowFooter : true;

    useEffect(() => {
      if (window && dropdownRef.current) {
        // @ts-ignore
        const elPosition = dropdownRef.current.getBoundingClientRect().left;
        const breakpointPosition = window.innerWidth * 0.55;
        setAlignedRight(elPosition > breakpointPosition);
      }
    }, []);

    const stopPropagation = e => {
      e?.stopPropagation?.();
    };

    const renderItem = (link, index) => {
      const key = `${link.text}-${link.href || index}`;
      if (link.type === "heading") {
        if (link.size === "md") {
          return (
            <h3 key={key} className="ul-heading-md">
              {link.text}
            </h3>
          );
        }

        return (
          <h3 key={key} className="ul-heading">
            {link.text}
          </h3>
        );
      }
      if (link.type === "button") {
        return (
          <li key={key} className="nav-button">
            <Button
              faClassName={link.faClassName}
              text={link.text}
              color={link.color || "dark"}
              href={link.href}
              onClick={stopPropagation}
              onFocus={() =>
                trackGAEvent({ text: link.text, component: dropdownName })
              }
            />
          </li>
        );
      }
      return (
        <li
          key={key}
          className={classNames(
            "nav-link",
            link?.variant === "muted" && "nav-link-variant-muted"
          )}
        >
          <a
            href={link.href}
            onClick={e => {
              onClickedLink?.({ e, link, href: link?.href });
              stopPropagation?.(e);
            }}
            onFocus={() =>
              trackGAEvent({ text: link.text, component: dropdownName })
            }
          >
            {link?.renderStartIcon?.()}
            {link.text}
          </a>
        </li>
      );
    };

    return (
      <DropdownWrapper
        // ref={dropdownRef}
        style={style}
        ref={ref}
        className={`${classes}${alignedRight ? " aligned-right" : ""}${
          isMega ? " mega" : ""
        }`}
        // @ts-ignore
        mobile={mobile}
        // @ts-ignore
        breakpoint={breakpoint}
      >
        {renderContent?.({ listId, onClickedLink })}
        {items?.length > 0 && (
          <div
            id={MULTIPLE_SUBMENUS ? listId : undefined}
            className="dropdown-container"
          >
            {items?.map((item, index0) => {
              const genKey = idGenerator(`dropdown-item-${index0}-`);
              const key = genKey.next().value;
              return (
                <ul
                  id={MULTIPLE_SUBMENUS ? `${listId}-${key}` : listId}
                  key={key}
                >
                  {item?.map?.((link, index) => renderItem(link, index))}
                </ul>
              );
            })}
          </div>
        )}
        {Array.isArray(buttons) && buttons.length > 0 && (
          <div className="dropdown-button-container">
            <ButtonsRoot>
              {buttons.map((button, index) => (
                <Button
                  renderStartIcon={button.renderStartIcon}
                  key={`${button.text}-${button.href || index}`}
                  color={button.color}
                  text={button.text}
                  href={button.href}
                  onClick={stopPropagation}
                  style={{ marginLeft: 0 }}
                />
              ))}
            </ButtonsRoot>
          </div>
        )}
        {showFooter &&
          footers &&
          footers.map((footer, index) => (
            <DropdownItemFooter
              // eslint-disable-next-line react/no-array-index-key
              key={`${footer.text}${index}`}
              footer={footer}
            />
          ))}
      </DropdownWrapper>
    );
  }
);

DropdownItem.propTypes = {
  // @ts-ignore
  dropdownName: PropTypes.string,
  // @ts-ignore
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  // @ts-ignore
  buttons: PropTypes.arrayOf(PropTypes.shape(ButtonPropTypes)),
  renderContent: PropTypes.func,
  classes: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  listId: PropTypes.string,
  // @ts-ignore
  mobile: NavTreeItemsConfig,
  // @ts-ignore
  footers: PropTypes.arrayOf(NavTreePropFooter),
  onClickedLink: PropTypes.func,
};

export { DropdownItem };
