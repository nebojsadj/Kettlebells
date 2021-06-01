import React from "react";
import About from "../About/About";
import Competition from "../Competition/Competition";
import Home from "../Home/Home";
import Reasons from "../Reasons/Reasons";
import Regular from "../Regular/Regular";
import Types from "../Types/Types";

function Kettlebells({ forBuy }) {
  return (
    <>
      <Home />
      <About />
      <Types />
      <Reasons />
      <Regular forBuy={forBuy} />
      <Competition forBuy={forBuy} />
    </>
  );
}

export default Kettlebells;
