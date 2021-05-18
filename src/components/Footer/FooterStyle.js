import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  border-top: 1px solid #fff;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 1em;
  padding: 0.5em 0.5em;
  cursor: pointer;
  border: none;
  background-color: #c62828;
  color: #fff;
  margin-left: 1em;
  width: 11em;

  &:hover {
    background-color: #a91a1a;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  color: #fff;
  padding: 20px;
`;
