import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  Button,
} from "./NavbarStyle";
import { animateScroll as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

function Navbar({ contact }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => Scroll.scrollToTop()}>
            Kettlebell
          </NavLogo>
          <NavMenu>
            {contact || (
              <>
                <NavItem>
                  <NavLink
                    to="home"
                    smooth={true}
                    offset={-80}
                    spy={true}
                    exact="true"
                    duration={1000}
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
                    duration={1000}
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
                    duration={1000}
                  >
                    Types
                  </NavLink>
                </NavItem>
              </>
            )}
            <NavItem>
              <Link to="/contact">
                <Button onClick={() => Scroll.scrollToTop()}>Contact</Button>
              </Link>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
