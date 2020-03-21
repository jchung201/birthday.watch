import React from "react";
import styled from "styled-components";
import Table from "./Table.jsx";
import LogoImg from "../../../public/logo.png";

const Wrapper = styled.section`
  background-color: #dff7ff;
  min-height: 100vh;
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

const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const AddButton = styled.div`
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
      <HLogo src={LogoImg} alt="logo"></HLogo>
      <AddButton
        type="button"
        onClick={logOut}
        style={{ position: "absolute", top: "100px", right: "250px" }}
      >
        Log Out
      </AddButton>
    </Header>
    <Content>
      <Table birthdays={birthdays} />
      <BottomWrapper>
        {!creating && (
          <AddButton onClick={startCreating}>Add New Birthday</AddButton>
        )}
      </BottomWrapper>
    </Content>
  </Wrapper>
);
export default Calendar;
