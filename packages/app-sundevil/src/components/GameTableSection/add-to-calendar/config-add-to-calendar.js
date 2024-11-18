// @ts-check
// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=6146-13841&node-type=frame&t=hwMmzQHF1CbjJnXH-0
import PropTypes from "prop-types";
import { useEffect } from "react";

import { deepMergeLeft } from "../../../utils/deep-merge-left";
import { ensureObject } from "../../../utils/ensure-object";
import { ensureSerializable } from "../../../utils/ensure-serializable";
import { useGameDataSource } from "../../Game/GameDataSourceContext";
import { AddToCalendarCallbackRegistry } from "./add-to-calendar-callback-registry";

/**
 * @typedef {{
 * enabled: boolean;
 * label: string;
 * onClick: (payload: unknown) => void;
 * color?: string;
 * fontWeight?: string;
 * callbackRegistry: import("./add-to-calendar-callback-registry").AddToCalendarCallbackRegistry;
 * }} ConfigAddToCalendar
 */

/**
 * @type {ConfigAddToCalendar}
 */
export const defaultConfigAddToCalendar = {
  enabled: false,
  label: "Add to calendar",
  onClick: () => {},
  color: "maroon",
  fontWeight: "bold",
  callbackRegistry: new AddToCalendarCallbackRegistry(),
};

export const configAddToCalendarPropTypes = PropTypes.shape({
  label: PropTypes.string,
  onClick: PropTypes.func,
});

/**
 * @param {{
 * configAddToCalender: ConfigAddToCalendar;
 * gameDataSourceFindManyInput: import("../../Game/game-data-source/game-data-source").FindManyInput;
 * gameTableForm: import("../GameTableForm/use-game-table-form").GameTableForm;
 * }} input
 */
export const useAddToCalendarCallbackRegistry = ({
  configAddToCalender,
  gameDataSourceFindManyInput,
  gameTableForm,
}) => {
  const gameDataSource = useGameDataSource();
  useEffect(() => {
    if (typeof configAddToCalender.callbackRegistry?.register !== "function") {
      return;
    }
    configAddToCalender.callbackRegistry?.register?.(async () => {
      const found = await gameDataSource.findMany({
        ...gameDataSourceFindManyInput,
        limit: Infinity,
        offset: 0,
      });
      const payload = ensureSerializable({
        found,
        games: found.rows,
        gameDataSource,
        gameDataSourceFindManyInput,
        gameTableForm,
      });
      return payload;
    });
  }, [
    configAddToCalender,
    gameDataSource,
    gameDataSourceFindManyInput,
    gameTableForm,
  ]);
};

/**
 *
 * TODO Deprecated use the callback registry instead
 *
 * @param {{
 * sectionHeaderProps: import("../../SectionHeader").SectionHeaderProps;
 * configAddToCalender: ConfigAddToCalendar;
 * isMobile: boolean;
 * gameDataSourceFindManyInput: import("../../Game/game-data-source/game-data-source").FindManyInput;
 * gameDataSource: import("../../Game/game-data-source/game-data-source").IGameDataSource;
 * gameTableForm: import("../GameTableForm/use-game-table-form").GameTableForm;
 * }} input
 * @returns {import("../../SectionHeader").SectionHeaderProps}
 */
export const addAddToCalendarToSectionHeaderProps = ({
  sectionHeaderProps,
  configAddToCalender,
  isMobile,
  gameDataSourceFindManyInput,
  gameDataSource,
  gameTableForm,
}) => {
  /**
   * @type {ConfigAddToCalendar}
   */
  const configAddToCalenderFinal = deepMergeLeft(
    ensureObject(configAddToCalender),
    defaultConfigAddToCalendar
  );

  if (!configAddToCalenderFinal.enabled || !configAddToCalenderFinal.label) {
    return sectionHeaderProps;
  }

  const onClick = async () => {
    const found = await gameDataSource.findMany({
      ...gameDataSourceFindManyInput,
      limit: Infinity,
      offset: 0,
    });
    const payload = ensureSerializable({
      found,
      games: found.rows,
      gameDataSource,
      gameDataSourceFindManyInput,
      gameTableForm,
    });
    configAddToCalenderFinal.onClick(payload);
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
        ...configAddToCalenderFinal,
        label: configAddToCalenderFinal.label,
        onClick,
      },
    ],
  };
};
