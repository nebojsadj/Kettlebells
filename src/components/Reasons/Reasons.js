import React from "react";
import {
  Container,
  ListContainer,
  Heading,
  Ul,
  Li,
  Check,
} from "./ReasonsStyle";

function Reasons() {
  return (
    <Container>
      <Heading>Why are kettlebells so popular?</Heading>
      <ListContainer>
        <Ul>
          <Li>
            <Check /> High-intensity cardio training
          </Li>
          <Li>
            <Check /> Acquisition of functional strength
          </Li>
          <Li>
            <Check /> High fat burning
          </Li>
          <Li>
            <Check /> Whole body exercise with one prop
          </Li>
          <Li>
            <Check /> Development of flexibility
          </Li>
        </Ul>
        <Ul>
          <Li>
            <Check /> Suitable for people with little time
          </Li>
          <Li>
            <Check /> Takes up very little space
          </Li>
          <Li>
            <Check /> Fun and dynamic training
          </Li>
          <Li>
            <Check /> Different center of gravity relative to dumbbells
          </Li>
          <Li>
            <Check /> Suitable for developing endurance
          </Li>
        </Ul>
      </ListContainer>
    </Container>
  );
}

export default Reasons;
