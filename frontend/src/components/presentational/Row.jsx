import React from "react";
import styled from "styled-components";

const ContentRow = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
const ContentColumn = styled.div`
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
    <ContentColumn color="#c3a7d8">
      <ContentText>{name}</ContentText>
    </ContentColumn>
    <ContentColumn color="#ffa7ba">
      <ContentText>{birthDate}</ContentText>
    </ContentColumn>
    <ContentColumn color="#9dd6ee">
      <ContentText>{days}</ContentText>
    </ContentColumn>
    <ContentColumn color="#9ad6ca">
      <ContentText>{time}</ContentText>
    </ContentColumn>
    <ContentColumn color="#f89f9f">
      <ContentText>{note}</ContentText>
    </ContentColumn>
    <ContentColumn color="#e37dbc">
      <ContentText>
        <div
          style={{ textDecoration: "underline", color: "blue" }}
          onClick={edit}
        >
          Modify
        </div>
      </ContentText>
    </ContentColumn>
  </ContentRow>
);
export default Table;
