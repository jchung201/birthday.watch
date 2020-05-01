import styled from "styled-components";

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const AddButton = styled.div`
  &:hover {
    color: white;
    background-color: #9ad6ca;
    cursor: pointer;
    border: 0.1em solid #9ad6ca;
  }
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #7d7c81;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #7d7c81;
  text-align: center;
  transition: all 0.2s;
`;
