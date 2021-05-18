import React from "react";
import {
  Container,
  Heading,
  Form,
  Input,
  Button,
  Paragraph,
  Location,
  Holder,
  Email,
  Phone,
} from "./ContactStyle";
import contactUs from "../../pictures/contactUs.svg";

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Heading>Let's find the right kettlebell for you together!</Heading>
      <img
        src={contactUs}
        alt={contactUs}
        style={{ width: "35%", display: "block", margin: "50px auto" }}
      />
      <Paragraph>Contact us!</Paragraph>
      <Form onSubmit={onSubmit}>
        <Input type="text" placeholder="name" />
        <Input type="text" placeholder="surname" />
        <Input type="email" placeholder="email" />
        <Button>Submit</Button>
        <Holder>
          <Location /> 44 street name
        </Holder>
        <Holder>
          <Email /> kettlebell.king@gmail.com
        </Holder>
        <Holder>
          <Phone /> +381 11 22 333 44
        </Holder>
      </Form>
    </Container>
  );
}

export default Contact;
