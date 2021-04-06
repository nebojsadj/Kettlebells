import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Logo = styled.div`
  background: #1a237e;
  color: #82b1ff;
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
  color: #82b1ff;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: white;
  }
`;
