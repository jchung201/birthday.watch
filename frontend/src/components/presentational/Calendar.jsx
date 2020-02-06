import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #edd6ff;
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

const Home = ({ logOut }) => (
  <Wrapper>
    <Header>
      <HTitle>BIRTHDAY.WATCH</HTitle>
      <HLogo src="../../../public/logo.png" alt="logo"></HLogo>
      <button
        type="button"
        onClick={logOut}
        style={{ position: "absolute", top: "100px", right: "250px" }}
      >
        Log Out
      </button>
    </Header>
  </Wrapper>
);
export default Home;
