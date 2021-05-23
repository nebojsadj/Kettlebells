import React from "react";
import {
  Container,
  Icon,
  NavMenu,
  NavItem,
  Button,
  NavLink,
} from "./SidebarStyle";
import { useHistory } from "react-router-dom";

function Sidebar({ toggle, sideOpen }) {
  const history = useHistory();

  return (
    <Container sideOpen={sideOpen} onClick={toggle}>
      <Icon onClick={toggle} />
      <NavMenu>
        <NavItem>
          <NavLink
            onClick={() => {
              history.push("/");
              toggle();
            }}
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
            onClick={toggle}
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
            onClick={toggle}
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
            onClick={toggle}
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
            onClick={toggle}
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
        <NavItem>
          <Button
            onClick={() => {
              history.push("/contact");
              toggle();
            }}
          >
            Contact
          </Button>
        </NavItem>
      </NavMenu>
    </Container>
  );
}

export default Sidebar;
