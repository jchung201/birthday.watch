import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  background-color: #edd6ff;
  min-height: 100vh;
`;

const Home = ({ logOut }) => (
  <Wrapper>
    <button type="button" onClick={logOut}>
      Log Out
    </button>
    Excel Spreadsheet
  </Wrapper>
);
export default Home;
