import styled from "styled-components";

export const Container = styled.div`
  min-height: 900px;
  display: flex;

  @media screen and (max-width: 1440px) {
    min-height: 560px;
    h1 {
      font-size: 2em;
    }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 1.6em;
    }
    p {
      font-size: 1.2em;
    }
  }
  @media screen and (max-width: 768px) {
    min-height: 400px;
    flex-direction: column;
    h1 {
      font-size: 1.6em;
    }
    p {
      font-size: 1.5em;
    }
  }
  @media screen and (max-width: 425px) {
    min-height: 400px;
    h1 {
      font-size: 1.2em;
    }
    p {
      font-size: 1em;
    }
    button {
      font-size: 1.2em;
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0.3em 0.5em;
    }
  }
  @media screen and (max-width: 375px) {
    h1 {
      font-size: 1em;
    }
    button {
      font-size: 1em;
    }
  }
`;

export const BoxLeft = styled.div`
  flex: 50%;
  padding: 7em;

  @media screen and (max-width: 1440px) {
    flex: 60%;
    padding: 6em 0 6em 3em;
  }
  @media screen and (max-width: 1440px) {
    flex: 70%;
  }
  @media screen and (max-width: 768px) {
    padding: 3em 5em 3em 5em;
  }
  @media screen and (max-width: 425px) {
    padding: 1.5em 1em;
    hr {
      margin-top: 10px;
    }
  } ;
`;

export const BoxRight = styled.div`
  flex: 50%;
  padding: 5em;

  @media screen and (max-width: 1440px) {
    padding: 0;
    img {
      margin-top: 120px;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 70%;
      margin-top: -30px;
    }
  }
  @media screen and (max-width: 425px) {
    img {
      width: 80%;
      margin-top: 0;
    }
  } ;
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
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3em;
  } ;
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

  @media screen and (max-width: 1440px) {
    margin: 50px auto;
    width: 70%;
  }

  @media screen and (max-width: 1024px) {
    margin: 70px auto;
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    margin: 35px auto;
    width: 90%;
  } ;
`;

export const ImgLogo = styled.img`
  width: 20%;
`;
