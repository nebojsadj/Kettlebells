import React from "react";
import { Container, Box, H4, P, Button, styles } from "./TypesKettStyles";
import competition from "./competition.jpg";
import regular from "./regular.jpg";

function TypesKett() {
  return (
    <>
      <H4>We distinguish two types of kettlebells</H4>
      <Container>
        <Box>
          <img style={styles.img} src={regular} />
          <P>
            <strong>Regular kettlebells</strong> are of different shapes and
            sizes. They are made of cast iron. They are smaller than competitive
            kettlebells but have a slightly thicker handle. They are used in
            Cross Fit and various strength trainings.
          </P>
          <Button>View more</Button>
        </Box>
        <Box>
          <img style={styles.img} src={competition} />
          <P>
            <strong>Competitive kettlebells</strong> are characterized by the
            fact that regardless of the different weight, they all have the same
            shape and size, so they differ in color. They have a slightly
            thinner handle than regular weights. They are made for Girevoy
            sport, but they are used in the same way as regular ones.
          </P>
          <Button>View more</Button>
        </Box>
      </Container>
    </>
  );
}

export default TypesKett;
