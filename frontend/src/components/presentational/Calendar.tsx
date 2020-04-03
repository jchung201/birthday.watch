import React from "react";
import styled from "styled-components";
import Table from "./Table";

const Wrapper = styled.section`
  background-color: #dff7ff;
  min-height: 100vh;
  padding-bottom: 30px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const HTitle = styled.div`
  margin-top: 70px;
  margin-right: 30px;
  font-size: 60px;
  font-family: Roboto Slab;
`;
const HLogo = styled.img`
  margin-top: 40px;
  width: 100px;
`;
const Content = styled.section`
  padding-left: 196px;
  padding-right: 196px;
  padding-top: 50px;
`;
const LogOutButton = styled.div`
  &:hover {
    color: white;
    background-color: #7d7c81;
    cursor: pointer;
  }
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #7d7c81;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #7d7c81;
  text-align: center;
  transition: all 0.2s;
`;

const Calendar = ({ logOut, birthdays, creating, startCreating }) => (
  <Wrapper>
    <Header>
      <HTitle>BIRTHDAY.WATCH</HTitle>
      <HLogo src={require("../../public/logo.png")} alt="logo"></HLogo>
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

export default Calendar;
