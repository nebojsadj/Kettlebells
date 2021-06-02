import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  Container,
  Box,
  Table,
  ButtonGroup,
  ButtonOrder,
  Delete,
  TotalPrice,
  ButtonConfirm,
} from "./BuyStyle";

function Buy({ order, setOrder }) {
  const history = useHistory();
  const [total, setTotal] = useState(0);

  const deleteItem = (index) => {
    const items = order.filter((el) => el !== order[index]);
    setOrder([...items]);

    if (items.length === 0) {
      history.goBack();
    }
  };

  const price = () => {
    const prices = order.map((el) => parseInt(el.total));
    const totalPrices =
      order.length > 0 ? prices.reduce((a, b) => a + b) : null;
    console.log(totalPrices);
    setTotal(totalPrices);
  };

  useEffect(() => {
    price();
  });

  return (
    <Container>
      <Box>
        <h2>Thank you for your trust.</h2>
        <h3>This is your order</h3>
      </Box>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Weight</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {order.map((el, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{el.type}</td>
              <td>{`${el.weight} kg`}</td>
              <td>{el.quantity}</td>
              <td>{`${el.total} $`}</td>
              <td>
                <Delete onClick={() => deleteItem(i)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonGroup>
        <ButtonOrder onClick={() => history.goBack()}>Order More</ButtonOrder>
        <TotalPrice>{`Total Price: ${total} $`}</TotalPrice>
        <ButtonConfirm>Confirm Order</ButtonConfirm>
      </ButtonGroup>
    </Container>
  );
}

export default Buy;
