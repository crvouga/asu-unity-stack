import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

const SportsList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 96px;
  justify-content: space-between;
  width: 100%;
`;

const SportItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  &.active {
    background-color: #000;
    color: #fff;

    svg,
    span {
      color: inherit;
      display: inline-block;
      transition: color 0.3s;
      width: 20px;
      height: 20px;
    }
  }

  svg,
  span {
    color: inherit;
    display: inline-block;
    transition: color 0.3s;
    width: 20px;
    height: 20px;
  }
  //styleName: Label S;
  font-family: Arial, serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
`;

const MoreDropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

const MoreMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  display: none;
  flex-direction: column;

  ${MoreDropdown}:hover & {
    display: flex;
  }
`;

const MoreMenuItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const PresentedBy = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export {
  NavContainer,
  SportsList,
  SportItem,
  MoreDropdown,
  MoreMenu,
  MoreMenuItem,
  PresentedBy,
};
