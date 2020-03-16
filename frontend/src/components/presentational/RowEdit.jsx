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
  background-color: #e37dbc;
  display: flex;
`;
const ContentInput = styled.input`
  color: white;
  font-family: Roboto;
  font-size: 20px;
  width: 100%;
  margin: auto;
  border: none !important;
  background: transparent;
  padding: 0 !important;
  text-align: center;
`;
const ContentText = styled.div`
  color: #7d7c81;
  font-size: 20px;
  font-family: Roboto;
  margin: auto;
  text-align: center;
`;

const RowEdit = ({
  name,
  birthDate,
  days,
  time,
  note,
  save,
  onChange,
  deleteBirthday
}) => (
  <ContentRow>
    <ContentColumn>
      <ContentInput value={name} name="name" onChange={onChange} />
    </ContentColumn>
    <ContentColumn>
      <ContentInput value={birthDate} name="birthDate" onChange={onChange} />
    </ContentColumn>
    <ContentColumn>
      <ContentInput
        value={days}
        type="number"
        name="days"
        onChange={onChange}
      />
    </ContentColumn>
    <ContentColumn>
      <ContentInput value={time} name="time" onChange={onChange} />
    </ContentColumn>
    <ContentColumn>
      <ContentInput value={note} name="note" onChange={onChange} />
    </ContentColumn>
    <ContentColumn>
      <ContentText>
        <div
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer"
          }}
          onClick={save}
        >
          Save
        </div>
        <div
          style={{
            textDecoration: "underline",
            color: "red",
            cursor: "pointer"
          }}
          onClick={deleteBirthday}
        >
          Delete
        </div>
      </ContentText>
    </ContentColumn>
  </ContentRow>
);
export default RowEdit;
