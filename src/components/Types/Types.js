import React from "react";
import {
  Container,
  BoxContainer,
  Box,
  Heading,
  Paragraph,
  NavLink,
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
          <NavLink
            to="regular"
            smooth={true}
            offset={-80}
            spy={true}
            exact="true"
            duration={1000}
          >
            View More
          </NavLink>
        </Box>
        <Box>
          <img src={competition} alt={competition} />
          <Paragraph>
            <strong>Competitive kettlebells</strong> are all the same size and
            shape, differing in weight and color. They have a slightly thinner
            handle. They are made for Girevoy sport, but they are used in the
            same way as regular ones.
          </Paragraph>
          <NavLink
            to="competition"
            smooth={true}
            offset={-80}
            spy={true}
            exact="true"
            duration={1000}
          >
            View More
          </NavLink>
        </Box>
      </BoxContainer>
    </Container>
  );
}

export default Types;
