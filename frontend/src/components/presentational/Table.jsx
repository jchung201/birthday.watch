import React from "react";
import styled from "styled-components";

const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
const HeaderTitle = styled.div`
  width: 220px;
  height: 120px;
  border-radius: 12px;
  box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: ${props => props.color};
  margin-right: 31px;
`;

const Table = ({ dates }) => (
  <div>
    <TableHeader>
      <HeaderTitle color={"orange"}>Name</HeaderTitle>
      <HeaderTitle>Birth Date</HeaderTitle>
      <HeaderTitle>Reminder (Days Ahead)</HeaderTitle>
      <HeaderTitle>Reminder (Time)</HeaderTitle>
      <HeaderTitle>Note</HeaderTitle>
      <HeaderTitle>Modify</HeaderTitle>
    </TableHeader>
    {dates.map(date => (
      <div key={date.id}>{date.summary}</div>
    ))}
  </div>
);
export default Table;
