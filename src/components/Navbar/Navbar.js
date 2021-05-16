import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarStyle";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Kettlebell</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink
                to="home"
                smooth={true}
                offset={-80}
                spy={true}
                exact="true"
                duration={1200}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                offset={-80}
                spy={true}
                exact="true"
                duration={1200}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="types"
                smooth={true}
                offset={-80}
                spy={true}
                exact="true"
                duration={1200}
              >
                Types
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
