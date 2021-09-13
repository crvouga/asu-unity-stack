// @ts-check
import React from "react";

import { OverlapContentImage } from "../../../../core/components";
import { progDetailSectionIds } from "../../../../core/models";

/**
 *
 * @param {import("src/core/models/program-detail-types").GlobalOpportunityProps} props
 * @returns {JSX.Element}
 */
const CareerOutlook = ({ contents, image }) => (
  <section
    id={progDetailSectionIds.careerOutlook.targetIdName}
    data-testid="career-outlook"
  >
    <OverlapContentImage
      headingTag="H2"
      title={progDetailSectionIds.careerOutlook.text}
      contents={contents}
      image={image}
    />
  </section>
);

CareerOutlook.propTypes = OverlapContentImage.propTypes;

export { CareerOutlook };
