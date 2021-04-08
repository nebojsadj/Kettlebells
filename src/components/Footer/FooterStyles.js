import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: black;
`;

export const Box = styled.div`
  width: 70%;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: #004d40;
  color: white;
  padding: 0.5em;
  font-size: 20px;
  margin-left: 30px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background: #00796b;
  }
`;
