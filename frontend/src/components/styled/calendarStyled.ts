import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #dff7ff;
  min-height: 100vh;
  padding-bottom: 5em;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  padding-top: 2em;
`;
export const HTitle = styled.div`
  margin-right: 1em;
  font-size: 8rem;
  font-family: Roboto Slab;
`;
export const HLogo = styled.img`
  width: 7em;
  height: 7em;
`;
export const Content = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
`;
export const LogOutButton = styled.div`
  &:hover {
    color: white;
    background-color: #7d7c81;
    cursor: pointer;
  }
  padding: 0.35em 1.2em;
  border: 0.1em solid #7d7c81;
  margin-left: 5em;
  margin-bottom: 1em;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 2.5rem;
  color: #7d7c81;
  text-align: center;
  transition: all 0.2s;
`;
