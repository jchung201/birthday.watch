import React from "react";
import styled from "styled-components";

const ContentRow = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
const ContentColumn = styled.input`
  width: 220px;
  height: 110px;
  margin-right: 25px;
  border-radius: 12px;
  background-color: white;
  display: flex;
`;
const ContentText = styled.div`
  color: #7d7c81;
  font-size: 20px;
  font-family: Roboto;
  margin: auto;
  text-align: center;
`;

const Table = ({ name, birthDate, days, time, note, edit }) => (
  <ContentRow>
    <ContentColumn>
      <ContentText>{name}</ContentText>
    </ContentColumn>
    <ContentColumn>
      <ContentText>{birthDate}</ContentText>
    </ContentColumn>
    <ContentColumn>
      <ContentText>{days}</ContentText>
    </ContentColumn>
    <ContentColumn>
      <ContentText>{time}</ContentText>
    </ContentColumn>
    <ContentColumn>
      <ContentText>{note}</ContentText>
    </ContentColumn>
    <ContentColumn>
      <ContentText>
        <div
          style={{ textDecoration: "underline", color: "blue" }}
          onClick={edit}
        >
          Save
        </div>
      </ContentText>
    </ContentColumn>
  </ContentRow>
);
export default Table;
