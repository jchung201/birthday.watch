import React from "react";
import styled from "styled-components";
import RowContainer from "../container/RowContainer.jsx";

const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.div`
  width: 220px;
  height: 110px;
  margin-right: 25px;
  border-radius: 12px;
  box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: ${props => props.color};
  display: flex;
`;
const TitleText = styled.div`
  color: white;
  font-size: 28px;
  font-family: Roboto Slab;
  margin: auto;
  text-align: center;
`;

const Table = ({ dates }) => (
  <React.Fragment>
    <TableHeader>
      <Title color="#c3a7d8">
        <TitleText>Name</TitleText>
      </Title>
      <Title color="#ffa7ba">
        <TitleText>Birth Date</TitleText>
      </Title>
      <Title color="#9dd6ee">
        <TitleText>
          Reminder <br />
          (Days Ahead)
        </TitleText>
      </Title>
      <Title color="#9ad6ca">
        <TitleText>Reminder (Time)</TitleText>
      </Title>
      <Title color="#f89f9f">
        <TitleText>Note</TitleText>
      </Title>
      <Title color="#e37dbc">
        <TitleText>Modify</TitleText>
      </Title>
    </TableHeader>
    {dates.map(date => (
      <RowContainer date={date} key={date.id} />
    ))}
  </React.Fragment>
);
export default Table;
