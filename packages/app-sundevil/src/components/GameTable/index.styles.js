import styled from "styled-components";

const GamesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const GetTicketsButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const ScheduleButton = styled.button`
  background-color: #ffc627; /* ASU Gold */
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
`;

const UpcomingGamesWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

export {
  GamesTable,
  TableHeader,
  TableCell,
  GetTicketsButton,
  Footer,
  ScheduleButton,
  UpcomingGamesWrapper,
};
