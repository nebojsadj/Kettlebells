import React from "react";
import { Logo, Navbar, NavLinks } from "./HeaderStyles";

function Header() {
  return (
    <>
      <Logo>A kettlebell is an ancient Russian weapon against weakness</Logo>
      <Navbar>
        <NavLinks to="/" exact>
          Home
        </NavLinks>
        <NavLinks to="/product">Product</NavLinks>
        <NavLinks to="/contact">Contact</NavLinks>
      </Navbar>
    </>
  );
}

export default Header;
