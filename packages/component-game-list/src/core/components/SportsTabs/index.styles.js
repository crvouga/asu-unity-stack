import styled from "styled-components";

const NavItem = styled.a`
  background-color: ${props =>
    props.active ? "#191919 !important" : "transparent"};
`;

export { NavItem };
