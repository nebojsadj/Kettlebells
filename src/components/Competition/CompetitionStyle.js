import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
`;

export const BoxLeft = styled.div`
  flex: 50%;
  padding: 5em;

  img {
    width: 70%;
    display: block;
    margin: auto;
  }
`;

export const BoxRight = styled.div`
  flex: 50%;
  padding: 5em;
`;

export const Heading = styled.h2`
  padding-top: 2.5em;
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
      opacity: 0.8;
    `};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#c62828" : "#a91a1a")};
    cursor: ${(props) => !props.disabled && "pointer"};
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
  width: 110px;
  height: 1.5em;
  font-size: 1.3em;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: #c62828;
  color: #fff;

  &:hover {
    background-color: #a91a1a;
  }
`;

export const SelectGroup = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Select = styled.select`
  width: 70%;
  height: 40px;
  margin-top: 1em;
  font-size: 18px;
`;

export const Clear = styled.button`
  margin-top: 1em;
  justify-content: flex-start;
`;
