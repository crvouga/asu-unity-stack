import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const GroupTicketsFooter = ({ data, title, titleAs = "h2" }) => {
  return (
    <div
      style={{
        backgroundColor: "#E8E8E8",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="container">
        <Title as={titleAs}>{title}</Title>

        <div className="row w-100">
          {data?.map?.(date => {
            return (
              <div className="col-12 col-md-4" style={{ padding: "24px" }}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "24px",
                  }}
                >
                  {date.title}
                </div>
                <span
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: date.description }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

GroupTicketsFooter.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  titleAs: PropTypes.string,
  title: PropTypes.string,
};
