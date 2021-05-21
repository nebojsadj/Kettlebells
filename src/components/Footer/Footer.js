import React from "react";
import { Container, ButtonGroup, NavLink, Paragraph } from "./FooterStyle";

function Footer() {
  return (
    <Container>
      <ButtonGroup>
        <NavLink
          to="regular"
          smooth={true}
          offset={-80}
          spy={true}
          exact="true"
          duration={1000}
        >
          Regular Kettlebell
        </NavLink>
        <NavLink
          to="competition"
          smooth={true}
          offset={-80}
          spy={true}
          exact="true"
          duration={1000}
        >
          Competition Kettlebell
        </NavLink>
      </ButtonGroup>
      <hr style={{ width: "70%", margin: "auto" }} />
      <Paragraph>DjordjevicN</Paragraph>
    </Container>
  );
}

export default Footer;
