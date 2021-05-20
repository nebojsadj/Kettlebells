import React from "react";
import {
  Container,
  Icon,
  NavMenu,
  NavItem,
  Button,
  NavLink,
  NavRoute,
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
          <NavRoute to="/regular">Regular</NavRoute>
        </NavItem>
        <NavItem>
          <NavRoute to="/competition">Competition</NavRoute>
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
