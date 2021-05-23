import styled from "styled-components";
import { TiLocationArrowOutline } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { RiPhoneLine } from "react-icons/ri";

export const Container = styled.div`
  background-color: #fff;
  min-height: 1150px;
  img {
    width: 35%;
    display: block;
    margin: 50px auto;
  }
  @media screen and (max-width: 1440px) {
    img {
      width: 70%;
    }
    form {
      margin-bottom: 5em;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 90%;
    }
    form {
      margin: 20px auto;
      margin-bottom: 3em;
    }
  }
  @media screen and (max-width: 425px) {
    h2 {
      font-size: 1.4em;
    }
    p {
      font-size: 1.4em;
    }
    min-height: 900px;
  }
`;

export const Heading = styled.h2`
  padding-top: 2.5em;
  text-align: center;
  font-size: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1.6em;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.form`
  width: 23%;
  background-color: #000;
  margin: 20px auto;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1440px) {
    width: 30%;
  }
  @media screen and (max-width: 1024px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 55%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    h2 {
      font-size: 1.2em;
    }
  }
  @media screen and (max-width: 375px) {
    width: 95%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin: 20px;
  font-size: 20px;
  padding-left: 0.7em;

  &:focus {
    box-shadow: 0 0 9px white;
  }
  @media screen and (max-width: 425px) {
    height: 40px;
    font-size: 18px;
  }
  @media screen and (max-width: 320px) {
    height: 35px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  margin: 20px;
  font-size: 20px;
  padding-top: 0.7em;
  padding-left: 0.7em;

  &:focus {
    box-shadow: 0 0 9px white;
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  font-size: 1em;
  padding: 0.5em 0.8em;
  margin: 20px 0 20px 0;
  cursor: pointer;
  border: 2px solid;
  background-color: #c62828;
  color: #fff;
  width: 100%;

  &:hover {
    background-color: #a91a1a;
  }
`;

export const Holder = styled.div`
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const Location = styled(TiLocationArrowOutline)`
  color: #c62828;
  height: 1.6em;
  width: 1.6em;
`;

export const Email = styled(AiOutlineMail)`
  color: #c62828;
  height: 1.6em;
  width: 1.6em;
`;

export const Phone = styled(RiPhoneLine)`
  color: #c62828;
  height: 1.6em;
  width: 1.6em;
`;
