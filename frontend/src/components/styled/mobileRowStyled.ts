import styled from "styled-components";

export const ContentRow = styled.div`
  display: flex;
  margin-top: 2em;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  border-radius: 0.4em;
  backgroundcolor: white;
  padding: 1.3em;
`;
export const ContentLabel = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;
  height: 3em;
  margin-right: 1em;
  color: ${(props) => (props.color === "white" ? "black" : "white")};
`;
export const ContentColumn = styled.div`
  margin-right: 2.5em;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  height: 3em;
  margin-right: 1em;
`;
export const ContentText = styled.div`
  color: #7d7c81;
  font-size: 2rem;
  font-family: Roboto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  text-align: right;
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
  text-align: right;
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
