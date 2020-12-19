import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../utilities/URL";
import {
  Wrapper,
  LeftContainer,
  Logo,
  Header,
  Description,
  RightContainer,
} from "./styled/homeStyled";
import GoogleButton from "react-google-button";

const Home = () => {
  const logIn = async () => {
    try {
      const authUrl = await axios.get(`${API_URL}/rest/auth/url`);
      document.location.href = authUrl.data;
    } catch (error) {
      console.error(error);
      toast.error("Error gathering sign in link!");
    }
  };
  return (
    <Wrapper>
      <LeftContainer>
        <Logo src="https://townbbpublic.s3.us-east-2.amazonaws.com/birthday_logo.png"></Logo>
        <Header>Birthday Watch</Header>
        <Description>
          INTEGRATE YOUR GOOGLE CALENDAR <br /> TO QUICKLY ADD/EDIT BIRTHDAY
          REMINDERS
        </Description>
        <GoogleButton onClick={logIn}>Sign In With Google</GoogleButton>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Wrapper>
  );
};
export default Home;
