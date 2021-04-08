import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Logo = styled.div`
  background: black;
  color: white;
  text-align: center;
  padding: 1em;
  font-size: 36px;
`;

export const image = {
  size: {
    width: "200px",
  },
};

export const Navbar = styled(Logo)`
  padding-top: 0;
  display: flex;
  justify-content: space-evenly;
`;

export const NavLinks = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: #aaa;
  }
`;
