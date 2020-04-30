import styled from "styled-components";

export const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.div`
  width: 15em;
  height: 8em;
  margin-right: 2.5em;
  border-radius: 1.2em;
  box-shadow: 0 0.7em 0.6em 0 rgba(0, 0, 0, 0.16);
  background-color: ${(props) => props.color};
  display: flex;
  @media (max-width: 768px) {
    height: 5em;
    margin-right: 1em;
  }
`;
export const TitleText = styled.div`
  color: white;
  font-size: 2.8rem;
  font-family: Roboto Slab;
  margin: auto;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const AddButton = styled.div`
  &:hover {
    color: white;
    background-color: #7d7c81;
    cursor: pointer;
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
