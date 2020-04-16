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
  state = { creating: false };
  componentDidMount() {
    try {
      this.props.store.calendar.fetchBirthdays();
    } catch (error) {
      console.error(error);
      this.props.store.auth.logOut;
    }
  }
  startCreating = () => {
    console.log("ok");
  };

  render() {
    const {
      calendar: { birthdays, startCreating, creating },
      auth: { logOut, loggedIn },
    } = this.props.store;
    if (!loggedIn) return <div>Loading...</div>;
    return (
      <Wrapper>
        <Header>
          <HTitle>BIRTHDAY.WATCH</HTitle>
          <HLogo
            src="https://townbbpublic.s3.us-east-2.amazonaws.com/birthday_logo.png"
            alt="logo"
          ></HLogo>
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
