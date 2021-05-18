import React, { useState } from "react";
import {
  Container,
  BoxLeft,
  BoxRight,
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
    <Container>
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
          <BuyBtn>Buy</BuyBtn>
        </Holder>
      </BoxRight>
    </Container>
  );
}

export default Competition;
