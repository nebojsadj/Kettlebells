import React from "react";
import {
  Container,
  BoxLeft,
  BoxRight,
  Img,
  Heading,
  Paragraph,
  Button,
  Line,
  ImgLogo,
} from "./HomeStyle";
import homeImg from "../../pictures/home.jpg";
import topHome from "../../pictures/topHome.jpg";

function Home() {
  return (
    <>
      <Container id="home">
        <BoxLeft>
          <ImgLogo src={topHome}></ImgLogo>
          <Heading>
            The best time to start exercising with kettlebells is right now!
          </Heading>
          <Line />
          <Paragraph>
            Do you know <b>what a kettlebell is</b>? How to <b>exercise</b> with
            them and which <b>weight to choose</b>? We are here for you to
            participate together in your selection and find the right kettlebell
            for you. Let's find out <b>what their secret is?</b>
          </Paragraph>
          <Button>Get started</Button>
        </BoxLeft>
        <BoxRight>
          <Img src={homeImg} alt={homeImg} />
        </BoxRight>
      </Container>
    </>
  );
}

export default Home;
