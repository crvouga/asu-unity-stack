import React from "react";

import { SectionHeader } from "../SectionHeader";

export const SpecialEventsSection = ({ sectionHeader }) => {
  return (
    <div>
      <SectionHeader {...sectionHeader} />
    </div>
  );
};

SpecialEventsSection.propTypes = {
  sectionHeader: SectionHeader.propTypes,
};
