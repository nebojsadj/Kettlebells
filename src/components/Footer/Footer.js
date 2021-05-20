import React from "react";
import { useHistory } from "react-router-dom";
import { Container, ButtonGroup, Button, Paragraph } from "./FooterStyle";

function Footer() {
  const history = useHistory();
  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => history.push("/regular")}>
          Regular Kettlebell
        </Button>
        <Button onClick={() => history.push("/competition")}>
          Competition Kettlebell
        </Button>
      </ButtonGroup>
      <hr style={{ width: "70%", margin: "auto" }} />
      <Paragraph>DjordjevicN</Paragraph>
    </Container>
  );
}

export default Footer;
