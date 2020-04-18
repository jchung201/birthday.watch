import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #dff7ff;
  min-height: 100vh;
  padding-bottom: 30px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const HTitle = styled.div`
  margin-top: 70px;
  margin-right: 30px;
  font-size: 60px;
  font-family: Roboto Slab;
`;
export const HLogo = styled.img`
  margin-top: 40px;
  width: 100px;
`;
export const Content = styled.section`
  padding-left: 196px;
  padding-right: 196px;
  padding-top: 50px;
`;
export const LogOutButton = styled.div`
  position: relative;
  top: 75px;
  left: 440px;
  &:hover {
    color: white;
    background-color: #7d7c81;
    cursor: pointer;
  }
  padding: 0.35em 1.2em;
  border: 0.1em solid #7d7c81;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 150px;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #7d7c81;
  text-align: center;
  transition: all 0.2s;
`;
