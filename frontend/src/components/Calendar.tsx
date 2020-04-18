import React, { Component } from "react";
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

class Calendar extends Component<OwnProps> {
  render() {
    const {
      auth: { logOut },
    } = this.props.store;
    return (
      <Wrapper>
        <Header>
          <HTitle>BIRTHDAY.WATCH</HTitle>
          <HLogo
            src="https://townbbpublic.s3.us-east-2.amazonaws.com/birthday_logo.png"
            alt="logo"
          ></HLogo>
          <div style={{ position: "absolute" }}>
            <LogOutButton onClick={logOut}>Log Out</LogOutButton>
          </div>
        </Header>
        <Content>
          <Table />
        </Content>
      </Wrapper>
    );
  }
}
export default inject("store")(observer(Calendar));
