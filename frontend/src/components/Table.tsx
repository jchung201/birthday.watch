import React from "react";
import { observer, inject } from "mobx-react";

import {
  TableHeader,
  Title,
  TitleText,
  BottomWrapper,
  AddButton,
} from "./styled/tableStyled";
import Row from "./Row";

import { StoreInterface } from "../interfaces/store";

interface OwnProps {
  store?: StoreInterface;
}

const Table = ({
  store: {
    calendar: { creating, birthdays, startCreating },
  },
}: OwnProps) => (
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
    {birthdays.map((birthday) => (
      <Row birthday={birthday} key={birthday.id} />
    ))}
    {creating && <Row birthday={null} />}
    <BottomWrapper>
      {!creating && (
        <AddButton onClick={startCreating}>Add New Birthday</AddButton>
      )}
    </BottomWrapper>
  </React.Fragment>
);

export default inject("store")(observer(Table));
