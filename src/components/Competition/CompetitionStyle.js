import styled, { css } from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 425px) {
    h2 {
      font-size: 1.3em;
    }
    p {
      font-size: 1em;
    }
  }
  @media screen and (max-width: 375px) {
    h2 {
      font-size: 1.1em;
    }
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxLeft = styled.div`
  flex: 50%;
  padding: 1em 5em;

  img {
    width: 70%;
    display: block;
    margin: auto;
  }
  @media screen and (max-width: 1440px) {
    padding: 2em 5em;
  }

  @media screen and (max-width: 1024px) {
    padding: 5em 1em;
  }
  @media screen and (max-width: 768px) {
    padding: 2em 1em;
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 2em 1.5em 0 1.5em;
  }
`;

export const BoxRight = styled.div`
  flex: 50%;
  padding: 3.5em 5em;

  @media screen and (max-width: 1440px) {
    padding: 2em 5em;
  }

  @media screen and (max-width: 1024px) {
    padding: 5em 1em;
    margin-top: 10px;
    h2 {
      font-size: 1.8em;
      padding-top: 0;
    }
  }
  @media screen and (max-width: 768px) {
    width: 83%;
    align-items: center;
    padding: 0 1em 3em 1em;
    select {
      width: 100%;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 0 0 3em 0;
    h2 {
      font-size: 1.3em;
    }
  }
  @media screen and (max-width: 375px) {
    h2 {
      font-size: 1.2em;
    }
  }
`;

export const BoxBottom = styled.div`
  width: 90%;
  border: 1px solid #000;
  margin: auto;
  margin-bottom: 5em;
  padding: 2em 3em;
  p > span {
    color: red;
  }
  h2 {
    padding-top: 0;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 1em 1em;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 3em;
  }
  @media screen and (max-width: 320px) {
    margin-bottom: 2em;
  }
`;

export const Heading = styled.h2`
  padding-top: 1.6em;
  font-size: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1.4em;
  margin-top: 0.5em;
  span {
    color: green;
  }
`;

export const Holder = styled.div`
  width: 70%;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 80%;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    p {
      margin-bottom: 5px;
      font-size: 1.3em;
    }
  }
`;

export const ButtonGroup = styled.div`
  width: 110px;
  border: 1px solid none;
  display: flex;
`;

export const Button = styled.button`
  width: 1.5em;
  height: 1.5em;
  font-size: 1.3em;
  text-align: center;
  border: none;
  background-color: #c62828;
  color: #fff;
  ${(prop) =>
    prop.disabled &&
    css`
      opacity: 0.7;
    `};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#c62828" : "#a91a1a")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

export const Input = styled.input`
  width: 46px;
  height: 31px;
  text-align: center;
  font-size: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const BuyBtn = styled.button`
  width: 20%;
  height: 1.5em;
  font-size: 1.3em;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: #c62828;
  color: #fff;

  ${(prop) =>
    prop.disabled &&
    css`
      opacity: 0.7;
    `};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#c62828" : "#a91a1a")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const SelectGroup = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Select = styled.select`
  width: 70%;
  height: 60px;
  margin-top: 1em;
  font-size: 18px;
`;

export const Clear = styled.button`
  margin-top: 1em;
  justify-content: flex-start;
`;

export const Img = styled.img`
  width: 100%;
`;
