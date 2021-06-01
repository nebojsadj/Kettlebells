import React from "react";

function Buy({ order }) {
  const { type, weight, quantity, total } = order;
  return (
    <div>
      <p>{type}</p>
      <p>{weight}</p>
      <p>{quantity}</p>
      <p>{total}</p>
    </div>
  );
}

export default Buy;
