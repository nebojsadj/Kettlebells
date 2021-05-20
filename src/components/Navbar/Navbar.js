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
} from "./NavbarStyle";
import { animateScroll as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

function Navbar({ secondRoute }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => Scroll.scrollToTop()}>
            Kettlebell
          </NavLogo>
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
                <NavRoute
                  to="/"
                  exact="true"
                  onClick={() => Scroll.scrollToTop()}
                >
                  Home
                </NavRoute>
              </NavItem>
            )}

            <NavItem>
              <NavRoute to="/regular" onClick={() => Scroll.scrollToTop()}>
                Regular
              </NavRoute>
            </NavItem>
            <NavItem>
              <NavRoute to="/competition" onClick={() => Scroll.scrollToTop()}>
                Competition
              </NavRoute>
            </NavItem>
          </NavMenu>
          <NavItem>
            <Link to="/contact">
              <Button onClick={() => Scroll.scrollToTop()}>Contact</Button>
            </Link>
          </NavItem>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
