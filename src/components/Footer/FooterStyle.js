import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
  background-color: #000;
  border-top: 1px solid #fff;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 375px) {
    a {
      font-size: 1em;
    }
    height: 60px;
  }
  @media screen and (max-width: 320px) {
    a {
      font-size: 15px;
    }
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.2em;
  margin: 20px auto;
  cursor: pointer;
  border: none;
  color: #fff;

  &:hover {
    color: #a91a1a;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  color: #fff;
  padding: 20px;
  @media screen and (max-width: 375px) {
    padding: 0.8em;
  }
  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
`;
