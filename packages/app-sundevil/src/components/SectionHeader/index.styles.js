import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const Heading = styled.h2`
  font-family: Arial, serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 48px;
  margin-top: 12px;
  width: 60%;
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TabItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #000;
  background-color: ${props => (props.active ? "#000" : "#fff")};
  color: ${props => (props.active ? "#fff" : "#000")};
  border: 1px solid #ddd;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  & + & {
    margin-left: -1px; /* overlap the borders */
  }
`;

const PresentedByContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 40px;
`;

export {
  Container,
  Heading,
  Description,
  TabsContainer,
  TabItem,
  PresentedByContainer,
  Logo,
};
