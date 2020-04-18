import styled from "styled-components";

export const ContentRow = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentColumn = styled.div`
  width: 220px;
  height: 110px;
  margin-right: 25px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  display: flex;
`;
export const ContentText = styled.div`
  color: #7d7c81;
  font-size: 20px;
  font-family: Roboto;
  margin: auto;
  text-align: center;
`;
export const ContentInput = styled.input`
  color: white;
  font-family: Roboto;
  font-size: 20px;
  width: 100%;
  margin: auto;
  border: none !important;
  background: transparent;
  padding: 0 !important;
  text-align: center;
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
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: blue;
  text-align: center;
  transition: all 0.2s;
`;

export const DeleteButton = styled.div`
  &:hover {
    color: white;
    background-color: red;
    cursor: pointer;
  }
  padding: 0.15em 0.4em;
  border: 0.1em solid red;
  margin-top: 10px;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: red;
  text-align: center;
  transition: all 0.2s;
`;
