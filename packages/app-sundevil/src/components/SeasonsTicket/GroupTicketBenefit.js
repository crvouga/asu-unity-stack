import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { Icon } from "../Icon_";

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  width: fit-content;
  text-align: center;
  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    text-align: left;
    font-size: 24px;
  }
`;

// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9137&t=00rS5Q0AeldAyM1b-0
export const GroupTicketBenefit = ({ ticketHolderBenefits, title }) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <Title>{title}</Title>
      <div className="row pt-6">
        {ticketHolderBenefits.map(benefit => (
          <Card
            key={`${benefit.title}${benefit.description}`}
            benefit={benefit}
            mobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};

const benefitPropTypes = PropTypes.shape({
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
});

// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9137&t=00rS5Q0AeldAyM1b-0
const Card = ({ benefit, mobile }) => {
  if (mobile) {
    return (
      <div className="col-12 p-2">
        <div className="row">
          <div
            className="col-2 d-flex flex-column align-items-center"
            style={{ paddingTop: "4px", fontSize: "20px", flexShrink: 0 }}
          >
            <Icon icon={benefit.icon} />
          </div>
          <div className="col-10 d-flex flex-column align-items-start text-left gap-1">
            <h4 className="text-left m-0">{benefit.title}</h4>
            <p
              className="text-muted-foreground m-0"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: benefit.description }}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col-12 col-md-3 p-2">
      <div className="d-flex flex-column align-items-center text-center">
        <div style={{ fontSize: "24px" }}>
          <Icon icon={benefit.icon} />
        </div>
        <h4 className="text-center">{benefit.title}</h4>
        <p
          className="text-muted-foreground"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: benefit.description }}
        />
      </div>
    </div>
  );
};
Card.propTypes = {
  benefit: benefitPropTypes,
  mobile: PropTypes.bool,
};

GroupTicketBenefit.propTypes = {
  ticketHolderBenefits: PropTypes.arrayOf(benefitPropTypes),
  title: PropTypes.string,
};
