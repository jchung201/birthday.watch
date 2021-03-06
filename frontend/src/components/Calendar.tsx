import React, { Fragment } from "react";
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
import MobileTable from "./MobileTable";
import windowDimensions from "../utilities/windowDimensions";

import { StoreInterface } from "../interfaces/store";

interface OwnProps {
  store?: StoreInterface;
}

const Calendar = ({
  store: {
    auth: { logOut },
  },
}: OwnProps) => {
  const { width } = windowDimensions();
  return (
    <Wrapper>
      <Header>
        <Fragment>
          <HLogo
            src="https://townbbpublic.s3.us-east-2.amazonaws.com/birthday_logo.png"
            alt="logo"
          ></HLogo>
          <HTitle>Birthday Watch</HTitle>
          <LogOutButton onClick={logOut}>Log Out</LogOutButton>
        </Fragment>
      </Header>
      <Content>{width > 600 ? <Table /> : <MobileTable />}</Content>
    </Wrapper>
  );
};
export default inject("store")(observer(Calendar));
