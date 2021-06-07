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
  Confirm,
} from "./BuyStyle";

function Buy({ order, setOrder }) {
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const [confirm, setConfirm] = useState(false);

  const deleteItem = (index) => {
    const items = order.filter((el) => el !== order[index]);
    setOrder([...items]);
  };

  const price = () => {
    const prices = order.map((el) => parseInt(el.total));
    const totalPrices =
      order.length > 0 ? prices.reduce((a, b) => a + b) : null;
    setTotal(totalPrices);
  };

  useEffect(() => {
    price();
  });

  const successfully = () => {
    setTimeout(() => {
      setConfirm(false);
      setOrder([]);
      history.push("/");
    }, 5000);
  };

  return (
    <Container>
      <Box>
        {order.length === 0 ? (
          <h2 style={{ color: "red" }}>Your cart is empty!</h2>
        ) : (
          <>
            <h2>Thank you for your trust.</h2>
            <h3>This is your order</h3>
          </>
        )}
      </Box>
      {order.length !== 0 && (
        <>
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
            <ButtonOrder onClick={() => history.goBack()}>
              Order More
            </ButtonOrder>
            <TotalPrice>{`Total Price: ${total} $`}</TotalPrice>
            <ButtonConfirm
              onClick={() => {
                setConfirm(true);
                successfully();
              }}
            >
              Confirm Order
            </ButtonConfirm>
          </ButtonGroup>
        </>
      )}
      <Confirm confirm={confirm}>
        <h2>Thank you for confirming the order!</h2>
        <h2>Soon someone from our team will contact you!</h2>
      </Confirm>
    </Container>
  );
}

export default Buy;
