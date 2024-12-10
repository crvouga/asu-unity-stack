/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React, { useEffect, useRef, useState } from "react";

import { trackGAEvent } from "../../../../../../track-ga/track-ga-event";
import { isNonEmptyArray } from "../../../../../../utils/is-non-empty-array";
import { useStore } from "../../../../../../utils/store";
import { LinkBase } from "../../../../../Link/LinkBase";
import { CELL_TEAM_LOGO_WIDTH } from "../CellTeamLogo";
import { STYLES_TRUNCATE } from "../shared";
import {
  doesAnyRowHaveTeamLogo,
  doesRowHaveTeamLogo,
  gameTableRowStore,
} from "../store";

const MAX_LINES = 4;
const LINE_HEIGHT = 20;
const BASE_WIDTH = 144;

/**
 * @type {React.FC<import("../shared").CellProps>}
 */
export const SupplementalLinks = props => {
  const { game } = props;

  const store = useStore(gameTableRowStore);

  const cellWidth =
    doesRowHaveTeamLogo(store, game?.id ?? "") || !doesAnyRowHaveTeamLogo(store)
      ? BASE_WIDTH
      : BASE_WIDTH + CELL_TEAM_LOGO_WIDTH;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  /** @type {React.MutableRefObject<(HTMLAnchorElement | null)[]>} */
  const linkRefs = useRef([]);

  const supplementalLinks = [];
  let runningLineCount = 0;

  for (let i = 0; i < (game?.supplementalLinks?.length ?? 0); i += 1) {
    const link = game?.supplementalLinks?.[i];
    if (!link) {
      continue;
    }
    const linkRef = linkRefs.current[i];
    const linkHeight = linkRef?.getBoundingClientRect()?.height ?? 0;
    const linkLineCount = Math.max(1, Math.ceil(linkHeight / LINE_HEIGHT));
    const nextRunningLineCount = runningLineCount + linkLineCount;
    if (nextRunningLineCount > MAX_LINES) {
      continue;
    }
    runningLineCount = nextRunningLineCount;
    supplementalLinks.push(link);
  }

  return (
    isNonEmptyArray(supplementalLinks) && (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "6px",
          minWidth: "0",
          flexShrink: 1,
          width: `${cellWidth}px`,
          padding: "12px 6px 12px 0px",
          maxHeight: "100%",
          ...STYLES_TRUNCATE,
        }}
      >
        {supplementalLinks?.map((link, index) => (
          <LinkBase
            {...link}
            key={`${"id" in link ? link.id : ""}${link.label}${link.href}`}
            href={link.href}
            className={link.className}
            ref={el => {
              linkRefs.current[index] = el;
            }}
            style={{
              width: "100%",
              fontSize: "14px",
              fontWeight: "400",
              whiteSpace: "normal",
              wordWrap: "break-word",
              lineHeight: `${LINE_HEIGHT}px`,
              opacity: mounted ? 1 : 0,
              ...link.style,
            }}
            dangerouslySetInnerHTML={{
              __html: link.label,
            }}
            onClick={() => {
              trackGAEvent({
                event: "link",
                action: "click",
                name: "onclick",
                type: "internal link",
                region: "main content",
                section: props.sectionName,
                text: link.label,
                component: "text",
              });
            }}
          />
        ))}
      </div>
    )
  );
};
