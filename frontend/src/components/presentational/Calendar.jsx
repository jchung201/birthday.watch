import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
`;

const Home = () => <Wrapper>Excel Spreadsheet</Wrapper>;
export default Home;
