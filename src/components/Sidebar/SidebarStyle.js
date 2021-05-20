import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { NavLink as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 160ms ease-in-out;
  top: ${({ sideOpen }) => (sideOpen ? "0" : "-100%")};
  color: #fff;
  text-align: center;
`;

export const Icon = styled(VscChromeClose)`
  position: absolute;
  color: #fff;
  top: 1.7em;
  right: 2em;
  width: 40px;
  height: 36px;
  cursor: pointer;
`;

export const NavMenu = styled.div``;

export const NavItem = styled.div`
  margin-bottom: 3em;
`;

export const NavRoute = styled(LinkR)`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
`;

export const NavLink = styled(LinkS)`
  cursor: pointer;
  font-size: 24px;
`;

export const Button = styled.button`
  font-size: 1.5em;
  padding: 0.7em 1.6em;
  cursor: pointer;
  border: none;
  background-color: #c62828;
  color: #fff;

  &:hover {
    background-color: #a91a1a;
  }
`;
