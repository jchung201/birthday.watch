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
import LogoImage from "../public/logo.png";

import { StoreInterface } from "../interfaces/store";

interface OwnProps {
  store?: StoreInterface;
}

class Calendar extends Component<OwnProps> {
  state = { creating: false };
  componentDidMount() {
    this.props.store.calendar.fetchBirthdays();
  }
  startCreating = () => {
    console.log("ok");
  };

  render() {
    const {
      calendar: { birthdays, startCreating, creating },
      auth: { logOut },
    } = this.props.store;
    if (birthdays.length < 1) return <div>Loading...</div>;
    return (
      <Wrapper>
        <Header>
          <HTitle>BIRTHDAY.WATCH</HTitle>
          <HLogo src={LogoImage} alt="logo"></HLogo>
          <LogOutButton
            onClick={logOut}
            style={{ position: "absolute", top: "100px", right: "250px" }}
          >
            Log Out
          </LogOutButton>
        </Header>
        <Content>
          <Table
            birthdays={birthdays}
            startCreating={startCreating}
            creating={creating}
          />
        </Content>
      </Wrapper>
    );
  }
}
export default inject("store")(observer(Calendar));
