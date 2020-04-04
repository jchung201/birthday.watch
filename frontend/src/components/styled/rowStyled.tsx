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
  background-color: white;
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
