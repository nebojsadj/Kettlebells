import React from "react";
import { useHistory } from "react-router-dom";
import { animateScroll as Scroll } from "react-scroll";
import { Container, ButtonGroup, Button, Paragraph } from "./FooterStyle";

function Footer() {
  const history = useHistory();
  return (
    <Container>
      <ButtonGroup>
        <Button
          onClick={() => {
            history.push("/regular");
            Scroll.scrollToTop();
          }}
        >
          Regular Kettlebell
        </Button>
        <Button
          onClick={() => {
            history.push("/competition");
            Scroll.scrollToTop();
          }}
        >
          Competition Kettlebell
        </Button>
      </ButtonGroup>
      <hr style={{ width: "70%", margin: "auto" }} />
      <Paragraph>DjordjevicN</Paragraph>
    </Container>
  );
}

export default Footer;
