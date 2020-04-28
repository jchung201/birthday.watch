import styled from "styled-components";

export const Wrapper = styled.section`
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
  font-size: 8rem;
  font-family: Roboto Slab;
  @media (max-width: 1028px) {
    font-size: 5rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
export const HLogo = styled.img`
  width: 7em;
  height: 7em;
  @media (max-width: 1028px) {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
  margin-left: 2em;
  margin-right: 4em;
`;
export const LogOutButton = styled.div`
  &:hover {
    color: white;
    background-color: #7d7c81;
    cursor: pointer;
  }
  padding: 0.35em 1.2em;
  border: 0.1em solid #7d7c81;
  margin-bottom: 1em;
  border-radius: 0.3em;
  font-size: 2.5rem;
  color: #7d7c81;
  @media (max-width: 1028px) {
    font-size: 1.6rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const Content = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
`;
