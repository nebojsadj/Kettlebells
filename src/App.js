import React from "react";
import { Route } from "react-router";
import Competition from "./components/Competition/Competition";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Kettlebells from "./components/Kettlebells/Kettlebells";
import Navbar from "./components/Navbar/Navbar";
import Regular from "./components/Regular/Regular";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Kettlebells />
      </Route>
      <Route path="/contact">
        <Navbar secondRoute={true} />
        <Contact />
      </Route>
      <Route path="/competition">
        <Navbar secondRoute={true} />
        <Competition />
      </Route>
      <Route path="/regular">
        <Navbar secondRoute={true} />
        <Regular />
      </Route>
      <Footer />
    </>
  );
}

export default App;
