import React from "react";
import styled from "styled-components";
import RowContainer from "../container/RowContainer.jsx";
import NewContainer from "../container/NewContainer.jsx";

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
const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const AddButton = styled.div`
  &:hover {
    color: white;
    background-color: #7d7c81;
    cursor: pointer;
  }
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #7d7c81;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #7d7c81;
  text-align: center;
  transition: all 0.2s;
`;

const Table = ({ birthdays, creating, startCreating }) => (
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
    {birthdays.map(birthday => (
      <RowContainer birthday={birthday} key={birthday.id} />
    ))}
    {creating && <NewContainer />}
    <BottomWrapper>
      {!creating && (
        <AddButton onClick={startCreating}>Add New Birthday</AddButton>
      )}
    </BottomWrapper>
  </React.Fragment>
);
export default Table;
