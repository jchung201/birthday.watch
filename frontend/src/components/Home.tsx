import React, { Component } from "react";
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
import LogoImage from "../public/logo.png";

const Home = ({ logIn }) => (
  <Wrapper>
    <LeftContainer>
      <Logo src={LogoImage}></Logo>
      <Header>BIRTHDAY.WATCH</Header>
      <Description>
        INTEGRATE YOUR GOOGLE CALENDAR <br /> TO QUICKLY ADD/EDIT BIRTHDAY
        REMINDERS
      </Description>
      <GoogleButton onClick={logIn}>Sign In With Google</GoogleButton>
    </LeftContainer>
    <RightContainer>Why</RightContainer>
  </Wrapper>
);
export default inject("store")(observer(Home));
