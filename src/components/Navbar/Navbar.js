import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
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
          <NavItem>
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </NavItem>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
