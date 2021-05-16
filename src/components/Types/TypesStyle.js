import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  min-height: 550px;
`;

export const BoxContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const Heading = styled.h2`
  padding-top: 2.5em;
  text-align: center;
  font-size: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1.4em;
  text-align: center;
`;
export const Box = styled.div`
  flex: 50%;
  padding: 5em;
  display: flex;
  flex-direction: column;

  img {
    width: 30%;
    margin: 15px auto;
  }
`;

export const Button = styled.button`
  font-size: 1.5em;
  padding: 0.5em 0.8em;
  margin: 30px auto;
  cursor: pointer;
  border: 2px solid;
  background-color: #c62828;
  color: #fff;

  &:hover {
    background-color: #a91a1a;
  }
`;
