import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1800px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: #c62828;
  text-decoration: none;
  font-size: 1.7em;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 20px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  & .active {
    border-bottom: 2px solid #c62828;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  width: 100px;
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  cursor: pointer;
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled(GiHamburgerMenu)`
  display: none;
  color: #fff;
  width: 36px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Cart = styled(FaCartArrowDown)`
  font-size: 1.5em;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #a91a1a;
  }
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media screen and (max-width: 375px) {
    font-size: 50px;
  }
  @media screen and (max-width: 360px) {
    font-size: 40px;
  }
`;

export const ContactUs = styled(MdContactMail)`
  font-size: 1.6em;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #a91a1a;
  }
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media screen and (max-width: 375px) {
    font-size: 50px;
  }
  @media screen and (max-width: 360px) {
    font-size: 40px;
  }
`;
