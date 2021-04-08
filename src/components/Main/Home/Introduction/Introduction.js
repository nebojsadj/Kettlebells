import React from "react";
import {
  Container,
  Box1,
  Box2,
  Button1,
  Button2,
  Hr,
  P,
} from "./IntroductionStyled";
import bell from "./girjaWoman.jpg";

function Introduction() {
  return (
    <Container>
      <Box1>
        <h2>
          The best time to start exercising with kettlebells is right now!
        </h2>
        <Hr />
        <P>
          We are here for you to participate together in your selection and find
          the right kettlebell for you
        </P>
        <Button1>See more details</Button1> <br />
        <Button2>Seek advice</Button2>
      </Box1>
      <Box2>
        <img src={bell} />
      </Box2>
    </Container>
  );
}

export default Introduction;
