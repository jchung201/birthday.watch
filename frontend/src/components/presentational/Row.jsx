import React from "react";
import styled from "styled-components";
import dateFormat from "dateformat";

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

const Table = ({ date }) => (
  <ContentRow key={date.id}>
    <ContentColumn color="#c3a7d8">
      <ContentText>
        {date.summary.substring(0, date.summary.length - 12)}
      </ContentText>
    </ContentColumn>
    <ContentColumn color="#ffa7ba">
      <ContentText>{dateFormat(date.start.dateTime, "mmmm dS")}</ContentText>
    </ContentColumn>
    <ContentColumn color="#9dd6ee">
      <ContentText>
        {date.reminders.overrides && date.reminders.overrides[0].minutes}
      </ContentText>
    </ContentColumn>
    <ContentColumn color="#9ad6ca">
      <ContentText>
        {date.reminders.overrides && date.reminders.overrides[0].minutes}
      </ContentText>
    </ContentColumn>
    <ContentColumn color="#f89f9f">
      <ContentText>{date.location}</ContentText>
    </ContentColumn>
    <ContentColumn color="#e37dbc">
      <ContentText>
        <div style={{ textDecoration: "underline", color: "blue" }}>Modify</div>
      </ContentText>
    </ContentColumn>
  </ContentRow>
);
export default Table;
