import styled from "styled-components";

export const Container = styled.div`
  min-height: 900px;
  display: flex;
  /* align-items: center; */

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  } ;
`;

export const BoxLeft = styled.div`
  flex: 50%;
  padding: 7em;
`;

export const BoxRight = styled.div`
  flex: 50%;
  padding: 5em;
`;

export const Heading = styled.h1`
  font-size: 2.2em;
  padding: 0 0 5px;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px gray;
`;

export const Paragraph = styled.p`
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1.5em;
`;

export const Button = styled.button`
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.5em 0.8em;
  cursor: pointer;
  border: 2px solid;
  background-color: #c62828;
  color: #fff;

  &:hover {
    background-color: #a91a1a;
    /* color: #000; */
  }
`;

export const Line = styled.hr`
  width: 35%;
  border: 2px double black;
  margin-top: 1.5em;
`;

export const Img = styled.img`
  width: 80%;
  padding: 2em;
  margin: 0 auto;
  display: flex;
`;

export const ImgLogo = styled.img`
  width: 20%;
`;
