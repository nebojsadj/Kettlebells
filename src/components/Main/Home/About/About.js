import React from "react";
import { Container, Box1, Box2, P } from "./AboutStyles";
import kettlebell from "./kettlebell.png";

function About() {
  return (
    <Container>
      <Box1>
        <h4>What exactly are kettlebells?</h4>
        <P>
          Kettlebell (eng), girja (rus) or Russian bell is a seemingly ordinary
          ball, cast from iron with a handle. Due to its specific shape and
          shifted center of gravity, the kettlebell has incomparable advantages
          during exercise compared to classic dumbbells.
        </P>
        <P>
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
        </P>
        <P>
          Exercising with kettlebells consumes a lot of calories, and that
          number can reach up to 1500 cal / h. Such high calorie consumption
          speeds up metabolism and encourages the burning of subcutaneous fat.
          The specificity of these props is reflected in their ballistic
          properties, where the abdominal and back muscles are in constant
          contraction, because they have to stabilize the weight and movement of
          the dumbbell.
        </P>
      </Box1>
      <Box2>
        <img src={kettlebell} />
      </Box2>
    </Container>
  );
}

export default About;
