import styled from "styled-components";

const ButtonWrapper = styled.a`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  color: #191919;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 400rem;
  font-weight: 700;
  font-size: 0.875rem;
  transition: 0.03s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  & + a {
    margin-left: 1rem;
  }
  &:hover {
    transform: scale(1.05);
  }
  &.button-light {
    background-color: #bfbfbf !important;
    color: #000000 !important;
  }
  &.button-gold {
    background-color: #ffc627 !important;
    color: #000000 !important;
  }
  &.button-dark {
    background-color: #191919 !important;
    color: #ffffff !important;
  }
  &.button-maroon {
    background-color: #8c1d40 !important;
    color: #ffffff !important;
  }
`;

export { ButtonWrapper };
