import React from "react";
import {
  Container,
  BoxTop,
  BoxLeft,
  BoxRight,
  Holder,
  Heading,
  Paragraph,
} from "./AboutStyle";
import kettlebells from "../../pictures/kettlebells.jpg";

function About() {
  return (
    <Container id="about">
      <BoxTop>
        <Heading>What exactly are kettlebells?</Heading>
        <Paragraph>
          Kettlebell (eng), girja (rus) or Russian bell is a seemingly ordinary
          ball, cast from iron with a handle. Due to its specific shape and
          shifted center of gravity, the kettlebell has incomparable advantages
          during exercise compared to classic dumbbells.
        </Paragraph>
        <br />
        <Paragraph>
          Girje is a Russian traditional exercise prop that dates back to
          tsarist Russia. They became extremely popular at the beginning of the
          20th century among the then strongmen and bodybuilders (Eugen Sandow),
          and they gained new popularity in the West in the last ten years.
          Girje had an exceptional application in the physical preparation of
          the Olympians of the USSR, and later of Russia as well. The most
          famous trainer in Russian kettlebells is the wrestling legend,
          Alexander Karelin, the holder of 3 gold and 1 silver medal at the
          Olympics. This heavyweight attributed his readiness and strength to
          working with weights, although he worked with 2 x 60 kg.
        </Paragraph>
        <br />
        <Paragraph>
          Exercising with kettlebells consumes a lot of calories, and that
          number can reach up to 1500 cal / h. Such high calorie consumption
          speeds up metabolism and encourages the burning of subcutaneous fat.
          The specificity of these props is reflected in their ballistic
          properties, where the abdominal and back muscles are in constant
          contraction, because they have to stabilize the weight and movement of
          the dumbbell.
        </Paragraph>
      </BoxTop>
      <Holder>
        <BoxLeft>
          <img src={kettlebells} alt={kettlebells} />
        </BoxLeft>
        <BoxRight>
          <iframe
            src="https://www.youtube.com/embed/RE6CSomDvl8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </BoxRight>
      </Holder>
    </Container>
  );
}

export default About;
