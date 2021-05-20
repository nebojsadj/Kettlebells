import React, { useState } from "react";
import {
  Container,
  BoxLeft,
  BoxRight,
  BoxBottom,
  Wrapper,
  Heading,
  Paragraph,
  Button,
  Select,
  Clear,
  ButtonGroup,
  Holder,
  Input,
  SelectGroup,
  BuyBtn,
} from "./CompetitionStyle";
import competition from "../../pictures/cBells.png";

function Competition() {
  const options = [
    { value: 0, name: "Choose an option" },
    { value: 8, name: "8 kg" },
    { value: 12, name: "12 kg" },
    { value: 16, name: "16 kg" },
    { value: 20, name: "20 kg" },
    { value: 24, name: "24 kg" },
    { value: 28, name: "28 kg" },
    { value: 32, name: "32 kg" },
  ];
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const onSelected = (e) => {
    setSelected(3.25 * e.target.value);
    setQuantity(1);
  };
  const total = selected * quantity;

  return (
    <Container id="competition">
      <Wrapper>
        <BoxLeft>
          <img src={competition} alt={competition} />
        </BoxLeft>
        <BoxRight>
          <Heading>Competition Kettlebells 8-32kg</Heading>
          <Paragraph>
            Availability: <span>In Stock</span>
          </Paragraph>
          <Paragraph>
            Price: <span>3.25$</span>
          </Paragraph>
          <Paragraph>kg</Paragraph>
          <SelectGroup>
            <Select onChange={onSelected}>
              {options.map((option) => (
                <option key={option.name} value={option.value}>
                  {option.name}
                </option>
              ))}
            </Select>

            <Clear onClick={() => setSelected(0)}>Clear</Clear>
          </SelectGroup>
          <Holder>
            <ButtonGroup>
              <Button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
              >
                -
              </Button>
              <Input readOnly value={quantity} type="text" />
              <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
            </ButtonGroup>
            <Paragraph>{total > 0 && `Total: ${total.toFixed(2)} $`}</Paragraph>
            <BuyBtn disabled={!total > 0}>Buy</BuyBtn>
          </Holder>
        </BoxRight>
      </Wrapper>
      <BoxBottom>
        <Heading>Competition Kettlebells 8-32kg</Heading>
        <Paragraph>
          <span>Premium Material:</span> We started with the highest quality
          first run iron ore available, not scrap.
        </Paragraph>
        <Paragraph>
          <span>Void free surface:</span> We use a proprietary casting process
          so each bell can reach the highest quality and have the cleanest
          finish possible. This also allows us to have a smooth, comfortable
          handle.
        </Paragraph>
        <Paragraph>
          <span>Single Piece Casting:</span> The Rogue Kettlebell is cast in one
          solid piece, creating a stronger, more reliable handle and a void free
          surface. The Rogue Kettlebell does not use plastic caps, plugs, or
          patches like lower quality products, making them some of the best
          kettlebells in the industry.
        </Paragraph>
        <Paragraph>
          <span>Premium Material:</span> We started with the highest quality
          first run iron ore available, not scrap.
        </Paragraph>
      </BoxBottom>
    </Container>
  );
}

export default Competition;
