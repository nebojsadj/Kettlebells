import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavGroup,
  MobileIcon,
  Cart,
  ContactUs,
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
          {secondRoute || (
            <NavMenu>
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
              <NavItem>
                <NavLink
                  to="regular"
                  smooth={true}
                  offset={-80}
                  spy={true}
                  exact="true"
                  duration={1000}
                >
                  Regular
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="competition"
                  smooth={true}
                  offset={-80}
                  spy={true}
                  exact="true"
                  duration={1000}
                >
                  Competition
                </NavLink>
              </NavItem>
            </NavMenu>
          )}
          <NavGroup>
            <NavItem>
              <Link to="/contact">
                <ContactUs />
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/buy">
                <Cart />
              </Link>
            </NavItem>
          </NavGroup>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
