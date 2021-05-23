import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 900px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1440px) {
    min-height: 600px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    height: 1100px;
    h2 {
      font-size: 1.3em;
      margin: 20px auto;
      margin-top: 2em;
    }
  }
  @media screen and (max-width: 375px) {
    height: 1150px;
  }
  @media screen and (max-width: 360px) {
    height: 1180px;
  }
  @media screen and (max-width: 320px) {
    height: 1200px;
    h2 {
      font-size: 1.2em;
      margin: 20px auto;
      margin-top: 2em;
    }
  }
  @media screen and (max-width: 280px) {
    height: 1240px;
  }
`;

export const Heading = styled.h2`
  margin: 50px auto;
  text-align: center;
  font-size: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1.4em;
`;

export const BoxTop = styled.div`
  flex: 100%;
  padding: 1em 1.5em;

  @media screen and (max-width: 1440px) {
    p {
      font-size: 1.2em;
    }
  }
  @media screen and (max-width: 1024px) {
    p {
      font-size: 1.1em;
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
  @media screen and (max-width: 425px) {
    p {
      font-size: 1em;
    }
  }
  @media screen and (max-width: 320px) {
    p {
      font-size: 15px;
    }
    padding-bottom: 0;
  } ;
`;

export const Holder = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 90vh;
  }
`;

export const BoxLeft = styled.div`
  flex: 50%;
  padding: 3em 2em 5em 5em;

  img {
    width: 100%;
    border: 1px solid #fff;
  }

  @media screen and (max-width: 1440px) {
    padding-top: 1em;
  }
  @media screen and (max-width: 768px) {
    padding: 0 5em;
    margin-top: 4em;
  }
  @media screen and (max-width: 425px) {
    margin-top: 0;
    padding: 0 1.5em;
  }
  @media screen and (max-width: 425px) {
    margin-top: 1.2em;
  }
`;

export const BoxRight = styled.div`
  flex: 50%;
  padding: 3em 5em 5em 2em;

  iFrame {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #fff;
  }
  @media screen and (max-width: 1440px) {
    padding-top: 1em;
  }

  @media screen and (max-width: 768px) {
    padding: 0 5em 0 5em;
    margin-bottom: 7em;
  }
  @media screen and (max-width: 425px) {
    padding: 0 1.5em;
    margin-top: 1em;
    margin-bottom: 2em;
  }
`;
