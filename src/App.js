import React from "react";
import { Route } from "react-router";
// import Home from "./components/Home/Home";
import Kettlebells from "./components/Kettlebells/Kettlebells";

function App() {
  return (
    <>
      <Route path="/">
        <Kettlebells />
      </Route>
    </>
  );
}

export default App;
