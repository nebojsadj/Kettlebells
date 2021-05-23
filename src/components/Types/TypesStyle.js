import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
  background-color: #fff;
  min-height: 550px;

  @media screen and (max-width: 425px) {
    min-height: 1080px;
    h2 {
      font-size: 1.3em;
    }
  }
  @media screen and (max-width: 375px) {
    min-height: 950px;
    h2 {
      font-size: 1.2em;
    }
  }
  @media screen and (max-width: 320px) {
    min-height: 900px;
  }
`;

export const BoxContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 4em;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 1em;
  }
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

  @media screen and (max-width: 1440px) {
    p {
      font-size: 1.3em;
    }
  }
  @media screen and (max-width: 1024px) {
    a {
      margin-bottom: 0;
    }
    p {
      font-size: 1.2em;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 5em;
    p {
      font-size: 1.4em;
    }
    img {
      margin-top: 5em;
    }
    a {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 0 1.5em;
    p {
      font-size: 1em;
    }
    img {
      margin: 40px auto;
      width: 60%;
    }
    a {
      font-size: 1.2em;
    }
  }
  @media screen and (max-width: 375px) {
    img {
      margin: 40px auto;
      width: 50%;
    }
    a {
      font-size: 1em;
    }
  }
  @media screen and (max-width: 320px) {
    img {
      margin: 30px auto;
      width: 50%;
    }
    a {
      font-size: 15px;
    }
  } ;
`;

export const NavLink = styled(Link)`
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
