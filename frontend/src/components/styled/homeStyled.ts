import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 100vh;
  flex-wrap: wrap;
  background-image: url(${require("../../public/background.png")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.img`
  text-align: center;
  width: 120px;
  margin-top: 170px;
`;
export const Header = styled.div`
  text-align: center;
  font-family: Roboto Slab;
  width: 511px;
  font-size: 60px;
  color: #c3a7d8;
  margin-top: 6px;
`;
export const Description = styled.div`
  width: 600px;
  margin-top: 16px;
  font-family: Roboto;
  font-size: 21px;
  text-align: center;
  line-height: 1.4;
  margin-bottom: 15px;
`;
export const RightContainer = styled.div`
  flex-grow: 1;
`;
