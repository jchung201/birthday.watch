import React from "react";
import {
  Wrapper,
  LeftContainer,
  Logo,
  Header,
  Description,
  RightContainer,
} from "./styled/homeStyled";
import { observer, inject } from "mobx-react";
import GoogleButton from "react-google-button";

const Home = ({ logIn }) => (
  <Wrapper>
    <LeftContainer>
      <Logo src="https://townbbpublic.s3.us-east-2.amazonaws.com/birthday_logo.png"></Logo>
      <Header>BIRTHDAY.WATCH</Header>
      <Description>
        INTEGRATE YOUR GOOGLE CALENDAR <br /> TO QUICKLY ADD/EDIT BIRTHDAY
        REMINDERS
      </Description>
      <GoogleButton onClick={logIn}>Sign In With Google</GoogleButton>
    </LeftContainer>
    <RightContainer></RightContainer>
  </Wrapper>
);
export default inject("store")(observer(Home));
