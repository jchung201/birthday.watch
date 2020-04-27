import React from "react";
import { observer, inject } from "mobx-react";
import {
  Wrapper,
  Header,
  HTitle,
  HLogo,
  Content,
  LogOutButton,
} from "./styled/calendarStyled";
import Table from "./Table";

import { StoreInterface } from "../interfaces/store";

interface OwnProps {
  store?: StoreInterface;
}

const Calendar = ({
  store: {
    auth: { logOut },
  },
}: OwnProps) => {
  return (
    <Wrapper>
      <Header>
        <HTitle>BIRTHDAY.WATCH</HTitle>
        <HLogo
          src="https://townbbpublic.s3.us-east-2.amazonaws.com/birthday_logo.png"
          alt="logo"
        ></HLogo>
        <LogOutButton onClick={logOut}>Log Out</LogOutButton>
      </Header>
      <Content>
        <Table />
      </Content>
    </Wrapper>
  );
};
export default inject("store")(observer(Calendar));
