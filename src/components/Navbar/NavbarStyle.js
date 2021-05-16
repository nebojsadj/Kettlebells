import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

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
  max-width: 1600px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: #c62828;
  text-decoration: none;
  font-size: 1.5em;
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
`;

export const NavItem = styled.li`
  width: 100px;
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  cursor: pointer;
`;
