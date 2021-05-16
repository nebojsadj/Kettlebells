import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarStyle";
import { animateScroll as Scroll } from "react-scroll";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => Scroll.scrollToTop()}>
            Kettlebell
          </NavLogo>
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
