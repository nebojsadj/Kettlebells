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
  } ;
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
  padding: 3em 5em 3em 5em;

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
`;

export const Holder = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 90vh;
  } ;
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
  } ;
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
    padding: 3em 5em 0 5em;
    margin-bottom: 7em;
  } ;
`;
