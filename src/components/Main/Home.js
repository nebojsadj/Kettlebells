import React from "react";
import { Container, Box1, Box2, Hr, P, Button1, Button2 } from "./HomeStyles";
import { Image } from "react-bootstrap";
import bell from "../Header/girjaWoman.jpg";

function Home() {
  return (
    <Container>
      <Box1>
        <h2>
          The best time to start exercising with kettlebells is right now!
        </h2>
        <Hr />
        <P>
          We are here for you to participate together in your selection and find
          the right Girja for you
        </P>
        <Button1>See more details</Button1> <br />
        <Button2>Seek advice</Button2>
      </Box1>
      <Box2>
        <Image src={bell} />
      </Box2>
    </Container>
  );
}

export default Home;
