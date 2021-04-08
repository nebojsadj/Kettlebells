import React from "react";
import Introduction from "./Introduction/Introduction";
import About from "./About/About";
import TypesKett from "./TypesKett/TypesKett";
import WhyKett from "./WhyKett/WhyKett";

function Home() {
  return (
    <>
      <Introduction />
      <About />
      <TypesKett />
      <WhyKett />
    </>
  );
}

export default Home;
