import React from "react";
import { Route } from "react-router";
import Contact from "./components/Contact/Contact";
import Kettlebells from "./components/Kettlebells/Kettlebells";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Kettlebells />
      </Route>
      <Route path="/contact">
        <Navbar contact={true} />
        <Contact />
      </Route>
    </>
  );
}

export default App;
