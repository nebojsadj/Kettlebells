import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavRoute,
  Button,
  MobileIcon,
} from "./NavbarStyle";
import { animateScroll as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

function Navbar({ secondRoute, toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => Scroll.scrollToTop()}>
            Kettlebell
          </NavLogo>
          <MobileIcon onClick={toggle} />
          <NavMenu>
            {secondRoute || (
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
            {!secondRoute || (
              <NavItem>
                <NavRoute to="/" exact>
                  Home
                </NavRoute>
              </NavItem>
            )}

            <NavItem>
              <NavRoute to="/regular">Regular</NavRoute>
            </NavItem>
            <NavItem>
              <NavRoute to="/competition">Competition</NavRoute>
            </NavItem>
          </NavMenu>
          <NavItem>
            <Link to="/contact">
              <Button>Contact</Button>
            </Link>
          </NavItem>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
