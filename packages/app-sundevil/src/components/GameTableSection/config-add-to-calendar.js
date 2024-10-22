// @ts-check
// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=6146-13841&node-type=frame&t=hwMmzQHF1CbjJnXH-0
import PropTypes from "prop-types";

import { deepMergeLeft } from "../../utils/deep-merge-left";
import { ensureObject } from "../../utils/ensure-object";

/**
 * @typedef {{
 * enabled: boolean;
 * label: string;
 * onClick: (payload: unknown) => void;
 * }} ConfigAddToCalendar
 */

/**
 * @type {ConfigAddToCalendar}
 */
export const defaultConfigAddToCalendar = {
  enabled: false,
  label: "Add to calendar",
  onClick: () => {},
};

export const configAddToCalendarPropTypes = PropTypes.shape({
  label: PropTypes.string,
  onClick: PropTypes.func,
});

/**
 * @param {{
 * sectionHeaderProps: import("../SectionHeader").SectionHeaderProps;
 * configAddToCalender: ConfigAddToCalendar;
 * isMobile: boolean;
 * gameDataSourceFindManyInput: import("../Game/game-data-source/game-data-source").FindManyInput;
 * gameDataSource: import("../Game/game-data-source/game-data-source").IGameDataSource;
 * }} input
 * @returns {import("../SectionHeader").SectionHeaderProps}
 */
export const addAddToCalendarToSectionHeaderProps = ({
  sectionHeaderProps,
  configAddToCalender,
  isMobile,
  gameDataSourceFindManyInput,
  gameDataSource,
}) => {
  /**
   * @type {import("./config-add-to-calendar").ConfigAddToCalendar}
   */
  const configAddToCalenderFinal = deepMergeLeft(
    ensureObject(configAddToCalender),
    defaultConfigAddToCalendar
  );

  if (!configAddToCalenderFinal.enabled) {
    return sectionHeaderProps;
  }

  const onClick = async () => {
    const found = await gameDataSource.findMany({
      ...gameDataSourceFindManyInput,
      limit: Infinity,
      offset: 0,
    });
    configAddToCalenderFinal.onClick({
      found,
      games: found.rows,
      gameDataSource,
      gameDataSourceFindManyInput,
    });
  };

  if (isMobile) {
    return {
      ...sectionHeaderProps,
      subtitleButtons: [
        ...(sectionHeaderProps.subtitleButtons || []),
        {
          label: configAddToCalenderFinal.label,
          onClick,
          size: "xsmall",
          color: "gray",
        },
      ],
    };
  }

  return {
    ...sectionHeaderProps,
    subtitleLinks: [
      ...(sectionHeaderProps.subtitleLinks || []),
      {
        label: configAddToCalenderFinal.label,
        onClick,
      },
    ],
  };
};
