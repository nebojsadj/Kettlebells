import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  min-height: 75vh;
`;

export const Box = styled.div`
  h2 {
    padding-top: 2em;
    padding-left: 2em;
  }
  h3 {
    padding-left: 3em;
    margin: 1em 0 1em;
  }
  @media screen and (max-width: 425px) {
    h2 {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 375px) {
    h2 {
      font-size: 22px;
    }
    h3 {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 320px) {
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;

  tr {
    background-color: #dddddd;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonOrder = styled.button`
  font-size: 1.2em;
  padding: 0.4em;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
  }
  @media screen and (max-width: 425px) {
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    font-size: 13px;
  }
  @media screen and (max-width: 320px) {
    font-size: 11px;
  }
`;

export const Delete = styled(MdDelete)`
  cursor: pointer;
  &:hover {
    color: #a91a1a;
  }
  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

export const TotalPrice = styled.p`
  color: #a91a1a;
  font-size: 1.5em;
  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`;

export const ButtonConfirm = styled(ButtonOrder)``;

export const Confirm = styled.div`
  position: fixed;
  width: 50%;
  height: 25%;
  box-shadow: 0 0 5px;
  background-color: lightgreen;
  top: 25%;
  left: 25%;
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  visibility: ${({ confirm }) => !confirm && "hidden"};
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 70%;
    left: 15%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    left: 10%;
    font-size: 1em;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 15%;
    left: 10%;
    font-size: 1em;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    left: 5%;
    font-size: 0.6em;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    left: 5%;
    font-size: 0.5em;
  }
`;
