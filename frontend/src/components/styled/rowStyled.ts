import styled from "styled-components";

export const ContentRow = styled.div`
  display: flex;
  margin-top: 2em;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentColumn = styled.div`
  width: 15em;
  height: 8em;
  margin-right: 2.5em;
  border-radius: 1.2em;
  background-color: ${(props) => props.color};
  display: flex;
  @media (max-width: 1360px) {
    height: 7em;
    margin-right: 1.5em;
  }
  @media (max-width: 1000px) {
    height: 6em;
    margin-right: 1.5em;
  }
  @media (max-width: 768px) {
    height: 5em;
    margin-right: 1em;
  }
`;
export const ContentText = styled.div`
  color: #7d7c81;
  font-size: 2rem;
  font-family: Roboto;
  margin: auto;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 1.7rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const ContentInput = styled.input`
  color: white;
  font-family: Roboto;
  font-size: 2rem;
  width: 100%;
  margin: auto;
  border: none !important;
  background: transparent;
  padding: 0 !important;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const SaveButton = styled.div`
  &:hover {
    color: white;
    background-color: blue;
    cursor: pointer;
  }
  padding: 0.15em 0.4em;
  border: 0.1em solid blue;
  border-radius: 0.12em;
  box-sizing: border-box;
  font-weight: 300;
  color: blue;
  text-align: center;
  transition: all 0.2s;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
    height: 30%;
  }
`;

export const DeleteButton = styled.div`
  &:hover {
    color: white;
    background-color: red;
    cursor: pointer;
  }
  padding: 0.15em 0.4em;
  border: 0.1em solid red;
  margin-top: 1em;
  border-radius: 0.12em;
  box-sizing: border-box;
  font-weight: 300;
  color: red;
  text-align: center;
  transition: all 0.2s;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
    height: 30%;
  }
`;
export const CancelButton = styled.div`
  &:hover {
    color: white;
    background-color: orange;
    cursor: pointer;
  }
  padding: 0.15em 0.4em;
  border: 0.1em solid orange;
  margin-top: 1em;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: orange;
  text-align: center;
  transition: all 0.2s;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
    height: 30%;
  }
`;
