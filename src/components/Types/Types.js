import React from "react";
import {
  Container,
  BoxContainer,
  Box,
  Heading,
  Paragraph,
  Button,
} from "./TypesStyle";
import regular from "../../pictures/regular.png";
import competition from "../../pictures/competition.jpg";

function Types() {
  return (
    <Container id="types">
      <Heading>We distinguish two types of kettlebells</Heading>
      <BoxContainer>
        <Box>
          <img src={regular} alt={regular} />
          <Paragraph>
            <strong>Regular kettlebells</strong> are of different shapes and
            sizes. They are made of cast iron. They are smaller than competitive
            kettlebells but have a slightly thicker handle. They are used in
            Cross Fit and various strength trainings.
          </Paragraph>
          <Button>View more</Button>
        </Box>
        <Box>
          <img src={competition} alt={competition} />
          <Paragraph>
            <strong>Competitive kettlebells</strong> are characterized by the
            fact that regardless of the different weight, they all have the same
            shape and size, so they differ in color. They have a slightly
            thinner handle than regular weights. They are made for Girevoy
            sport, but they are used in the same way as regular ones.
          </Paragraph>
          <Button>View more</Button>
        </Box>
      </BoxContainer>
    </Container>
  );
}

export default Types;
